//TODO: Serializer needs to move into another layer!

const UserSerializer = {
    serialize({ User }) {

      const { id, name, surname } = User;

      return {
        id,
        name,
        surname
      };
    }
  };
  
  module.exports = UserSerializer;
  