import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map(results=>(
        <h1 key={results.id}>{results.title}</h1>
      ))}
    </div>
  );
}
