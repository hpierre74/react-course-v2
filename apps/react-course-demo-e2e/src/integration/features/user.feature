Feature: User features
  Testing user related features

  Scenario: Logging in and out from connect button
    Given I am on the "home" page
    Then I should see "connect login button"
    And I should not see "connect logout button"
    When I log in
    Then I should see "connect logout button"
    And I should not see "connect login button"
    When I click on "connect logout button"
    Then I should see "connect login button"
    And I should not see "connect logout button"

  Scenario: Landing already logged in
    Given I am already logged in
    And I am on the "home" page
    Then I should see "connect logout button"
    And I should not see "connect login button"

  Scenario: Able to access private routes when connected
    Given I am already logged in
    And I am on the "home" page
    When I click on "checkout button"
    Then I should be on the "checkout" page

  Scenario: Unable to access private routes when not connected
    Given I am on the "home" page
    When I click on "checkout button"
    Then I should be on the "login" page
