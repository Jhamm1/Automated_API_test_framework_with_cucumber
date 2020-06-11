@all @createuser
Feature: create user
    All scenarios for the 'post' endpoint

    @inputs
    Scenario Outline: create a user
        When I hit endpoint with endpoint "/api/users", "<name>" and "<job>" 
        Then I should get 201 responseStatus

  Examples:
    | name  | job   |
    | Julian| CTO   |
    | Bill  | CEO   |