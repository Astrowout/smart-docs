
title: Excel usage
created at: Thu Feb 13 2020 14:28:00 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 02:13:52 GMT+0000 (Coordinated Universal Time)
---

# Excel usage

# Scenarios

For all scenarios to work, we suggest making these changes:

-   Excel templates should be moved to Vault and get strict access management
-   An additional sheet needs to be added in each workbook, detailing the data mapping to the asset database
-   Naming conventions need to be applied throughout all Excel templates to avoid unexpected issues (e.g. the calculcation sheet should always have the same name)

[\[https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&title=Excel%20as%20a%20service.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fa%2Fdistrict01.be%2Fuc%3Fid%3D18Aw_gvmpXdylufEVP8wDzpaH2SvkXtnj%26export%3Ddownload\]](https://www.draw.io/?lightbox=1&highlight=0000ff&layers=1&nav=1&title=Excel%20as%20a%20service.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fa%2Fdistrict01.be%2Fuc%3Fid%3D18Aw_gvmpXdylufEVP8wDzpaH2SvkXtnj%26export%3Ddownload)

## Scenario 1: asset database for data storage only

In this scenario, all calculations and complex logic is retained in the existing Excel files. These files can be moved to Vault to use their approval flow and history management.

Data can be exported from the database, using the intermediary format used for imports in the MVP. This exported dataset can be used in the existing calculation sheets. The engineers make their changes in Excel and once they are finished, the results are extracted to the same intermediary format for re-import in the asset database.

➕

-   relatively small modification to the existing Excel sheets
-   no need to translate complex logic to asset database format

➖

-   requires a lot of manual actions (user error)
-   Excel is a black box, no access management can be applied until the re-import in the asset database (bad UX)
-   prone to errors in workflow
-   no calculcations on import, users will have to manually check out, calculate and re-import any other affected templates (**this is also true for external updates**)

## Scenario 2: Excel as a service

In this scenario, Excel will be treated as an external system (similarly to how Inventor is approached atm). This means some custom development is needed (e.g. an add-in for Excel) to fetch data from the asset database, similarly to how communication with Inventor is handled.

➕

-   relatively small modification to the existing Excel sheets
-   no need to translate complex logic to asset database format

➖

-   requires custom development in Office applications, implementing communication between the Excel application and the asset database
-   Excel is a black box, no access management can be applied on the asset database side (apart from a simple approval from a data owner on re-import)
-   no calculcations on import, the Excel implementation will need to provide all updated fields or users will have to manually open affected templates (**this is also true for external updates**)

## Scenario 3: export to Excel templates

This scenario is a variation on scenario 1. Data is exported from the Asset Database directly to the existing templates available in Vault. Using the data map sheet in the template, the Asset Database can lock cells in the template the user does not have access to. The user can run their calculations in Excel and re-import the complete Excel file in the database. the updated fields will be extracted from the data map sheet.

➕

-   relatively small modification to the existing Excel sheets
-   no need to translate complex logic to asset database format
-   [access control is possible](https://support.office.com/en-us/article/lock-or-unlock-specific-areas-of-a-protected-worksheet-75481b72-db8a-4267-8c43-042a5f2cd93a) by locking the fields the user does not have access to
-   relatively small impact on UX

➖

-   limited by existing tools (e.g. sheetJS does not render graphs)
-   access control is limited (not everything can be locked down properly)
-   no calculcations on re-import, all updated fields need to be provided or the user will have to manually update affected templates (**this is also true for external updates**)

## Scenario 4: asset database as a central tool

This scenario assumes the initially proposed solution is maintained: all data and calculations are stored and run in the asset database. Access management can be handled on a per-user-per-field basis. Calculations will be triggered in a cascading effect on updates and external imports.

➕

-   all complex logic is available and maintained in the asset database
-   no external dependencies
-   fine-grained access control
-   calculations are possible on updates and imports (both internal and external)

➖

-   complex logic needs to be translated to the asset database format
-   all existing Excel templates will need to be simplified and translated

## Scenario 5: formula builder in the asset database

A final option would be to heavily extend the logic needed for the calculations in the asset database. This would make it a lot easier to integrate and maintain existing scripts and formulas.

Using Webassembly, it should theoretically be possible to use existing VB scripts in the API as well, providing the engineers with a coding environment they are familiar with.

➕

-   more power with the users in a trusted environment
-   no external dependencies
-   fine-grained access control
-   calculations are possible on updates and imports (both internal and external)

➖

-   the techniques used are still experimental
-   very heavy in development

# Tools

## SheetJS

Extensive JS library that works with multiple Excel formats. Macros cannot be run, but are preserved. Has a pro license with no clear pricing model (information has been requested), locking away features like:

-   cell formatting (borders, colors, backgrounds, ...)
-   cell access (lock/unlock is part of formatting module)
-   pivot tables, graphs, extended features
-   ...

[https://github.com/SheetJS/sheetjs](https://github.com/SheetJS/sheetjs/issues/1574#issuecomment-571303727)

### Macro support

According to <https://github.com/SheetJS/sheetjs/issues/1574#issuecomment-571303727>:

> To be clear about the feature support and scope, there are different levels of macro support:  
> preserving the macros (read/write the raw data): supported in the open source build
> extracting or modifying the raw macro code: VBA component in our SheetJS Pro offering
> evaluating macro code from JS: closed beta with some of our customers, unsure of when a public release will be made.

## ExcelJS

Completely free alternative to SheetJS, but more limited in features. Reading and writing Excel files with no restrictions on formatting is possible, but there is (at the moment of writing) no support for macros.

<https://github.com/exceljs/exceljs>

## Office JS

Connector to Office host applications in JS. Mostly used for developing add-ins.

<https://github.com/OfficeDev/office-js>

## Office 365 embeds

[Should be possible](https://support.office.com/en-us/article/embed-files-directly-into-your-website-or-blog-ed07dd52-8bdb-431d-96a5-cbe8a80b7418), not a lot of documentation out there though.

Could provide a solution to integrating the Excel work in the asset database environment.

          