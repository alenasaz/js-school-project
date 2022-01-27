import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../App.js'

const HomePage = () => {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Link to="/login" />;
  }

  const { avatar_url, name, public_repos, followers, following } = state.user

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  } 
  return (
    <div>
      <h1> HomePage</h1>
      <button onClick={()=> handleLogout()}>Logout</button>
      <div>
        <div className="content">
          <img src={avatar_url} alt="Avatar"/>
          <span>{name}</span>
          <span>{public_repos} Repos</span>
          <span>{followers} Followers</span>
          <span>{following} Following</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
