console.log('env', process.env.NODE_ENV);
const isDev = process.env.NODE_ENV === 'development';

const config = {
  gatsby: {
    pathPrefix: '/docs',
    siteUrl: 'https://actionsflow.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://ik.imagekit.io/owen/actionsflow/log_3zE01MsatzK.svg',
    logoLink: '/',
    title: `<a href="${isDev ? '/' : '/docs'}">Actionsflow</a>`,
    githubUrl: 'https://github.com/actionsflow/actionsflow',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/',
      '/getting-started', // add trailing slash if enabled above
      '/concepts',
      '/triggers',
      '/actions',
      '/reference',
      '/faqs',
      '/compare',
      '/contributing',
      '/about',
    ],
    collapsedNav: [
      // '/reference',
      // add trailing slash if enabled above
    ],
    links: [],
    frontline: true,
    ignoreIndex: false,
    title: '',
  },
  siteMetadata: {
    title: 'Actionsflow Documentation',
    description:
      'The one stop location for tutorials, guides, and information about building workflows with Actionsflow ',
    ogImage: null,
    docsLocation: 'https://github.com/actionsflow/actionsflow/tree/master/docs',
    favicon: 'https://ik.imagekit.io/owen/actionsflow/log_3zE01MsatzK.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
