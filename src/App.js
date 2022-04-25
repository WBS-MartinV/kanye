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
        const timer = setInterval(getData, 2000); // instead of executing the function once, we can set up an interval that will call it periodically. React will update our page each time new data gets loaded!
        return () => clearInterval(timer) // if the hook returns a function, it will be called when our component is removed from the page. This is usefull for clearing event handler or intervals which could otherwise cause issues
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
