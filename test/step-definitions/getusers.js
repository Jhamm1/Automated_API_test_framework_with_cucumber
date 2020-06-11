const { Before, Given, When, Then, After, Status, setDefaultTimeout } = require('cucumber');
const restClient = require('../helpers/restApiHelper');
var should = require('chai').should(),
    expect = require('chai').expect;

let _response;

When('I hit endpoint {string} to get users', async function(endpoint) {
    _response = await restClient.getUsers(endpoint);
    console.log(_response.body);
});

Then('I should get {int} response status code', function(resCode) {
    expect(_response.statusCode).to.equal(resCode);
    console.log(_response.statusCode);
    //callback();
});