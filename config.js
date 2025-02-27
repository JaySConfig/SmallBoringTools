import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "Small Boring Tools",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "A collection of simple, predictable tools that do one thing well. No AI, no blockchain, just boring reliability.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "smallboringtools.com", // Replace with your actual domain
  
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (resend.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  
  stripe: {
    // Keep the original stripe plans or customize as needed
    plans: [
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        name: "Starter",
        description: "Perfect for small projects",
        price: 79,
        priceAnchor: 99,
        features: [
          { name: "NextJS boilerplate" },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
        ],
      },
      {
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Advanced",
        description: "You need more power",
        price: 99,
        priceAnchor: 149,
        features: [
          { name: "NextJS boilerplate" },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      },
    ],
  },
  
  aws: {
    // Keep the original AWS config or update as needed
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  
  resend: {
    // Update these email addresses to match your brand
    fromNoReply: `Small Boring Tools <noreply@smallboringtools.com>`,
    fromAdmin: `Support at Small Boring Tools <support@smallboringtools.com>`,
    supportEmail: "your-email@example.com", // Update with your actual support email
  },
  
  colors: {
    // IMPORTANT: Keep this section to fix the error
    theme: "light",
    main: themes["light"]["primary"],
  },
  
  auth: {
    // Keep the original auth config
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
};

export default config;