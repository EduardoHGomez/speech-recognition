const express = require('express')
const app = express()
const path = require('path');
const port = 3000 // npm run dev

app.use(express.static('./backend')); // Ahorita está como ./src pero para tener todo el acceso al servidor deber ser './'
app.use('/backend', express.static('backend'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})