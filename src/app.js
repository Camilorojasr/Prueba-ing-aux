const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

//importing routes

const usuarioRoutes = require('./routes/usuario');

//Settings
app.set('port',process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {

  host: 'localhost',
  user: 'root',
  password: 'siempreDios123',
  port: '3306',
  database: 'crudnodejsmysql'

}, 'single'));

app.use(express.urlencoded({extended: false}));


//routes

app.use('/', usuarioRoutes);


//statics files

app.use(express.static(path.join(__dirname, 'public')));


// starting server




app.listen(app.get('port'), () => {

  console.log('server on port 3000');
})
