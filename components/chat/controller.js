const store = require("./store");

function addChat(users) {
  return new Promise((resolve, reject) => {
    if (!users) {
      console.error("[messageController:] No hay usuarios");
      return reject("Los datos son incorrectos");
    } else {
      const fullChat = {
        users,
        date: new Date(),
      };
      store.add(fullChat);
      resolve(fullChat);
    }
  });
}

function listChats(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
}

module.exports = {
  addChat,
  listChats,
  // updateUser,
  // deleteUser,
};
