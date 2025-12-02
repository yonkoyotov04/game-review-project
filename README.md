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


## What's left:
- [] Search functionality for catalogue
- [x] Register functionality
- [x] Login Functionality
- [x] Logout Functionality
- [x] Button Hiding
- [] Route Guarding
- [x] Leave Review functionality
- [x] Hide leave review if you've already left a review
- [x] Hide leave review if you're not logged in
- [x] Add ownerId to games created in the react client
- [x] Show edit and delete buttons in a game's details page if you're the owner or admin;
- [x] Render Profile dynamically
- [x] Render other user's profiles
- [x] Show reviews in your profile dynamically
- [x] Show reviews in another user's profile dynamically
- [x] Show edit and delete buttons on reviews in your profile page
- [x] Show Edit and delete profile buttons in your profile page
- [] Fix the footer's position

- [] Implement a dynamic error container that appears when an error is present.
- [] Give the access token to X-Authorization for some specific requests and try to handle it on the server so server side guarding can happen
- [] Implement useLocalStorage so that login can persist