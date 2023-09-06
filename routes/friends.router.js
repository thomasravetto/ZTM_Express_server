const express = require("express")
const friendsController = require("../controllers/friends.controller")


const friendsRouter = express.Router()

friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip)
    next()
})

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getOneFriend);
friendsRouter.post("/", friendsController.postFriend);

module.exports = friendsRouter