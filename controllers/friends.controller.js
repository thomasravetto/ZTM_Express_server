const friends = require("../models/friends.model")

function getFriends(req, res) {
    res.json(friends)
}

function getOneFriend(req, res) {
    const friendId = +req.params.friendId
    const friend = friends[friendId]
    console.log(friend)
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({error: "user not found"})
    }
}

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({error: "Missing friend name"});
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend);
    res.status(201).json(newFriend);
}

module.exports = {
    getFriends,
    getOneFriend,
    postFriend
}