// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart contract docs',
  tagline: 'Easiest documentation viewer for Soliditiy smart contracts.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Tech Express', // Usually your GitHub org/user name.
  projectName: 'smart-contract-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wowtvds/smart-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'contact_us',
        content:
          'We are adding new features gradually. Please <a target="_blank" rel="noopener noreferrer" href="mailto:wout.workspace@gmail.com">contact us</a> to report any feedback 🙏',
        backgroundColor: '#ffffff',
        textColor: '#1f7368',
        isCloseable: false,
      },
      navbar: {
        title: 'Smart docs',
        logo: {
          alt: 'Smart docs',
          src: 'img/logo.svg',
          width: 36,
          height: 36,
        },
        items: [
          {
            position: 'left',
            to: 'upload',
            label: 'Upload ABI',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Your smart contracts',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://github.com/wowtvds/smart-docs',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Get started',
            items: [
              {
                label: 'Introduction to Smart docs',
                to: '/docs/intro',
              },
              {
                label: 'Docs',
                to: '/docs/test',
              },
              {
                label: 'Docs',
                to: '/docs/nog-wa',
              },
            ],
          },
          {
            title: 'About this project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wowtvds/smart-docs',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/daily.tech.express/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/wout-vandesompele',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/the__asstronaut',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
