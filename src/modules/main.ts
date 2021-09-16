import { database } from '../database/config/database'
const express = require('express') //CHANGEME

const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
    res.send('Hello World!')
})

app.use(express.urlencoded({ extended: true }))

async function testDatabase () {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.')
    } catch (e) {
        console.error('Unable to connect to the database:', e)
    }
}
testDatabase()

app.listen(port, () => console.log(`Listen at http://localhost:${port}`))