const { Router } = require('express');
const createRouter = Router();

const { signupTask } = require('../controller/signupController');
const { minigame1Task } = require('../controller/minigamesSelect');
const { minigame1Update } = require('../controller/minigamesUpdate');

createRouter.post('/store/signuptask', signupTask);
createRouter.post('/store/minigame1task', minigame1Task);
createRouter.post('/store/minigame1update', minigame1Update);

module.exports = createRouter;