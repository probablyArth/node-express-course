const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

// app.get('/', (req, res)=> {
//     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })
// Adding to static assets
// SSR (server side rendering)

//  API VS SSR
// API - JSON | SSR - TEMPLATE
// SEND DATA  | SEND TEMPLATE
// RES.JSON() | RES.RENDER()

app.all('*', (req, res)=> {
    res.status(404).send('Resource not found')
})

app.listen(5000, ()=> {
    console.log("Listening to port 5000")
})