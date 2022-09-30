module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          cwd: 'babel',
          root: ['./src'],
          extensions: ['.js', '.ios.js', '.android.js'],
          alias: {
            _assets: './src/assets',
            _components: './src/components',
            _atoms: './src/components/atoms',
            _molecules: './src/components/molecules',
            _organisms: './src/components/organisms',
            _navigations: './src/navigations',
            _screens: './src/screens',
            _services: './src/services',
            _utils: './src/utils'
          }
        }
      ]
    ]
  }
}
