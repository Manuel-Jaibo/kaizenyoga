const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');


var meditacion = [
    {
        colecciones: 'meditacion',
        titulo: 'Zafu redondo liso',
        url: 'zafu-redondo-liso',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-uno.jpg?v=1640310063',
        imagen2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-dos.jpg?v=1640310064',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu redondo liso con diseño',
        url: 'zafu-redondo-liso-con-diseno',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu media luna',
        url: 'zafu-media-luna',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu pliegues liso',
        url: 'zafu-pliegues-liso',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu pliegues diseño',
        url: 'zafu-pliegues-diseno',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu viajes liso',
        url: 'zafu-viajes-liso',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu viaje con diseño',
        url: 'zafu-viaje-con-diseno',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu infantil',
        url: 'zafu-infantil',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
];


//Obtener todo de colecciones > meditacion
const mediitacion = meditacion.filter(meditacion =>
    meditacion.colecciones === 'meditacion');
//Ruta para /meditacion
route.get('/', function (req, res) {
    res.render("meditacion",
        { meditacion: mediitacion })
}
);




//Obtener Zafu Redondo Liso > meditacion
const zafuRedondoLiso = meditacion.find(zafuRedondoLiso => 
    zafuRedondoLiso.titulo === 'Zafu redondo liso');
//Ruta para /meditacion/zafu-redondo-liso
route.get('/zafu-redondo-liso', function (req, res) {
    res.render("pages/zafuRedondoLiso",
        { zafuRedondoLiso: zafuRedondoLiso })
}
);




//Obtener Zafu Redondo Liso con Diseño > meditacion
const zafuRedondoLisoConDiseno = meditacion.find(zafuRedondoLisoConDiseno => 
    zafuRedondoLisoConDiseno.titulo === 'Zafu redondo liso con diseño');
//Ruta para /meditacion/zafu-redondo-liso-con-diseno
route.get('/zafu-redondo-liso-con-diseno', function (req, res) {
    res.render("pages/zafuRedondoLisoconDiseno",
        { zafuRedondoLisoConDiseno: zafuRedondoLisoConDiseno })
}
);




//Obtener Zafu media luna > meditacion
const zafuMediaLuna = meditacion.find(zafuMediaLuna => 
    zafuMediaLuna.titulo === 'Zafu media luna');
//Ruta para /meditacion/zafu-media-luna
route.get('/zafu-media-luna', function (req, res) {
    res.render("pages/zafuMediaLuna",
        { zafuMediaLuna: zafuMediaLuna })
}
);




//Obtener Zafu pliegues liso > meditacion
const zafuPlieguesLiso = meditacion.find(zafuPlieguesLiso => 
    zafuPlieguesLiso.titulo === 'Zafu pliegues liso');
//Ruta para /meditacion/zafu-pliegues-liso
route.get('/zafu-pliegues-liso', function (req, res) {
    res.render("pages/zafuPlieguesLiso",
        { zafuPlieguesLiso: zafuPlieguesLiso })
}
);




//Obtener Zafu pliegues diseño > meditacion
const zafuPlieguesDiseno = meditacion.find(zafuPlieguesDiseno => 
    zafuPlieguesDiseno.titulo === 'Zafu pliegues diseño');
//Ruta para /meditacion/zafu-pliegues-diseno
route.get('/zafu-pliegues-diseno', function (req, res) {
    res.render("pages/zafuPlieguesDiseno",
        { zafuPlieguesDiseno: zafuPlieguesDiseno })
}
);




//Obtener Zafu viajes liso > meditacion
const zafuViajesLiso = meditacion.find(zafuViajesLiso => 
    zafuViajesLiso.titulo === 'Zafu viajes liso');
//Ruta para /meditacion/zafu-viajes-liso
route.get('/zafu-viajes-liso', function (req, res) {
    res.render("pages/zafuViajesLiso",
        { zafuViajesLiso: zafuViajesLiso })
}
);




//Obtener Zafu viaje con diseño > meditacion
const zafuViajeConDiseno = meditacion.find(zafuViajeConDiseno => 
    zafuViajeConDiseno.titulo === 'Zafu viaje con diseño');
//Ruta para /meditacion/zafu-viaje-con-diseno
route.get('/zafu-viaje-con-diseno', function (req, res) {
    res.render("pages/zafuViajeConDiseno",
        { zafuViajeConDiseno: zafuViajeConDiseno })
}
);




//Obtener Zafu infantil > meditacion
const zafuInfantil = meditacion.find(zafuInfantil => 
    zafuInfantil.titulo === 'Zafu infantil');
//Ruta para /meditacion/zafu-infantil
route.get('/zafu-infantil', function (req, res) {
    res.render("pages/zafuInfantil",
        { zafuInfantil: zafuInfantil })
}
);







module.exports = route;

