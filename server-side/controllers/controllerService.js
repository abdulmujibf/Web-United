const fs = require('fs')

class ControllerService {
  static get(req, res) {
    fs.readFile('./data/services.json', 'utf8', (err, data) => {
      if(err) res.send(err)
      else res.send(JSON.parse(data))
    })
  }
}

module.exports = ControllerService