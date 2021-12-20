const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');

var articulos = [
    {
        colecciones: 'pilates',
        titulo: 'Aros para pilates', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro_para_pilates_azul.jpg?v=1638409699',
        url: '/tienda/articulo-de-prueba',
    },
    {
        colecciones: 'yoga',
        titulo: 'Aros para yoga', 
        url: 'aros-para-yoga',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-morado-y-azul.jpg?v=1639530023',
    },
    {
        colecciones: 'yoga',
        titulo: 'Bolsas para yoga', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
    },

    {
        colecciones: 'yoga',
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/calcetines-para-yoga-rosa.jpg?v=1639530081',
        titulo: 'Calcetines para yoga', 
        precio: 100,
    },
    {
        colecciones: 'yoga',
        titulo: 'Bolsas para tapete', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7672.jpg?v=1639530133',
    },
    {
        colecciones: 'yoga',
        titulo: 'Cuña', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/6727.jpg?v=1639530225',
    },
    {
        colecciones: 'pilates',
        titulo: 'Pelota para pilates', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7365.jpg?v=1639530264',
    },
    {
        colecciones: 'pilates',
        titulo: 'Bancos largos', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7813.jpg?v=1639530466',
        url: '/tienda/articulo-de-prueba',
    },
    {
        colecciones: 'pilates',
        titulo: 'Mantas', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7124.jpg?v=1639530503',
    },
    {
        colecciones: 'pilates',
        titulo: 'Zabutones', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7432.jpg?v=1639530537',
    },
    {
        colecciones: 'pilates',
        titulo: 'Zafu chakras', 
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/6055.jpg?v=1639530627',
    },
    {
        colecciones: 'yoga',
        titulo: 'Rodillo', 
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/6720.jpg?v=1639530671',
    },
];

//Obtener yoga
const yoga = articulos.filter(yoga => 
    yoga.colecciones === 'yoga');


//Obtener pilates
const pilates = articulos.filter(pilates => 
    pilates.colecciones === 'pilates');




route.get('/', function (req, res) {
    res.render("tienda", 
    {articulos: articulos, //para recorrer todos los articulos de todas las colecciones
     yoga: yoga,
     pilates: pilates}
    );}
);


route.get('/aros-para-yoga', function (req, res) {
    const arosParaYoga = articulos.find(arosParaYoga => 
        arosParaYoga.titulo === 'Aros para yoga');
    res.render('articuloPrueba'),
    {arosParaYoga: arosParaYoga}}
);




module.exports = route;