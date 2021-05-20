import React from "react";
import Wine from "./Wine";

export default function WineList({ wineData }) {
  const { pairingText, pairedWines, productMatches } = wineData;

  return (
    <main>
      <section className="App">
        <ul>
          <li>First Choice: {pairedWines[0].charAt(0).toUpperCase() + pairedWines[0].slice(1)}</li>
          <li>Second Choice: {pairedWines[1].charAt(0).toUpperCase() + pairedWines[1].slice(1)}</li>
          <li>Third Choice: {pairedWines[2].charAt(0).toUpperCase() + pairedWines[2].slice(1)}</li>
        </ul>
      </section>
      <div className="text-field">{pairingText}</div>

      <section className="wine">
        {productMatches.map((product) => {
          return <Wine key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
}