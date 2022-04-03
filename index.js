var express = require("express");
var aplicacao = express();

aplicacao.use(express.json());
aplicacao.use(express.urlencoded({extended:false}));


aplicacao.get('/clientes', function (req, res){
    
    return res.status(200).send ('');
});

aplicacao.get('/clientes/:id', function (req, res){
    var userId = req.params['id'];

    return res.status(200).send ('');
});

aplicacao.post('/clientes/:id/:nome/:endereco/:email', function( req, res){

});

aplicacao.patch('/clientes/:id/:nome/:endereco/:email', function( req, res){

});
aplicacao.delete('/clientes/:id/', function( req, res){

});

aplicacao.listen(3000, function() {
    console.log("Estou funcionando");
});