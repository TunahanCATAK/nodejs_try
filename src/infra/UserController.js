const { Router } = require("express");
const UserRepository = require("../database/repository/UserRepository");

class UsersController {
    constructor(){}

    async getAllUsers(req, res) { 
        console.error(">> GET / request");
        let userRep = new UserRepository();
        let users = null;
        try {
            users = await userRep.getAll();
            console.log(users);
            //res.json(users.map(UserSerializer.serialize));
            //res.status(200).json({users});
        } catch(error) {
            console.log(error);
            //res.send('Hello World!');
        }  

        return res.status(200).json({users});
    }
}

module.exports = UsersController;

