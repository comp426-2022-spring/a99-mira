#/mhr Get Endpoints

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
#/app API Get Endpoints

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
#### Request cURL

#### Response body

#### Response headers

## /app/users/logout (GET)
#### Request cURL

#### Response body

#### Response headers

#/app API Post Endpoints

## /app/users/signUpRequest (POST)
#### Request cURL

#### Response body

#### Response headers

## /app/auth/login (POST)
#### Request cURL

#### Response body

#### Response headers

## /app/users/update (POST)
#### Request cURL

#### Response body

#### Response headers

#/app API Delete Endpoints

## /app/users/info (DELETE)
#### Request cURL

#### Response body

#### Response headers
