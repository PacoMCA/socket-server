// const n='Paco';
// console.log(`Mi nombre es ${n}`);

import Server from "./classes/server";
import router  from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';


const server = new Server();

//bodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin: true, credentials:true}));


//Rutas
server.app.use('/', router)

server.start(()=>{
    console.log('Servidor corriendo: ', server.port);    
})