const { Router } = require('express');

const routes = Router();

routes.post('/devs', (request, response) => {
   return response.json({
      message: "Hellow Teste"
   });
});

module.exports = routes;