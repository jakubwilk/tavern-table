module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // @tamagui/babel-plugin wyłączony - powodował "Unexpected token 'typeof'"
    // Tamagui działa w trybie runtime bez kompilatora (zalecane na start)
  };
};
