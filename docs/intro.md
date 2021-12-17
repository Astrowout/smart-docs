---
sidebar_position: 1
---

# Introduction to Smart docs

Let's discover **Smart docs in less than 5 minutes**.

## Getting Started

Get started by **uploading your ABI with the button below**.

Or just **use Smart docs with an already loaded ABI interface from local storage**.

## 1. Uploading a new ABI JSON file

Generate a new Docusaurus site using the **classic template**:

```shell
npm init docusaurus@latest my-website classic
```

## 2. Using an already loaded ABI interface

View the documentation **status** in the top right corner.

Your current status:

```shell
cd my-website

npx docusaurus start
```

This will give you the following documentation structure in the sidebar:

```sh
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

Open `docs/general` to show some basic information about your smart contract.
