const zhStatusTemplate = document.createElement("template");

zhStatusTemplate.innerHTML = `
<table>
  <tr>
    <th>Page name</th>
    <th>Status</th>
    <th>Created date</th>
    <th>Updated date</th>
  </tr>
  <tr data-key="page">
    <td data-key="name"></td>
    <td><mark data-key="new_status"></mark><del data-key="old_status"></del></td>
    <td data-key="created"></td>
    <td data-key="updated"></td>
  </tr>
</table>
`;

zhStatusTemplate.id = "zh-status-template";

if (!document.getElementById(zhStatusTemplate.id)) {
  document.body.appendChild(zhStatusTemplate);
}

class zhStatus extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "zh-status", zhStatus);
    }
  }

  async connectedCallback() {
    this.append(this.template);

    const pageTemplate = this.querySelector("[data-key='page']");
    const pages = await this.data();

    pages.slice(1).map((page) => {
      const template = pageTemplate.cloneNode(true);
      pageTemplate.parentNode.append(template);
    });

    const slots = this.slots;

    const status = slots.filter((slot) => slot.dataset.key === "page");

    status.map((page, index) => {
      let data = pages[index];
      data.created = this.formatDate(data.created_at);
      data.updated = this.formatDate(data.updated_at);
      data.name = data.name.replace("___cover", "Homepage");

      const pageSlots = slots.filter(
        (slot) => page.contains(slot) && slot !== page
      );

      pageSlots.map((slot) => {
        this.populateSlot(slot, data[slot.dataset.key]);
      });
    });
  }

  populateSlot(slot, value) {
    if (typeof value == "string" && value.startsWith("http")) {
      if (slot.dataset.key === "page_notes") slot.innerHTML = value;
      if (slot.localName === "img") slot.src = value;
      if (slot.localName === "a") slot.href = value;
    } else {
      slot.textContent = value;
    }
  }

  fetch(endpoint) {
    return fetch(endpoint, {
      method: "GET",
      headers: {
        "X-API-KEY": zhAPI.key,
        "X-API-CLIENT": zhAPI.client,
      },
    })
      .then((res) => res.json())
      .then((json) => json.data);
  }

  async data() {
    const { pages } = await this.fetch(
      `https://zeroheight.com/open_api/v2/styleguides/${zhAPI.styleguide}/pages`
    );
    const { page_statuses } = await this.fetch(
      `https://zeroheight.com/open_api/v2/page_statuses`
    );

    const data = pages.map((page) => {
      return {
        ...page,
        ...page_statuses.find((status) => status.page_id === page.id),
      };
    });

    return data;
  }

  get slots() {
    return [...this.querySelectorAll("[data-key]")];
  }

  get template() {
    return document
      .getElementById(
        this.getAttribute("template") || `${this.localName}-template`
      )
      .content.cloneNode(true);
  }

  formatDate(utc) {
    const event = new Date(utc);
    return event.toLocaleDateString("en-GB");
  }
}

zhStatus.register();
