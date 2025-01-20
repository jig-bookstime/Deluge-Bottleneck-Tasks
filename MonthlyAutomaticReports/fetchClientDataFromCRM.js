const axios = require("axios");
const {attributes} = require("./crmAttributes");

async function fetchClientDataFromCRM(accessToken) {
    const apiUrl = "https://www.zohoapis.com/crm/v7/Accounts";
    const searchCriteria = "(Rating:starts_with:Active)";
    try {
        const params = new URLSearchParams();
        params.append("");
        params.append("fields", attributes.join(","));

        const response = await axios.get(apiUrl, {
            params,
            headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error(
            "Error inside fetchClientDataFromCRM(): ",
            error.response.status
        );
        throw error;
    }
}

module.exports = {fetchClientDataFromCRM};
