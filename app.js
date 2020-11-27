const express = require('express');
const app = express()
const port = 3000
const user = require("./src/domain/models/User");
const UserRepository = require("./src/database/repository/UserRepository");
const UserModel = require("./src/database/models/User");

const dbConn = require("./src/database/connection");
const UserSerializer = require('./src/domain/models/UserSerializer');
const UserModelClass = require('./src/database/models/User');

// app.get('/', async (req, res) => {
    
//     let userRep = new UserRepository(UserModel);
//     try {
//         let users = await userRep.getAll();
//         //res.json(users.map(UserSerializer.serialize));
//         res.status(200).json({users});
//     } catch(error) {
//         console.log(error);
//         res.send('Hello World!');
//     }
     
//     //res.send('Hello World!');
// })

// app.post('/', async function (req, res) {
//     console.log("post");
//     //let _userModel = new UserModelClass();
//     let newUser = new user("Tuna", "Catak");
//     let userRep = new UserRepository(UserModel);
//     try {
//         const createdNewUser = await userRep.add(newUser);
  
//     } catch(error) {

//     }

//     res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
// })


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const Application = require('./src/Application');
const server = require("./src/infra/Server");
const router = require('./src/infra/router');

ourServer = new server(router);
ourApp = new Application(ourServer);
ourApp
  .start()
  .catch((error) => {
    console.error(error);
    process.exit();
  });
