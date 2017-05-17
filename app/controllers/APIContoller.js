/**
 * Created by paulosantosjunior on 05/05/17.
 */



module.exports = function (graph) {

    var controller = {};

    var graph = require('fbgraph');



    graph.extendAccessToken({
        "access_token":     "TOKEN_DO_USUARIO_APOS_LOGAR"
        , "client_id":      "ID_FACEBOOK"
        , "client_secret":  "SECRET_FACEBOOK"
    }, function (err, facebookRes) {

    });


    controller.index = function (req, res, next) {

        graph.setVersion("2.9");
        graph.setAccessToken("TOKEN_DO_USUARIO_APOS_LOGAR");
        // Hometown e education nao funcionou pq nao pedimos na inscrição do app.
        graph.get("me?fields=id,name,picture,email,birthday,hometown,education", function(err, res) {
            console.log(res);

        });

        res.json("Fufando no terminal");
    };

    return controller;

}
