import "./App.css";
import React from "react";
import Axios from "axios";

function App() {
  const [data, setData] = React.useState(true);

  React.useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/").then((response) => {
      setData(response.data);
    });
  }, []);

  // const getData = () => {
  //   Axios.get("https://api.coingecko.com/api/v3/coins/").then((response) => {
  //     setData(response);
  //   });
  // };

  return (
    <div className="App">
      {/* <button onClick={ }>Data</button> */}
      {console.log(data[0])}
      <p>{data[0].id}</p>
    </div>
  );
}

export default App;

// "https://api.coingecko.com/api/v3/coins/"

// "https://api.minerstat.com/v2/coins"
