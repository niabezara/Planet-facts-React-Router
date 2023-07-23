import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Antonio','League Spartan', sans-serif;
    
  }
  html{
    font-size: 62.5%;
  }
  #root{
    height: 100vh;
  
  }
  @keyframes moveStars {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
  body {
    background-image: url('/background-stars.svg');
    animation: moveStars 20s linear infinite;
    background-size: cover;
    background-color: #11112B;
    color: #fff;
    min-height: 100vh;
    font-family: 'Antonio', sans-serif;
    overflow: hidden;
  }
  

  `;
