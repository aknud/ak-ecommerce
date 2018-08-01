require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');
const port = 3018;
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('Database reporting for duty')
    app.set('db', db)
}).catch(error=>console.log('Is something burning???', error))



app.get('/api/products', ctrl.read)

app.listen(()=>console.log(`Lending an ear on ${port}`))