import React, { useEffect, useState } from "react";
import randomIcon from "./random.svg";
import arrow from "./arrow.svg";
import { Link } from "react-router-dom";

const QUOTE = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

function RandomQuotes() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const res = await fetch(QUOTE);
    const data = await res.json();
    // console.log(data);
    setQuotes(data.quote);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  function handleRandom() {
    fetchQuotes();
  }

  return (
    <div className="container">
      <h1>Random</h1>
      <button onClick={handleRandom} className="random">
        random
        <img src={randomIcon} />
      </button>
      <div className="content">
        <h2>{quotes.quoteText}</h2>
        <div>
          <Link to={`/authors/${quotes.quoteAuthor}`}>
            <button className="author">
              <p>
                {quotes.quoteAuthor}
                <br />
                <small>{quotes.quoteGenre}</small>
              </p>
              <img className="arrow" src={arrow} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RandomQuotes;
