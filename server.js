//IMPORT STATEMENTS
import minimist from 'minimist';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import Database from 'better-sqlite3';
import path from 'path';
import session from 'express-session';
import {addUser, checkCreds, deleteUser, makedbs} from './modules/database.js';       //create databases

//SERVER SETUP
const app = express();
const db = new Database('site.db')                  //set up database
//create log database, because this is related to server going to leave it in here
//only need to run once when changing the architecture of db, otherwise can stay commented out
//const statments = 'CREATE TABLE accesslog (remoteadder, remoteuser, time, method, url, protocol, httpversion, status, refer, useragent)'
//db.exec(statments)
// Make Express use its own built-in body parser for both urlencoded and JSON body data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Path to server directory & express.static setup
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//console.log(dirname)
app.use(express.static(path.join(__dirname, '/public/')))

//Process command line arguments
const args = minimist(process.argv.slice(2));
const port = args.port || process.env.PORT || 5555;
const debug = args.debug || false;
const log = args.log || true;
//console.log(args)

//HELP MESSAGE
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

//START SERVER
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
//GET ENDPOINTS
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/style.css"));
});

app.get("/", function (req, res) {
    return res.redirect('/mhr/signup/')
});

app.get('/mhr/', (req, res) => {
    // if (req.session.loggedin) {
	// 	// Output username
	// 	//res.send({"rjson":'Welcome back, ' + req.session.username + '!'});
	// } else {
	// 	// Not logged in
	// 	res.send('Please login to view this page!');
    //     res.end()
	// }
    res.sendFile(path.join(__dirname,'/public/homepage.html'))
})

app.get('/mhr/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/login.html'))

})

app.get('/mhr/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/signup.html'))
})

//POST ENDPOINTS
app.post('/app/users/signUpRequest', (req, res) => {
    //Get the new user's info from the front end request
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    //Database:
    //this code checks the database for a username and password combo
    //if the pair does not exist a false value is returned to doesExist variable 
    //and the webpage prints that username or password are incorrect
    //if the pair does exist a true value is returned to doesExist variable

    let doesExist

    console.log("something_happening")

    const userCheck = db.prepare('SELECT * FROM users where username=?').get(username)
    if(userCheck == undefined){
        res.message = 'Username or Password Incorrect'
        doesExist = false
        console.log("still_working")

    }
    else{
        doesExist = true
        res.message = 'login page';
        console.log("serch_worked")
    }


    if (doesExist == false){
        return res.redirect('/mhr/signup')
    }
})
app.post('/app/auth/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username)
    console.log(password)
    if (username && password) {
    // this code takes a username and password variable and checks if eiher are in the db already
    // if they are it returns the message username or password already exist
    // if they arent they are added to the db check to see if user already exists
        const userCheck = db.prepare('SELECT * FROM users where username=? OR password=?').get(username, password)
        //If account doesn't exist
        if(userCheck == undefined){
            res.send({"checkUser":"false"})

        } else { //If it does exist
            req.session.loggedin = true;
			req.session.username = username;
            console.log('successful log in, trying redirect')
            return res.redirect('/mhr/')
        }
    } else {
        res.send({"response":'Please enter Username and Password'})
    }
})

app.post('/app/users/logout', (req, res) => {
    //Use session to log ppl out
})
//PATCH METHODS
app.patch('/app/users/update', (req, res) => {
    //For a certain username, process changes to password and email
    
    //Get username, password, and email values from front-end request

    //Search for the record in database with username, then change password/email to new values

    //Return a JSON containing {"status" : "success" } to frontend
})

//DELETE METHODS
app.delete('/app/users/delete', (req, res) => {
    //For a certain username, delete that user's record & information from the database

    //Get username value from front-end request

    //Delete user from database


    let testDel = deleteUser(db, "bgatts")

    if (testDel.changes > 0){
        //this means succcess
        console.log("he gone")
    }



    //deleteUser(db,"bgatts")



    //If the delete is successful, use res.redirect to send the user back to the signup page
})

    