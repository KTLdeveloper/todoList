const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const  LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    plugins: [
      new LodashModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'server',
        defaultSizes: 'gzip',
        analyzerPort: '8889',
        openAnalyzer: false
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('VuetifyLoaderPlugin')
      .tap(() => {
        return [{
          match (originalTag, { kebabTag, camelTag, path, component }) {
            if (kebabTag.startsWith('todo-')) {
              return [camelTag, `import ${camelTag} from '@/components/${camelTag}.vue'`]
            }
          }
        }]
      })
  }
}