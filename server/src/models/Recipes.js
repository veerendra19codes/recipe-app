import mongoose from "mongoose";

// a schema is a object used to define the structure of our data
const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    //[] bcoz ingredients can be multiple so array of ingredients
    ingredients: [{
        type: String,
        required: true,
    }],
    instructions: {
         type: String,
        required: true,
    },
    imageURL: {
         type: String,
        required: true,
    },  
    cookingTime: {
         type: Number,
        required: true,
    },  
    userOwner: {
        //get the userID of the user who is currently logged in
         type: mongoose.Schema.Types.ObjectID,
         //ref to collection(users)
         ref:"users",
        required: true,
    },
});
                                         //collection   ,  Schema
export const RecipeModel = mongoose.model("recipes", RecipeSchema);