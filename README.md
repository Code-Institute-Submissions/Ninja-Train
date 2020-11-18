# Ninja Train



A live demo of the website can be found [here](https://dvcoffey.github.io/Ninja-Train/)

Ninja Train is a Javascript based platformer game.
Its main purpose is to proveide entertainement to the user. 


## UX

This website is designed with one main user as the focus, the gamer.

### User Stories

#### As a gamer, I am looking for a new game to play. I am directed to the website via an ad or social media. 

Gamers are greeted with the homepage and logo to confirm they are in the right place.

#### Now that I am on the website I would like to play a new game

The player name input will allow the gamer to input their name. This will be displayed along with the players score at the end of the game.
The play button will start a new game.

#### As a gamer I want player control. 

In the game there are two controls to determine the position of the player.
These are up and down.

#### As a gamer I like a challenge.

The game requires the player to dodge obstacles.
It will start slow but the game speed will gradually increase as the player progresses and become very challenging.

## Strategy
This site is primarily B2C focused, in this case the business is the Game Developer and the customer is the Gamer.
The goal is to provide the customer with an enjoyable experience.
This will include taking control of ninja, and quickly reacting to the obstacle in its path to stay alive to achieve a high score.  

## Scope
Visitors should be provided with enough information quickly to determine if this is a game that they like (or dislike).
If the Game Developer were to own an online store front, the player could be directed here at the end of the game with the hope of gaining more business.

## Structure
The Logo is always visible at the top of the page in the center and will verify for the user that they are in the right place 
This also acts as a home button which will redirect the user back to the homepage.
The title screen will appear first.
The player name input occupies the center of the title screen with the play button located just underneath.
The play button will hide the title screen. It will then show the game canvas and initialise the game.
When the game ends the game will stop and the game over screen will appear over the canvas.
The game over screen will show the player score in the center along with a button underneath to allow the player to try again.
This hide the game over screen and start the game from the beginning. 

In game the player score will be visible in the upper left of the screen.
On mobile devices, player input controls will be visible in the lower left of the screen.


## Skeleton

The wireframe planning for this project was constructed using paint.net.
Using the layers I was able to diplay objects in motion over the background

## Surface
The color scheme mainly consists of blue and yellow, I chose these colors because they have good contrast together, and are reminiscent of classic 16 bit games such as sonic the hedgehog.
The game buttons are off white so they will stand out on a blue background

## Features

#### Logo/Home Button
The logo is present at all times at the top of the page, it does not take up a large amount of space and provides the user with a link to back to the homepage at all times.

#### Name input

The player can input their name on the title screen. 
This name will then be displayed beside the player score at the end of the game.
Name entry is not required and if left empty will contain the name "Player"

#### Score

As each obstacle is evaded the player score will increase by one.

#### Game speed

As each obstacle is evaded the game speed will slowly increase, gradually making the game more difficult as time passes.

#### Player Control

The ninja can exist in two locations throughout the game, standing on top of the train or clinging to the side.
This is achieved by using event listeners to trigger either a "jump" or "drop" state for the ninja.
These states then change the y coordinates of the ninja on the canvas.

#### Sprite manipulation

The ninja sprite sheet containes multiple images of the same ninja in various positions.
HTML Canvas is then used to determine which section of the sprite sheet is drawn depending on the ninja's state.
This allows for the ninja to be 'standing' on top of the train or 'hanging' off the side for instance.  

#### Random Obstacles

An obstacle array is declared, and then two types of obstacles are defined, in this case they are a bird and a lamp.
(In the object.js file the lamp is declared as a pylon however the best artwork I could source was a lamp).
A function is declared then that will:
    - Use a random boolean generator to determine which obstacle is selected
    - Push the selected obstacle into the array
    - Determine the position and motion of the object using the canvas
    - Remove the last obstacle from the array when the array reaches a certain length
This allows for the obstacles to appear in random variety, and approach the ninja from the right side of the screen.

#### Collision Detection

Using Javascript and Html canvas a function can be triggered when two obstacles collide. 
The is handled in the handle collisions function using if statements to determine if the ninjas coordinates intersected those of the obstacles.
When a collision is detected the game will stop, and the game over screen will appear. 

#### Animation

The animation function is the core element of the the game and includes most of the game functions.
It determines the position of the foreground and background, and also pushes the game into its next frame for object motion.
The functions for handling backgound, handling forground, handling obstacles, updating ninja position, drawing ninja sprite, drawing player score and handling collisions are all nested within here.

#### Loading screen

If the player initializes the game before all of the resources are loaded, a loading screen will appear until they are.
After the conditions are met the game will start automatically

## Future ideas

Music and sound effects. These were implemented during the games production, but were later removed due to loading issues.
I could not determine where in the main js file to place an event listener to check if they were loaded and start the game, and intend to return to this in the future.
                
## Technologies used

This site is constructed primarily in HTML with HTML Canvas, CSS and Javascript. 

Font Awesome 4.7 is used to provide the icons for the navbar button and the social media links.
https://fontawesome.com/v4.7.0/

Google fonts is used to provide the Goldman font that is present across the site.
https://fonts.google.com/

## Testing and Deployment

This site was tested on gitpod during the early stages of construction. As changes were made they were checked at different screen sizes using the element inspector in the browser. This was done in both chrome and firefox.
Later on the site was deployed to Github pages.
At this stage the site was tested on mobile phones, tablets and laptops.


### Issues Encountered



### Code Validation

#### HTML 
Validated at https://validator.w3.org/

#### CSS
Validated at https://jigsaw.w3.org/css-validator/

#### Vendor Prefixes 
Added using https://autoprefixer.github.io/

## Sources

### Images

## Acknowledgements

Research was conducted before the project was started to see 
The inspiration for  was found here. 





