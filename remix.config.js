/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildTarget: "vercel", // correct for Vercel deployment
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true, // enables file-based routing like _index.jsx
  },
};




// /** @type {import('@remix-run/dev').AppConfig} */
// export default {
//   future: {
//     v2_routeConvention: true,
//   },
//   ignoredRouteFiles: ["**/.*"],

//   appDirectory: "app",
//   assetsBuildDirectory: "public/build",
//   publicPath: "/build/",

//   serverBuildDirectory: "api/build", 
//   serverModuleFormat: "esm",         
// };

