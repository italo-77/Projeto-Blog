const { createHandlers } = require('netlify-cms-oauth-provider-node');

const { complete } = createHandlers(
  {
    origin: 'https://meu-blog-cms.netlify.app',
    completeUrl: 'https://meu-blog-cms.netlify.app/.netlify/functions/auth-callback',
    oauthClientID: process.env.GITHUB_CLIENT_ID,
    oauthClientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  { useEnv: true }
);

exports.handler = async (event, context) => {
  try {
    const result = await complete(event, context);

    if (typeof result === 'string') {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: result,
      };
    }

    return result;
  } catch (error) {
    console.error("Erro no auth-callback:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro interno na autenticação" }),
    };
  }
};
