const express = require('express');
const cors= require('cors')
const port=5300

const server=express()
server.use(cors())
server.use(express.json())



server.listen(
    port, ()=>{
        console.log(`it is listening on port ${port}`)
    }
)