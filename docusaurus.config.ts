import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Contentful Big Cartel Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://bigcartel.github.io',
  baseUrl: process.env.NODE_ENV === 'production' ? '/ctfl-documentation/' : '/',
  organizationName: 'bigcartel',
  projectName: 'ctfl-documentation',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ctfl-card.png',
    navbar: {
      title: 'Contentful Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Documentation created by the Big Cartel Development Team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
