---
sidebar_position: 14
---

# Scripts

## Publish

When a change is generated in the Entry, it goes to `Changed` Status, the changes will not be reflected until it is `Publish Changes`.

:::info
When you unpublish a post, it will no longer be visible on the website in production.
:::

## Main Fields

**Title:** This field is used to internally identify the component.

**Post URL:** in this field you enter all the Javascript script that is required to be executed when the document is loaded. The code must be wrapped in the _'script'_ tag, see example below.

```
<script type="text/javascript">
// Your JS code here...
</script>
```
