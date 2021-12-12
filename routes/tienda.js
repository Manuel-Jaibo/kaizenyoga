const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');
// const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')



    // for(i=0; i < arosParaYoga.length; i++);
    // let toditos = arosParaYoga[i].colecciones,
    // if (toditos == todos) {
    //     console.log(toditos)
    // } else {
    //     console.log('ni pepe')
    // }


var arosParaPilates = [
    {
        colecciones: ['todos', 'pilates'],
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aroUno.jpg?v=1638330383',
        titulo: 'Aros para pilates', 
        precio: 100,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
];

var bolsasParaYoga = [
    {
        colecciones: ['todos', 'yoga'],
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/bolsa-para-yoga-dos.jpg?v=1639276551',
        titulo: 'Bolsas para yoga', 
        precio: 700,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero repellendus, eaque, amet at aut, voluptatum qui dignissimos voluptatem similique officia hic sequi expedita molestias illo dicta unde necessitatibus fugit.',
        botonAddToCar: 'd',
    },
];


route.get('/', function (req, res) {
    // const todos = 'aquí se mostrarán los artículos con la clase "todos" ';
    res.render("tienda", 
    {arosParaPilates: arosParaPilates,
     bolsasParaYoga: bolsasParaYoga}
    );}
);




route.get('/yoga', function (req, res) {
    // res.render("tienda", { articulos })
    res.send('Estás en kaizenyoga.com.mx/tienda/yoga')
});






module.exports = route;