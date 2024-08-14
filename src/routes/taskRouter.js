const { Router } = require('express');
const router = Router();

const { signupTask } = require('../controller/signupController');
const { loginTask } = require('../controller/loginController');
const { minigame1Task } = require('../controller/minigamesSelect');
const { minigame1Update } = require('../controller/minigamesUpdate');
const { userRequest } = require('../controller/userController');
const { userUpdate } = require('../controller/userController');

router.post('/store/signuptask', signupTask);
router.get('/store/logintask', loginTask);
router.post('/store/minigame1task', minigame1Task);
router.post('/store/minigame1update', minigame1Update);
router.get('/store/userrequest', userRequest);
router.put('/store/userupdate', userUpdate);

module.exports = router;