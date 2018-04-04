Behavior: Roll button generates number between 1 and 6.
Input: click
Output: 1, 2, 3, 4, 5, or 6.
Behavior: If a one is rolled, user score becomes 0.
Input: 1
Output: 0
Behavior: All non-one numbers are summed to a score.
Input:2, 4, 4, 3
Output:13
Behavior: If a one is rolled during a sequence of rolls, the sum is set to 0.
Input: 2,4,4,3,1
Output: 0
Behavior: If "holds" is selected, the turn switches to other player.
Input: hold
Output: next player's turn
Behavior: If sum for either player reaches 100, game will end in victory for that player.
Input: sum = 100
Output: "This player has won!"
