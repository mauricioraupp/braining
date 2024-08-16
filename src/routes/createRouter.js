const { Router } = require('express');
const createRouter = Router();

const { signupCreate } = require('../controller/signupController');
const { minigame1Update } = require('../controller/minigamesUpdate');

createRouter.post('/store/signup', signupCreate);
createRouter.post('/games/minigame1/update', minigame1Update);

module.exports = createRouter;