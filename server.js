const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const middleware = require('./middleware');

app.use(bodyParser.json());
//app.use(middleware);


// Punto de entrada
app.get('/', function (request, response) {
    response.json(
        {
            name: 'Mi listado de usuarios',
            endpoints: [
                {
                    name: 'usuarios edpoints',
                    url: './users'
                },
                {
                    name: 'Items endpoints',
                    url: './items'
                }
            ]
        });
});


const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

//------------------------------------------------------

/*


// Obtener un usuario





*/
//------------------------------------------------------



app.listen(4000);
console.log('Servidor express levantado en el puerto ' + 4000);