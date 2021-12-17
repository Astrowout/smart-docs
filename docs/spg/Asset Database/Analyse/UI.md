
title: UI
created at: Tue Oct 22 2019 12:18:44 GMT+0000 (Coordinated Universal Time)
updated at: Thu Dec 10 2020 02:27:27 GMT+0000 (Coordinated Universal Time)
---

# UI

SPG - Storybook

🚨**Styled document \*\***🚨\*\*

<https://paper.dropbox.com/doc/SPG-Storybook--AooK_Ek8bTsMgSQQtLgGfttlAQ-Q5JoXkJcFFWo2ht7RhORm>

Examples of well executed styleguides in storybook:

-   AirBnb - Apollo: <http://airbnb.io/lunar/?path=/story/core-alert--default-and-status-classified-alerts>
-   Netlify: <https://storybook-design-system.netlify.com/?path=/docs/design-system-intro--page>
-   Github - Primer: <https://primer.github.io/storybook/?path=/story/components-alerts--default>
-   Priceline: <https://priceline.github.io/design-system/>
-   LonelyPlanet: <https://lonelyplanet.github.io/backpack-ui/?path=/story/styles--design-tokens>
-   Carbon: <http://react.carbondesignsystem.com/?path=/story/checkbox--unchecked>
-   Atlassian:
    -   <https://atlassian.design/guidelines/product/components/banners>
    -   <https://atlaskit.atlassian.com/packages>
-   Gov.uk: <https://govuk-react.github.io/govuk-react/?path=/story/welcome--to-govuk-react>

Fundamentals

Fundamentals is where everything starts. These contains the colours, typography and iconography of a brand.

1.  Colors

<!-- ![media_UI/null](media_UI/null)

![media_UI/b8c050e0-3563-4468-9030-1135004e85d2_null](media_UI/b8c050e0-3563-4468-9030-1135004e85d2_null)

![media_UI/13f80a8f-5833-4e2d-b1b5-08a2a12468fb_null](media_UI/13f80a8f-5833-4e2d-b1b5-08a2a12468fb_null) -->

1.  Typography

<!-- ![media_UI/94d3422c-8771-46fd-b658-2a47e75e3e7b_null](media_UI/94d3422c-8771-46fd-b658-2a47e75e3e7b_null) -->

1.

<!-- ![media_UI/8d9d97e2-eb5c-4576-bb91-629c5f3b848a_null](media_UI/8d9d97e2-eb5c-4576-bb91-629c5f3b848a_null) -->

1.

<!-- ![media_UI/6823e4cc-68a8-4ffc-8501-0de07e9d7cb8_null](media_UI/6823e4cc-68a8-4ffc-8501-0de07e9d7cb8_null)

![media_UI/1b6a0133-9454-47d6-af80-52100aa38a28_null](media_UI/1b6a0133-9454-47d6-af80-52100aa38a28_null)

![media_UI/99dacff0-2afe-4f2e-a275-b697ad52a6c7_null](media_UI/99dacff0-2afe-4f2e-a275-b697ad52a6c7_null) -->

1.  Iconography

fontAwesome font

<!-- ![media_UI/382e77f6-1b99-499b-a81f-a7c0c434575b_null](media_UI/382e77f6-1b99-499b-a81f-a7c0c434575b_null) -->

Building Blocks

Building blocks are the smallest form of components. They are mostly used to help create the sturcture of larger components.

