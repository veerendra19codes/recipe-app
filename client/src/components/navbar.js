import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const logout = () => {
        //setting cookie to empty string
        setCookies("access_token", "");
        //removing userID of user from loaclStorage
        window.localStorage.removeItem("userID");
         window.localStorage.clear();
        navigate("/auth");
    };

    return (
        <div className="navbar">
            <Link className="link" to="/" > Home </Link>
            <Link className="link" to="/createrecipes" > Create Recipes </Link>
            {/* <Link to="/savedrecipes" > Saved Recipes </Link> */}
            {/* check if any token is there not verifying token is correct or not just checking is it exists */}
            { !cookies.access_token ? (
                // if token is not there(user is not logged in)
                <Link className="link" to="/auth" > Login/Register </Link>
                ) : (
                    <>
                        <Link className="link" to="/savedrecipes" > Saved Recipes </Link>
                        {/* else(user is logged in give option to logout) */}
                        <button onClick={logout}>Log out</button>
                    </>
                )
            }
        </div>
    );
};