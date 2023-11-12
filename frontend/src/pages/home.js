import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [marketData, setMarketData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make an Axios call to your Flask backend
    axios
      .get("http://localhost:5000/search")
      .then((response) => {
        // Set the market data in the state
        setMarketData(response.data);
        // Set loading to false once the data has been fetched
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching market data:", error);
        // Set loading to false once the data has been fetched
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      {/* Logo */}
      <div className="Welcome">
        <img src="Logo(3).png" alt="Main Logo" className="WelcomeLogo" />
      </div>

      {/* Search Bar */}
      <div className="home_content">
        <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Location</button>
        </div>

        {/* Display Loading component while data is loading */}
        {isLoading ? (
          <Loading />
        ) : (
          // Display Market Cards once data is loaded
          <div className="marketCards">
            {marketData.map((market, index) => (
              <div key={index} className="marketCard">
                <h2>{market.name[0]}</h2>
                <p>{market.name[1]}</p>
                <h3>Products:</h3>
                <ul>
                  {market.products.map((product, i) => (
                    <li key={i}>{product}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
