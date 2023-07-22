import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";
import Planets from "./Routes/Planets";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:planet" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
