const { Router } = require('express');
const readRouter = Router();

const { loginRequest } = require('../controller/loginController');
const { userRequest } = require('../controller/userController');
const { minigame1Request } = require('../controller/minigamesRead');
const { minigame2Request } = require('../controller/minigamesRead');

readRouter.get('/store/login', loginRequest);
readRouter.get('/user/request', userRequest);
readRouter.get('/games/minigame1/request', minigame1Request);
readRouter.get('/games/minigame2/request', minigame2Request);

module.exports = readRouter;