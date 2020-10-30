import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ALL_QUOTES = "https://quote-garden.herokuapp.com/api/v2/authors/";
const author = "?page=1&limit=10";

// const ALL_QUOTES = "https://quote-garden.herokuapp.com/api/v2/authors/:authorName?page=1&limit=10";

function QuoteDetails() {
  const [quotation, setQuotation] = useState([]);
  const { id } = useParams();
  console.log(id);

  const fetchMoreQuotes = async () => {
    const res = await fetch(ALL_QUOTES + id + author );
    const result = await res.json();
    console.log(result.quotes);
    setQuotation(result.quotes);
  };

  useEffect(() => {
    fetchMoreQuotes();
  }, []);

  if (!quotation.quoteText) return null;

  return (
    <h1>
      {quotation.map((quote) => {
        <ul>
          <li key={quote.id}>
            {quote.quoteText}
          </li>
          <li>Hello world</li>
        </ul>
      })}
    </h1>
  );
}

export default QuoteDetails;
