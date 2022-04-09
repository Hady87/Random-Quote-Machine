import { useContext } from "react";
import QuoteContext from "../context/QuoteContext";
import { FaTwitter } from "react-icons/fa";
import Spinner from "./Spinner";

function QuoteBox() {
  const { isLoading, quote, author, fetchQuote } = useContext(QuoteContext);
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div id="quote-box">
        <div id="text">
          <div>{`"${quote}"`}</div><br/>
          <div id="author">{`-${author}`}</div>
        </div>

        
        <div id="boxButton">
          <div id="new-quote">
            <button onClick={fetchQuote} type="submit" className="btnQote">
              New quote
            </button>
          </div>

          <div id="tweet-quote">
            <a
              href={`https://twitter.com/intent/tweet?text="${quote}" %0D%0A-${author}`}
              target="_blank"
            >
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteBox;
