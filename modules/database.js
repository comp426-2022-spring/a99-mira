 import Database from "better-sqlite3"
 import {v1 as uuidv1} from 'uuid'



 //to be run only once, will create all databased for site
 export function makedbs(db){

    const user = 'CREATE TABLE users (username, password, id)'     //create table for users
    db.exec(user)
    const locations = 'CREATE TABLE locations (name, address, id)'      //create table for locaitons
    db.exec(locations)
    const actions = 'CREATE TABLE actions (userid, type)'           //create table for user actions
    db.exec(actions)

 }

 //run every time ubmit button is pressed on login page
 export function addUser(db, username, password){

    const input = db.prepare('INSERT INTO users (username, password, id) VALUES(?,?,?)')
    const info = input.run(username,password,uuidv1())

 }

 //check if sign in info is in database are return true or false
 export function checkCreds(username, password){


 }


 export function addAction(userid, actionType){


}

export function uploadCSV(){

}
