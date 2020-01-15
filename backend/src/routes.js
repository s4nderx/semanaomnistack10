const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

// get, post, put, delete

//Tipo de parametros:
// Query Params: request.query (Filtros, ordenacao, paginacao, ....)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao)
// Body: request.body (Dados para ciracao ou alteracao de um registro)

//MongoDB (NoSQL - Nao relacional)

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);


routes.get('/search', SearchController.index);
module.exports = routes;