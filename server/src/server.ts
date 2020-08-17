import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
  MÉTODOS HTTP:
  -> GET: Buscar ou listar uma informação
  -> POST: Criar alguma informação
  -> PUT: Atualizar uma informação existente
  -> DELETE: Deletar uma informação existente
*/

/* 
  PARÂMETROS DE REQUISIÇÕES
  -> Corpo (request body): Dados para criação ou atualização de um registro
  -> Route Params: Identificar qual recurso eu quero atualizar ou deletar
  -> Query Params: Páginação, filtros, ordenação
*/

/*
  FUNCIONALIDADES
  -> Conexões:
    - Rota para listar;
    - Rota para criar uma nova conexão;
  
  -> Aulas:
    - Rota para criar aula;
    - Rota para listar aulas;
      - Filtrar por matéria, dia da semana e horário;
*/