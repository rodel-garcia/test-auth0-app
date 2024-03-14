import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      {isAuthenticated ? (
        <>
          <nav
            style={{
              display: "flex",
              width: "30%",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            <strong>{user?.email}</strong>
            <button
              className="logout-button"
              onClick={() => {
                logout({
                  logoutParams: { returnTo: window.location.origin },
                });
              }}
            >
              Log Out
            </button>
          </span>
        </>
      ) : (
        <button
          className="login-button"
          type="button"
          onClick={() => loginWithRedirect()}
        >
          Log in
        </button>
      )}
    </header>
  );
};

export default Header;
