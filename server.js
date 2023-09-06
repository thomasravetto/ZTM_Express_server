const express = require("express")
const friendsRouter = require("./routes/friends.router")
const messagesRouter = require("./routes/messages.router")


const app = express();

app.use(express.json());

const PORT = 3500;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(req.method, req.baseUrl + req.url, delta, "ms")
})


app.use("/friends", friendsRouter)
app.use("/messages", messagesRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port:`, PORT);
});