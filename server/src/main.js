const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add', (req, res) => {
    let a = parseInt(req.query.a)
    a=0;
    a++;
    res.send('' + (a))
  })
  
app.post('/add', (req, res) => {
    let a = parseInt(req.body.a)
    a=0;
    a++;
    res.send('' + (a))
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})