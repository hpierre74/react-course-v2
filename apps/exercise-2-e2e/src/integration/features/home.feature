Feature: Home page
  I want to make sure the home page works as expected

  Background:
    Given I have set my cookie preferences
    Given I am on the "home" page

  Scenario: Layout elements
    Then I should see "articles list"
    And I should see "cart"
    And I should see "navbar"

  Scenario: Purchase scenario
    When I click on "add to cart item 1"
    And I click on "checkout button"
    Then I should be on the "checkout" page
# TODO: integrate checkout step
# When I fill the checkout steps
