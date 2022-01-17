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
    {
        colecciones: 'meditacion',
        titulo: 'Funda para zafu',
        url: 'funda-para-zafu',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Cascarilla de café para rellenar zafu',
        url: 'cascarilla-de-cafe-para-rellenar-zafu',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Sabutón',
        url: 'sabuton',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Sabutón Pro',
        url: 'sabuton-pro',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Zafu Pro redondo',
        url: 'zafu-pro-redondo',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Banco de madera estándar natural',
        url: 'banco-de-madera-estandar-natural',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Banco de madera estándar entintado',
        url: 'banco-de-madera-estandar-entintado',
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates.jpg?v=1640840721',
        variante: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-rosa.jpg?v=1640840733',
        variante2: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/rodillo-para-pilates-colores.jpg?v=1640840895',
    },
    {
        colecciones: 'meditacion',
        titulo: 'Banco de madera grande natural',
        url: 'banco-de-madera-grande-natural',
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




//Obtener Funda para zafu > meditacion
const fundaParaZafu = meditacion.find(fundaParaZafu => 
    fundaParaZafu.titulo === 'Funda para zafu');
//Ruta para /meditacion/funda-para-zafu
route.get('/funda-para-zafu', function (req, res) {
    res.render("pages/fundaParaZafu",
        { fundaParaZafu: fundaParaZafu })
}
);




//Obtener Venta de cascarilla de café para rellenar zafu > meditacion
const rellenoCascarilla = meditacion.find(rellenoCascarilla => 
    rellenoCascarilla.titulo === 'Cascarilla de café para rellenar zafu');
//Ruta para /meditacion/cascarilla-de-cafe-para-rellenar-zafu
route.get('/cascarilla-de-cafe-para-rellenar-zafu', function (req, res) {
    res.render("pages/cascarillaCafeRelleno",
        { rellenoCascarilla: rellenoCascarilla })
}
);




//Obtener Sabutón > meditacion
const sabuton = meditacion.find(sabuton => 
    sabuton.titulo === 'Sabutón');
//Ruta para /meditacion/sabuton
route.get('/sabuton', function (req, res) {
    res.render("pages/sabuton",
        { sabuton: sabuton })
}
);




//Obtener Sabutón Pro > meditacion
const sabutonPro = meditacion.find(sabutonPro => 
    sabutonPro.titulo === 'Sabutón Pro');
//Ruta para /meditacion/sabuton-pro
route.get('/sabuton-pro', function (req, res) {
    res.render("pages/sabutonPro",
        { sabutonPro: sabutonPro })
}
);




//Obtener Zafu Pro redondo > meditacion
const zafuProRedondo = meditacion.find(zafuProRedondo => 
    zafuProRedondo.titulo === 'Zafu Pro redondo');
//Ruta para /meditacion/zafu-pro-redondo
route.get('/zafu-pro-redondo', function (req, res) {
    res.render("pages/zafuProRedondo",
        { zafuProRedondo: zafuProRedondo })
}
);




//Obtener Banco de madera estándar natural > meditacion
const bancoDeMaderaEstandarNatural = meditacion.find(bancoDeMaderaEstandarNatural => 
    bancoDeMaderaEstandarNatural.titulo === 'Banco de madera estándar natural');
//Ruta para /meditacion/banco-de-madera-estandar-natural
route.get('/banco-de-madera-estandar-natural', function (req, res) {
    res.render("pages/bancoDeMaderaEstandarNatural",
        { bancoDeMaderaEstandarNatural: bancoDeMaderaEstandarNatural })
}
);




//Obtener Banco de madera estándar entintado > meditacion
const bancoDeMaderaEstandarEntintado = meditacion.find(bancoDeMaderaEstandarEntintado => 
    bancoDeMaderaEstandarEntintado.titulo === 'Banco de madera estándar entintado');
//Ruta para /meditacion/banco-de-madera-estandar-entintado
route.get('/banco-de-madera-estandar-entintado', function (req, res) {
    res.render("pages/bancoDeMaderaEstandarEntintado",
        { bancoDeMaderaEstandarEntintado: bancoDeMaderaEstandarEntintado })
}
);




//Obtener Banco de madera grande natural > meditacion
const bancoDeMaderaGrandeNatural = meditacion.find(bancoDeMaderaGrandeNatural => 
    bancoDeMaderaGrandeNatural.titulo === 'Banco de madera grande natural');
//Ruta para /meditacion/banco-de-madera-grande-natural
route.get('/banco-de-madera-grande-natural', function (req, res) {
    res.render("pages/bancoDeMaderaGrandeNatural",
        { bancoDeMaderaGrandeNatural: bancoDeMaderaGrandeNatural })
}
);










module.exports = route;

