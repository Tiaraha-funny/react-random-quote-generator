import React, { useEffect, useState } from "react";

const QUOTE = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

function App() {
  
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchQuotes() {
      const res = await fetch(QUOTE);
      const data = await res.json();
      console.log(data);
      setQuotes(data.quote);
    }
  
    fetchQuotes();
  }, []);

  function handleRandom() {
    console.log("Random the quotes");
    const randomNum = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomNum];
    setQuotes(randomQuote.quote)
  }
  
  return (
    <div>
      <h2>{quotes.quoteText}</h2>
      <button onClick={handleRandom}>{quotes.quoteAuthor}</button>
    </div>
  );
}
export default App;
