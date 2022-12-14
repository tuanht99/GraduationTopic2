// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     env: {
//       production: {
//         plugins: ['react-native-paper/babel'],
//         plugins: ["nativewind/babel"],
//       },
//     },
//   };
// };

// babel.config.js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel']
  }
}
