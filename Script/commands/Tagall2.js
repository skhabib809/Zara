const axios = require('axios');

// Replace with your actual Page Access Token
const PAGE_ACCESS_TOKEN = 'YOUR_PAGE_ACCESS_TOKEN';

// This array should be populated from your database of subscribed users
// For this example, replace these with the actual User IDs you want to message
const subscribedUserIds = [
  'USER_ID_1',
  'USER_ID_2',
  'USER_ID_3'
];

// Message content to send to each user
const notificationMessage = {
  "text": "This is an important update from the group! Check the page for details."
};

/**
 * Sends a message to a single user.
 * @param {string} userId The Messenger User ID of the recipient.
 * @param {object} message The message payload to send.
 */
async function sendMessageToUser(userId, message) {
  const url = `graph.facebook.com{PAGE_ACCESS_TOKEN}`;
  const payload = {
    "recipient": { "id": userId },
    "message": message
  };

  try {
    const response = await axios.post(url, payload);
    console.log(`Successfully sent message to user ${userId}:`, response.data);
  } catch (error) {
    console.error(`Failed to send message to user ${userId}:`, error.response.data);
  }
}

/**
 * Iterates through all subscribed users and sends them a message.
 */
async function sendMassNotification() {
  console.log(`Sending notification to ${subscribedUserIds.length} subscribed users...`);

  for (const userId of subscribedUserIds) {
    await sendMessageToUser(userId, notificationMessage);
  }

  console.log("Mass notification process completed.");
}

// Execute the function
sendMassNotification();
