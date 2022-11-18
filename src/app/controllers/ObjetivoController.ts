import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Objetivo from '../models/Objetivo';
class ObjetivoController {


 async list(req: Request, res: Response){
    const repository = getRepository(Objetivo);
    const lista = await repository.createQueryBuilder('tb_objetivo').leftJoinAndSelect("tb_objetivo.locais", "local").getMany();
    return res.json(lista);
}

 async store(req: Request, res: Response){
    const repository = getRepository(Objetivo);
    const j = repository.create(req.body); //cria a entidade objetivo
    await repository.save(j); //persiste a entidade na tabela.
    return res.json(j);
 }

 async delete(req: Request, res: Response){
   try{
       const repository = getRepository(Objetivo);
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
    
    const repository = getRepository(Objetivo);//recupera o repositorio objetivo.

    const {descricao, pontos} = req.body;//extrai os atributos descricao e pontos do corpo da mensagem.
    
    const j = repository.create(req.body); //cria a entidade Objetivo
    
    await repository.save(j); //persiste (update) a entidade na tabela.
    
    return res.json(j);
}
}

export default new ObjetivoController();