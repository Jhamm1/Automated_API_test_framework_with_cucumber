@all @get
Feature: get
    All scenarios for the 'get' endpoint

    @inputs
    Scenario: To verify match status in response for various inputs
        When I hit endpoint with request
        Then I should get 200 responseStatus