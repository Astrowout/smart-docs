
title: Analyse
created at: Fri Oct 04 2019 11:39:36 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 06:30:33 GMT+0000 (Coordinated Universal Time)
---

# Analyse

# Focus

## **What are we building**?

SPG Drycooling sells parts used in the cooling systems of electrical plants. Where electricity is generated, a lot of hot steam is generated. SPGs Air-cooled Condensator (ACC) cools the steam and converts it back to reusable water for the plant.

Before the project reaches the engineer team, the presales team spends some time analysing the plant and requirements. Once an agreement is reached and the project can start (Presales to Project, P2P), the engineering teams go to work.

We can identify 4 teams with their own disciplines and responsibilities:

1.  **structural**: calculations regarding the overall steel structure, ducting, the condensate tank and piping
2.  **design**: creating a 3D model for the steel structure, 3D/2D models for the ventilation, 3D/2D models for the condensate tank and piping
3.  **process**: layout design, process flow design, equipment/component sizing and selection
4.  **electric en I&C**: electrical design, instrumentation and control design

Each team makes its designs and/or calculations based on a combination of **inputs**:

-   international standards
-   thermic calculations that are often started during the presales phase
-   material specifications, provided by the suppliers
-   specific client demands

Today, most calculations are done using **external tools** (Tekla, Autopipe) and a bunch of **Excel data-sheets** containing complex calculations (property of SPG).

The goal of the Asset Database project is to translate some of these data-sheets to a **reusable interface**, allowing for future **automation** of a lot of repetitive work.

##

## Who will use the application?

Initially, the Asset Database will be used by the **team**, using the stored values for their calculations, and the **project manager**, to keep an eye on the progress of a project.

## How will the app be used?

The Asset Database will be the central hub for all Autodesk software to store and retrieve values in a project context.

It will also be a communication platform for the different teams, allowing for discussions when actions have to be approved.

# MVP Scope

For the MVP, we will handle 1 specific use case: retrieving data from the Asset Database in Inventor (Autodesk) and using said data to automatically generate a 3D model.

With this use case in mind, we can limit the MVP scope to a short list of requirements:

