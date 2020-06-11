# Automated_API_test_framework_with_cucumber

Automated API test framework (written in JavaScript) with a cucumber interface

Use this command for debugging `./node_modules/.bin/cucumber-js ./test/features -r ./test/step-definitions/get.js`

cucumber-js ./test/features --tags @inputs --format json:./reports/cucumber-reports/cucumber-json-report.json & gulp cucumberReports

test getting user > `npm start`

test creating user > `npm test`

## Run inside a Docker container

`docker build -t jhamm/automated_api_tests .`

`docker run jhamm/automated_api_tests`

