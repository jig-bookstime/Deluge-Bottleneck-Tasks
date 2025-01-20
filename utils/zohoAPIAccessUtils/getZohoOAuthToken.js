const axios = require("axios");
const config = require("../../config");

async function getZohoOAuthToken() {
    const {clientId, clientSecret, refreshToken} =
        config.zohoApiAccessCredentials;
    const accountsUrl = "https://accounts.zoho.com/oauth/v2/token";

    try {
        const params = new URLSearchParams();
        params.append("refresh_token", refreshToken);
        params.append("client_id", clientId);
        params.append("client_secret", clientSecret);
        params.append("grant_type", "refresh_token");

        const response = await axios.post(accountsUrl, params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        const {access_token} = response.data;
        console.log(access_token);

        // let access_token =
        // "1000.da3fa2065621474f0776cb5f054d2bc8.15d84f49f17ac373da2cd52df31eda09";
        return access_token;
    } catch (error) {
        console.error(
            "Error fetching Zoho OAuth token:",
            error.response?.data || error.message
        );
        throw new Error("Failed to refresh Zoho OAuth token");
    }
}

module.exports = {getZohoOAuthToken};
