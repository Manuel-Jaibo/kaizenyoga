const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');
// const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')

var articulos = [
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'La diarrea', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'La caca', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'El vómito', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },

    {
        colecciones: ['todos', 'pilates'],
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aroUno.jpg?v=1638330383',
        titulo: 'Aros para pilates', 
        precio: 100,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
        id:'product-component-1639503964856',
    },
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'Bolsas para yoga', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'Bolsas para yoga', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'Bolsas para yoga', 
        precio: 700,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'Bolsas', 
        precio: 7000,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        descripcion: 'Esta es la descripción de las pendejas bolsas',
        botonAddToCar: 'd',
    },

];
    
const seleccion = 'Aros para pilates';

const you = articulos.find(you => 
    you.titulo === seleccion);
    console.log(you);



route.get('/', function (req, res) {
//     const elegido = articulos.map(({colecciones, titulo, precio, imagen, descripcion, botonaddToCar}) => {
//         return `${titulo} + ${precio} + ${colecciones}`
//   })


//Aquí obtener el valor del button que es el nombre del artículo


    res.render("tienda", 
    {articulos: articulos,
    you: you}
    );}
);





route.get('/yoga', function (req, res) {
    // res.render("tienda", { articulos })
    res.send('Estás en kaizenyoga.com.mx/tienda/yoga')
});






module.exports = route;