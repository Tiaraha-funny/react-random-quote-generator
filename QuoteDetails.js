import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const ALL_QUOTES = "https://quote-garden.herokuapp.com/api/v2/authors/";
const AUTHOR = "?page=1&limit=10";

function QuoteDetails() {
  const [quotation, setQuotation] = useState([]);
  const { authorName } = useParams();
  console.log(authorName);

  const fetchMoreQuotes = async () => {
    const res = await fetch(ALL_QUOTES + authorName + AUTHOR);
    console.log(res);
    const result = await res.json();
    console.log(result.quotes);
    setQuotation(result.quotes);
  };

  useEffect(() => {
    fetchMoreQuotes();
  }, []);

  return (
    <div className="main-quote">
      <h2 className="name">{authorName}</h2>
    <h3>
      {quotation.map((quote) => {
        return (
          <ul>
            <li key={quote.authorName}>"{quote.quoteText}"</li>
          </ul>
        );
      })}
    </h3>
    </div>
  );
}

export default QuoteDetails;
