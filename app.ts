import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// const router = require('./router')(express);
import Router from './router';
const router = Router(express);
// const express = require('express');
// Redis
// import client from './redis';

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.get('/api',(req,res)=>{
//     res.json({"key":"Hello World!"});
// });
// app.get('/', (req, res)=>{
//     res.send('haha');
// })
app.use('/', router);
// Serving Static file , the angular application is served in the folder /frontend/dist.

// app.use(express.static('client/build'));

app.listen(8080);