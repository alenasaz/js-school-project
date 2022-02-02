import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App.js";

export const HomePage = () => {
  const { state, dispatch } = useContext(AuthContext);

  // if (!state.isLoggedIn) {
  //   return <Link to="/login" />;
  // }

  // const { avatar_url, name, public_repos, followers, following } = state.user

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  }
  return (
    <div className="container">
    <h1> LOGIN PAGE</h1>
        
        <div>
        <button onClick={()=> handleLogout()}>Logout</button>
        

        </div>
      </div>
  );
};
 export default HomePage;
