/**
 * Created by paulosantosjunior on 05/05/17.
 */


module.exports = function () {

    var controller = {};

    var graph = require('fbgraph');



    graph.extendAccessToken({
        "access_token":     "EAAb9aCVwiXcBAEWjJg6j298Q0Vue6gvFYODgooSZCIcUOt1Ozy5ulWK9drfBUhO1lHXkhh0z8OqPSvK8bWZC8Wne2EcTx9jSfx5SGHGOveoqSDwidtXT9Rh6L7IV3SCKWpMAdhbJnQCxzskIs5MkecGZBTTFin9q1Inh9rEDwZDZD"
        , "client_id":      "1967473606822263"
        , "client_secret":  "01c01f03bf8fa1efb414ba05d435e984"
    }, function (err, facebookRes) {

    });

    controller.index = function (req, res, next) {

        var dados ="";

        graph.setVersion("2.9");
        graph.setAccessToken("EAAb9aCVwiXcBAEWjJg6j298Q0Vue6gvFYODgooSZCIcUOt1Ozy5ulWK9drfBUhO1lHXkhh0z8OqPSvK8bWZC8Wne2EcTx9jSfx5SGHGOveoqSDwidtXT9Rh6L7IV3SCKWpMAdhbJnQCxzskIs5MkecGZBTTFin9q1Inh9rEDwZDZD");


        graph.get("me?fields=id,name,picture,email,birthday,hometown,education", function(err, resX) {
            dados = resX;
            res.json(dados);
        });

    };

    return controller;

}
