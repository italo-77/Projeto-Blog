const { createHandlers } = require('netlify-cms-oauth-provider-node');

const { begin } = createHandlers(
  {
    origin: 'https://meu-blog-cms.netlify.app',
    completeUrl: 'https://meu-blog-cms.netlify.app/.netlify/functions/auth-callback',
    oauthClientID: process.env.GITHUB_CLIENT_ID,
    oauthClientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  { useEnv: true }
);

exports.handler = begin;
