const { Router } = require('express');
const createRouter = Router();

const { signupCreate } = require('../controller/signupController');
const { uploadPic } = require('../controller/userController');

/**
 * @swagger
 * /store/signup:
 *  post:
 *    summary: Cadastra um usuário
 *    responses:
 *      201:
 *        description: Sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
createRouter.post('/store/signup', signupCreate);
createRouter.post('/user/uploadpic', uploadPic);

module.exports = createRouter;