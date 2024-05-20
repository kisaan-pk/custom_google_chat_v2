
const axios = require('axios')
const CardContent = require('./card')


const send = async () => {
  const webhook_url = process.env.WEBHOOK_URL
  axios
    .post(webhook_url, CardContent)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err.toJSON());
    });
};
 
send();
 
