# CyberCritic
CyberCritic is a game review project for my ReactJS course in SoftUni.
Its primary purpose is for users to leave reviews on their favourite games, after having played them of course.
In the home page, the twelve most popular games in the site at that time are displayed.
The catalogue displays all games present in the site, but it can be sorted by category through the home page
and specific games can be searched by title via a search bar at the top of the catalogue.
Only logged in users can leave reviews. If a game is missing in the catalogue, logged in users can add games to it
via the Add Game page. Users can also edit and delete their reviews, and the games as well if that is needed. In the details of a game an average score and average time to beat it are displayed. They're calculated by getting the average of all scores users have left for said game.
Logged in users can see their profile and all the reviews they've left, and can also edit their username, bio and profile picture or delete their
profile if they so wish. Other users' profiles can be viewed as well by clicking on their profile picture on any of the reviews they've left, but obviously cannot be edited or deleted by anyone other than their owner.


# Project Architecture

## Folder Structure
- client
    - '/src/components' - Contains all of the components that make up the project.
    - '/src/contexts' - Contains all of the contexts used in the project.
    - '/src/hooks' - Contains the custom hooks used in the project.
    - '/src/styles' - Contains all the CSS for the project seperated into different files.
    - '/src/utils' - Contains utility functions that are not widely used enough to implement into a hook.
    - '/src/App.jsx' - The component where all other components are loaded.
    - '/src/main.jsx' - The main component where App.jsx is loaded.

- server
    - '/src/config' - Contains just the connstants.js file for now.
    - '/src/controllers' - Contains all the controllers of the server.
    - '/src/middlewares' - Contains any middleware that can be used in the server, but for now it only holds authMiddleware.js;
    - '/src/models' - Contains the models used to create objects for the collections in MongoDB;
    - '/src/services' - Contains all the services of the server.
    - '/src/utils' - Contains utility functions in their own files so that they can be used on multiple different places without repeating them again and again.
    - '/index.js' - The main file of the server, where express and mongoose are initiated.
    - '/routes.js' - A router used in index.js that connects all the controller routes into one.

## State Management
- Authentication state and user data is stored in 'UserContext'
- Error state is stored in 'ErrorContext'
- Dynamic pages such as Home, Catalogue and Game Details store their states in their component's body, but the states are set by a custom hook for fetching data.

## Routing 
- '/' - A Home page with the 12 most popular games on the site.
- '/games - A Catalogue with all the games.
- '/games/:genre' - A Catalogue with only a certain genre of games.
- '/games/create - A form for adding a new game.
- '/games/:gameId/details - A details page for games.
- '/games/:gameId/review - A form for leaving a review.
- '/games/:gameId/edit - A form for editing a game.
- '/register' - A register form.
- '/login' - A login form.
- '/profile/:userId' - A profile page for any user. Can be accessed even if you're not logged in to view other users' profiles. All of the reviews a user has left on any game are listed in the profile.
- '/profile/edit' - A form for editing your profile. Can only be accessed when you're logged in and viewing your own profile. It gets the userId from UserContext.
- '/reviews/:reviewId/edit - A form for editing a review. Reviews can only be edited by the user that left them, in their profile.
- '/about' - An about page.

## Tech Stack
- React
- React Router
- Node/Express 
- MongoDB
- Mongoose
- Vite


