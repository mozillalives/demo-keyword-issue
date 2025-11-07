Feature: All keywords should be recognized

Scenario: I use the But keyword
    When I add 1 and 1 I should see 2
    But I add 1 and 1 I should not see 3

Scenario: I use the And keyword
    When I add 1 and 1 I should see 2
    And I add 1 and 1 I should not see 3