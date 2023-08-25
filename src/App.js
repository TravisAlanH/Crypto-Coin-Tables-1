import "./App.css";
import React from "react";
import Axios from "axios";
import DataBox from "./Components/DataBox";

function App() {
  const [data, setData] = React.useState();
  var newData;

  async function getData() {
    const response = await Axios.get("https://api.coingecko.com/api/v3/coins/");
    let inputData = await response.data;
    setData(inputData);
    return inputData;
  }

  React.useEffect(() => {
    // Axios.get("https://api.coingecko.com/api/v3/coins/").then((response) => {
    //   setData(response.data);
    // });
    getData();
    newData = <DataBox inputData={data[0].id} />;
  }, []);

  return (
    <div className="App">
      {/* <button onClick={get}>Data</button> */}
      {newData}
    </div>
  );
}

export default App;

// "https://api.coingecko.com/api/v3/coins/"

// "https://api.minerstat.com/v2/coins"
