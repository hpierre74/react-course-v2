Feature: Home page
  I want to make sure the home page works as expected

  Background:
    Given I am on the "home" page

  Scenario: Layout elements
    Then I should see "articles list"
    And I should see "cart"
    And I should see "navbar"

  Scenario: Purchase scenario not connected
    When I click on "add to cart item 1"
    And I click on "checkout button"
    Then I should be on the "login" page
    When I fill the input "email input" with "foo@bar.com"
    And I fill the input "password input" with "yolo"
    And I submit the "login form" form
    Then I should be on the "checkout" page

  Scenario: Purchase scenario connected
    When I log in
    Then I should be on the "home" page
    When I click on "add to cart item 1"
    And I click on "checkout button"
    Then I should be on the "checkout" page
