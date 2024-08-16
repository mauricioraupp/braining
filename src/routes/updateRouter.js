const { Router } = require('express');
const updateRouter = Router();

const { userNameUpdate } = require('../controller/userController');
const { userDateUpdate } = require('../controller/userController');
const { userEmailUpdate } = require('../controller/userController');
const { userPasswordUpdate } = require('../controller/userController');

updateRouter.put('/user/nameupdate', userNameUpdate);
updateRouter.put('/user/dateupdate', userDateUpdate);
updateRouter.put('/user/emailupdate', userEmailUpdate);
updateRouter.put('/user/passwordupdate', userPasswordUpdate);

module.exports = updateRouter;