/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",

  // New config options to support React Native
  // (see https://github.com/mikeylemmon/remix/commit/b0e79b90def5cce23f2978ed12ba4555ff8bcba2)
  resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json"]
    .map((ext) => [`.web${ext}`, ext])
    .flat(),
  resolveAliases: {
    "react-native": require.resolve("react-native-web"),
  },

  serverDependenciesToBundle: [
    "expo-linear-gradient",
    "solito",
    "react-native-web",
    "expo-linking",
    "expo-constants",
    "expo-modules-core",
  ],
};
