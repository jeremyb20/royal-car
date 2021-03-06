'use strict'
const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');



// var serviceAccount = require('royal-car-80146b86134a.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://royal-car-3673e.firebaseio.com'
// });



let db = mongoose.connection,
    dburl = 'mongodb://admin:admin123@ds113640.mlab.com:13640/royal-cars',
    port = 4000;

let server = app.listen(port, _server());

mongoose.connect(dburl, { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'Error de conexión: '));

db.once('open', () => {
    console.log('Base de datos conectada correctamente');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const index = require('./index'),
    user = require('./components/user/user.route'),
    car = require('./components/car/car.route');

app.use('/api', user);
app.use('/api', car);
app.use('/', index);


module.exports = app;

function _server() {
    console.log('Conexión establecida en el puerto ' + port);
};