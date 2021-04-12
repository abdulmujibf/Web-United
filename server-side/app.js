const express = require('express')
const app = express()
const PORT = 3001
const router = require('./routers')
const cors = require('cors')

app.use(cors())
app.use('/', router)


app.listen(PORT, () => {
  console.log(`This Server is Running On Port ${PORT}`)
})