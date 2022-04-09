import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import QuoteBox from "./components/QuoteBox";
import Footer from "./components/Footer";
import { QuoteProvider } from "./context/QuoteContext";
import "./App.css";


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
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </QuoteProvider>
  );
}

export default App;
