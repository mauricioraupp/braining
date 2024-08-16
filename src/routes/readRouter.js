const { Router } = require('express');
const readRouter = Router();

const { loginRequest } = require('../controller/loginController');
const { minigame1Request } = require('../controller/minigamesRead');
const { userRequest } = require('../controller/userController');

readRouter.get('/store/login', loginRequest);
readRouter.get('/games/minigame1/request', minigame1Request);
readRouter.get('/user/request', userRequest);

module.exports = readRouter;