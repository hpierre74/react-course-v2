Feature: Cart feature
  I want to make sure the home page works as expected

  Scenario: Cart state persistance across navigations
    When Cookies are cleared
    And I am on the "home" page
    Then I should see "cart"
    And I should not see "cart item 1"
    When I click on "add to cart item 1"
    Then I should see "cart item 1"
    When I click on "go to article 1"
    Then I should see "cart"
    And I should see "cart item 1"


  Scenario: Cart state persistance upon reload
    When Cookies are cleared
    And I am on the "home" page
    Then I should see "cart"
    And I should not see "cart item 1"
    When I click on "add to cart item 1"
    Then I should see "cart item 1"
    When I reload the page
    Then I should see "cart item 1"







