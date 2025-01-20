require("dotenv").config();

const config = {
    port: process.env.PORT || 443,
    zohoApiAccessCredentials: {
        clientId: process.env.ZOHO_API_CLIENT_ID,
        clientSecret: process.env.ZOHO_API_CLIENT_SECRET,
        refreshToken: process.env.ZOHO_API_REFRESH_TOKEN,
        redirectURI: process.env.ZOHO_API_REDIRECT_URI,
    },
};

module.exports = config;
