---
sidebar_position: 2
---

# Manage

## Publish

When a change is generated in the Entry, it goes to `Changed` Status, the changes will not be reflected until it is `Publish Changes`.

:::info
To visualize the changes in the website in production, you must wait approximately **15 minutes** after pressing the `Publish Changes` button.

When you unpublish a post, it will no longer be visible on the website in production.
:::

## Main Fields

**Title:** This field is used to display the title of the page (both in the header and in the browser).

**Permalink:** This data is used in the url of the article, it is automatically generated when information is entered in the `Title` field.

:::danger
This field cannot be blank, nor have spaces or special characters.
:::

**Card Image:** The image is used as the cover of the article.

:::tip
The use of square images is recommended.
:::

:::note
This option is only used when in a [Topic](/docs/help/topic/manage#main-fields) listing, the _“Card”_ view option is specified.
:::

[Learn how to manage Assets](/docs/components/assets)

**Effective Date:** This date is used to show the creation date, as well as to order the list starting with the most recent.

**Description RT:** This field is used to create a summary of the article to display under the title. (RT stands for Rich Text).

[Learn how to manage richtext editor](/docs/components/richtext)

**Body RT:** Here is published all the content that will be shown in the article.

[Learn how to manage richtext editor](/docs/components/richtext)

**Time to Read:** This field is read-only, and the information is automatically calculated when the `Body RT` field is updated.

**Steps Header:** This field specifies a title for the Steps section, if this field is left blank, the default title _“Steps”_ will be displayed.

**Web Steps RT:** Here are the steps to follow for the website version.

[Learn how to manage richtext editor](/docs/components/richtext)

**IOS Steps RT:** Here we specify the steps to follow for the version of applications for devices using Apple operating system.

[Learn how to manage richtext editor](/docs/components/richtext)

**Android Steps RT:** Here we specify the steps to follow for the version of applications for devices using Android operating system.

[Learn how to manage richtext editor](/docs/components/richtext)

**Development Status:** This field displays messages about the development status of the article.

:::note
This option is deprecated in the current version of the site.
:::

**Featured:** When this field is set to true, the _“flame”_ icon will appear next to the item name in the Topic or related item listings.

![Featured Article](/img/screen11.png)

**Premium:** When this field is set to true, the _“Premium Feature”_ badge will appear at the top of the article and a link to the article on this topic will appear.

![Premium Feature](/img/screen10.png)

**Meta Title:** This field helps to specify a title for the page metadata, this field is optional, so if it is blank the information obtained from the `Title` field will be used.

**Meta Description:** Enter a description to display in the page metadata, this field is optional, if left blank a generic description stored in the system will be used.

## Call to Action

- Enter a Call to Action component to display on the inside of the page.
- If no information is entered it will not be displayed on the screen.

[Learn how to manage Call to Action](/docs/components/calltoaction)

## FAQs

- Enter a FAQs Section component to display in your article.

[Learn how to manage FAQs](/docs/components/faqs)

## Related Articles

- Select some articles that may have a related theme.
- Use the 6-dot menu `⋮⋮` on the left of each block to drag and drop section to arrange them to your requirements.

## Script

- Search for a component of type Script, which contains the Javascript scripts required by your article.

[Learn how to manage Scripts](/docs/components/scripts)
