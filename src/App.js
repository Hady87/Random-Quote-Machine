import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import QuoteBox from "./components/QuoteBox";

import { QuoteProvider } from "./context/QuoteContext";

function App() {
  return (
    <QuoteProvider>
      <Router>
        <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <QuoteBox />
            </>
          }
        ></Route>
        </Routes>
      </Router>
    </QuoteProvider>
  )
}

export default App;
