const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');
// const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')



let articulos = [
    {
        colecciones: ['todos', 'pilates'],
        titulo: 'Aro para pilates',
        precio: 1800,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aroUno.jpg?v=1638330383',
        variantes: ['rojo', 'azul', 'amarillo'],
        descripcion: 'estupendo y maravillosos aro para pilates, distintos tamaños que se ajustan a tu estilo y ambiente de meditación',
        botonAddToCar: 'd'
    },

    {
        colecciones: ['todos', 'yoga'],
        titulo: 'Calcetines para yoga',
        precio: 6800,
        imagen: 'https://cdn.shopify.com/s/files/1/0555/2766/9898/files/aroUno.jpg?v=1638330383',
        variantes: ['beige', 'azul', 'aguacate'],
        descripcion: 'estupendo y maravillosos ',
        botonAddToCar: 'z'
    }
];


route.get('/', function (req, res) {
    // const todos = 'aquí se mostrarán los artículos con la clase "todos" ';
    res.render("tienda", { articulos });
}
);




route.get('/yoga', function (req, res) {
    res.render("tienda", { articulosYoga })
});






module.exports = route;