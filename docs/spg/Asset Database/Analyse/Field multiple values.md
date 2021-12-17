
title: Field multiple values
created at: Mon Mar 22 2021 09:07:35 GMT+0000 (Coordinated Universal Time)
updated at: Mon Mar 22 2021 09:47:53 GMT+0000 (Coordinated Universal Time)
---

# Field multiple values

# Problem

Right now, you can only select 1 value per field. For repeating values, especially when using datalists, you should be able to select more than 1 item.

# Proposed Solution

Allow selecting multiple values in a datalist field:

-   you can select the same value more than once
-   you should be able to choose how many values you want to add

Nominal values for datalist fields are stored as follows:

```json
{
  "ITEM_ID": "FIELD_CODE",
  "datalistId": "datalist-uuid",
  "datalistItemGroupId": "datalist-item-group-id"
}
```

We could simply adapt this to store multiple values in the ITEM_ID.

## Code changes

### API

-   store multiple values for datalist fields
-   verify revision diff check
-   validation on empty values
-   update formula reference lookup to take arrays into account

* * *

**Estimation: 3d**

### Application

-   extend datalist table cell component
    -   display
        -   show accordion (collapsed by default)
        -   expand to show all selected fields
    -   edit
        -   select 1 value at a time
        -   "add value" action to select additional values
        -   validation on empty values
-   extend datalist table cell input component
    -   add checkbox "allow multiple values" → only for datalists

**Estimation: 7d**

* * *

**Total: 10d**

          