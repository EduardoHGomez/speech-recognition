const express = require('express')
const app = express()
const port = 3000 // npm run dev

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})