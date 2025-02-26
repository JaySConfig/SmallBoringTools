import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Small Boring Tools",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "A collection of simple, predictable tools that do one thing well. No AI, no blockchain, just boring reliability.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "smallboringtools.com", // Replace with your actual domain
  
  // ...rest of your config stays the same
  
  resend: {
    // Update these email addresses to match your brand
    fromNoReply: `Small Boring Tools <noreply@smallboringtools.com>`,
    fromAdmin: `Support at Small Boring Tools <support@smallboringtools.com>`,
    supportEmail: "your-email@example.com", // Update with your support email
  },
  
  // ...rest of your config stays the same
};

export default config;