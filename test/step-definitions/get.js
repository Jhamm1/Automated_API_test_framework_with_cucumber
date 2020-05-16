const { Before, Given, When, Then, After, Status, setDefaultTimeout } = require('cucumber');
const api = require('../utils/CommonApiMethods');
const common = require('../utils/CommonMethods');
var should = require('chai').should(),
    expect = require('chai').expect;


var _url = 'https://reqres.in',
    // _headers = { 'Content-Type': 'text/xml' },
    // _body = '',
    _response;

When('I hit endpoint with request', async function() {
    _response = await api.GET(_url + "/api/users?page=2");
    console.log(_url + "/api/users?page=2");
    console.log('------ RESPONSE BODY -------\n' + _response.body);
});

Then('I should get {int} responseStatus', function(statusCode, callback) {
    expect(_response.statusCode).to.equal(statusCode);
    callback();
});