import { Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";
import Planets from "./Routes/Planets";
import { useState } from "react";
import styled from "styled-components";
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
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&family=League+Spartan:wght@400;700&display=swap"
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

// const AnimationDiv = styled.div`
//   display: block;
//   position: fixed;
//   width: 100%;
//   height: 100vh;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   z-index: -1;
//   transform: translatex(calc(100vw - 100%)) translatey(calc(100vh - 100%))
//     rotate(360deg);
// `;

// const Stars = styled.span`
//   position: absolute;
//   left: 50%;
//   top: 45%;
//   width: 5px;
//   height: 2px;
//   background: #e2e2e2;
//   border-radius: 50%;
//   box-shadow: 0 1px 0 5px rgba(254, 254, 255, 0.2),
//     0 1px 0 7px rgba(245, 254, 255, 0.1), 0 1px 21px #cccccb;
//   animation: anim 3s ease-in-out infinite;
//   &:before {
//     content: "";
//     width: 220px;
//     height: 1px;
//     position: absolute;
//     top: 53%;
//     transform: translateY(-45%);
//     background: linear-gradient(90deg, rgb(132 130 130), transparent);
//   }
//   @keyframes anim {
//     0% {
//       transform: rotate(325deg) translateX(0);
//       opacity: 1;
//     }
//     40% {
//       opacity: 0.8;
//     }
//     70% {
//       opacity: 1;
//     }
//     100% {
//       transform: rotate(325deg) translateX(-1400px);
//       opacity: 0;
//     }
//   }
//   &:nth-child(1) {
//     top: 0;
//     right: 0;
//     left: inherit;
//     animation-delay: 1s;
//     animation-duration: 2s;
//   }
//   &:nth-child(2) {
//     top: 0;
//     right: 70px;
//     left: inherit;
//     animation-delay: 3.3s;
//     animation-duration: 5s;
//   }
//   &:nth-child(3) {
//     top: 70px;
//     right: 0px;
//     left: inherit;
//     animation-delay: 5.3s;
//     animation-duration: 6s;
//   }
//   &:nth-child(4) {
//     top: 0;
//     right: 170px;
//     left: initial;
//     animation-delay: 8.7s;
//     animation-duration: 5s;
//   }
// `;
