//express is a framework to create our api
import express from "express";
//allows to set up rules for communication between frontend and backend
import cors from "cors";
//allow us to write query to our db(mongodb)
import mongoose from "mongoose";
//importing routes
import { userRouter } from "./routes/users.js"
import { recipesRouter } from "./routes/recipes.js";

const app = express();

// middleware so that whatever data is received from frontend is converted into json for backend
app.use(express.json());
app.use(cors());

//using routers
// routename,  routefile
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://veerendrarecipes:mernrecipes1234@recipes.2odttpv.mongodb.net/recipes"
)

app.listen(3001, (req, res) => {
    console.log("server started");
});