const express = require('express')
const os = require('node:os')

const app = express()

app.get('/system', (req, res) => {
    res.json({ 
        os: os.platform(),
        machine: os.machine(),
        hostname: os.hostname(),
        arch: os.arch(),
        uptime: os.uptime()
    })
})

app.get('/memory', (req, res) => {
    const toMb = (bytes) => (bytes / (1024 * 1024)).toFixed(2)
    const total_mem = toMb(os.totalmem())
    const free_mem = toMb(os.freemem())

    res.json({
        total_mem,
        free_mem
    })
})

app.listen(3333, () => console.log("Server on!"))