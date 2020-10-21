const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  myChat.save();
}

async function getChats(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat !== null) {
      filter = { _id: filterChat };
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
