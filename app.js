const express = require('express');
const app = express();
const path = require('path');
const stripe = require('stripe')('pk_test_51Jpi6GEBbCGH38EQuBbofqK9g30Jocv8AQg9gSWHgvMauKZkzb7dmMgHqPebOtFhwrDYVZO7b4Dz4EwVYH9GFRPN00NVro1Jht');
const nodemailer = require('nodemailer');
 

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
// const rutaSend = require('./routes/send');
// const rutaCheckout = require('./routes/checkout');

//MIDDLEWARE
// app.get('/checkout', rutaCheckout);


// Rutas Renderizadas con EngineJs
app.get('/', (req, res) => {
      res.render("index")
});

app.get('/tienda', (req, res) => {
    res.render("tienda")
});


//Ruta para errores 404
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/static/404.html")
})


//Empezar 
app.listen(app.get('port'), () => {
  console.log(`servidor en puerto ${app.get('port')}`);
});