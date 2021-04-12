const fs = require('fs')

class ControllerProduct {
  static get(req, res) {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
      if(err) res.send(err)
      else res.send(JSON.parse(data))
    })
  }
}

module.exports = ControllerProduct