module.exports = {
  siteMetadata: {
    title: `arterie`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Vollkorn`,
            file: `https://fonts.googleapis.com/css2?family=Vollkorn&display=swap`,
          },
          {
            name: `Manrope`,
            file: `https://fonts.googleapis.com/css2?family=Manrope&display=swap`,
          },
        ],
      },
    },]
};