require("dotenv").config();
const axios = require("axios");
const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL);

const sendServiceUpdate = async (status, deploymentId) => {
  const webhook_url = process.env.WEBHOOK_URL;

  if (!webhook_url) {
    console.error("Error: WEBHOOK_URL environment variable is not set");
    process.exit(1);
  }

  try {
    // Fetch thread key from Redis using deploymentId
    const threadKey = await redis.get(`thread:${deploymentId}`);

    if (!threadKey) {
      console.error("Thread key not found for deployment:", deploymentId);
      return;
    }

    const message = {
      text: `Service Status Update: ${status}`,
      thread: {
        name: threadKey,
      },
    };

    const response = await axios.post(webhook_url, message);
    console.log("Service update sent successfully:", response.status);
  } catch (error) {
    console.error("Error sending service update:", error.message);
  }
};

module.exports = sendServiceUpdate;
