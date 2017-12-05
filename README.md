# Draw to the goal

## Background and overview

Players will need to guide a ball to roll into the goal by
drawing a path for the ball.  The game will feature multiple
levels and unlimited attempts to roll the ball into the goal.

## Wireframes

![level](https://imgur.com/4mgwBaj.png)

The game will consist of a single screen where a player will
use their mouse to draw a path for the ball to travel towards
the goal.  On the press of a button, ball will be influenced by
physics and roll. If the ball reaches the goal from the path
the player drew, then the level will be complete and the player will move onto a new level with increased difficulty.

## Architecture and Technology

* Vanilla JS for physics, collision, and game logic
* three.js for rendering

## Timeline and Implementation

1. Day 1
- [ ] Be able to draw and erase on the canvas
- [ ] Have the ball and the goal render on the canvas

2. Day 2
- [ ] Work on physics engine

3. Day 3
- [ ] Finish physics engine
- [ ] Start on collision

4. Day 4
- [ ] Finish collision
- [ ] Add multiple levels

5. Day 5
- [ ] Style the page

## Bonus features

* Allow the player to control the ball
* Allow the player to erase the path they drew
* Allow for drawing paths while the ball is in motion
