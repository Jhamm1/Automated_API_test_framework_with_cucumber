const jsonString = require('../appsettings.json');

function GetBaseUrl() {
    console.log(jsonString.BaseUrl);
    return jsonString.BaseUrl;
}

module.exports = { GetBaseUrl }