
title: API
created at: Fri Oct 04 2019 11:50:36 GMT+0000 (Coordinated Universal Time)
updated at: Thu Dec 10 2020 19:54:02 GMT+0000 (Coordinated Universal Time)
---

# API

# Project Templates

## Required endpoints:

-   GET `/templates/:id`

## Schema:

```json
{
  "id": "string",
  "general": {
    "ACCType": "enum",
    "ACCFormat": "enum"
  },
  "location": {
    "description": "string",
    "coordinates": [number]
  },
  "client": {
    "name": "string"
  },
  "packages": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "componentGroups": ["ref"]
    }
  ],
  "componentGroups": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "components": ["ref"]
    }
  ],
  "components": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "fields": ["ref"]
    }
  ],
  "fields": [
    {
      "id": "string",
      "code": "string",
      "CAD_ID": "string",
      "type": "enum",
      "name": "string",
      "description": "string",
      "unit": "enum",
      "nominalUnit": "enum",
      "defaultUnit": "enum",
      "validation": [Rule],
      "formula": Formula,
      "datasource": "ref",
      "dependencies": ["ref"],
      "designFiles": ["string"]
    }
  ],
  "designFiles": ["string"]
}
```

# Projects

## Required endpoints:

-   GET `/projects`
    -   query
        -   status
        -   ACCType
        -   ACCFormat
        -   location
        -   sort
-   POST `/projects`
    -   body
        -   name
        -   projectManager
-   GET `/projects/:id`
-   PUT `/projects/:id`
    -   body
        -   ...
-   DELETE `/projects/:id`

## Schema:

```json
{
  "id": "string",
  "name": "string",
  "status": "enum",
  "general": {
    "ACCType": "enum",
    "ACCFormat": "enum"
  },
  "location": {
    "description": "string",
    "coordinates": [number]
  },
  "client": {
    "name": "string"
  },
  "packages": [{
    "id": "string",
    "name": "package name",
    "description": "string",
    "componentGroups": [{
       "id": "string",
       "name": "string",
       "description": "string",
       "components": [{
          "id": "string",
          "name": "string",
          "description": "string"
        }],
    }],
  }],
  "designFiles": [{
    "code": "string",
    "dateCreated": Date,
    "dateUpdated": Date,
    "status": "enum",
    "previewURL": "string"
  }],
  "team": {
    "projectManager": "ref",
    "dataOwners": [{
      "owner": "ref",
      "component": "ref",
      "type": "enum"
  }
  "specs": [{
    "id": "ref",
    "name": "string",
    "type": "enum"
    "values": [{
      "label": "string",
      "value": "any"
    }]
  }]
}
```

# Fields

## Required endpoints:

-   GET `/fields`
    -   query
        -   componentId
-   GET `/fields/:id/files`

## Schema:

```json
[{
  "id": "string",
  "code": "string",
  "CAD_ID": "string",
  "type": "enum",
  "name": "string",
  "description": "string",
  "nominalValue": "any",
  "unit": "ref",
  "nominalUnit": "enum",
  "defaultUnit": "enum",
  "validation": Rule[],
  "formula": Formula,
  "datasource": "ref",
  "dependencies": ["ref"],
  "designFiles": ["string"]
}]
```

# Formula

## Required endpoints:

-   none

## Schema:

```json
[Rule]
```

# Rule

## Required endpoints:

-   none

## Schema:

```json
{
  "source": {
    "value": "any",
    "fieldId": "string",
    "spec": "string",
    "path": ["string"]
  },
  "operator": "enum",
  "target": {
    "value": "any",
    "fieldId": "string",
    "spec": "string",
    "path": ["string"]
  },
  "operations": [Rule]
}
```

# Revisions

## Required endpoints:

-   GET `/revisions`
    -   query
        -   component
        -   user
-   POST `/revisions/external`
    -   body
        -   projectId
        -   values
            -   CAD_ID
            -   UnitType
            -   NominalValue
-   PUT `/revisions/:id`
    -   body
        -   author
        -   component
        -   values
            -   fieldId
            -   currentValue
            -   previousValue
-   POST `/revisions/:id/publish`

## Schema:

```json
{
  "id": "string",
  "author": "ref",
  "component": "ref",
  "createdDate": Date,
  "updatedDate": Date,
  "publishedDate": Date,
  "version": number,
  "values": [
    {
      "fieldId": "ref",
      "currentValue": "any",
      "previousValue": "any"
    }
  ],
  "status": "enum"
}
```

See [Revisions](/Projects/Projects/SPG%20Drycooling/Asset%20Database/Analyse/Revisions.md)

# Datasources

## Required endpoints:

-   GET `/datasources`
-   GET `/datasources/:id`

## Schema:

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "values": [
    {
      "label": "string",
      "value": "any"
    }
  ]
}
```

# Unit Types

## Required endpoints:

-   GET `/unit-types`
    -   query
        -   lookup
        -   system
-   GET `/unit-types/:type`

## Schema:

```json
{
  "id": "string",
  "type": "enum",
  "units": [
    {
      "unit": "enum",
      "toNominal": [Rule],
      "fromNominal": [Rule]
    }
  ],
  "system": "enum",
  "nominalUnit": "string"
}
```

See [Unit conversion](/Projects/Projects/SPG%20Drycooling/Asset%20Database/Analyse/Unit%20conversion.md)

# Specs

## Required endpoints:

-   GET `/specs`
    -   query
        -   type
-   GET `/specs/:id`

## Schema:

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "type": "enum",
  "values": [
    {
      "name": "string",
      "description": "string",
      "nominalValue": "any",
      "unit": "enum",
      "nominalUnit": "enum",
      "defaultUnit": "enum"
    }
  ]
}
```

# Files

## Required endpoints:

-   GET `/files`
    -   query
        -   code
-   POST `/files`
    -   body
        -   code
        -   publicUrl
        -   fileName
        -   revision
        -   publishedDate
        -   status

## Schema:

```json
{
  "id": "string",
  "publicUrl": "string",
  "fileName": "string",
  "revision": "string",
  "publishedDate": Date,
  "status": "enum"
}
```

          