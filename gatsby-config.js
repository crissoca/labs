module.exports = {
  siteMetadata: {
    title: 'Modus Create Labs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ],
};
