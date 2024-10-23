const { Router } = require('express');
const readRouter = Router();

const { loginRequest } = require('../controller/loginController');
const { userRequest } = require('../controller/userController');
const { minigame1Request } = require('../controller/minigamesRead');
const { minigame2Request } = require('../controller/minigamesRead');

/**
 * @swagger
 * /store/login:
 *  get:
 *    summary: Retorna os dados do usuário para login
 *    responses:
 *      200:
 *        description: Uma lista com os dados de cadastro do usuário
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
readRouter.get('/store/login', loginRequest);

/**
 * @swagger
 * /user/request:
 *  get:
 *    summary: Retorna os dados do usuário para exibir na página de perfil
 *    responses:
 *      200:
 *        description: Uma lista com os dados de cadastro do usuário
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
readRouter.get('/user/request', userRequest);

/**
 * @swagger
 * /games/minigame1/request:
 *  get:
 *    summary: Retorna o nível em que o usuário está no 1º minijogo
 *    responses:
 *      200:
 *        description: Uma lista com o nível que o usuário está
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
readRouter.get('/games/minigame1/request', minigame1Request);

/**
 * @swagger
 * /games/minigame2/request:
 *  get:
 *    summary: Retorna o nível em que o usuário está no 2º minijogo
 *    responses:
 *      200:
 *        description: Uma lista com o nível que o usuário está
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
readRouter.get('/games/minigame2/request', minigame2Request);

module.exports = readRouter;