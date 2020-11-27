const express = require('express');
const DepRouter = require('./router');
const UsersController = require('./UserController');
const port = 3000;

class Server {
  constructor({ router }) {
    this.express = express();
    let _uc = new UsersController();

    this.express.get('/', _uc.getAllUsers);

    //this.express.get('/', async (req, res) => {
    //  res.send('Birds home page')
    //});
  }

  start() {
    return new Promise((resolve) => {
      this.express
        .listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`);
          resolve();
        });
    });
  }
}

module.exports = Server;