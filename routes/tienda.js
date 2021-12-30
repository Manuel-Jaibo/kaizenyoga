const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');

// colecciones: 'yoga',
// titulo: 'Aros para yoga', 
// url: 'aros-para-yoga',
// precio: 700,
// imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-uno.jpg?v=1640310063',
// variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-uno.jpg?v=1640310063',

var articulos = [
    {
        colecciones: 'yoga',
        titulo: 'Aros para yoga', 
        url: 'aros-para-yoga',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-uno.jpg?v=1640310063',
        imagen2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-dos.jpg?v=1640310064',
        imagen3: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-tres.jpg?v=1640310064',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/morado-y-azul.jpg?v=1640765757',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/morado-y-rosa.jpg?v=1640765758',
        variante3: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/negro-y-rosa.jpg?v=1640765757',
    },
    {
        colecciones: 'pilates',
        titulo: 'Rodillo para pilates', 
        url: 'rodillo-para-pilates',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
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
     yoga: yoga, //obtener los artículos que contengan 'yoga' de colección
     pilates: pilates} //obtener los artículos que contengan 'pilates' de colección
    );}
);


//Obtener aros para yoga
const arosParaYoga = articulos.find(arosParaYoga => 
    arosParaYoga.titulo === 'Aros para yoga');

    route.get('/aros-para-yoga', function (req, res) {
        res.render("arosParaYoga", 
        {arosParaYoga: arosParaYoga}
        );}
    );

//Obtener rodillo para pilates
const rodilloParaPilates = articulos.find(rodilloParaPilates => 
    rodilloParaPilates.titulo === 'Rodillo para pilates');
    
    route.get('/rodillo-para-pilates', function (req, res) {
            res.render("rodilloParaPilates", 
            {rodilloParaPilates: rodilloParaPilates}
            );}
        );



module.exports = route;
