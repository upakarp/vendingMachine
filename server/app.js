const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const url = 'mongodb://localhost/sodas';

mongoose.connect(process.env.MONGODB_URI || url, {useNewUrlParser: true});
const con = mongoose.connection;

const PORT = process.env.port || 9001 

con.on('open', () => {
    console.log('Connected');
});

app.use(express.json());

const sodaRouter = require('./routes/router-soda.js');
const adminRouter = require('./routes/admin.router.js');
const { allowOverride } = require('admin-bro');

app.use('/sodas', sodaRouter)
app.use('/sodas/:id', sodaRouter)
app.use('/admin', adminRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/vending-machine/build')) 
}

app.listen(PORT, () => {
    console.log('Server started');
});
