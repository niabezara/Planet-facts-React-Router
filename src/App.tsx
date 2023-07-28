import { Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";
import Planets from "./Routes/Planets";
import { useState } from "react";
import NavBar from "./Components/NavBar";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@300;400;700&family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <NavBar setOpen={setOpen} open={open} handleLinkClick={handleLinkClick} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:planet" element={<Planets />} />
      </Routes>
    </>
  );
}

export default App;
