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
          <Route path="/" element={ <Home /> } />
          <Route path="/createrecipes" element={ <CreateRecipes /> } />
          <Route path="/savedrecipes" element={ <SavedRecipes /> } />
          <Route path="/auth" element={ <Auth /> } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
