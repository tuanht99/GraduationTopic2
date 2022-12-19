module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _Components: './src/Components',
          _atoms: './src/Components/atoms',
          _molecules: './src/Components/molecules',
          _organisms: './src/Components/organisms',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _services: './src/services',
          _utils: './src/utils'
        }
      }
    }
  }
}
