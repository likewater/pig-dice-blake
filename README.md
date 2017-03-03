# _Pig Dice_

#### A Dice Game, 3/1/2017

### By Blake Womack

## Description

#### Pig is a folk jeopardy dice game described by John Scarne in 1945.

The rules are simple: Two players race to reach 100 points. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player holds and scores the sum of the rolls (i.e. the turn total). At any time during a player's turn, the player is faced with two decisions:

* roll - If the player rolls a 1: the player scores nothing and it becomes the opponent's turn.
* 2 - 6: the number is added to the player's turn total and the player's turn continues.
* hold - The turn total is added to the player's score and it becomes the opponent's turn.:

### Specifications

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| The program can generate random numbers from 1 to 6.| onClick | 1, 2, 3, 4, 5, or 6 |
| The program can add.| 1 + 2 | 3 |
| The program can add >= 100 and stop. | 22 + 23 + 25 + 21 | 101 = stop program |
| The program can be stopped manually before it reaches 100.| onClick | stop program |
| The program can be stopped manually before it reaches 100 giving control to a second object (player object). | onClick | give control to second object |
| The program can be stopped programmatically before it reaches 100 when a random number of 1 is generated, giving control to a second object (player object). | 1 | give control to second object |
| The program stops when a total of 100+ is reached by either player object. | 100+ | game over |
| The program can be reset at any time | onClick | reset |
| Player objects can store player data. | name, score | Bob, 100 |

###This is the initial release (1.0).

#Getting Started

###TBD

#Built with the following tools:

* Atom (https://atom.io/)
* GitHub (https://github.com/)
* Git (https://git-scm.com/)
* Bootstrap (http://getbootstrap.com/)
* jQuery (https://jquery.com/)

#License

###This project is licensed under the MIT License - [license]



[license]: https://opensource.org/licenses/MIT
