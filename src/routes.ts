import {Router} from 'express';
import JogadorController from  './app/controllers/JogadorController';
import EnderecoController from './app/controllers/EnderecoController';
//import AuthController from './app/controllers/AuthController';
import ObjetivoController from './app/controllers/ObjetivoController';
import LocalController from './app/controllers/LocalController';



const router = Router();

//criando  rotas para /jogadores.
router.post('/jogadores', JogadorController.store);//define uma rota vai método post para chamar o método store da classe JogadorController
router.get('/jogadores', JogadorController.list);//define uma rota ...
router.put('/jogadores', JogadorController.update);//define uma rota ...
router.delete('/jogadores', JogadorController.delete);//define uma rota ...


//criando  rotas para /enderecos.
router.post('/enderecos', EnderecoController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController
router.get('/enderecos', EnderecoController.list);//define uma rota ...
router.delete('/enderecos', EnderecoController.delete);//define uma rota ...

//Objetivo
router.post('/objetivos', ObjetivoController.store);
router.get('/objetivos', ObjetivoController.list);
router.put('/objetivos', ObjetivoController.update);
router.delete('/objetivos', ObjetivoController.delete);

//Local
router.post('/locais', LocalController.store);
router.get('/locais', LocalController.list);
router.put('/locais', LocalController.update);
router.delete('/locais', LocalController.delete);


//router.post('/auth', AuthController.authenticate);

export default router;

