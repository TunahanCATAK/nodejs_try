const User = require("../../domain/models/User");

const UserMapper = {
  toEntity({ dataValues }) {
    const { id, name, surname, createdAt, updatedAt } = dataValues;
    console.log("id: ", id);
    console.log("name:" , name);
    console.log("surname:", surname);
    return new User({ id, name, surname });
  },

  toDatabase(item) {
    const { name, surname } = item;

    return { name, surname };
  }
};

module.exports = UserMapper;
