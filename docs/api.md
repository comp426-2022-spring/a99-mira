# Get Endpoints

## /mhr/ (GET)
#### Request cURL
```
curl http://localhost:5555/mhr
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
curl http://localhost:5555/mhr
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

#### Response body

#### Response headers


## /app/log/access/ (GET)
#### Request cURL

#### Response body

#### Response headers


## /app/log/error/ (GET)
#### Request cURL

#### Response body

#### Response headers



