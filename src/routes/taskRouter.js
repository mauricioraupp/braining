const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/taskController');
const { loginTask } = require('../controller/loginController')

router.post('/store/task', storeTask);
router.post('/store/loginTask', loginTask);

module.exports = router;