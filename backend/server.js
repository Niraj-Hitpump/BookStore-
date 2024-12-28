import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./Route/book.route.js"
import userRoute from "./Route/user.route.js"

const app = express();

//This is the middleware....
app.use(cors());
// parsing of the data
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to the mongodb
try {
    mongoose.connect(URI, {
        // using these two line because of locally cloud in atlas no need to use
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to Mongodb")
} catch (error) {
    console.log("Error:",error)
}
// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is  listening on port ${PORT}`);
});
