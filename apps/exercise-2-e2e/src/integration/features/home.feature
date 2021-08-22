Feature: Home page
Feature: Home page
  I want to make sure the home page works as expected

  Background:
    Given I am on the "home" page

  Scenario: Layout elements
    Then I should see "articles list"
    And I should see 7 articles
