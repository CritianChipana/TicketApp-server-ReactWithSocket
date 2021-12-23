const TicketList = require("./ticket-list");



class Sockets {


    constructor( io ){

        this.io = io;
        //* CREAR LA INSTANCIA DE NUESTRO TIOCKETLIST

        this.ticketList = new TicketList();

        this.socketsEvents();
      
    }

    socketsEvents(){
        // On Connection
        this.io.on('connection', ( socket ) => {
            
            console.log("Cliente conectado")
            socket.on( 'solicitar-ticket', ( data, callback)=>{

                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket);
            } )
            socket.on( 'siguiente-ticket-trabajar', ( usuario, callback)=>{
                const { agente, escritorio } = usuario;
                const suTicket = this.ticketList.asignarTicket(agente, escritorio);
                callback(suTicket);

                this.io.emit( 'ticket-asignado', this.ticketList.ultimos13 );

            } )
            
        
         });
    }

}


module.exports = Sockets;