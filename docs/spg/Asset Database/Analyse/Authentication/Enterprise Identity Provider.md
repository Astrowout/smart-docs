
title: Enterprise Identity Provider
created at: Mon Feb 10 2020 11:45:27 GMT+0000 (Coordinated Universal Time)
updated at: Sat Dec 12 2020 00:07:04 GMT+0000 (Coordinated Universal Time)
---

# Enterprise Identity Provider

Auth0 offers the possibility to setup an Enterprise Connection with Active Directory/LDAP, SAML, Microsoft Azure AD and a few other possibilities. The [Developer plan ](https://auth0.com/pricing/)includes one Enterprise Identity Provider. The [Developer Pro plan ](https://auth0.com/pricing/)gives a few more interesting options and features. You can use up to three (different) EIP's, but it also offers an AD Connector, which - in case you have a AD/LDAP environment - might come in handy. The Connector allows Auth0 to access your AD or LDAP enterprise IdP securely for validating user credentials. It is a lightweight service running behind your firewall that establishes a connection over the standard HTTPS port 443 between the connector and the Auth0 service, without opening any other ports on your enterprise firewall.

The Authorization Core from Auth0 will, in a future release, have the possibility to get it's groups and roles form third-party directories like AD/LDAP. However, it is currently possible to create these groups manually. When a user registers/logs in, the right role (group) will automatically be assigned, based on the role of the account in AD/LDAP.

Pricing depends on the amount of users. There is a difference to be made between internal and external users. For this use-case, external users are almost certain the smartest choice. The smallest Developer plan starts with 1.000 external active users for 250$/year, while the Developer Pro plan goes for $308/year for 100 external users.



          