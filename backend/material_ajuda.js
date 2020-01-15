const express = require('express');
const mongoose = require('mongoose');

const app = express();

//VERSION 2.2.12
mongoose.connect("mongodb://marcosMongo:marcosfoda@cluster0-shard-00-00-o8mim.mongodb.net:27017,cluster0-shard-00-01-o8mim.mongodb.net:27017,cluster0-shard-00-02-o8mim.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

//Necessário para que o express entenda o json como corpo da requisição.
app.use(express.json());

/**
 * Tipos de parâmetros:
 * Query params: request.query = filtros, ordenação, paginação (.com.br?serach=marcos)
 * Route Params: request.params = Identificar um recurso na alteração ou remoção (/removerCadastro/3)
 * Body: request.body = Dados para criação ou alteração de um registros ({"nome":"marcos","email":"marcos@gmail.com"})
 */

//Query params
app.get('/', (request, response) => {
   return response.json({
      message: "Hellow Teste"
   });
});

//Body
app.post('/users', (request, response) => {
   console.log(request.body);
   return response.json({
      message: "Hellow Teste"
   });
});

//Route Params
app.delete('/users/:id', (request, response) => {
   console.log(request.params);//params.id
   return response.json({
      message: "Hellow Teste"
   });
});

app.listen(8585);