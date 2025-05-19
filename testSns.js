require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

const sns = new AWS.SNS();

sns.publish({
  Message: 'Mensaje de prueba',
  Subject: 'Test SNS',
  TopicArn: process.env.SNS_TOPIC_ARN
}, (err, data) => {
  if (err) console.error('Fallo:', err);
  else console.log('Éxito:', data);
});
