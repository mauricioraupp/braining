const { Router } = require('express');
const createRouter = Router();

const { signupCreate } = require('../controller/signupController');
const { uploadPic } = require('../controller/userController');

createRouter.post('/store/signup', signupCreate);
createRouter.post('/user/uploadpic', uploadPic);

module.exports = createRouter;