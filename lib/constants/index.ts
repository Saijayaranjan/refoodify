const _env_name = "VERCEL_PROJECT_PRODUCTION_URL";

export const siteHost = process.env[_env_name] || "localhost:3000";
export const siteUrl = process.env.NODE_ENV === "production" ? `https://${siteHost}` : `http://${siteHost}`;
