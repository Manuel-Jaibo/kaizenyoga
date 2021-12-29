const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');

var articulos = [
    {
        colecciones: 'yoga',
        titulo: 'Aros para yoga', 
        url: 'aros-para-yoga',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-uno.jpg?v=1640310063',
        imagen2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-dos.jpg?v=1640310064',
        imagen3: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-tres.jpg?v=1640310064',
        variante1: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/morado-y-azul.jpg?v=1640765757',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/morado-y-rosa.jpg?v=1640765758',
        variante3: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/negro-y-rosa.jpg?v=1640765757',
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


const arosParaYoga = articulos.find(arosParaYoga => 
    arosParaYoga.titulo === 'Aros para yoga');

    route.get('/aros-para-yoga', function (req, res) {
        res.render("arosParaYoga", 
        {arosParaYoga: arosParaYoga}
        );}
    );



module.exports = route;
