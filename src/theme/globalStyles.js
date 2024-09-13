  import { createGlobalStyle } from 'styled-components';
  
  export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    display: flex;
    background-color: RGB(245, 245, 245);
    color: RGB(44, 44, 44);
    scroll-behavior: smooth;
    justify-content: center;
    align-items: center;
    width: 100%;
   
  }

  a {
      color: inherit;
      text-decoration: none;
      background: none; 
      border: none; 
      padding: 0; 
      margin: 0;
      
      ;
  }

  .main{
    display: flex;
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
  
  }
  h3{
    font-size: 1.8rem;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

   }

  `;
  
