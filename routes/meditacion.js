const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');


var meditacion = [
    {
        colecciones: 'meditacion',
        titulo: 'Zafú redondo liso',
        url: 'zafu-redondo-liso',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-uno.jpg?v=1640310063',
        imagen2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-dos.jpg?v=1640310064',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafú redondo liso con diseño',
        url: 'zafu-redondo-liso-con-diseno',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
];


//Obtener todo de colecciones > meditacion
const mediitacion = meditacion.filter(meditacion =>
    meditacion.colecciones === 'meditacion');


route.get('/', function (req, res) {
    res.render("meditacion",
        {meditacion: mediitacion})
}
);

module.exports = route;

