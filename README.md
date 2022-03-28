# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE and FutureForce Tech Launchpad programs. 

Submitted by: Kent Canonigo

Time spent: 10 hours spent in total

Link to project: https://opaque-kind-rugby.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/qQDVSvH.gif)
![](https://i.imgur.com/2ssmz5a.gif)
![](https://i.imgur.com/f6ljLMg.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/jsref/default.asp
https://stackoverflow.com/questions/5836833/create-an-array-with-random-values

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

There were multiple challenges with the optional features that I encountered during this project: generating a random pattern, displaying the user's mistakes, and adding the timer for the user's guess duration.  

My first problem with generating the random pattern was that when I utilized the code “return Math.random() * max” I realized that Javascript return values from 0 to <max. However, “return Math.random() * max” did not work because there is no button 0, hence I needed Math.random() to output values greater than 0 but no less than the max. After searching through a Javacsript code online, I solved the problem by generating values between two values using “return Math.random() * (max – min) + min” which returns values between a min and a max value (in this case the min is 1 and the max is 7).

My second problem was how to give the user 3 strikes. First, I knew that I had to create a global variable mistakecounter to keep track of the user’s mistakes. Following that, I edited the guess() function so that loseGame() would execute once the mistakeCounter is equal to 3; However, when I ran my code, and restarted the game, the game would automatically lose because the mistakeCounter had already exceeded the 3 strikes rule. Thus, to completely solve my problem, I needed to set mistakeCounter equals to 0 every time that the user starts the game (in the startGame() function) so that the user has 3 strikes every time the game is played. However, I wanted to create a display for the user so that they know how many mistakes they have. To solve this problem, I looked over the previous code regarding document.getElementById that we used earlier, innerHTML, and span. I created a span tag that would create an inline text for my mistakes (and timer). Then, using document.getElementById().innerHTML (researched through w3schools) I then could increment the number of mistakes the user has in my javascript file by setting the span id (mistakeCount) equal to the current number of mistakes (var mistakeCounter). 

My third problem to add the timer for the user for each guess is still an attempt that could do some more revisioning. This was definitely my hardest challenge in this submission because I had to learn how to utilize the setInterval and clearInterval methods. To somewhat solve this problem, I first created a var time initialized to 50, created a timer() function that would decrease the time by 1, and then execute the if statement (if time < 50) that would continuously update the time display in the HTML file up until the time remaining is less than 1. In this case, the user would lose the game. I needed to reset the timer display to 50 and the actual var time to 50 everytime the user restarts the game. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
 
Some questions I still have about web development would be the idea of classes. Suppose two objects have the same classes, but you want to change one object without having to modify the entire class; then is there a functionality in CSS that acts on a subclass that executes this change? Another question in mind would be regarding optimization. I’m still relatively new to HTML, CSS, and Javascript, but the most familiar language would be Javascript as I recognize familiar formatting with my experience with Java. With HTML and CSS, however, would optimization in the code refer to the efficiency/simplicity of the website being developed? Or would HTML and CSS optimization refer to your code's readability and utilizing the use of classes, pseudo-classes, etc., as a way to abstract the code's functionality? Having the chance to work with a mentor one-on-one would definitely ease my uncertainties of web development, and that opportunity would make me even more confident to what I can accomplish later on.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project, I would style my website so that it would be more responsive to the changing window sizes and would look neater to the eye. Centering texts, creating vertical columns for the buttons, adding color schemes that are safe for the human eyes, and making the design much more human centered to make it look more modern. Furthermore, I would also change the audio for each button different from the regular Hz on glitch. To engage the user with memorization and space, I would suggest to create a functionality that would mix up the buttons' locations so that not only will the user have to guess the correct sound but also the colored button. I attempted a timer to limit the user's guessing duration, however as next steps I could reset the time remaining when the user guesses the sequence correctly. I could also create different difficulties to the game by shortening the amount of time the timer is on. 

## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/18mPpXHF7huRmCctRQpALBVTkKYcB8obG/view?usp=sharing)

## License

    Copyright Kent Canonigo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

