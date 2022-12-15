import "./App.css";
import React from "react";
import Axios from "axios";
import DataBox from "./Components/DataBox";
import axios from "axios";

function App() {
  const [data, setData] = React.useState();
  // var newData;

  const getData = async () => {
    const res = await axios({
      method: "get",
      url: "https://api.coingecko.com/api/v3/coins/",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
    setData(res.data);
  };

  // async function getData() {
  //   const response = await Axios.get("https://api.coingecko.com/api/v3/coins/");
  //   let inputData = await response.data;
  //   setData(inputData);
  //   return inputData;
  // }

  // newData = <DataBox inputData={data} />;

  React.useEffect(() => {
    // Axios.get("https://api.coingecko.com/api/v3/coins/").then((response) => {
    //   setData(response.data);
    // });
    // getData();
    getData();
  }, [data]);

  return (
    <div className="App">
      {/* <button onClick={get}>Data</button> */}
      {console.log(data)}
      {/* {newData} */}
    </div>
  );
}

export default App;

// "https://api.coingecko.com/api/v3/coins/"

// "https://api.minerstat.com/v2/coins"
