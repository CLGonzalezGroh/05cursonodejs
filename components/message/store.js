const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect(
  "mongodb+srv://user:user1234@cluster0.iltyu.mongodb.net/telegrom?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

console.log("[db] conectada con exito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
};
