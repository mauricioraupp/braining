const { Router } = require('express');
const updateRouter = Router();

const { userNameUpdate } = require('../controller/userController');
const { userDateUpdate } = require('../controller/userController');
const { userEmailUpdate } = require('../controller/userController');
const { userPasswordUpdate } = require('../controller/userController');
const { userImageUpload } = require('../controller/userController')
const { minigame1Update } = require('../controller/minigamesUpdate');
const { minigame2Update } = require('../controller/minigamesUpdate');

updateRouter.put('/user/nameupdate', userNameUpdate);
updateRouter.put('/user/dateupdate', userDateUpdate);
updateRouter.put('/user/emailupdate', userEmailUpdate);
updateRouter.put('/user/passwordupdate', userPasswordUpdate);
updateRouter.put('/user/uploadimage', userImageUpload)
updateRouter.put('/games/minigame1/update', minigame1Update);
updateRouter.put('/games/minigame2/update', minigame2Update);

module.exports = updateRouter;