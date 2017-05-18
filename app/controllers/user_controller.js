/**
 * Created by paulosantosjunior on 05/05/17.
 */


module.exports = function () {

    var controller = {};

    var graph = require('fbgraph');

    controller.me = function (req, res, next) {

        graph.setVersion("2.9");

        graph.setAccessToken(req.params.access_token);

        graph.get("me?fields=id,name,picture,email,birthday,hometown,education", function(err, resX) {
            res.json(resX);
        });
    };

    return controller;
}
