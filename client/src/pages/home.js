import { useState , useEffect } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID..js";
import { useCookies } from "react-cookie";

export const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [cookies, _ ] = useCookies(["access_token"]);

    const userID = useGetUserID();

    // this is not allowed in react
    // useEffect( async () => {}, []);

    // you have to create an async fn inside the useEffect hook
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get("http://localhost:3001/recipes");
                setRecipes(response.data);
                console.log(response.data);
            } catch(err) {
                console.error(err);
            }
        };

        const fetchSavedRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/ids/${userID}`);
                setSavedRecipes(response.data.savedRecipes);
                console.log(response.data);
            } catch(err) {
                console.error(err);
            }
        };

        fetchRecipe();
        if(cookies.access_token) fetchSavedRecipe();
    }, []);

    const saveRecipe = async (recipeID) => {
        try {
            const response = await axios.put("http://localhost:3001/recipes",
            {recipeID, userID},
            { headers: { authorization : cookies.access_token}}
            );
            console.log(response);
            //to avoid refreshing of page whenever you save a recipe
            setSavedRecipes(response.data.savedRecipes);
        } catch(err) {
            console.error(err);
        }
    };

    const isRecipeSaved = (id) => {
        return (
            savedRecipes.includes(id)
        );
    };
     
    return (
        <div> 
            <h1>Recipes</h1>
            <ul className="recipes">
                {recipes.map((recipe) => (
                    <li className="recipe" key={recipe._id}>
                        <div>
                            <h2>{recipe.name}</h2>
                            <button onClick={() => saveRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}> {isRecipeSaved(recipe._id) ? "Saved" : "Save"} </button>
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