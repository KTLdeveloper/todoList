import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', true, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return

  const moduleNames = fileName.replace(/(\.\/|\.js)/g, '').split('/')

  moduleNames.reduce((acc, cur, index) => {
    const moduleName = camelCase(cur)
    if (index === moduleNames.length - 1) {
      const currentModule = {
        namespaced: true,
        ...requireModule(fileName)
      }
      acc[moduleName] = currentModule
      return acc
    } else {
      if (!acc[moduleName]) {
        acc[moduleName] = {
          namespaced: true,
          modules: {}
        }
      }
      return acc[moduleName]
    }
  }, modules)
})

export default modules