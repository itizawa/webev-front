const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: "public", // outout dir
    disable: process.env.NODE_ENV === 'development',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
  },
});
