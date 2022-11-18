import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Local from '../models/Local';
class LocalController {

 async list(req: Request, res: Response){
    const repository = getRepository(Local);
    const lista = await repository.find();
    return res.json(lista);
 }


 async store(req: Request, res: Response){
    const repository = getRepository(Local);
    const j = repository.create(req.body); //cria a entidade Local
    await repository.save(j); //persiste a entidade na tabela.
    return res.json(j);
 }

 async delete(req: Request, res: Response){
    try{
        const repository = getRepository(Local);
        const {id} = req.body;
        const end = await repository.findOne({where : {"id" : id }});
        if(end){
            await repository.remove(end);
            return res.sendStatus(204);
        }else{
            return res.sendStatus(404);
        }
    }catch(e:unknown){
    
        console.log(e);
        return res.sendStatus(500);
    }

    }

    async update(req: Request, res: Response){
    
        const repository = getRepository(Local);//recupera o repositorio Local.
    
        const {nome, latitude, longitude} = req.body;//extrai os atributos do corpo da mensagem.
        
        const j = repository.create(req.body); //cria a entidade Local 
        
        await repository.save(j); //persiste (update) a entidade na tabela.
        
        return res.json(j);
    }
}

export default new LocalController();