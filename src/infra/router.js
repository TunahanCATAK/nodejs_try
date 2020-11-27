const { Router } = require('express');
const UsersController = require('./UserController');

class router {
  constructor() {}

  getAllUsers(params) {
    uc = new UsersController();
    let users = uc.getAllUsers();
    
  }


};

module.exports = router;
