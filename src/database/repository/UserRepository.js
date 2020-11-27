const UserMapper = require('./UserMapper');

//TODO: It needs to be done with DI.
const DepUserModel = require("../models/User");

class UserRepository {

    constructor() {
        
    }

    async getAll(...args) {
      const users = await DepUserModel.findAll(...args);
      console.log(users);
      return users.map(UserMapper.toEntity);
    }


    async add(user) {

      const errHandler = err => {
        console.error("Error: ", err);
      };

        //console.log("UserModel: ", UserModel);
        console.log("DepUserModel: ", DepUserModel);
        console.log("User: ", user.name);
        console.log("User: ", user.surname);
        const newUser = await DepUserModel.create(UserMapper.toDatabase(user)).catch(errHandler);
        console.log(newUser.name);
        console.log(newUser.surname);
        return UserMapper.toEntity(newUser);

    }
}
module.exports = UserRepository;