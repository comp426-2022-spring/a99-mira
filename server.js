import minimist from 'minimist';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import Database from 'better-sqlite3'
import path from 'path';
import {addUser, makedbs} from './modules/database.js';       //create databases
import e from 'express';


const app = express();
const db = new Database('site.db')                  //set up database
//create log database, because this is related to server going to leave it in here
//only need to run once when changing the architecture of db, otherwise can stay commented out
//const statments = 'CREATE TABLE accesslog (remoteadder, remoteuser, time, method, url, protocol, httpversion, status, refer, useragent)'
//db.exec(statments)


// Make Express use its own built-in body parser for both urlencoded and JSON body data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

const args = minimist(process.argv.slice(2));
const port = args.port || process.env.PORT || 5555;
const debug = args.debug || false;
const log = args.log || true;

console.log(args)
//help message
if (args.help || args.h) {
    console.log(`
    server.js [options]
    --port	Set the port number for the server to listen on. Must be an integer
                between 1 and 65535.

    --debug	If set to true, creates endlpoints /app/log/access/ which returns
                a JSON access log from the database and /app/error which throws 
                an error with the message "Error test successful." Defaults to 
                false.

    --log		If set to false, no log files are written. Defaults to true.
                Logs are always written to database.

    --help	Return this message and exit.
    `)
    process.exit(0)
}

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%', port));
})

// Logging middleware
app.use((req, res, next) => {
    let logdata = {
        remoteaddr: req.ip,
        remoteuser: req.user,
        time: Date.now(),
        method: req.method,
        url: req.url,
        protocol: req.protocol,
        httpversion: req.httpVersion,
        status: res.statusCode,
        referer: req.headers['referer'],
        useragent: req.headers['user-agent']
    }
    const stmt = db.prepare(`INSERT INTO accesslog (remoteadder, remoteuser, time, 
        method, url, protocol, httpversion, status, refer, useragent) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`)

    const info = stmt.run(logdata.remoteaddr, logdata.remoteuser, logdata.time,
        logdata.method, logdata.url, logdata.protocol,
        logdata.httpversion, logdata.status,
        logdata.referer, logdata.useragent)
    next()

})

//middleware for creating databases, uncomment function if changes need to be made to database architecture
//otherwise nothing happens
app.use((req, res, next) =>{
    //makedbs(db);          //uncomment this line if changing table architecture
    next()
})

if(debug) {
    app.get('/app/log/access', (req, res) => {
        const stmt = db.prepare('SELECT * FROM accesslog').all();
        res.status(200).json(stmt);
    });

    app.get('/app/error', (req, res, next) => {
        throw new Error('Error test successful');
    });
}

if (log !== 'false') {
    const accesslog = fs.createWriteStream('access.log', { flags: 'a' })
    app.use(morgan('combined', { stream: accesslog }))
}

app.get("/", function (req, res) {
    res.sendFile('index1.html', { root: path.join(__dirname, '../public') });
});

app.get('/mhr/', (req, res) => {
    // Respond with message "Main Page"
    res.message = 'Main Page';
    res.end(res.message)
})

app.get('/mhr/virtual', (req, res) => {
    // Respond with message "Virtual Resource Page"
    res.message = 'Virtual Resource Page';
    res.end(res.message)
})

app.get('/mhr/physical', (req, res) => {
    // Respond with message "Physical Resource Page"
    res.message = 'Physical Resource Page';
    res.end(res.message)
})

app.get('/mhr/login', (req, res) => {



    //********** frontend: 
    //can you make a text box for username and password here with a submit button
    // when the submit button is pressed create a variable "username" and "password" for me to pass to the db
    // for now I'm going to hard code my name and a dummy password


    let username = "Bronson"
    let password = "123456"

    //Database:
    //this code checks the database for a username and password combo
    //if the pair does not exist a false value is returned to doesExist variable 
    //and the webpage prints that username or password are incorrect
    //if the pair does exist a true value is returned to doesExist variable

    let doesExist

    const userCheck = db.prepare('SELECT * FROM users where username=? AND password=?').get(username, password)
    if(userCheck == undefined){
        res.message = 'Username or Password Incorrect'
        doesExist = false
    }
    else{
        doesExist = true
        res.message = 'login page';
    }


    //********** backend:
    //the function will return a true or false value depending on wheather the username and password and are in the db
    //would you mind doing error handling for that?
    //do you want any more information, uid possibly?

    // Respond with message "login page"
    res.end(res.message)

})

app.get('/mhr/signup', (req, res) => {
    // Respond with message "signup page"
    //res.message = 'signup page';
    //res.end(res.message)


    //********** frontend: 
    //can you make a text box for username and password here with a submit button
    // when the submit button is pressed create a variable "username" and "password" for me to pass to the db
    // for now I'm going to hard code my name and a dummy password

    let username = "Bronson"
    let password = "1123456"


    //Database:
    //this code takes a username and password variable and checks if eiher are in the db already
    //if they are it returns the message username or password already exist
    //if they arent they are added to the db

    //check to see if user already exists
    const wasCreated = false
    const userCheck = db.prepare('SELECT * FROM users where username=? OR password=?').get(username, password)
    if(userCheck == undefined){
        addUser(db, username, password)
        res.message = 'signup page'
        wasCreated = true
    }
    else{
        res.message = 'Username or password already exists'
        wasCreated = false
    }

    //test code for checking users are being added to the db
    //const querry = db.prepare('SELECT * FROM users where username = ?').get(username)
    //console.log(querry.username, querry.password, querry.id)
    res.end(res.message)
    //res.status(200).json(info)   







    //************Backend:
    //The function will return a true or false value wasCreated depending on if either of the fields are blank
    //would you guys mind doing error handling for that?









})