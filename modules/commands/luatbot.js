const fs = require("fs");
module.exports.config = { usePrefix: true,
	name: "rule",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "RuleBot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("RuleBot")==0 || (event.body.indexOf("RuleBot")==0)) {
		var msg = {
				body: "When Using Chat Bot Users Should Note Some Things Below\n❯ SourceCode ChatBot Made By MrTomXxX\n❯ Users Avoid Spam Bot More than 20 Times/Day If Spam Bot 20 Times/Day Same ",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }api, event, client, __GLOBAL }) {

  }