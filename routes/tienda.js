const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');
// const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')

var articulos = [
    {
        colecciones: 'pilates',
        titulo: 'Aros para pilates', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro_para_pilates_azul.jpg?v=1638409699',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'yoga',
        titulo: 'Aros para yoga', 
        url: 'aros-para-yoga',
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aro-para-yoga-morado-y-azul.jpg?v=1639530023',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'yoga',
        titulo: 'Bolsas para yoga', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },

    {
        colecciones: 'yoga',
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/calcetines-para-yoga-rosa.jpg?v=1639530081',
        titulo: 'Calcetines para yoga', 
        precio: 100,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.  esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
        id:'product-component-1639503964856',
    },
    {
        colecciones: 'yoga',
        titulo: 'Bolsas para tapete', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7672.jpg?v=1639530133',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'yoga',
        titulo: 'Cuña', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/6727.jpg?v=1639530225',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'pilates',
        titulo: 'Pelota para pilates', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7365.jpg?v=1639530264',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'pilates',
        titulo: 'Bancos largos', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7813.jpg?v=1639530466',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
        url: 'http://localhost:5000/tienda/articulo-de-prueba'
    },
    {
        colecciones: 'pilates',
        titulo: 'Mantas', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7124.jpg?v=1639530503',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'pilates',
        titulo: 'Zabutones', 
        precio: 1000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/7432.jpg?v=1639530537',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'pilates',
        titulo: 'Zafu chakras', 
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/6055.jpg?v=1639530627',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: 'yoga',
        titulo: 'Rodillo', 
        precio: 1500,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/6720.jpg?v=1639530671',
        descripcion: 'esto es otra prueba de titutlo. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
];

//     const recorreTitulos = articulos.map(({colecciones, titulo}) => {
//         if (titulo === 'Bolsas para yoga') {
            
//         }
//         const seleccion = titulo;
//   })

// const   = 'Bolsas para yoga';

const you = articulos.find(you => 
    you.titulo === 'Zabutones');
    const tuTitulo = you.titulo;
    console.log(tuTitulo);

const yoga = articulos.find(yoga => 
    yoga.colecciones === 'yoga');


route.get('/', function (req, res) {
//     const elegido = articulos.map(({colecciones, titulo, precio, imagen, descripcion, botonaddToCar}) => {
//         return `${titulo} + ${precio} + ${colecciones}`
//   })


    res.render("tienda", 
    {articulos: articulos, //para recorrer todos los articulos de todas las colecciones
    you: you, //para recorrer todos los artículos de la colección 'yoga'
    tuTitulo: tuTitulo,
    yoga:yoga}
    );}
);


//EN LA BASE DE DATOS SE PONDRÁ LA URL DEL ARTÍCULO PARA POSTERIORMENTE PINTARLO DESDE LA TIENDA, Y QUE CUANDO DEN CLIC, EN LUGAR DE ABRIR EL POPUP, LES ABRIRÁ UNA NUEVA PÁGINA MEDIANTE UN AHREF EN ATRIBUTO BLANK.

// RECORRER LA BASE DE DATOS Y TRAER SOLO EL NOMBRE DEL ARTÍCULO DE PRUEBA Y MANDARLO JUNTO CON EL RES.RENDER EN FORMA DE VARIABLE, YA DENTRO DEL ARTÍCULO DE PRUEBA, SE TRAERÁ MEDIANTE EL IF DEL MODAL QUE SE USÓ EN /TIENDA.
route.get('/aros-para-yoga', function (req, res) {
    res.render('pages/articuloPrueba')});


//METER EN VIEWS/PAGES LAS PÁGINAS URL DE CADA UNO DE LOS ARTÍCULOS



module.exports = route;