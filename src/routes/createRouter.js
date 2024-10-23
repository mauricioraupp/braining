const { Router } = require('express');
const createRouter = Router();

const { signupCreate } = require('../controller/signupController');
const { uploadPic } = require('../controller/userController');

/**
 * @swagger
 * /store/signup:
 *  post:
 *    summary: Cadastra um usuário e envia os níveis padrões (1) para as tabelas dos minijogos
 *    responses:
 *      201:
 *        description: Cadastrado (nome, data, email, senha) com successo
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
createRouter.post('/store/signup', signupCreate);

/**
 * @swagger
 * /user/uploadpic:
 *  post:
 *    summary: Envia imagem de perfil para o banco de dados
 *    responses:
 *      201:
 *        description: Imagem enviada com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
createRouter.post('/user/uploadpic', uploadPic);

module.exports = createRouter;