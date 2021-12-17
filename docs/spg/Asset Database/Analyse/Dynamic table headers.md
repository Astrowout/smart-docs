
title: Dynamic table headers
created at: Wed Dec 18 2019 12:57:09 GMT+0000 (Coordinated Universal Time)
updated at: Thu Dec 10 2020 23:28:41 GMT+0000 (Coordinated Universal Time)
---

# Dynamic table headers

<!-- ![Schermafbeelding 2019-12-18 om 13.57.34.png](media_Dynamic%20table%20headers/Schermafbeelding%202019-12-18%20om%2013.57.34.png) -->

## Column information

```json
{
  "columns": [
    {
      "id": "brand",
      "headerInfo": {
        "name": "Last year",
        "type": "component-type"
      }
    },
    {
      "id": "sales-last-year",
      "headerInfo": {
        "name": "Last year",
        "type": "component-type",
        "parents": [
          {
            "id": "sales-parent",
            "name": "sales",
            "type": "component-type"
          },
          {
            "id": "sale-rate-parent",
            "name": "Sale rate",
            "type": "component-type"
          }
        ]
      }
    },
    {
      "id": "sales-this-year",
      "headerInfo": {
        "name": "This year",
        "type": "component-type",
        "parents": [
          {
            "id": "sales-parent",
            "name": "sales",
            "type": "component-type"
          },
          {
            "id": "sale-rate-parent",
            "name": "Sale rate",
            "type": "component-type"
          }
        ]
      }
    },
    {
      "id": "profits-last-year",
      "headerInfo": {
        "name": "Last year",
        "type": "component-type",
        "parents": [
          {
            "id": "profits-parent",
            "name": "profits",
            "type": "component-type"
          },
          {
            "id": "sale-rate-parent",
            "name": "Sale rate",
            "type": "component-type"
          }
        ]
      }
    },
    {
      "id": "profits-this-year",
      "headerInfo": {
        "name": "This year",
        "type": "component-type",
        "parents": [
          {
            "id": "profits-parent",
            "name": "profits",
            "type": "component-type"
          },
          {
            "id": "sale-rate-parent",
            "name": "Sale rate",
            "type": "component-type"
          }
        ]
      }
    }
  ]
}
```

## Parsed header information

This JSON object is used to render the table header dynamically

    {
      "parsedHeaderInfo": [
    		[
    			{
    				"id": "brand",
    				"name": "brand",
    				"rowspan": 3
    			},
    			{
    				"id": "sale-rate-parent",
    				"name": "Sale rate",
    				"colspan": 4
    			}
    		],
    		[
    			{
    				"id": "sales-parent",
    				"name": "Sales",
    				"colspan": 2
    			},
    			{
    				"id": "profits-parent",
    				"name": "profits",
    				"colspan": 2
    			}
    		],
    		[
    			{
    				"id": "sales-last-year",
    				"name": "Last year"
    			},
    			{
    				"id": "sales-this-year",
    				"name": "This year"
    			},
    			{
    				"id": "profits-last-year",
    				"name": "Last year"
    			},
    			{
    				"id": "profits-this-year",
    				"name": "This year"
    			}
    		]
    	],
    }

## The HTML needed to render the table header

```html
<ng-template pTemplate="header">
  <tr>
    <th rowspan="3">Brand</th>
    <th colspan="4">Sale Rate</th>
  </tr>
  <tr>
    <th colspan="2">Sales</th>
    <th colspan="2">Profits</th>
  </tr>
  <tr>
    <th>Last Year</th>
    <th>This Year</th>
    <th>Last Year</th>
    <th>This Year</th>
  </tr>
</ng-template>
```

