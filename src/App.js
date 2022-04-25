import React, { useEffect, useState } from "react";

const API = "https://api.kanye.rest/";

const Solution = () => {
    const [quote, setQuote] = useState("initial state of quote");

    const getData = () =>
        fetch(API)
            .then((result) => result.json())
            .then((json) => json.quote)
            .then((quote) => setQuote(quote));

    useEffect(() => {
        setInterval(getData, 2000); // instead of executing the function once, we can set up an interval that will call it periodically. React will update our page each time new data gets loaded!
    }, []);

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
