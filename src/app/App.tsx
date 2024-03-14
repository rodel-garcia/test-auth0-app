import { Outlet } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import Header from "./components/Header";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <em>
          <strong>loading ...</strong>
        </em>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main style={{ padding: "1rem" }}>{isAuthenticated && <Outlet />}</main>
    </div>
  );
};

export default App;
