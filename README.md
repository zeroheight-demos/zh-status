# `zh-status`

A Web Component for embedding design systems statuses on any page.

**[Demo](https://zeroheight-demos.github.io/zh-statuss/demo.html)** | **[Further reading](https://zeroheight.com/blog/api-tutorial-add-page-statuses-to-any-website/)**

## Examples

General usage example:

```html
<zh-status></zh-status>

<script>
  const zhAPI = {
    key: "zhat_VuWPCQcW78XRw4ufLt3FTdJ8AIyGz5ff-q6jGLcG",
    client: "zhci_5rSLVtpSHA28sk9Li2TpGRIVtSejhfIIRbRBkBgC",
    styleguide: 114183,
  };
</script>

<script type="module" src="zh-status.js"></script>
```

## Features

This Web Component allows you to:

- Reveal pages, their status, their publish date and their updated date in a table

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@zeroheight/zh-status): `npm install @zeroheight/zh-status`
1. [Download the source manually from GitHub](https://github.com/zeroheight-demos/zh-status/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

After choosing one of these options you'll need to attain an API Key, Access Token and the ID of your styleguide from your zeroheight account. For more information check out our resources guide. These credentials can be applied to the component as a global object variable like so:

```js
const zhAPI = {
  key: "zhat_VuWPCQcW78XRw4ufLt3FTdJ8AIyGz5ff-q6jGLcG",
  client: "zhci_5rSLVtpSHA28sk9Li2TpGRIVtSejhfIIRbRBkBgC",
  styleguide: 114183,
};
```

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script>
  const zhAPI = {
    key: "zhat_VuWPCQcW78XRw4ufLt3FTdJ8AIyGz5ff-q6jGLcG",
    client: "zhci_5rSLVtpSHA28sk9Li2TpGRIVtSejhfIIRbRBkBgC",
    styleguide: 114183,
  };
</script>

<script type="module" src="zh-releases.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script>
  const zhAPI = {
    key: "zhat_VuWPCQcW78XRw4ufLt3FTdJ8AIyGz5ff-q6jGLcG",
    client: "zhci_5rSLVtpSHA28sk9Li2TpGRIVtSejhfIIRbRBkBgC",
    styleguide: 114183,
  };
</script>

<script
  type="module"
  src="https://www.unpkg.com/@zeroheight/zh-releases@1.0.0/zh-releases.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script>
  const zhAPI = {
    key: "zhat_VuWPCQcW78XRw4ufLt3FTdJ8AIyGz5ff-q6jGLcG",
    client: "zhci_5rSLVtpSHA28sk9Li2TpGRIVtSejhfIIRbRBkBgC",
    styleguide: 114183,
  };
</script>

<script
  type="module"
  src="https://esm.sh/@zeroheight/zh-releases@1.0.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
