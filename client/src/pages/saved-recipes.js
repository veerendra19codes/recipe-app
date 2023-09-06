import { useState , useEffect } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID..js";

export const SavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([]);

    const userID = useGetUserID();

    // this is not allowed in react
    // useEffect( async () => {}, []);

    // you have to create an async fn inside the useEffect hook
    useEffect(() => {
    

        const fetchSavedRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/${userID}`);
                setSavedRecipes(response.data.savedRecipes);
                console.log(response.data);
            } catch(err) {
                console.error(err);
            }
        };

        fetchSavedRecipe();
    }, []);


     
    return (
        <div> 
            <h1>Saved Recipes</h1>
            <ul>
                {savedRecipes.map((recipe) => (
                    <li key={recipe._id}>
                        <div>
                            <h2>{recipe.name}</h2>
                           
                        </div>
                        <div className="instructions">
                            <p>{recipe.instructions}</p>
                        </div>
                        <img src={recipe.imageURL} alt={recipe.name} />
                        <p>Cooking Time: {recipe.cookingTime}(minutes)</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};