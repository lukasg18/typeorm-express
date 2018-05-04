// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import {User} from "./entity/User";

// createConnection("t").then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
    
//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
     
//     console.log("Here you can setup and run express/koa/any other framework.");
    
// }).catch(error => console.log(error));

import * as http from 'http';
import * as debug from 'debug';

import App from './App';

debug('ts-express:server');

const port = process.env.PORT || 3000;
App.set('port', port);

http.createServer(App).listen(port);


