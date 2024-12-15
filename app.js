const sendServiceUpdate = require("./service-notification");

// In your application startup
app.listen(port, () => {
  const deploymentId = process.env.DEPLOYMENT_ID;
  if (!deploymentId) {
    console.warn(
      "No deployment ID found, skipping service update notification"
    );
    return;
  }
  sendServiceUpdate("Service Started Successfully ✅", deploymentId);
});

// In your error handling
process.on("uncaughtException", (error) => {
  const deploymentId = process.env.DEPLOYMENT_ID;
  if (deploymentId) {
    sendServiceUpdate(`Service Failed ❌: ${error.message}`, deploymentId);
  }
});
