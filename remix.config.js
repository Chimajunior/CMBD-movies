/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],

  // Your styling config
  tailwind: true,
  postcss: true,
  serverModuleFormat: "esm",
  serverBuildTarget: "vercel",
};
