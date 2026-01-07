// Configuration file for application settings
// Webhook URLs are loaded from environment variables in .env file
//
// To set the webhook URLs:
// 1. Create a .env file in the root directory
// 2. Add each webhook URL:
//    REACT_APP_DISCORD_WEBHOOK_DEVELOPER=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
//    REACT_APP_DISCORD_WEBHOOK_CONTRIBUTOR=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
//    REACT_APP_DISCORD_WEBHOOK_COMMUNITY_STAFF=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
//    REACT_APP_DISCORD_WEBHOOK_QUALITY_ASSURANCE=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
//
// Note: Make sure .env is in your .gitignore to keep webhook URLs secure

export const DISCORD_WEBHOOKS = {
  developer: process.env.REACT_APP_DISCORD_WEBHOOK_DEVELOPER || "",
  contributor: process.env.REACT_APP_DISCORD_WEBHOOK_CONTRIBUTOR || "",
  "community-staff":
    process.env.REACT_APP_DISCORD_WEBHOOK_COMMUNITY_STAFF || "",
  "quality-assurance":
    process.env.REACT_APP_DISCORD_WEBHOOK_QUALITY_ASSURANCE || ""
};

// Debug: Log webhook configuration (remove in production)
console.log("[Config] Webhook URLs loaded:", {
  developer: DISCORD_WEBHOOKS.developer ? "Set" : "Not set",
  contributor: DISCORD_WEBHOOKS.contributor ? "Set" : "Not set",
  "community-staff": DISCORD_WEBHOOKS["community-staff"] ? "Set" : "Not set",
  "quality-assurance": DISCORD_WEBHOOKS["quality-assurance"] ? "Set" : "Not set"
});
