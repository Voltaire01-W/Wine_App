import React, { useState } from "react";
import WineList from "./WineList";

function App() {
  const [wineData, setWineData] = useState(null);
  const [food, setFood] = useState('');

  function getWineData() {
    fetch(
      `https://api.spoonacular.com/food/wine/pairing?apiKey=e64051569f7746129b487e04e34f71ef&food=${food}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWineData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setFood(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="text"
          placeholder="Food (e.g. Steak)"
          onChange={handleChange}
        />
        <button onClick={getWineData}>Get Wine Pairing</button>
      </section>
      {wineData && <WineList wineData={wineData} />}
    </div>
  );
}

export default App;