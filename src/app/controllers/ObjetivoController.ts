import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Objetivo from '../models/Objetivo';

    class ObjetivoController {

        async list(req: Request, res: Response) {
    
            const repository = getRepository(Objetivo);
            //retorna uma lista de objetos contendo os registros de tb_Objetivo
            const lista = await repository.find();
    
            return res.json(lista);
        }
    
        async store(req: Request, res: Response) {
    
            const repository = getRepository(Objetivo);//recupera o repositorio da Objetivo.
    
            console.log(req.body);//imprime na saida padrão a mensagem recebida. Isso é apenas para teste...
    
            const { id } = req.body;//extrai os atributos id do corpo da mensagem.
    
            const ObjetivoExists = await repository.findOne({ where: { id } });//consulta na tabela se existe um registro com o mesmo id da mensagem.
    
            if (ObjetivoExists) {
    
                return res.sendStatus(409);//caso exista um registro, retorna 409 informando o conflito
    
            }
    
            const p = repository.create(req.body);//cria a entidade Objetivo.
    
            await repository.save(p);//efetiva a operacao de insert.
    
            return res.json(p);//retorna o bojeto json no response.
    
        }
    
        async delete(req: Request, res: Response) {
    
            const repository = getRepository(Objetivo);//recupera o repositorio da Objetivo.
    
            const { id } = req.body;//extrai os atributos id do corpo da mensagem.
    
            const ObjetivoExists = await repository.findOne({ where: { id } });//consulta na tabela se existe um registro com o mesmo id da mensagem.
    
            if (ObjetivoExists) {
    
                await repository.remove(ObjetivoExists);//caso exista, então aplica a remocao fisica.
                return res.sendStatus(204);//retorna o coigo 204.
    
            } else {
    
                return res.sendStatus(404);//se nao encontrar Objetivo para remover, retorna o codigo 404.
            }
        }
    
        async update(req: Request, res: Response) {
    
            const repository = getRepository(Objetivo);//recupera o repositorio Objetivo.
    
            const { id } = req.body;//extrai os atributos id e endereco do corpo da mensagem.
    
            const ObjetivoExists = await repository.findOne({ where: { id } });//consulta na tabela se existe um registro com o mesmo id da mensagem.
    
            if (!ObjetivoExists) {
                return res.sendStatus(404);
            }
    
            const p = repository.create(req.body); //cria a entidade Objetivo
    
            await repository.save(p); //persiste (update) a entidade na tabela.
    
            return res.json(p);
        }
    }

        export default new ObjetivoController();   