1.  [display a list of projects](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#9a07a762)
2.  [create a new project from a template](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#6a801090)
3.  [add a team to a project](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#26706e44)
4.  [add data to a project](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#a0f6f3b5)
5.  [calculated fields based on project data](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#d348789e)
6.  [update fields via an acceptance flow](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#bc4fa09a)
7.  [freeze fields via an acceptance flow](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#6ba4b18d)
8.  [assign tasks to users](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#7c13d598)
9.  [send notifications to users](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#06d9b823)
10. [export a data sheet for a component](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#0099c011)
11. [store metadata for Vault files on status changes](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#3e09b7e0)
12. [show field dependencies](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#f09c3289)
13. [retrieve a list of projects from the API](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#7cf4078f)
14. [retrieve a list of fields for a project from the API](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/notes/oisf9dilvp#6210ec61)

## 1. Display a list of projects

The project overview page shows an overview of all projects.

The list can be **filtered** by:

-   status: drop-down
-   ACC type: drop-down
-   ACC format: drop-down
-   location: [world map with selectable countries](https://www.amcharts.com/javascript-maps/)

The list can be **sorted** by:

-   creation date

## 2. Create a new project from a template

A new project can be created by choosing a template. In the MVP there will be **1 predefined template**. In the future, templates could be managed with the Asset Database UI as well.

A template will determine:

-   available packages
-   available components
-   available fields
-   required design files

## 3. Add a team to a project

The team will consist of a project manager and 1 or more data owners. These data owners are added to the available components in the project and will be assigned approval and freeze requests accordingly.

**Tasks** will be assigned based on a users **LDAP roles** and their **role in the project**.

By using LDAP for the roles, we won't need the intervention of a Asset Database admin when a new user needs access.

## 4. Add data to a project

Each available component will have a list of fields that can be completed by members of the different teams, throughout the duration of the project.

There are 2 types of fields:

-   **user input**: fields that can be manually edited by a team member
-   **calculated**: fields that depend on other fields (or specs) and cannot be manually edited by a team member

A field can have 4 different states:

-   **editable**: this field can be edited (default state)
-   **not editable**: this field cannot be edited (e.g. calculated fields)
-   **frozen**: this field cannot be edited without input from the data owner
-   **conflict**: this field has an invalid value (based on validation rules for this field)

## 5. Calculated fields based on project data

Some field values will be calculated based on (a combination of) other fields, often supplemented with chosen standards or specifications.

These fields cannot be manually edited or frozen and will be updated when their dependencies changes.

##

## 6. Update fields via an acceptance flow

Editable fields can always be edited and will be **saved upon each change**. These intermittent saves will be considered **draft proposals** and will only be visible to the user that triggered them.

Once the user is confident the changes they made are correct, they can **publish** the fields, reflecting the updated values to the rest of the team.

An **approval request** (notification) is sent to the data owner, who can approve or reject the changes.

If the data owner **accepts** the request, a **new revision** of the component data is created.

Any open draft proposals conflicting with this new revision will need to be updated. The users responsible for the proposals will receive a notification and will have to choose to either **discard their changes** and continue working with the new revision or **compare their changes** to the new revision and decide what values to use for which fields.

If the data owner **rejects** the request, the changed values are **reset to the current revision**. Any open draft proposals based on the rejected values will need to be updated. The uses responsible for the proposals will receive a notification urging them to **verify their changes** against the reset values.

Updates submitted through the API will always be published directly, skipping the approval flow. The same notification flow is used.

## 7. Freeze fields via an acceptance flow

An editable field can be frozen when changes have too much of an impact on the project (financial or otherwise).

Freezing (or unfreezing) a field is a **manual action**, happening on **field level**.

Freezing a field **requires approval** from the data owner.

With each request, additional comments can be added as well.

The data owner will receive a notification of the request with a link to the field.

If the data owner **accepts** the request, the field will transition to a **frozen state**, disallowing any changes to its value. Any pending **draft proposals** making changes to the field will be updated. The users responsible for the proposals will receive a notification informing them of the change.

If the data owner **rejects** the request, the field will remain in its current state.

To unfreeze a field, a similar request has to be made. The data owner will again be notified of the request and can choose to accept or reject the freeze.

## 8. Assign tasks to users

When approval is requested of the data owner or a field enters a conflict status, a **task** will be assigned to the data owner of the field.

A task has to be completed manually, either by approving or rejecting the request.

Additional comments can be added in each step of the approval flow.

## 9. Send notifications to users

There are 4 scenario's that require a notification to be sent to a user:

### Conflict

-   a field entered the conflict status (notification to the data owner)

### Freezing

-   a request to freeze a field (notification to the data owner)
-   a freeze request was approved (notification to the requester)
-   a freeze request was rejected (notification to the requester)
-   a field was frozen (notification to the data owner, if they were not the one who approved the request)
-   a field was frozen (notification to the owner of a draft proposal)
-   a request to unfreeze a field (notification to the data owner)
-   an unfreeze request was approved (notification to the requester)
-   an unfreeze request was rejected (notification to the requester)
-   a field was unfrozen (notification to the data owner, if they were not the one who approved the request)
-   a field was unfrozen (notification to the owner of a draft proposal)

### Field updates

-   a request for approval of a change request (notification to the data owner)
-   a change request was approved (notification to the requester)
-   a change request was approved (notification to the owner of a change proposal conflicting with the new values)
-   a change request was rejected (notification to the requester)
-   a change request was rejected (notification to the owner of a change proposal involving the reset values)

### Files

-   a file was added (notification to the data owner of the related fields)
-   a file was updated (notification to the data owner of the related fields)

## 10. Export a data sheet for a component

Data can be exported on component level:

-   a user can choose 1 or more fields to export
-   a user can download a data-sheet in either Excel or PDF format
-   a user can preview a data-sheet in PDF format in the browser

## 11. Store metadata for Vault files on status changes

When a files status in Autodesk Vault changes, the Asset Database will be notified via an API call. For each file, related to a project, its metadata will be stored with the project in the database.

## 12. Show field dependencies

Each field can have dependencies on either other fields or design files.

### Fields

A field can have a dependency on another field if:

-   its value is dependent on another fields value
-   it impacts the value of another field

These dependencies will be stored in the API in an easy to query format. When viewing a fields detail, a list of field dependencies will be shown, grouped by package so the impact on other teams is immediately visible.

### Files

Each file in Autodesk Vault will have a unique name (a concatenation of a code and the file type), which the Asset Database will map to a set of fields. When viewing a fields detail, a list of available design files, relating to the field, will be displayed.

## 13. Retrieve a list of projects from the API

The API will provide an endpoint for retrieving a list of all project. This list can be filtered [as described in the project overview page requirements](https://studiohyperdrive.slite.com/app/channels/1i5prpoyim/collections/nlbrjgscdn/notes/oisf9dilvp#9a07a762).

## 14. Retrieve a list of fields for a project from the API

The API will provide an endpoint for retrieving a list of fields, based on a project id an 1 or more field ids (CAD_ID).

# Architecture

## Concepts

The Asset Database will be built on a few core data entities (for a more detailed view, see [API](https://studiohyperdrive.slite.com/api/s/note/2dchtujepho8zjrhgrcdwm/api)).

A **template** contains:

-   a list of packages
-   a list of required design files
-   an ACC type
-   an ACC format

A **project** contains:

-   1 or more packages
-   1 or more design files
-   a team
-   a project manager

A **package** contains:

-   1 or more component groups
-   a data owner (role)

A **component group** contains:

-   1 or more components

A **component** contains:

-   1 or more fields
-   a data owner (role)

A **field** contains:

-   a code, unique in a project context
-   a label
-   a CAD_ID (used by Inventor)
-   a format
-   a formula (for calculated fields)
-   1 or more dependencies (field references)
-   1 or more related design files

Each field has a data owner, which can be determined on component level or package level, defaulting to the project manager. This data owner will have to approve all requests related to the field.

## Data Mapping

Since there are a lot of dependencies and relations in the data structure, the Asset Database will manage some mappings to make sure all data is handled correctly.

### Fields to files

Vault files will receive a name based on their type and a code, creating a unique combination. To enable showing related files for all fields, the Asset Database will need to store a mapping between combinations of fields and a unique type + code combination.

### Field dependencies

Dependencies between fields can exist when e.g. a calculated field depends on the value of 1 or more other fields.

The mapping between the fields in a project should be stored separately in the database and allow for easy querying.

## High-level Architecture

[draw.io diagram](https://www.draw.io/?page-id=L_pYenQRpbMD8YPJvgPj&title=SPG%20-%20High-level%20Overview.drawio#R%3Cmxfile%20pages%3D%223%22%3E%3Cdiagram%20id%3D%22HwK7RMGiNLcHUYNXCufJ%22%20name%3D%221.%20Inventor%20%26lt%3B%26gt%3B%20(ADB%20%2B%20Vault)%20%22%3E7Vrbdto4FP0a1pp5SJevQB65JU0nnaalyWSesgQWWI2wPLIIOF8%2Fki3hiwwJqR1oF32pdXxkSXvvc3Qk0rIHi%2FUlBaH%2FmXgQtyzDW7fsYcuyTLNj8f%2BEJU4t3baZGuYUedIpM4zRM5RGQ1qXyINRwZERghkKi8YpCQI4ZQUboJSsim4zgoujhmAONcN4CrBu%2FQd5zJersDqZ%2FSNEc1%2BNbLbP0zcLoJzlSiIfeGSVM9mjlj2ghLD0abEeQCzAU7ik%2FS62vN1MjMKAvabDf8P5yBqDv6%2FwbdzvPaPg%2BWFyZkl6IharFUOPAyCbhDKfzEkA8Ciz9ilZBh4UnzV4K%2FO5JiTkRpMbf0DGYskmWDLCTT5bYPmWz5jG96L%2FB8NoK8O%2FiaFjdpVhuJZDpK0437qBFC0gg1QaIwYo6wnCuSEgAVS2C4Sx9NERkyBGZEmncAdMSnmAziHb4ddN%2FQSEuQEkH5eQ8BnTmDtQiAFDT0WNASnV%2BcZPduXLAnHOISQoYFHuyzfCwB1k1LkqxmTMOY5VVMZ%2B%2FvwhnYFq5ZaSmRK17aO8zkGVdyakZxWld%2B6epPeT0rPOjYKU3E57p%2FRe8G9Gemb3INJbI3afe5bpzpXNTHGiURDcRq%2BlVGnb5vHp1TqUXnOaeUM2Sr%2F7BPBSjnQHlphpOsnx6YHI3%2Bhh5SMGoxAk0Kx4KcRtT5AyxCuJHkbzgJsnhDGy2AWu6AHXO%2BGQb7vFsHFkc5WVKGZH2vxcebJxrB1A8yCFRLNSbial6jnQLZJpd0skpbEke2U87Z2bt4zTbK51tMji3wkp%2BcGr9UjTDJc%2FK1JMYYSewSRxEHTKVXJvt99yh9wCZHxNOcEiyWmBt0Cel%2BgNgwnEfTB9nCfKGxBMaDKuPUv%2BVaplp9y1iN2cROSUW%2FlivyqSeV43zyVIbxWSciGzWQRZqxzLddB42GrNLG58lvvCvvcueeHFLc46ipLMKZVYplE6J%2B7n31CaONfSBIOLkOMCf90c0akxRziuVWBFnQuON2VY9qkiqKkicM33qQjUOI2GeleL9KvgiTPBw%2BxYq223%2FbZye9Ov%2FnK7raF4k9ZUMuWVoYx8EIpHjgPAGGIyp0CgE%2BYOh4V3uVNjive4iPc2bmqA2y7J0lFFZB5vowrvpuBWd7g5uL9v255%2BZaTN8%2FahkdbPCzffvnwaDb4%2FXPFGG4utf8JTRXsunga9obD%2FBpq33aLmu67OhF3BhOM2xYSeYi4QxN5d0v79EHdd8%2F0Q%2F%2BvrPUHxw%2F3Z4%2FQe9mIr%2BjICqqQrHJVLAIuiNHz94veuNEv3SrZTkXkrL5ba7aZ2Og2UXpRUrMYQ8GWBSM%2FADZUNOzl7WXaHg9DVILy9%2BinQasdG1aNF9VkVZVZVQJbvy2oDTs%2BAvZtfAjnzPaF7mFy6iyc7CKPZNG4v7Y%2Bf1ouKsFX1qbZnrNACg%2BSgNiMBU%2BdDgeDUR9i7BjFZiunyY9z0UbX6PqHomfuDwslPngst8UvJjJ%2F41PFdngSzTmPxMTlMcn0AbxQpZsn0GawLjtcgYmqCBGMQRijNrqLjgp%2FMUNCXWaSuvaqUljtWxVblVNBrGk5D%2FFoVexVfqZEr1uweb48ZRcFcI13e4USMkkdYIqmCN3V9g%2BGMVSRtJi4H%2BiLU%2BFjXic%2FQySzfJCDCRHjfGU5uB3zkeTBILh0YYFuvj%2Foc14HxwU3qnQFvm1k7uVsKCWUDEvC1AJQwDLlAVlCIpIL7ndHysiBUaqyo06sEYNWwp1TO2N7C%2F8XV6Ho4LnAvS0Xjj5blUDj78ySGmsWgrgYPJgb98jYVA5t4J7JrJrvTPTDZejWZOxaeNvf9N%2FfNdeLx7O564ZsG9GlX3ye23Vcr4Vh29c4W3u9617ejlHoQxCfea%2Bb94Bu4%2FptMyru8Xj3FfHPcN7if82b25%2BXpz3fZH%2Bnbo%2F8B%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22RynmcAXYdgoDbLUKHI3-%22%20name%3D%222.%20Vault%20%26lt%3B%26gt%3B%20ADB%22%3E7VjbcuI4FPwaHjdl2RibRy7OJBsmYQIkmydKwcJWIlteWeaSr98jLGPAHuYGk9mqVFGF1TqSrO6WzoGG1YtWnwROws%2FcJ6xhGv6qYfUbpomQY8KXQtY54rZQDgSC%2BjqoBEb0jWjQ0GhGfZLuBUrOmaTJPjjjcUxmcg%2FDQvDlftics%2F1VExyQCjCaYVZFH6kvQ70L0ynxK0KDsFgZtdp5T4SLYL2TNMQ%2BX%2B5AlteweoJzmT9Fqx5hiryCl8Vq6fLJ04uNBq93HvqSBHj2Vz7Z5Y8M2W5BkFj%2B9NTD6b%2FIt5v9%2B5erBROXcSyGV8XUqVwXfBEf6NNNLmTIAx5j5pVoV%2FAs9oma1YBWGTPgPAEQAfhCpFxrL%2BBMcoBCGTHdm0osZEdpC0DMY1Jgl5QxPe13brl4f56Jmd7AP%2FMvz%2F0I4Rv0ZuOse3sjfUdTY8AiAZFH4rTZFQk79tGEfiI8IlKsIUAQhiVd7HsMa6sG27hSDnjQitSrc%2BytF5hleqUHnDFZ0WyHWx%2Bn4VabZUglSRO8oWYJ5xuwBRGSwvHoMBrEAD9zKXn0w4yracjqKEe619W70PdHUzeX5WFEjsbCnYO4DTw5q6jCaoXQADye%2FCIh2ysNPxfTGkeJss0%2FjSmzwlQnTeH8mEYfw7ZwSn6XFY8K%2BW0rvh%2BFVoXCyfUvkXZybnTvgfmQe2E0bYRMx0Vtu%2Bm6zaoZrRomHfMCubsjz8Rrs2rN4f%2BDWMO9MB2j5bRabSiu2pb5bsTWVgTVMw9ZGXI%2Fllla4RdKokQ9AmuYMcJ4ILA6wAkRFF6HiMO%2BYdmRizDaF%2BFrgp0rOVn2gTqWXZXDqJHDPsGFcY2E%2BTSVg3tEn9oTOzCDy8eanH%2BM%2FyWNGN4UUHMey6JuU4zNQsr8AV7zTL0xlFez16LVDbmgbxCP9yoyXa%2BZLTUbVGI9zrgoK7Ry0EhNppcRJIVhw0IYdAB9xqu9wAFOZfGCnDGcpDTPjmpgBNUZjbs6C5xV94OixGrV5NqWU5V9ezRPrntdVQLbN4b3d397vfH0ut%2BwOtAeSUHjoOIE2LfcCCn4KzlQrkZMrFMuI3NZk4mlquS76oKEtQabmH6zRO41IQriMHbONqV8SH2fxJtfCBIXZY9SMeE0lhvC7C58gMKecWE3bHjxHrRR2YaPCheyx2PYC6Yb2Qm4ZkmUc2oMcfQUfdsQ2gHg%2Bu8yQBF3cv2r926uf%2B%2Fuduzdjhsqjaj2jff0YYQzGsGuyce%2F1QjVijEXfjTujCej6UNnMPFyB3hxFn3of2L9Hfed9be%2Fmgi8h2vvcTq5H3xcAGc0ADJqfuqcyAHQLP8v3PTt%2FOtqef8B%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22L_pYenQRpbMD8YPJvgPj%22%20name%3D%223.%20Asset%20Database%22%3E7VrZdto6FP0aHpvlCQcemZIOdJWurJt7%2ByhsYasRlisLsPn6K2PJk8yUOgG6mpdYR0cy2ufsfSRExxwt40cKQv8rcSHuGJobd8xxxzB0%2Fd7g%2F1JLkll6tp4ZPIpc4VQYntAWCqMmrCvkwqjiyAjBDIVVo0OCADqsYgOUkk3VbUFw9a0h8KBieHIAVq3%2FIpf5YhXGfWH%2FCJHnyzfrdj%2FrWQLpLFYS%2BcAlm5LJnHTMESWEZU%2FLeARxCp7EJY7vte30F2OG90nbfnx0np%2B%2Ff8gmezhnSL4ECgPW7tQChTXAK4HXIIog46YxYGAOIijWzhIJqM%2BWmD%2FpHXPogsiHrmhsfMRgFAIn9dvwZOK2BcJ4RDCh3BSQgPcM15AyxMMzwMgLuHlOGCNL3nHiIgUY6TQwLoVYLPoRkiVkNOEuotcS4UuqzU2RDF0ZYb%2BUCJY0ApGAXj5zATJ%2FEDg3Yz7rO2irf%2F%2F62fjSf%2FKcz%2Frwy1aEqYz5PxGk6aiAQbpIAaxjTskqcHdIaxLppyrSpaiUQe8Y5mL3dwnk7Srytoq8oTUgnzv%2BDvKNK%2BgrwEKXi4VoEsp84pEA4ElhHVahL3ymhIQC8J%2BQsUQoH1gxUg0HjBH7Lx1%2B1xWtH6WecSxm3jUS2Qj4ckuD0uaPcl8xbNeS4yIGKBukqskNDgZRhBxpfkBYfqTzAh6RFXXgAT9RIfhLPHhoPjPzSzE%2FmD4UYsDQuirgrSeDodDwYcLbgzA8SfK0PZL37izrVVnWU1mm2w0s670VyWThvwzL9BLHCsYdY1mFYwXlropl5okss66KZabCshklcXLTFMur1uU4Zl6EY3uqkt4OX5opbBzmcMsks04kmW60zTIxdEb4LrC0ea2nnllLqWxFYlSRVRxtkJTcwtQh2v8eu%2F4eQ6slaTZjkbL5Gl%2BfxZaiDYPZp9tSBtO%2BNmnoXUIZLlMR7ZusiLaS9eOhErPIB2H66CQY8dDQ46e%2BeRbD6Tw3AOfF20X224rxWeCrgnDGOVuvUsFsOGm%2Fb5FUd%2FjT8WB2WwJja0e%2FvngzfWn89uIiO49TdxByg5I3sj3E%2FbEd%2FeuFqRGjUw%2FErQvTiZuIbi05sg%2Fa%2FibCbncTcQjrEsmfwQozJUtv9Su0mqi%2B5%2FG%2BEe%2BegrcCdVp1wt9EJL8QAHM5rXYYKXkvIZHSDAUps6cCJW2tA6XW%2Bb1Vns%2BGwghWc%2FBoLQJRmF2YLFCcOg5DSBH%2F7OluQU45K0x7k1qN1MHAH8%2FdSyGuXmYoiO8kDNLJGqZKJoqLvNfR6qhXKhAlL7B2l1FD1DIty%2Bo2RQaDOcQzEiGGSKobDgyymEhBmdYccmGpKw4ju9CLVj4PybZ4o%2FwSTcsWtkuvZeyld3t367V79wKTtwi57DUrHLRVrTLUfJBureeDrh4wr0OrjH79tK1fVqv07h8mVnnor1et9BMKxF%2B5Okeuzgj6O%2BsVbxa%2FE8h2vsWvLczJ%2Fw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

<!-- ![SPG - High-level Overview.jpg](media_Analyse/SPG%20-%20High-level%20Overview.jpg) -->

We can identify 3 major components in the Asset Database setup:

1.  the user interface
2.  the API
3.  external services

### User interface

The user interface will be a static **front-end application** (FE APP).

Authorization will be handled following a standard [Authorization Code Flow](https://auth0.com/docs/flows/concepts/auth-code).

### API

The API will expose several endpoints for retrieving data from the database following a standard **REST pattern**.

Authorization will be handled following a standard Client Credentials Flow.

### External Services

Authentication will be handled by Auth0. For a small investment, this service offers a lot of functionality out of the box, including an LDAP integration module.

User roles will be managed in the LDAP server, to avoid an additional identical layer in the Asset Database. Additional permissions required for the application or services will be handled by Auth0.

Communication between the API and the Autodesk Vault (Vault) will require a token that can be verified with Auth0 (i.e. each machine will have to authenticate with Auth0 and provide its authorization with each request).

## Infrastructure & Technology

### Front-end Application

The front-end application will be built using the **Angular** framework:

-   the application is built around **user input** which is 1 of the selling points of the framework
-   the Angular framework offers a lot of **tools** to set up, manage and extend a monorepo setup, that are well maintained and regularly updated
-   **backwards compatibility** and **long term support** are major priorities for the Angular team

Authentication will be handled by Auth0 following the [Authorization Code Flow](https://auth0.com/docs/flows/concepts/auth-code).

### API

The API will be built using **NodeJS**. It will store data in an **SQL database** (PostgreSQL). Authorization will be handled by Auth0 following the Client Credentials Flow.

Communication between the Autodesk apps and the API will be handled by HTTP calls, using Auth0 tokens for authorization.

Asset storage is not yet required, since all design files will be stored in Vault. Other files will remain in the existing environment (network storage + BIM software) for now.

## Deployment

All required components will be deployed in the existing **Cloudalize** environment at SPG.

The app will be deployed using docker containers. The images will be built using Circle CI and hosted on the SHD docker repository. On deploy, the server in the Cloudalize environment will pull the images and run the required containers.

During development a **public test environment** is required. This can be provided either in the SHD Kubernetes stack or on a secondary server in the Cloudalize environment.

## Software support

With the scope of the MVP in mind, we don't see the need for any specific testing platforms.

The Asset Database will have to perform properly in web browser environments.

Considering a future where the application might be used on mobile devices (tablets & smartphones) and less premium hardware (cloud PC), we will have to ensure a proper responsive layout and pay some attention to performance.

## Re-usability

Considering this MVP scope is the start of a plan spanning multiple months, years even, we should start out with a focus on modular, re-usable components (front-end as well as back-end).

# Risks & Liabilities

## Scope & Design

Considering this MVP is the first step in a bigger plan, we expect some change requests based on client feedback. We will have to consider these as they arise and estimate their impact on the timing.

Ideally, most questions should be answered before development starts.

## Expectation management

The wire-frames and concept go beyond the scope of the MVP. We should make sure to manage expectations regarding the MVP.

All configuration and mapping will be predefined, any admin screens to manage this data will possibly be added in a later phase.

User management will be limited and mostly handled in the LDAP server. Admin screens to manage users might be add in a later phase.

## Architecture

We depend on Greenock for the integration with Autodesk Vault and Inventor. Since communication between the API and the Autodesk applications will always be one-way (Autodesk will always and only retrieve data from the API), we don't expect any problems on our side.

Deployment to the Cloudalize environment is pretty unclear at the moment. We will need more research and information to estimate the possibilities and required involvement of the DevOps team.

## Team Input

The OAuth2 setup and integration with the existing LDAP service will need to be discussed with some experts.

The setup in the Cloudalize environment will probably require input from the DevOps team as well.

## Maintainability

Longevity is a factor, considering the plans SPG has in place. We should also keep in mind, however, that this is an MVP.

# Team

Considering the rather straightforward architecture we don't see any specific requirements for the team. We will need input from OAuth2 and LDAP experts, and input from team DevOps at some point, but this should not result in a permanent presence on the project.

The proposed timeline and team capacity allows us to pair a less experienced developer with one with more seniority. Considering this is a new track, it might be a valuable learning experience.

