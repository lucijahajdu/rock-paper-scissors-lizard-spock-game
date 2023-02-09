# ROCK PAPER SCISSORS LIZARD SPOCK GAME #
## About ##
Rock, Paper, Scissors, Lizard, Spock is extended version of the classic Rock, Paper, Scissors created by Sam Kass and Karen Bryla. The classic Rock, Paper, Scissors is often used as a fair choosing method in order to settle a dispute or make a group decison. This is a game of pure luck.But when you know someone well enough, classic games end up often in a tie. To reduce the probability the extended version Rock, Paper, Scissors, Lizard, Spock was invented. This game was used in the sitcom called The Big Bang Theory which made this game more popular.

![Screenshot of the website](/assets/images/game.png)

## Table of Contents ##
* [About](#About)<a name="About"></a>
* [User Stories](#User_Stories)<a name="User_Stories"></a>
* [Features](#Features)<a name="Features"></a>
  * [Header](#Header)<a name="Header"></a>
  * [Game Logic](#Game_Logic)<a name="Game_Logic"></a>
  * [Visual appereance](#Visual_appereance)<a name="Visual_appereance"></a>
  * [Overlay screen & Results](#Overlay_screen_&_Results)<a name="Overlay screen & Results"></a>
  * [Scores & Restart](#Scores_&_Restart)<a name="Scores & Restart"></a>
  * [Footer](#Footer)<a name="Footer"></a>
* [Future Features](#Future_Features)<a name="Future Features"></a>
* [Typography and Color Scheme](#Typography_and_Color_Scheme)<a name="Typography and Color Scheme "></a>
  * [Typography](#Typography)<a name="Typography"></a>
  * [Color Scheme](#Color_Scheme)<a name="Color Scheme "></a>
* [Wireframes](#Wireframes )<a name="Wireframes"></a>
* [Technology](#Technology)<a name="Technology "></a>
* [Testing](#Testing)<a name="Testing"></a>
   * [Code Validation](#Code_Validation)<a name="Code Validation"></a>
   * [Test cases](#Test_cases)<a name="Test cases"></a>
   * [Fixed bugs](#Fixed_bugs)<a name="Fixed bugs"></a>
   * [Supported screens and browsers](#Supported_screens_and_browsers)<a name="Test cases"></a>
* [Deployment](#Deployment)<a name="Deployment"></a>
  * [Via gitpod](#Via_gitpod)<a name="Via gitpod"></a>
  * [Via github pages](#Via_github_pages)<a name="Via github pages"></a>
* [Credits](#Credits)<a name="Credits"></a>
  * [Content](#Content)<a name="Content"></a>
  * [External sources](#External_sources)<a name="External sources"></a>
  * [Aknowledgement](#Aknowledgement)<a name="External sources"></a>



## User Stories ##
 * As a user of the site I want to:
    * play a Rock, Paper, Scissors, Lizard, Spock game
    * be able to play alone, against the computer
    * have multiple rounds in order to have a clear win/lose
    * know who wins each game and the final round
    * be able to restart the game with a new count
## Features ##
### Header ###
At the top of the page, user can see 
### Game Logic ##
The logic is based on the game rules which are the following: 
1. scissors cut paper
2. paper covers rock
3. rock crushes lizard
4. lizard poisons Spock
5. Spock breaks scissors
6. scissors kill lizards
7. lizard eats papers
8. paper disproves Spock
9. Spock evaporates rock 
10. rock crushes scissors

### Visual appereance ###
Icons are used for each choice a user can select in order to visualaise the hand gestures.
### Overlay screen & Results ###
After each choosen icon the overlay screen appears with the result.
Final result appears after 10 round of won game from one of the players.
### Scores & Restart ###
Scores appear after each round of the game.
After each round or after a final round the game can be restarted via tapping the "Restart" button.
### Footer ###
Footer shows informations of the creator and the github link.

## Future Features ##
Design could be improved for better appereance. 
In case we recive customer feedback a section could be added about the rules.
Possibility for two live players could be implemented in the future.

## Typography and Color Scheme ##

### Typography ###
The font used for this website is called Ralleway and it was imported from Google fonts.
All icons for the game were used from Font awesome.

### Color Scheme ###
I chose simple clean design whit white background and turquoise sections to better distinguish informations.
Color shade used in this game are:

#71c5c1 Color Hex

![Main colorshade](/assets/images/colorshade.png)

#333 Color Hex

![Colorshade of the icons](/assets/images/colorshadeblack.png)

## Wireframes ##

![Wireframes](/assets/images/mockup.png)

## Technology ##
* Used languages: [HTML](https://sv.wikipedia.org/wiki/HTML5 "HTML"), [CSS](https://sv.wikipedia.org/wiki/Cascading_Style_Sheets "CSS"), [JavaScript](https://sv.wikipedia.org/wiki/Cascading_Style_Sheets "Javascript").
* Wireframe was made with [Figma](https://www.figma.com/ "Figma").
* GitPod was used for writing the codes.
* Github-to save and store the files for the website.
* Chrome Dev Tools was used to modify website.
* [Google Fonts](https://fonts.google.com/ "Google Fonts") was used to import the fonts used on the website.
* [Font Awesome](https://fontawesome.com/ "Font Awesome") was used to for the iconography on the website.
* Responsive Screenshot was made wit [Am I Responsive](https://ui.dev/amiresponsive "Am I Responsive")

## Testing ##

### Code Validation ###
* HTML
  * No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/ "W3C Validator").
* CSS
  * No errors were found when passing through the official [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/ "Jigsaw W3 Validator").
* Accessibility 
  * Chosen colors and fonts are easy to read and accessible by running it through lighthouse in devtools.

 ![Accessibility in Lighthouse](/assets/images/lighthous.png)
 
 ### Test cases ###
 All use cases are fullfiled from the list mentioned above at the user stories section.

* Title is written in capital lettrs stating the game. 

 ![Title](/assets/images/title.png)

 * The icon shows the possible choices a user can make. Selecting an item starts the game.

 ![Icons](/assets/images/icons.png)

 * When a user votes, the following overlay appears with the computers choice and the result of this round stated if the user won or lost.

 ![Popupwindow](/assets/images/popupwindow.png)

 * The score tracks and shows the results for each round until the 10th round is reached.

 ![Scores](/assets/images/scores.png)

 * The game can be restarted any time, even before completing the 10th round. Tapping the button will reset the scores to zero.

 ![Restart](/assets/images/restartbtn.png)

 * The footer describes who is the creator of the game and a link to the Github via an icon.

 ![Footer](/assets/images/footer.png)

### Fixed bugs ###
Class name in the HTML and Javascript(in score area) were not the same and code was showing the error. When realised it was correcter. 

### Supported screens and browsers ###
This website is suported in Google Chrome,Firefox and Microsoft Edge.
The website is responsive to multiple screen sizes.

## Deployment ##

### Via gitpod ###
+ Repository in Github was created and named rock-paper-scissors-lizard-spock. The template Code-Institute-Org/gitpod-full-template was used.
+ Tapping on the green "gitpod" button Gitpod is open. 
+ To run HTML, CSS and Javascript type: python3 -m http.server.
+ A blue button should appear to click: Open Browser.
+ To save our code type git add ., git commit -m "" and git push to push our code to the GitHub
### Via github pages ###
+ In the GitHub repository, navigate to the Settings tab
+ On the right side of the page push Pages
+ From the source section drop-down menu, select the Master Branch
+ Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

## Credits ##

### Content ###

+ [This link](https://www.youtube.com/watch?v=WR_pWXJZiRY "On_this_link") was used to gain ideas for my project.
+ The footer idea was created based on a Code institute students [project](https://github.com/EmelieMarkkanen/p2-RockPaperScissorsLizardSpock "project").


### External sources ###

+ [Stack Overflow](https://stackoverflow.com/ "Stack_Overflow")
+ [W3School](https://www.w3schools.com/ "W3School")

### Aknowledgement ###
+ I would like to thank to my mentor Richard for supporting me with his patience, valuable input and feedback during this project.


















