import React, { useState } from "react";

// our source of data
const API = "https://api.kanye.rest/";

// describe what needs to happen to actually get the piece of data we need from the API
const getData = () =>
    fetch(API) // call the fetch function
        .then((result) => result.json()) // wait for the result and extract the JSON data
        .then((json) => json.quote) // optionally, we can narrow of result here to just the quote
        .then((quote) => console.log(quote)); // and log it to the console

// above we just declared a function that gets the data. We need to call it to execute the steps it describes.
getData();

const Solution = () => {
    // the quote will be changing over time, so we need to use state. Otherwise React won't be able to update it with magic :)
    const [quote, setQuote] = useState("initial state of quote");

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
