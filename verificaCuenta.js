// verificaCuenta.js
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

const sts = new AWS.STS();

sts.getCallerIdentity({}, (err, data) => {
  if (err) {
    console.error('Error al obtener identidad:', err);
  } else {
    console.log('Credenciales pertenecen a la cuenta:', data.Account);
    console.log('ARN:', data.Arn);
  }
});
