const { getDefaultConfig } = require('expo/metro-config');

// Uproszczona konfiguracja - bez @tamagui/metro-plugin
// Plugin powodował błędy parsowania przy ładowaniu tamagui.config
const config = getDefaultConfig(__dirname);

module.exports = config;
