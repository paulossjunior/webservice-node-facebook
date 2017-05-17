/**
 * Created by paulosantosjunior on 05/05/17.
 */

var http = require ('http');
var app =  require ('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log('Escutando a porta --> '+app.get('port'));
});