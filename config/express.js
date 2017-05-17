/**
 * Created by paulosantosjunior on 05/05/17.
 */

var express = require('express');


var API = require('../app/routes/api');

module.exports = function(){

    var app = express();
    // Configurando a porta da aplicação
    app.set('port',3000);

    // Adicionando a app na rota
    API(app);
    
    return app;
}
