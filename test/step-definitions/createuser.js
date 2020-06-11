const { Before, Given, When, Then, After, Status, setDefaultTimeout } = require('cucumber');
const restClient = require('../helpers/restApiHelper');
var should = require('chai').should(),
    expect = require('chai').expect;

let _response;

When('I hit endpoint with endpoint {string}, {string} and {string}', async function(endpoint, name, job) {

    _response = await restClient.createUser(endpoint, name, job);
    expect(JSON.parse(_response.body).name).to.equal(name);
    expect(JSON.parse(_response.body).job).to.equal(job);
    console.log(_response.body);

});

Then('I should get {int} responseStatus', function(statusCode) {
    expect(_response.statusCode).to.equal(statusCode);
    console.log(_response.statusCode);
    //callback();
});