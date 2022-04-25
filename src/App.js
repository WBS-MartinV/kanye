import React, { useState } from "react";

// our source of data
const API = "https://api.kanye.rest/";

const Solution = () => {
    // the quote will be changing over time, so we need to use state. Otherwise React won't be able to update it with magic :)
    const [quote, setQuote] = useState("initial state of quote");

    // instead of logging the data to the console, we want to update our state!
    // but our setQuote function is defined here, so we need to move our getData function here, or provide access to it via a parameter
    const getData = () =>
        fetch(API) // call the fetch function
            .then((result) => result.json()) // wait for the result and extract the JSON data
            .then((json) => json.quote) // optionally, we can narrow of result here to just the quote
            .then((quote) => setQuote(quote)); // and log it to the console

    // but this will cause an infinite update loop :(
    getData();

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
