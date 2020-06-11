const api = require('../lib/CommonApiMethods');
const config = require('./configLoaderHelper');
const creatusermodel = require('../models/createUser');

let URL = config.GetBaseUrl();

async function createUser(endpoint, name, job) {
    var reqBody = creatusermodel.CreateUser(name, job);
    _response = await api.POST(URL + endpoint, reqBody);
    return _response;
}

async function getUsers(endpoint) {
    _response = await api.GET(URL + endpoint);
    return _response;
}

module.exports = { createUser, getUsers }