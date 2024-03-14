import Header from "../components/Header";

const NotFound = () => (
  <div className="App">
    <Header />
    <em
      style={{
        color: "red",
        display: "block",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      404: Page not found!
    </em>
  </div>
);

export default NotFound;
