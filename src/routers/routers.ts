import Router from "express"; 
import {Controller } from "../controller/controler";

const controller = new Controller();
export const routers = Router(); 

routers.post("/mangas", controller.create);

routers.get("/mangas", controller.getAll); 
routers.get("/mangas/:id", controller.getId);

routers.put("/mangas/:id", controller.updateAll);
routers.patch("/mangas/:id", controller.update); 
routers.delete("/mangas/:id", controller.delete); 
