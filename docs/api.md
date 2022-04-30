# Runtime Documentation
node server.js [options]
    --port	Set the port number for the server to listen on. Must be an integer
                between 1 and 65535.

    --debug	If set to true, creates endlpoints /app/log/access/ which returns
                a JSON access log from the database and /app/error which throws 
                an error with the message "Error test successful." Defaults to 
                false.

    --log		If set to false, no log files are written. Defaults to true.
                Logs are always written to database.

    --help	Return this message and exit.

# Endpoints

## /mhr/ (GET)
#### Request cURL

#### Response body

#### Response headers


## /mhr/virtual/ (GET)
#### Request cURL

#### Response body

#### Response headers


## /mhr/physical/ (GET)
#### Request cURL

#### Response body

#### Response headers


## /mhr/login/ (GET)
#### Request cURL

#### Response body

#### Response headers


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



