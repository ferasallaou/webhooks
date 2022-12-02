const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { verifyWebhookSignature } = require('@graphcms/utils');
const secret = 'kUtF2Ap426acBODZ6LyJ6cvrwzuVMCrL';

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(JSON.stringify(req.body), 'GET')
    return res.sendStatus(200)
})


app.post('/', (req, res) => {
    console.log('HEADRS', req.headers)
    console.log('SIGN', req.headers['gcms-signature'])
    const isValid = verifyWebhookSignature({ body: req.body, signature: req.headers['gcms-signature'], secret });
    console.log(isValid)
    console.log(JSON.stringify(req.body), 'POST')
    return res.sendStatus(200)
})

app.listen(3000, ()=> {
    console.log('running on 3000')

})