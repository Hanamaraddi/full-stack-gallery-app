import React, { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import axios from "axios";
import Spinners from "./components/spinners/Spinners";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("gallery-backend-production.up.railway.app").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <center>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              Gallery
            </a>
          </div>
        </nav>

        {data.length >= 1 ? (
          <center>
            <Content images={data} />
          </center>
        ) : (
          <Spinners />
        )}
      </div>
    </center>
  );
};

export default App;
