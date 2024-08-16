const { Router } = require('express');
const readRouter = Router();

const { loginTask } = require('../controller/loginController');
const { userRequest } = require('../controller/userController');

readRouter.get('/store/logintask', loginTask);
readRouter.get('/user/request', userRequest);

module.exports = readRouter;