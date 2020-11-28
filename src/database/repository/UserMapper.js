const User = require("../../domain/models/User");

const UserMapper = {
  toEntity( user ) {
    console.log(">>toEntity");
    console.log(user);
    console.log("<<toEntity");
    const id = user.dataValues.id;
    const name =user.dataValues.name;
    const surname = user.dataValues.surname;
    //const { id, name, surname, createdAt, updatedAt } = user.dataValues;
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
