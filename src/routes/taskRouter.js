const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/taskController');
const { loginTask } = require('../controller/loginController');
const { minigame1Task } = require('../controller/minigame1Controller')

router.post('/store/task', storeTask);
router.post('/store/logintask', loginTask);
router.post('/store/minigame1task', minigame1Task);

module.exports = router;