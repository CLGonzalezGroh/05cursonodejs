const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  myChat.save();
}

function getChats(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat !== null) {
      filter = { users: filterChat };
    }
    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: getChats,
};
