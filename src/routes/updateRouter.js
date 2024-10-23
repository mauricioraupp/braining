const { Router } = require('express');
const updateRouter = Router();

const { userNameUpdate } = require('../controller/userController');
const { userDateUpdate } = require('../controller/userController');
const { userEmailUpdate } = require('../controller/userController');
const { userPasswordUpdate } = require('../controller/userController');
const { minigame1Update } = require('../controller/minigamesUpdate');
const { minigame2Update } = require('../controller/minigamesUpdate');

/**
 * @swagger
 * /user/nameupdate:
 *  put:
 *    summary: Altera o nome do usuário
 *    responses:
 *      200:
 *        description: Nome do usuário alterado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
updateRouter.put('/user/nameupdate', userNameUpdate);

/**
 * @swagger
 * /user/dateupdate:
 *  put:
 *    summary: Altera a data de nascimento do usuário
 *    responses:
 *      200:
 *        description: Data de nascimento do usuário alterada com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
updateRouter.put('/user/dateupdate', userDateUpdate);

/**
 * @swagger
 * /user/emailupdate:
 *  put:
 *    summary: Altera o email do usuário
 *    responses:
 *      200:
 *        description: Email do usuário alterado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
updateRouter.put('/user/emailupdate', userEmailUpdate);

/**
 * @swagger
 * /user/passwordupdate:
 *  put:
 *    summary: Altera a senha do usuário
 *    responses:
 *      200:
 *        description: Senha do usuário alterada com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
updateRouter.put('/user/passwordupdate', userPasswordUpdate);

/**
 * @swagger
 * /games/minigame1/update:
 *  put:
 *    summary: Atualiza o nível desbloqueado pelo usuário no 1º minijogo
 *    responses:
 *      200:
 *        description: Nível do 1º minijogo alterado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
updateRouter.put('/games/minigame1/update', minigame1Update);

/**
 * @swagger
 * /games/minigame2/update:
 *  put:
 *    summary: Atualiza o nível desbloqueado pelo usuário no 2º minijogo
 *    responses:
 *      200:
 *        description: Nível do 2º minijogo alterado com sucesso
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type:object
 */
updateRouter.put('/games/minigame2/update', minigame2Update);

module.exports = updateRouter;