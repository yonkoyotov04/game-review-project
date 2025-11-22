import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import routes from "./routes.js"
import authMiddleware from "./middlewares/authMiddleware.js"

const app = express();

try {
    await mongoose.connect('mongodb://localhost:27017/', {
        dbName: 'game-review-project'
    })
    console.log("Succesfully connected to database!")
} catch (error) {
    console.log("Failed to connect to database", error.message)
}

app.use(cors())

app.use(express.json());

app.use(authMiddleware);

app.use(routes);

app.listen(2222, () => console.log("Server is listening on port http://localhost:2222......"))