const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  configureWebpack: {
    plugins: [
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