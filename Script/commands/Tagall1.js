const axios = require('axios');

module.exports.config = {
  name: "tagall",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Your Name",
  description: "Mention all group members",
  commandCategory: "group",
  usages: "tagall",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const threadInfo = await api.getThreadInfo(event.threadID);
  const participants = threadInfo.participantIDs;
  let mention = [];
  for (let participant of participants) {
    mention.push({
      id: participant,
      tag: participant
    });
  }
  api.sendMessage({
    body: 'Mentioning all group members...',
    mentions: mention
  }, event.threadID);
};
