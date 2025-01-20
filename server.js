const config = require("./config");
const port = config.port;

const express = require("express");
const server = express();

server.use(express.json());

const {
    createMonthlyReports,
} = require("./MonthlyAutomaticReports/createMonthlyReports");

server.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
    createMonthlyReports();
});
