# Clicky Game
## Steps taken
--Created a repo
--cloned the repo to local drive
--from the local folder, ran create-react-app, then moved all newly created folders into the root folder so there isn't a redudant folder. 
--ran npm start to ensure works
### Create static components
--in the 'SRC' folder, create a 'Component' folder to store all components
--from the https://clicky-game.netlify.com/ example, I'll need: 1) navbar, 2) header, 3) main, 4) cards, 5) footer
#### Navbar 
--I created a navbar.js component file and pasted in the element conde from the example. 
--In public\index.html I added the bootstrap cdn (but it doesn't look like the example used bootstrap -- the bootstrap styling were interfering with the css files so I commented it out)
--in App.js, I imported the navbar and added it to the App function
#### Header & Footer
-- I did the same thing as Navbar except in a file called header.js and a file called footer.js
-- Their footer pulled from an assets folder with another subfolder called images where the react.svg lived, so I recreated an assets folder and an images folder then I copied the svg and saved it in that folder but for some reason, in the example they link to the svg from assets/images/react.svg so I would assume that means the assets folder lives in the same folder as the footer.js but it doesn't pull when I do it that way so instead I import the react.svg from that assets folder. 
#### Styling
-- I created a folder in SRC called styles and created a css file for the navbar, header, footer and copied the element styles from the example into this. 
-- In the component.js I imported the stylings in.
#### Main container
-- I created a main.js and added the cards component in here but I later dissolved it and instead placed it into app.js
#### Cards
-- I created a card.js and copied one of the card elements from the example. This js will need to have props passed into it. 
-- I created a cards.json to hold the images of the cards
-- I set up the cards.js to read the props.image and the props.name for the alt image
-- I set up the main.js to import the characters.json
-- I created a wrapper.js and wrapped the cards in it -- I tested it to pull up the first image in the json, and the first alt text -- it worked. 
-- Then I made it map over the json to pull up all 12 cards and it worked.

### Dynamic parts
#### Count each click
-- I added an onclick event to each character. I add this onto the cards.js with the function name 'characterClicked'
-- I extended the navbar so it can inherit functionality
-- I extended the app.js and bring the click event and navbar score together here. Here I set the state and defined the function characterClicked
#### Shuffle images when a character is clicked 
-- I found a function to shuffle an image on stack overflow, added the function, then called the function with the characterClicked function.
#### Assess whether the character has already been clicked
-- In the cards.js for the onclick, I pass in the character id via props.id
-- I created an empty array to store clickedCharacters. If a character is clicked, the character's id is checked against this clickedCharacters array. If it's already in there, the message changes to a loser message, and everything is reset except for the highscore. If the id is not in the array already, the character will be added to the array, the score will go up as will the highscore.
-- At every click the highscore is checked with the current score. If the current score is higher than the highscore, the highscore takes on the new score. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
