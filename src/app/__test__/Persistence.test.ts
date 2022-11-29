import {app, setup} from "../../index"
import { afterAll, describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import { getConnection} from "typeorm"

describe("persistence test", () => {

    afterAll(async () => {
        await getConnection().close()
    });

    beforeAll(async () => {
        await setup()
    });



    //TESTE OBJETIVO
    it('teste /objetivo/list e /objetivo/delete', async () => {
        var agent = supertest(app);
        const postList = await agent.get('/objetivos'); //Acessa os dados da tabela objetivo
        expect(postList.statusCode).toEqual(200);
        if (postList.body.length > 0){ //Checa se a tabela tem algum valor dentro
        for(const o of postList.body){ //Se tiver algo, lista através de um laço for
           
            const id = { "id" : o.id };
            console.log("Encontrou o objetivo: ", id);
            
            const postDeleteObjetivo = await agent.delete('/objetivos').send(id); // Deleta o conteúdo da tabela objetivos
                expect(postDeleteObjetivo.statusCode).toEqual(204);
                console.log("Objetivo deletado!")

            
        }
        }else{ //Caso não encontre nada na tabela, cria um novo dado
            console.log("Não encontrou nada, cadastrando novo objetivo.");
            const data = { "id": 1,
                        "descricao": "teste",
                        "pontos": 10,
                        };

            const postCreateObjetivo = await agent.post('/objetivos').send(data); //Salva os dados descritos acima na tabela
            expect(postCreateObjetivo.statusCode).toEqual(200);
            console.log("Objetivo criado")
            console.log(postCreateObjetivo.body);
            
        }
    });

    // TESTE LOCAL
    it('teste /local/list e /local/delete', async () => {
        var agent = supertest(app);
        const postList = await agent.get('/locais'); //Acessa os dados da tabela locais
        expect(postList.statusCode).toEqual(200);
        if (postList.body.length > 0){ //Checa se a tabela tem algum valor dentro
        for(const e of postList.body){ //Se tiver algo, lista através de um laço for
           
            const id = { "id" : e.id };
            console.log("Encontrou o local: ",id);
            
            const postDeleteLocal = await agent.delete('/locais').send(id); // Deleta o conteúdo da tabela locais
            expect(postDeleteLocal.statusCode).toEqual(204);
            console.log("Local deletado");
            
        }
        }else{ //Caso não encontre nada na tabela, cria um novo dado
            console.log("Não encontrou locais cadastrados, cadastrando novo local.");
          
            const data = {"nome": "LocalTeste",
                          "latitude": 100,
                          "longitude": 50,
                        };

            const postCreateLocal = await agent.post('/locais').send(data); //Salva os dados descritos acima na tabela
            console.log(postCreateLocal.body);
            expect(postCreateLocal.statusCode).toEqual(200);
        }
    });



});

