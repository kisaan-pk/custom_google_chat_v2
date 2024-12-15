require("dotenv").config();
const axios = require("axios");
const CardContent = require("./card");
const redis = require("redis");

const { createClient } = redis;

const client = createClient({
  username: "default",
  password: "Yt8tbPPKDWm55eutAqskqPJc0FsDk5RJ",
  socket: {
    host: "redis-15547.c340.ap-northeast-2-1.ec2.redns.redis-cloud.com",
    port: 15547,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

const send = async () => {
  const webhook_url = process.env.WEBHOOK_URL;
  const deploymentId = process.env.DEPLOYMENT_ID;

  if (!webhook_url) {
    throw new Error("::error::WEBHOOK_URL environment variable is not set");
  }

  if (!deploymentId) {
    throw new Error("::error::DEPLOYMENT_ID environment variable is not set");
  }
  await client.connect();

  try {
    const response = await axios.post(webhook_url, CardContent);
    console.log("::notice::Webhook sent successfully:", response.status);

    // Store the thread key in Redis with the deployment ID
    const threadKey = response.data.thread.name;
    await client.set(`thread:${deploymentId}`, threadKey, "EX", 86400); // expires in 24 hours

    console.log("::debug::Deployment ID:", deploymentId);
    console.log("::debug::Thread key stored in Redis");

    return deploymentId;
  } catch (error) {
    throw new Error(`::error::Failed to send webhook: ${error.message}`);
  }
};

// Execute and handle any errors
send()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
