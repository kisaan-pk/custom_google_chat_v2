
const axios = require('axios')
const CardContent = require('./card')


const send = async () => {
  const webhook_url = "https://chat.googleapis.com/v1/spaces/AAAA5gxtigI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ggecXdM5D2ejjr5Fz-ku9Q5MfBpU2wUjEHonUFiAw7U";

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
