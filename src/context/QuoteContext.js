import { createContext, useState, useEffect } from 'react'
const QuoteContext = createContext()

export const QuoteProvider = ({ children }) => {

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
    setIsLoading(false)
  };


     return (
    <QuoteContext.Provider
      value={{
        quote,
        author,
        isLoading,
        fetchQuote
        
      }}
    >
      {children}
    </QuoteContext.Provider>
  )
}
export default QuoteContext