import {Request, Response} from "express"; 
import {z} from "zod"; 
import { Book } from "../model/Book";

const modelSchema = z.object({
    nomeOriginal: z.string().min(4, "nome invalido"),
    nomeManga:z.string().min(4, "nome inválido"), 
    author : z.string().min(4), 
    description: z.string().nullable(), 
    pagina: z.number().int(), 
    tema: z.string()
}); 
const modelSchemapartial = modelSchema.partial(); 

export class Controller{
    async create(req:Request, res:Response){
    const {success, error, data} = modelSchema.safeParse(req.body); 
    if(!success){
        res.status(400).send({error: error.errors}); 
        return; 
    }; 
    try{
         await Book.create(data); 
        
        res.status(201).send({message:"Book created successfully"}); 
    }catch(e){
        res.status(400).send(e);     
        return; 
    }
} 
  async getAll(_:Request , res:Response){
    const listaTotal = await Book.findAll(); 
    if(listaTotal.length ===0){
        res.status(400).send({error: "No book registered"});
        return; 
    }
    res.status(200).json(listaTotal); 
}

async getId  (req: Request, res: Response){
    const {id} = req.params; 
    try{
        const valueId =await Book.findAll({
            where:{
                id
            }
        })
        if(valueId.length === 0){
            res.status(400).send({error: "No such book"}); 
            return; 
        }
        res.status(200).json(valueId); 
    }catch(e){
        console.error(e);
        res.status(400).json(e); 
    }
}; 

async updateAll(req:Request, res:Response){
    const {id} = req.params; 
    const {success, error, data} = modelSchema.safeParse(req.body); 
    if(!success){
        res.status(400).send({error: error.errors}); 
        return; 
    }; 

    try{
         const [value] = await Book.update(data,{
            where:{
                id
            }
        }); 
        if(value === 0){
        res.status(400).send({error:"Book not found"});     
        return; 

        }
        res.status(201).send(data); 
    }catch(e){
        res.status(400).send(e);     
        return;
    }
};

async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deleteBook = await Book.destroy({
            where: {
                id: Number(id)
            }
        });

        if (deleteBook === 0) {
             res.status(404).json({ message: 'Book not found' });
            return; 
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (e) {
        res.status(400).json({ error: e});
    }
}
async update(req:Request, res: Response){
    const {success, error, data} = modelSchemapartial.safeParse(req.body); 
    if(!success){
        res.status(400).send({error:error.errors}); 
        return;    
    }
    try{
        const book = await Book.findByPk(Number(req.params.id));
        if(!book){
            res.status(404).json({ message: 'Book not found' });
            return; 
        }
        await book.update(data, { fields: Object.keys(data) });
        res.status(200).json(book);
    }catch(e){
        res.status(500).json(e);
    }
}
}