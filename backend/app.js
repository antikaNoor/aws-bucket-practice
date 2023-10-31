const express = require('express')
const cors = require("cors")
const databaseConnection = require('./config/database')
const dotenv = require('dotenv')
dotenv.config()

const imageRouter = require('./routes/imageRoute')

const app = express()
app.use(cors({ origin: "*" }))
// app.use(cors())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).send({ message: "Invalid JSON syntax!" })
    }
    next()
})

app.use("/image", imageRouter)

app.route('*')
    .get((req, res) => {
        res.status(400).send("Invalid route!")
    })
    .put((req, res) => {
        res.status(400).send("Invalid route!")
    })
    .post((req, res) => {
        res.status(400).send("Invalid route!")
    })
    .delete((req, res) => {
        res.status(400).send("Invalid route!")
    })

databaseConnection(() => {
    app.listen(8000, () => {
        console.log("Server is running on 8000...")
    })
})

