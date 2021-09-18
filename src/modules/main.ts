import 'module-alias/register'
import { database } from '@/src/database/config/database'
import express from 'express'
import { createUser, findUser } from './users/handlers'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req:any, res:any) => {
    res.send('Hello World!')
});

(async () => {
    const user = await findUser()
    console.log(user)
})();

console.log(Promise.all([findUser()]))
app.listen(port, () => console.log(`Listen at http://localhost:${port}`))