Feature: Home page
  I want to make sure the home page works as expected

  Background:
    Given I am on the "home" page

  Scenario: Layout elements
    Then I should see "articles list"
    And I should 7 articles

    When I click on "link to contact"
    Then I should be on the "contact" page
    When I click on "back home button"
    Then I should be on the "home" page

    When I click on "link to about"
    Then I should be on the "about" page
    When I click on "back home button"
    Then I should be on the "home" page


