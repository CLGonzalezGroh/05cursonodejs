const list = [];

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(list);
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
};
