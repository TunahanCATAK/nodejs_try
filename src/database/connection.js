const Sequelize = require('sequelize');

const sequelize = new Sequelize("TunahanTest", "admin", "BaskasininKarisiKumarbaz", {
    host: "database-2.cjplx6c41lii.us-east-2.rds.amazonaws.com",
    dialect: "mysql",
    operatorsAliasses: false
});

module.exports = sequelize;

// TODO: needs to be fixed. 
// export sequelize instance to global scope. 
global.sequelize = sequelize;