1.  Button
    | Props | Description |
    \| --------------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | type | Type of button ("button" | "submit” | “asSubmit”). |
    | label | The inner content of the button (ex. “Button”). |
    | beforeIcon | Icon to display at the start of label. |
    | afterIcon | Icon to display at the end of label. |
    | small | Decrease font size and padding to small (size in px). |
    | disabled | Render button with a disabled state. |
    | href | Render as an anchor link with a URL. |
    | openInNewWindow | When a link, open the target in a new window. |

<!-- ![media_UI/240e11e8-0ca2-46e7-ae29-996221e968cc_null](media_UI/240e11e8-0ca2-46e7-ae29-996221e968cc_null)

![media_UI/02cf81f7-53c8-4904-b229-a50e1b396d3d_null](media_UI/02cf81f7-53c8-4904-b229-a50e1b396d3d_null)

![media_UI/f14d972d-c0d7-44de-b02d-4efc03160d41_null](media_UI/f14d972d-c0d7-44de-b02d-4efc03160d41_null) -->

1.  Icon
    | Props | Description |
    \| --------- \| -------------------------------------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | color | Color the icon using a contextual strings (“currentColor” | "error" | "succes” | “warning”). |
    | small | Small icon (size in px). |
    | large | Large icon. |

<!-- ![media_UI/70390055-6257-46a1-b203-ff3b3eaa0676_null](media_UI/70390055-6257-46a1-b203-ff3b3eaa0676_null)

![media_UI/0616ca82-c52f-49c1-bbe4-40ee8dbc22eb_null](media_UI/0616ca82-c52f-49c1-bbe4-40ee8dbc22eb_null)

![media_UI/16729742-766b-46a9-a007-2e16b40dd4ee_null](media_UI/16729742-766b-46a9-a007-2e16b40dd4ee_null)

![media_UI/11cf3718-c482-4a69-bff7-1af6220b2f29_null](media_UI/11cf3718-c482-4a69-bff7-1af6220b2f29_null)

![media_UI/15e7f365-0688-44ee-bd7c-03eeeb986788_null](media_UI/15e7f365-0688-44ee-bd7c-03eeeb986788_null) -->

1.  Image
    | Props | Description |
    \| ----------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | alt | Alternate text if image cannot be displayed. |
    | title | Title of the image. |
    | src | Source path of the image. |
    | background | Render button with a disabled state. |
    | contain | Fit inside content box. |
    | cover | Fill entire content box. |
    | alignTop | Sets background to top of image. |
    | alignBottom | Sets background to bottom of image. |

<!-- ![media_UI/fa433033-a1ba-48fe-9bd8-a518b44f2118_null](media_UI/fa433033-a1ba-48fe-9bd8-a518b44f2118_null) -->

1.  Input
    | Props | Description |
    \| ------------ \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | type | Type of input (“text” | “email”) |
    | label | Descriptive label that appears above the input. |
    | id | Id used to link the label to the input field. |
    | name | Name of input field |
    | value | Current value. |
    | optional | Mark the field as optional. Mark the field as optional. |
    | placeholder | Adds placeholder text. |
    | buttonBefore | Button to display at the beginning of the input field. |
    | disabled | Mark the field as disabled. |
    | errorMessage | Decrease font size and padding to small. |

<!-- ![media_UI/0dc226e2-5f2f-4a43-a6b4-aeb40da3c5fe_null](media_UI/0dc226e2-5f2f-4a43-a6b4-aeb40da3c5fe_null)

![media_UI/b2389b4e-d329-4bfa-86d0-699bb8f67705_null](media_UI/b2389b4e-d329-4bfa-86d0-699bb8f67705_null) -->

1.  Link
    | Props | Description |
    \| --------------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | label | The inner content of the button (ex. “Button”). |
    | beforeIcon | Icon to display at the start of label. |
    | afterIcon | Icon to display at the end of label. |
    | href | The link URL. |
    | small | Decrease font size and padding to small (size in px). |
    | disabled | Render button with a disabled state. |
    | openInNewWindow | Open the target in a new window. |

<!-- ![media_UI/8a36b47f-249c-4be0-be23-86956bc6df85_null](media_UI/8a36b47f-249c-4be0-be23-86956bc6df85_null) -->

1.  List
    | Props | Description |
    \| ---------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | children | List items. |
    | horizontal | Renders a horizontal list. |
    | ordered | Renders an `<ol></ol>`. |
    | wrapped | Wrap horizontal list. |
    | spacious | Render with vertical padding. |

<!-- ![media_UI/876bdb98-2dd6-4eb5-9564-75c88ca86ab2_null](media_UI/876bdb98-2dd6-4eb5-9564-75c88ca86ab2_null)

![media_UI/a4d5c4d8-f22d-4d18-9803-cc83ad3b4f67_null](media_UI/a4d5c4d8-f22d-4d18-9803-cc83ad3b4f67_null) -->

1.  List Item
    | Props | Description |
    \| ---------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | content | Item content (ex. “List item) |
    | beforeIcon | Icon to display at the start of content. |

<!-- ![media_UI/0ef26505-19ce-4764-bda7-00427ae83306_null](media_UI/0ef26505-19ce-4764-bda7-00427ae83306_null) -->

1.  Title
    | Props | Description |
    \| ----------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | level | Item content (ex. “List item) |
    | children | |
    | centerAlign | Icon to display at the start of content. |
    | endAlign | |
    | inline | |

<!-- ![media_UI/eed7b5fc-1db5-4dd3-8d4a-a3148affd044_null](media_UI/eed7b5fc-1db5-4dd3-8d4a-a3148affd044_null)

![media_UI/f48eb9b7-76ed-44f3-bb81-429d5c74f6f5_null](media_UI/f48eb9b7-76ed-44f3-bb81-429d5c74f6f5_null)

![media_UI/c6fa99fb-9dc1-443d-9165-da7e0d694911_null](media_UI/c6fa99fb-9dc1-443d-9165-da7e0d694911_null)

![media_UI/e9778f4d-ccb2-4794-a7af-a82b7cb4f65f_null](media_UI/e9778f4d-ccb2-4794-a7af-a82b7cb4f65f_null) -->

Components

Components are the instances that define a structure. They are used within layouts to give content to a page. Content is distributed within components and they are in their turn passed down to the building-blocks the component consists off.

1.  Avatar
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | imageSrc | Item contents |
    | alt | Alternate text if image cannot be displayed. |
    | title | Title of the image. |
    | small | Small avatar (size in px) |
    | micro | Micro avatar (size in px) |

<!-- ![media_UI/35da84b7-762b-4347-8e4c-757982469cc0_null](media_UI/35da84b7-762b-4347-8e4c-757982469cc0_null) -->

1.  Dropdown
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | header | Header content (ex. Button, Filter…). |
    | content | Content within the dropdown. |
    | id | Id needed to link the trigger with the content. |

<!-- ![media_UI/ab6050d3-8caa-4f7c-a5ba-8359fb661545_null](media_UI/ab6050d3-8caa-4f7c-a5ba-8359fb661545_null) -->

1.  Filter
    | Props | Description |
    \| ----------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | id | Filter ID. |
    | label | Inner content of descriptive label that appears above the field. |
    | value | Current selected value. |
    | bordereless | Remove border from container. |
    | inline | Display label and field inline. |

<!-- ![media_UI/9cafe6ec-3def-415a-aba7-f332331537a7_null](media_UI/9cafe6ec-3def-415a-aba7-f332331537a7_null) -->

1.  Filter Menu
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | id | ID of filter menu |
    | options | Data object of all possible items |

<!-- ![media_UI/85b1ab71-4837-4994-bab3-bb05b70aba47_null](media_UI/85b1ab71-4837-4994-bab3-bb05b70aba47_null) -->

1.  Filter Menu Item
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | id | ID of item |
    | label | Inner content of the menu item (ex. “Label”). |
    | value | Data object of all possible items |
    | isActive | Renders item in active state |

<!-- ![media_UI/4620b752-1e49-4b3f-aba8-e3ac18e80e28_null](media_UI/4620b752-1e49-4b3f-aba8-e3ac18e80e28_null) -->

1.  Header
    | Props | Description |
    \| ---------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | title | Inner content of title. |
    | actions | Inner content of actions. |
    | backButton | Inner content of back button |

<!-- ![media_UI/eb2d81c3-5cfe-4d8f-97d8-ed90f61c6849_null](media_UI/eb2d81c3-5cfe-4d8f-97d8-ed90f61c6849_null) -->

1.  Profile
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | avatar | Inner content of avatar component. |
    | name | User name. |
    | function | User function. |
    | role | User role. |

<!-- ![media_UI/18f7ef0a-a1bf-419f-b24e-366f075a7d7d_null](media_UI/18f7ef0a-a1bf-419f-b24e-366f075a7d7d_null) -->

1.  Card
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | children | List of `Content`s blocks to contain content. |

<!-- ![media_UI/78d61699-cdd6-454f-af01-2bb5e3b64731_null](media_UI/78d61699-cdd6-454f-af01-2bb5e3b64731_null)

![media_UI/2e5ab260-0652-49f5-9699-30548eb98b28_null](media_UI/2e5ab260-0652-49f5-9699-30548eb98b28_null)

![media_UI/63371f02-1ad9-43ae-b566-59852b80872a_null](media_UI/63371f02-1ad9-43ae-b566-59852b80872a_null) -->

1.  Card Content
    | Props | Description |
    \| ----------- \| --------------------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | children | Content to display. |
    | imageSrc | Image URL. |
    | url | If provided, makes the entire content clickable, linking to the given path. |
    | minHeight | Min height of content. |
    | maxHeight | Max height of content. |
    | largeImage | Whether the image content is large. |
    | alignTop | Align contents at the top vertically. |
    | alignBottom | Align contents at the bottom vertically. |
    | alignCenter | Align contents in the middle vertically. |

<!-- ![media_UI/81ae2c47-6bdc-4d47-95ff-77e01dbc5fb9_null](media_UI/81ae2c47-6bdc-4d47-95ff-77e01dbc5fb9_null) -->

1.  Row
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | children | The primary contents to render. |
    | before | The contents preceding the primary contents. |
    | after | The contents following the primary contents. |
    | inline | Render content as inline. |

<!-- ![media_UI/e5f4dc3c-f77e-4bed-94b3-d74ec8b93ae6_null](media_UI/e5f4dc3c-f77e-4bed-94b3-d74ec8b93ae6_null)

![media_UI/3890fd91-a506-4c1e-84f6-17c23938234b_null](media_UI/3890fd91-a506-4c1e-84f6-17c23938234b_null) -->

1.  Definition
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | header | The header content to render (ex. ). |
    | data | The data content to render (ex. ). |

<!-- ![media_UI/a00e7b5c-478d-4638-9bdc-4baae9371d6c_null](media_UI/a00e7b5c-478d-4638-9bdc-4baae9371d6c_null)

![media_UI/64cfcfda-448a-4d8f-a188-d28deb423d67_null](media_UI/64cfcfda-448a-4d8f-a188-d28deb423d67_null)

![media_UI/fe8e6d49-0925-4577-b616-a5c72aaab5d5_null](media_UI/fe8e6d49-0925-4577-b616-a5c72aaab5d5_null) -->

1.  Status Label
    | Props | Description |
    \| ------------ \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | label | The inner content of the label (ex. “Label”). |
    | beforeIcon | Icon to display at the start of label. |
    | afterIcon | Icon to display at the end of label. |
    | inProgress | Renders with in progress status |
    | inProduction | Renders with in production status |
    | conflicted | Renders with in conflicted status |
    | done | Renders with in done status |

<!-- ![media_UI/2bd67c32-0a39-4ed3-8cc3-d6d7647be8d3_null](media_UI/2bd67c32-0a39-4ed3-8cc3-d6d7647be8d3_null) -->

Layouts

Layouts are structures that are custom build on page level. These layouts do not have a fixed structure. Depending on the page and the design, layouts are combined with utilities to create the desired result.

1.  Grid
    | Props | Description |
    \| ----------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | children | Columns to render. |
    | bottomAlign | Vertically align the columns at the bottom. |
    | centerAlign | Horizontally align the columns to the center. |
    | endAlign | Horizontally align the columns to the end (flex-end). |
    | middleAlign | Vertically align the columns in the middle. |
    | reversed | Horizontally align the columns to the start (flex-start). |
    | startAlign | Horizontally align the columns to the start (flex-start). |
    | topAlign | Vertically align the columns at the top. |
2.  Col
    | Props | Description |
    \| --------- \| ----------------------------------------------------------------- \|
    | className | Add class name is needed (ex. when used inside another component) |
    | children | Content to display in a column. |
    | span | Number of columns this column should span. |
    | offset | Offset in column widths to push to the right. |

Building Blocks

-   Button
-   Link
-   Icon
-   Checkbox
    Components
-   Toggle
-   Input
-   Text
-   Email
-   TextArea
-   Select/Dropdown
-   Search
-   Filter
-   Sort-filter
-   Profile
-   Avatar
-   Cards
-   Project
-   Package
-   Template
-   Package-unit
-   Comment
-   Status
-   Alert/Info/Succes
-   Notification-drawer
-   Notification
-   Breadcrumb-list
-   Breadcrumb
-   Tabs
-   Tab-nav
-   Accordion
-   Formula
-   Table-Aside
-   Modal
-   Actions
-   Project-info
-   Project-aside
-   Project-team
-   Difference
-   Steps
-   Step
-   Badge
-   Counter-label

