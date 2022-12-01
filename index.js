const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(JSON.stringify(req.body), 'GET')
    return res.sendStatus(200)
})


app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body), 'POST')
    return res.sendStatus(200)
})

app.listen(3000, ()=> {
    console.log('running on 3000')

})