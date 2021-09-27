Feature: Cart feature
  I want to make sure the cart feature works as expected:
  - It should allow decrementing articles occurrences
  - It should calculate article price multiplied by occurrences in the cart
  - It should display the name and occurences of a single article
  - It should propose a button to begin checkout
  - It should propose a button to clear the cart

  Scenario: Cart visibility
    Given I am on the "home" page
    Then I should see "cart"
    And I should not see "cart item 1"
    When I click on "add to cart item 1"
    Then I should see "cart item 1"
    When I click on "go to article 1"
    Then I should see "cart"
    And I should see "cart item 1"

  Scenario: Price totals calculations
    Given I am on the "home" page
    Then I should see "cart"
    When I click on "add to cart item 1"
    And I should see "cart item 1"
    And Cart price for article "cart item 1 price" should be 1000
    And Cart text for article "cart item 1 text" should be "x1 - Massive Oak Table"
    And Cart total should be 1000

    When I click on "add to cart item 1"
    Then Cart price for article "cart item 1 price" should be 2000
    And Cart text for article "cart item 1 text" should be "x2 - Massive Oak Table"
    And Cart total should be 2000

    When I click on "add to cart item 2"
    Then Cart price for article "cart item 2 price" should be 13000
    And Cart text for article "cart item 2 text" should be "x1 - Toyota Yaris"
    And Cart total should be 15000

    When I click on "cart item 2 delete"
    Then I should not see "cart item 2 price"
    And Cart total should be 2000

    When I click on "cart item 1 delete"
    Then Cart price for article "cart item 1 price" should be 1000
    And Cart total should be 1000

    When I click on "cart item 1 delete"
    Then I should not see "cart item 1 price"
    And Cart total should be 0









