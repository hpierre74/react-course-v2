Feature: Navigation feature
  I want to make sure the all pages work as expected

  Scenario: Navigations scenarios
    Given I am on the "home" page
    When I click on "nav menu"
    And I click on "nav menu item contact"
    Then I should be on the "contact" page
    When I click on "back home button"
    Then I should be on the "home" page

    When I click on "nav menu"
    And I click on "nav menu item about"
    Then I should be on the "about" page
    When I click on "back home button"
    Then I should be on the "home" page









