import express from "express"; 
import dotenv from'dotenv';
import { routers } from "./routers/routers";
import { init } from "./init";
import cors from "cors"; 
dotenv.config();
init(); 

const server = express(); 

server.use(cors({origin:"*"}));
server.use(express.json()); 
server.use(routers); 
server.listen(process.env.PORT_SERVER, ()=> console.log(`server run http://localhost:${process.env.PORT_SERVER}`)); 