import { useState, useContext, useEffect } from "react";
import { FaTwitter, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
//import { Link } from 'react-router-dom'
function QuoteBox() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect((quote) => {
    fetchQuote();
    
  }, []);

  const fetchQuote = async () => {
    const response = await fetch(`https://api.quotable.io/random`);
    const data = await response.json();

    setQuote(data.content);
    setAuthor(data.author);
    console.log(data);
    //setIsLoading(false)
  };
  return (
    <>
      <div id="quote-box">
        <div id="text">
          <p>{`"${quote}"`}</p>
        </div>
        <div id="author">{`-${author}`}</div>
        <div id="boxButton">
          <div id="new-quote">
            <button onClick={fetchQuote} type="submit" className="btnQote">
              New quote
            </button>
          </div>

          <div id="tweet-quote">
            <a href="twitter.com/intent/tweet" target="_blank">
              {" "}
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteBox;
