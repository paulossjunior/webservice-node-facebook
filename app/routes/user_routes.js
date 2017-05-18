/**
 * Created by paulosantosjunior on 05/05/17.
 */

var controller = require('../controllers/user_contoller')();

module.exports = function (app) {

    app.get('/', controller.index);


} 