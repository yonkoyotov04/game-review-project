import express from "express"
import handlebars from "express-handlebars"
import mongoose from "mongoose"
import cookieParser from 'cookie-parser'

const app = express();

try {
    await mongoose.connect('mongodb://localhost:27017/', {
        dbName: 'game-review-project'
    })
    console.log("Succesfully connected to database!")
} catch (error) {
    console.log("Failed to connect to database", error.message)
}

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
}))

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static('src/public'));
app.use(express.urlencoded());
app.use(cookieParser());

app.listen(2105, () => console.log("Server is listening on port http://localhost:2105......"))