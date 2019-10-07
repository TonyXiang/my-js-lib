const path = require('path')
const express = require('express')
const { exec } = require('child_process')
let app = null
let server = null

function startServer() {
  exec('npm run build', (error) => {
    if (error) {
      throw new Error('构建函数库出错')
    }
    if (server) {
      server.close()
    }
    app = express()
    app.use(express.static(path.join(__dirname, '../')))
    server = app.listen(3333)
  })
}

function closeServer() {
  if (server) {
    server.close()
    app = null
    server = null
  }
}

module.exports = {
  startServer,
  closeServer
}
