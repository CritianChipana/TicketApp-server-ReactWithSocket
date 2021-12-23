
const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();




/*
*   usar Sockets de una manera mas rapida
*
*/
// // Servidor de socket
// const server = require('http').createServer(app);

// //Confiuracion del socket server
// const io = require('socket.io')(server);

// // Desplegar el directorio Publico
// app.use( express.static( __dirname + '/public' ) )


// io.on('connection', ( socket ) => { 
    

//     // Escuchamos el evento
//     socket.on("mensaje-to-server", ( data )=>{
//         console.log(data);

//         io.emit( 'mensaje-from-server', data );

//     });

//  });



// server.listen(4000,()=>{
//     console.log("El servidor ya esta corriendo en el puerto 4000");
// });


