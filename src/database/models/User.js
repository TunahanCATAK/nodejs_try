
const Sequelize = require("sequelize");
const { init } = require("sequelize/lib/model");
//const User = require("../../domain/models/User");
const sequelize = require("../connection");


// class UserModelClass extends Sequelize.Model {
//     static init(sequelize) {
//         return super.init(
//         {
//             id: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false, 
//                 autoIncrement: true, 
//                 field: "id"
//             },
//             name: {
//                 type: Sequelize.STRING,
//                 field: "name"
//             },
//             surname: {
//                 type: Sequelize.STRING,
//                 field: "surname"
//             } 
//         }, {tableName: "User", sequelize});
//     }
// }
// module.exports = UserModelClass;

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true
    },
    name: Sequelize.STRING(20),
    surname: Sequelize.STRING(20)
});