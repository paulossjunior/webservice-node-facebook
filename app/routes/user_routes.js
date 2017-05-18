/**
 * Created by paulosantosjunior on 05/05/17.
 */

var controller = require('../controllers/user_contoller')();

module.exports = function (app) {

    app.get('/api/facebook/:access_token', controller.me);


}
