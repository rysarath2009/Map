const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.listen(process.env.PORT || 3000, function() {
  console.log('listening on 3000')
})
app.use(express.static(__dirname));
app.get('/', (req, res)  => {
  // res.send('Hello World')
    res.sendFile(__dirname + '/map.html')
})
