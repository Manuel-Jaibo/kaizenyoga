const express = require('express');
const app = express();
const path = require('path');
const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP');
// const nodemailer = require('nodemailer');
 

// Configuraciones express
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('./static'));


//Código para vincular servidor o si no el localhost
app.set('port', process.env.PORT || 5000);


// Configuración y definición de templete engine ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//Se importan Routes
const rutaTienda = require('./routes/tienda');


//MIDDLEWARE
app.use('/tienda', rutaTienda);



// Rutas Renderizadas con EngineJs
app.get('/', (req, res) => {
      res.render("index")
});

// app.get('/tienda', (req, res) => {
//     res.render("tienda")
// });







//Ruta para errores 404
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/static/404.html")
})


//Empezar 
app.listen(app.get('port'), () => {
  console.log(`servidor en puerto ${app.get('port')}`);
});