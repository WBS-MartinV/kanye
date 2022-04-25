import React, { useState } from "react";

// our source of data
const API = "https://api.kanye.rest/";

const Solution = () => {
  console.log(API)
  // the quote will be changing over time, so we need to use state. Otherwise React won't be able to update it with magic :)
  const [quote, setQuote] = useState('initial state of quote')  
  
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
