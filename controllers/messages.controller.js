const messages = require("../models/messages.model")
const path = require('path')

function getMessages(req, res) {
    res.render('messages', {
        title: "Message to my friend!",
        friend: "Elon Musk"
    })
    // res.sendFile(path.join(__dirname, '..','images', 'public', 'rocciamelone.jpg'))
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