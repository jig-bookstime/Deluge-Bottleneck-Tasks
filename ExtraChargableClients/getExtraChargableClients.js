const {
    getZohoOAuthToken,
} = require("../utils/zohoAPIAccessUtils/getZohoOAuthToken");
// const {fetchClientDataFromCRM} = require("./compareProjectHours");

async function getExtraChargableClients() {
    let access_token = await getZohoOAuthToken();
    // try {
    //     const clients = await fetchClientDataFromCRM(access_token);
    //     console.log(clients.length);
    //     console.log(clients[0]);
    // } catch (err) {
    //     if (err.response && err.response.status === 401) {
    //         console.warn("Access token expired. Getting a new one...");
    //         access_token = await getZohoOAuthToken();
    //         try {
    //             const clients = await fetchClientDataFromCRM(access_token);
    //             console.log(clients.length);
    //         } catch (retryErr) {
    //             console.error(
    //                 "Error after retrying with new access token:",
    //                 retryErr.response.status
    //             );
    //             throw retryErr;
    //         }
    //     } else {
    //         console.error(err);
    //     }
    // }
    return access_token;
}

module.exports = {getExtraChargableClients};
