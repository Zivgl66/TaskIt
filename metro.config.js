// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = getDefaultConfig(__dirname);
var getBlacklistRE = function getBlacklistRE() {
  return new RegExp(
    "(.*\\android\\.*|.*\\__fixtures__\\.*|node_modules[\\\\]react[\\\\]dist[\\\\].*|website\\node_modules\\.*|heapCapture\\bundle.js|.*\\__tests__\\.*|.git[\\.*])$"
  );
};

module.exports = {
  resolver: {
    blacklistRE: getBlacklistRE(),
  },
};
