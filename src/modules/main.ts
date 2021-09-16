import 'module-alias/register'
import { database } from '@/src/database/config/database'
import express from 'express'
import { createUser } from './users/handlers'
import { syncModels } from '../database/config/syncModels'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req:any, res:any) => {
    res.send('Hello World!')
})

const bla = createUser() // Está precisando definir para dps sincronizar. Procurar uma forma de sincronizar td de uma vez pela CLI.
if (process.env.NODE_ENV === 'development') {
    syncModels()
}

app.listen(port, () => console.log(`Listen at http://localhost:${port}`))