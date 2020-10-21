const store = require("./store");

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error("[messageController:] No hay usuario");
      return reject("Los datos son incorrectos");
    } else {
      const fullUser = {
        name: name,
        date: new Date(),
      };
      store.add(fullUser);
      resolve(fullUser);
    }
  });
}

function listUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

module.exports = {
  addUser,
  listUsers,
  // updateUser,
  // deleteUser,
};
