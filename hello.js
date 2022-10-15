const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const hello_path = '/hello'
require('loadenv')('hellojsodev:env');

const PORT = process.env.PORT | 5000

app.use((req, res, next) => {
    console.log('Yeni bir istek geldi!');
    next();
})

function post_req_function(req, res, next) {
    console.log('POST isteği geldi.')
    next();
}

app.get(hello_path, (req, res) => {
    res.send('Merhaba, GET isteği attınız!')
})

app.post(hello_path, post_req_function, (req, res) => {
    res.send('Merhaba, POST isteği attınız!')
})

app.put(hello_path, (req, res) => {
    res.send('Merhaba, PUT isteği attınız!')
})

app.delete(hello_path, (req, res) => {
    res.send('Merhaba, DELETE isteği attınız!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})