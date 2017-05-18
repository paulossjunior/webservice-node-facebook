/**
 * Created by paulosantosjunior on 05/05/17.
 */


var express = require('express');
var load = require('express-load');

module.exports = function(){

    var app = express();
    app.set('port',3000);


    load('models', {cwd:'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}
