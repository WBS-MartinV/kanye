import React from "react";

const API = "https://api.kanye.rest/";

const Solution = () => {
  console.log(API)
  const quote = 'hardcoded quote'  
  
  return <h1>{quote}</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Solution />
    </div>
  );
};

export default App;
