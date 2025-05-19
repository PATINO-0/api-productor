// src/services/snsService.js
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const sns = new AWS.SNS();

const sendMessage = async (subject, message) => {
  const params = {
    Message: JSON.stringify(message),
    Subject: subject,
    TopicArn: process.env.SNS_TOPIC_ARN,
  };

  try {
    const result = await sns.publish(params).promise();
    console.log('Mensaje enviado a SNS:', result);
    return result;
  } catch (error) {
    console.error('Error al enviar mensaje a SNS:', error);
    throw error;
  }
};

module.exports = {
  sendMessage,
};
