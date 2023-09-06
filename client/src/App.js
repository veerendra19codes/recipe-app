import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.js";
import { CreateRecipes } from "./pages/create-recipes.js";
import { SavedRecipes } from "./pages/saved-recipes.js";
import { Auth } from "./pages/auth.js";
import { Navbar } from "./components/navbar.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="https://recipe-app-steel-beta.vercel.app/" element={ <Home /> } />
          <Route path="https://recipe-app-steel-beta.vercel.app/createrecipes" element={ <CreateRecipes /> } />
          <Route path="https://recipe-app-steel-beta.vercel.app/savedrecipes" element={ <SavedRecipes /> } />
          <Route path="https://recipe-app-steel-beta.vercel.app/auth" element={ <Auth /> } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
