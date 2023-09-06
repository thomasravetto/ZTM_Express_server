const messages = require("../models/messages.model")

function getMessages(req, res) {
    res.json(messages)
}


function postMessage(req, res) {
    if (!req.body.sender) {
        return res.status(400).json({error: "Missing message data"});
    }
    const newMessage = {
        name: req.body.sender,
        content: req.body.content
    }
    messages.push(newMessage);
    res.status(201).json(newMessage);
}

module.exports = {
    getMessages,
    postMessage
}