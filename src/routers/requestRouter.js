const express = require('express');
const router = express.Router();

const { authenticateUser } = require('../middlewares/authMiddleware');
const FriendController = require('../controller/friendController');
const friendController = new FriendController();

router.get('/api/users/getuserslist', authenticateUser, friendController.getUsersList);
router.get('/api/users/listfriends', authenticateUser, friendController.listFriends);
router.post('/api/users/respondrequest/:requestId', authenticateUser, friendController.respondToFriendRequest);
router.post('/api/users/sendrequest/:userIde', authenticateUser, friendController.sendFriendRequest);

module.exports = router;