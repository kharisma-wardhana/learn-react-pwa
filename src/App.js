import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrive from "./components/Arrive";
import Client from "./components/Client";
import Sidemenu from "./components/Sidemenu";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function () {
    (async function () {
      const response = await fetch(
        "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY,
          },
        }
      );
      const { nodes } = await response.json();
      setItems(nodes);

      const scriptCarousel = document.createElement("script");
      scriptCarousel.src = "/carousel.js";
      scriptCarousel.async = false;
      document.body.appendChild(scriptCarousel);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Browse />
      <Arrive items={items} />
      <Client />
      <Sidemenu />
      <Footer />
    </div>
  );
}

export default App;
