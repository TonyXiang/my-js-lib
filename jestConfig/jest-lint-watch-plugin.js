const { exec } = require('child_process')

module.exports = class JestLintWatchPlugin {
  getUsageInfo() {
    return {
      key: 'F',
      prompt: 'fix TSLint and ESLint',
    };
  }

  run() {
    const tslintPromise = new Promise((resolve) => {
      exec('npm run tslint:fix', () => {
        resolve(true)
      })
    })

    const eslintPromise = new Promise((resolve) => {
      exec('npm run eslint:fix', () => {
        resolve(true)
      })
    })

    return Promise.all([tslintPromise, eslintPromise]).then(resolve => {
      resolve(true)
    })
  }
}
