/**
 * Created by paulosantosjunior on 05/05/17.
 */

var controller = require('../controllers/APIContoller')();

module.exports = function (app) {

    app.get('/', controller.index);

    app.get('/api/users', controller.index);
} 