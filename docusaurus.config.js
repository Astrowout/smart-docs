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
        docs: false,
        blog: false,
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
      colorMode: {
        switchConfig: {
          darkIcon: '💡',
          lightIcon: ' ',
        },
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
            to: 'import',
            label: 'Import ABI',
          },
          {
            position: 'left',
            to: 'contract',
            label: 'Your smart contract',
          },
          {
            to: 'intro',
            position: 'right',
            label: 'How to use',
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
                label: 'How to use Smart docs',
                to: 'intro',
              },
              {
                label: 'Import ABI',
                to: 'import',
              },
              {
                label: 'View smart contract',
                to: 'contract',
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
