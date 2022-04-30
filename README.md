# Mental Health Resources

## Summary
A collection of local and online resources for various mental health concerns. Includes location-based searches for in-person resources, as well as a list of several virtual tools.

## Team Roles

- Design lead: Liya
- Front end lead: Turner
- Database lead: Bronson
- Back end leads: Ram, Frank

## Planning Notes
https://github.com/comp426-2022-spring/a99-mira/blob/main/docs/planning.md

## API Documentation
https://github.com/comp426-2022-spring/a99-mira/blob/main/docs/api.md

## Runtime Documentation
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
