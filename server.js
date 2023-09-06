const express = require("express")
const friendsRouter = require("./routes/friends.router")
const messagesRouter = require("./routes/messages.router")
const path = require('path')


const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use("/site", express.static(path.join(__dirname, 'public')))
app.use(express.json());

const PORT = 3500;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(req.method, req.baseUrl + req.url, delta, "ms")
})


app.get("/", (req, res) => {
    res.render('index', {
        title: "Rocciamelone",
        caption: "Mountains are beautiful"
    })
})
app.use("/friends", friendsRouter)
app.use("/messages", messagesRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port:`, PORT);
});