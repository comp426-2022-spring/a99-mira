# /mhr Get Endpoints

## / (GET)
#### Request cURL
```
curl -v http://localhost:5555/
```
#### Response body
```
Found. Redirecting to /mhr/signup/   
```
#### Response headers
```
< HTTP/1.1 302 Found
< X-Powered-By: Express
< Location: /mhr/signup/
< Vary: Accept
< Content-Type: text/plain; charset=utf-8
< Content-Length: 34
< Set-Cookie: connect.sid=s%3A6t98NWFkiZBup1KF9LFpDQg5aNDEnjMI.igWt9bnMejavTSkzUEQeYKlug4IVfTIMmZOkgO4ZpiQ; Path=/; HttpOnly
< Date: Sun, 01 May 2022 23:00:00 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```
## /mhr/ (GET)
#### Request cURL
```
curl -v http://localhost:5555/mhr
```
#### Response body (for users who are not logged in)
```
Please login to view this page!
```

#### Response body (for users who are logged in)
```
homepage.html
```
#### Response headers
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 31
ETag: W/"1f-rbB3ucCZjVLUpoVIpzntrV3GU8k"
Set-Cookie: connect.sid=s%3Al-nSF4UDb3ZL9UIhWhUm1g7lF0M7IIUQ.60FnqThg%2FO2YwAGwbjRt8ErXFnaqe9nuXZ%2BuceuwXU4; Path=/; HttpOnly
Date: Sun, 01 May 2022 04:41:55 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## /mhr/login/ (GET)
#### Request cURL
```
curl -v http://localhost:5555/mhr
```
#### Response body
```
login.html
```
#### Response headers
```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Sun, 01 May 2022 21:43:31 GMT
< ETag: W/"856-1808194269c"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 2134
< Set-Cookie: connect.sid=s%3AyjHJqiqjNflNA3JILwAz45uvkeuDWHgv.V1YFRqAMrhEyvSWqjWHMaJjDQw4livq5qP2rgDjfQGo; Path=/; HttpOnly
< Date: Sun, 01 May 2022 22:43:03 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

## /mhr/signup/ (GET)
#### Request cURL
```
curl -v http://localhost:5555/mhr
```
#### Response body
```
signup.html
```
#### Response headers
```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Sun, 01 May 2022 20:47:14 GMT
< ETag: W/"97e-18081609db6"
< Content-Type: text/html; charset=UTF-8
< Content-Length: 2430
< Set-Cookie: connect.sid=s%3Asm1pHQ2weqAezSk-Tk3hwS1TWLNd8APF.HxAknZKYIhLvYEA4E0XiXCBAVSU4dgHIw4OJIvmwv8g; Path=/; HttpOnly
< Date: Sun, 01 May 2022 22:45:02 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```
# /app API Get Endpoints

## /app/log/access/ (GET)
#### Request cURL
```
node server.js --debug=true
curl -v http://localhost:5555/app/log/access
```
#### Response body
```
Better-Sqlite-3 database log containing all user interactions (get/post/patch/delete) requests
```
#### Response headers
```
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 299073
< ETag: W/"49041-GGxQ6mqC5lHChhA5YDSfuRE3Y7E"
< Set-Cookie: connect.sid=s%3AoxxKJ81yDKG4F0MmFHTy8XjLu6Q8nFn7.HFHl1N%2B3N1%2B3vV%2BthDHJOhAnL%2Fivob6G5cuvGpmDDmo; Path=/; HttpOnly
< Date: Sun, 01 May 2022 22:49:59 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```
## /app/log/error/ (GET)
#### Request cURL
```
curl -v http://localhost:5555/app/error
```
#### Response body
```
"Something went wrong - Internal Server Error"
```
#### Response headers
```
< HTTP/1.1 500 Internal Server Error
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 22
< ETag: W/"16-O0Y2/R2so3Tj/t6yzIUQ0oxk9Dc"
< Set-Cookie: connect.sid=s%3Ac8dUKNL8uVyR08cxyE4d4RKuAKp4z8Ur.A5igluS4LgSK%2FLIq%2BnedAyDqCL2CbshFuORBI53RmHs; Path=/; HttpOnly
< Date: Sun, 01 May 2022 22:54:17 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```
## /app/users/info (GET)
#### Request params
```This endpoint is passed a request from the frontend using the express-session module. With this module, every request has an associated username (the one that was entered on the login page)```
#### Response body
```This endpoint querys the user database and responds with a JSON file containing the corresponding password and email for the username that requested the data. {"username": query.username, "password": query.password, "email":query.email}```
## /app/users/logout (GET)
#### Request params
```This endpoint is also passed a basic request from the front-end containing the unique username associated with the log-in session from express-session.```
#### Response body
```The response for this endpoint is a console log of successful logout and a redirection back to the signup page. The server records that the session with the username contained in the request is no longer active.```
# /app API Post Endpoints

## /app/users/signUpRequest (POST)
#### Request params
```This endpoint is set up to receive a request with the desired username, email, and password of a potential new user. A fetch request from the front-end script sends these values in the body of a post request.```
#### Response body
```This endpoint calls the necessary methods to create a new user in the database and then responds with a redirection to the main page after authenticating the user.```

## /app/auth/login (POST)
#### Request params
```This endpoint is set up to receive an authentication request from a pre-existing user in the database. It takes in the username and password values entered by the user into a form on the front-end.```

#### Response body
```After receiving the username and password request, this endpoint checks the credentials against the database of users, and if the user if valid it authenticates them and responds with a redirection to the main page.```

## /app/users/update (POST)
#### Request params
```This endpoint is configured to receive a newPassword and a newEmail variable passed from a front-end form so that users can change their account information. It also takes a request containing the session property from express-session.```
#### Response body
```The response for this endpoint is a message containing a status of either success or failure. It responds with this after attempting to perform the update of information in the database```
# /app API Delete Endpoints

## /app/users/delete (DELETE)
#### Request params
```This endpoint is set up to recieve a request containing the session property from express-session.```
#### Response body
```This endpoint responds with a redirection to the signup page upon successful deletion of the user's account.```
