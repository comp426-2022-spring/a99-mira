# Scripts Documentation
```
List of functions used in html script.js and within .html files
```
## script.js
#### function div(name)
```A navigation function that takes in the name of the div that the user selects to be active. In the homepage.html file, onclick properties are set for the navigation buttons and each one calls this function for the specific button it is attached to. This function is used to navigate through the webpage.```

#### function showAccountEdit()
```Helper function to swap between the account screen and the edit account information screen. Not used in final version as div already did that job well enough.```
## signup.html
#### async function submitSignUp(e)
```Script function to handle passing of form inputs (username, password, email) to the backend. Listens for a submit event on the form submission button and fetches response from the /app/users/signUpRequest endpoint to sign up add users to database. Additionally, redirects users to the main page following sign up.```

## login.html
#### async function submitLogIn(e)
```Script function to handle passing of log-in form inputs (username, password) to the backend. Listens for a submit event on the login form submission button and fetches response from the /app/auth/login endpoint. After receiving response from server, redirects user to the main page following a successful login or displays an alert if something went wrong.```
## homepage.html
#### async function deleteUser()
```Script function to handle a user's request to delete their account. Passes a request to the /app/users/delete endpoint using the delete html method. Following a successful response it redirects the user to the sign-in page.```
#### async function getUserInfo()
```Helper function that makes a get request to the /app/users/info endpoint in order to refresh the user's database info (password, email) on the account info page. Set up to receive a json response from the server with the user's information and transfer it to the html elements on the front-end.```
#### async function submitChange(e)
```Async function that processes a request from the user to update their account information. Takes information newEmail and newPassword from the change submission form on the edit account page. Fetches a response from the server endpoint /app/users/update using the post method to pass extra information in the request. Following a successful update of user info, refreshes data with getUserInfo() and redirects user back to the account page using div().```
#### function initMap()
```Initializes map using the google maps API ```
#### function addMarker()
```Simple function that adds a marker to to the google map through the API method```
