
title: Authentication
created at: Fri Oct 04 2019 11:51:23 GMT+0000 (Coordinated Universal Time)
updated at: Thu Dec 10 2020 03:13:18 GMT+0000 (Coordinated Universal Time)
---

# Authentication

# Authentication flows

There are 2 types of authentication flows:

-   server to server (e.g. Inventor requesting data from the API)
-   client to server (e.g. user requesting data from the API)

## Server to server

For server to server authentication, we will follow the [Client Credentials Flow](https://auth0.com/docs/flows/concepts/client-credentials).

## Client to server

For client to server authentication, we will follow the [Authorization Code Flow](https://auth0.com/docs/flows/concepts/auth-code), with the addition of the LDAP server for authentication and user data.

# Roles

We can defined 3 major roles:

-   project manager
-   data owner
-   engineer

The project manager:

-   can create a new project
-   can update the team for a project
-   can view all projects

Data owner:

-   gets notified when files get added concerning fields they are responsible for
-   gets notified of conflicts concerning the fields they are responsible for
-   gets notified of the freezing/unfreezing of fields they are responsible for
-   can approve or reject updates to field values of fields they are responsible for
-   can approve or reject freezing/unfreezing fields they are responsible for
-   can freeze/unfreeze fields without approval for fields they are responsible for
-   can update field values without approval for fields they are responsible for

Engineer:

-   can view projects they are involved in
-   can update field values
-   can request freezing/unfreezing fields
-   can request approval for changes
-   can preview and export data-sheets

# Permissions

User roles will be defined in LDAP. Based on these roles, users can be added to projects as either team lead or engineer.

The combination of LDAP role and project role will determine a users permissions within a project (verified in the API).

          