const express = require('express')
const app = express()



app.get('/', (req, res) => {
    console.log(req.body)
    return res.sendStatus(200)
})


app.post('/', (req, res) => {
    console.log(req.body)
    return res.sendStatus(200)
})

app.listen(3000, ()=> {
    console.log('running on 3000')

})