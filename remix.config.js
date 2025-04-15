/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildTarget: "vercel", 
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
};
