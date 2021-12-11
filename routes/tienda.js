const { urlencoded } = require('express');
const express = require('express');
const route = express.Router();
const app = express();
app.set('view engine', 'ejs');
// const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')




var arosParaYoga = [
    {
        colecciones: ['todos', 'pilates'],
        titulo: 'Aro para pilates',
        precio: 100,
        imagen: 'hol',
        variantes: ['rojo', 'azul', 'amarillo'],
        descripcion: 'estupendo y maravillosos aro para pilates, distintos tamaños que se ajustan a tu estilo y ambiente de meditación',
        botonAddToCar: 'd'
    },

    {
        colecciones: ['todos', 'pilates'],
        titulo: 'Aro para pilates Azul',
        precio: 100,
        imagen: 'hol',
        variantes: ['rojo', 'azul', 'amarillo'],
        descripcion: 'estupendo y maravillosos aro para pilates, distintos tamaños que se ajustan a tu estilo y ambiente de meditación',
        botonAddToCar: 'd'
    },
];

    // for(i=0; i < arosParaYoga.length; i++);
    // let toditos = arosParaYoga[i].colecciones,
    // if (toditos == todos) {
    //     console.log(toditos)
    // } else {
    //     console.log('ni pepe')
    // }


var sopa = [
    {
        colecciones: ['todos', 'yoga'],
        titulo: 'sopa',
        precio: `${100}`,
        imagen: 'hol',
        variantes: ['rojo', 'azul', 'amarillo'],
        descripcion: 'estupendo y maravillosos aro para pilates, distintos tamaños que se ajustan a tu estilo y ambiente de meditación',
        botonAddToCar: 'd'
    },
];


route.get('/', function (req, res) {
    // const todos = 'aquí se mostrarán los artículos con la clase "todos" ';
    res.render("tienda", {aroParaYoga: arosParaYoga, sopa1: sopa});
}
);




route.get('/yoga', function (req, res) {
    // res.render("tienda", { articulos })
    res.send('Estás en kaizenyoga.com.mx/tienda/yoga')
});






module.exports = route;