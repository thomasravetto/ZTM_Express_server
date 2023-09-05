const friendsController = require("./controllers/friends.controller")
const express = require("express")


const app = express();

app.use(express.json());

const PORT = 3500;

app.listen(PORT, () => {
    console.log(`Server is listening on port:`, PORT);
});

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(req.method, req.url, delta, "ms")
})

app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getOneFriend);
app.post("/friends", friendsController.postFriend);

