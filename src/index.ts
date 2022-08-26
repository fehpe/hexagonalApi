import express from 'express'
import bodyParser from 'body-parser'
import newView from './controllers/newViewHttp.controller'

const PORT = 4600

const app = express()
app.use(bodyParser.json())

app.post('/view', newView);

app.listen(PORT, () => {
    console.log(`Server escuchando en: http://localhost:${PORT}`)
})