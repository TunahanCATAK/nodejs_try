const UserMapper = require('./UserMapper');

//TODO: It needs to be done with DI.
const DepUserModel = require("../models/User");
const User = require('../models/User');

class UserRepository {

    constructor() {
        
    }

    //TODO: it's a workaround solution 
    _mapper(user) {
      const id = user.dataValues.id;
      const name =user.dataValues.name;
      const surname = user.dataValues.surname;
      return new User({ id, name, surname });
    }

    async getAll(...args) {
      const users = await DepUserModel.findAll(...args);
      console.log(users);
      return users.map(this._mapper);
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