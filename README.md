# Friend-Finder
Strangers are just friends waiting to happen. A full-stack Friend Finder application to help you locate your new BFF. 

## Heroku
- To access the live link, click here: https://limitless-refuge-44229.herokuapp.com/

## Usage
To take the survey, simply go to our homepage and click "Start Survey". Answer 10 questions to help identify the person right for you, and immediately after submitting the survey, your new match will pop up. 

- The `server.js` file sets up the Express server, specifying port number, dependencies, and routes.
- The "New Best Friend" is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object. A modal is then toggled, displaying the the best match to the person who just took the survey.

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Google Font
- Materialize

