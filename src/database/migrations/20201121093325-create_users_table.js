'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true
      },
      name: Sequelize.STRING(20),
      surname: Sequelize.STRING(20)
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
