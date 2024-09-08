const fs = require("fs");
module.exports.config = {
  name: "Khana",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "RAVI KUMAR", 
  description: "Just Respond",
  commandCategory: "ravi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("KHANA") ||
     react.includes("khana") || react.includes("lunch") || react.includes("Bot khana do") ||
react.includes("dinner") ||
react.includes("kha lo")) {
    var msg = {
        body: `🙂 AAO BABY MERE SATH  KHA LO KHANA🙂`,attachment: fs.createReadStream(__dirname + `/ravi/khana.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
