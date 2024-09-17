import styled, { keyframes } from 'styled-components';


const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
`;

export const Holder = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: ${props => (props.isOpen ? '700px' : '60px')};
  min-height: ${props => (props.isOpen ? '300px' : '60px')};
  transition: width 0.3s ease, height 0.3s ease;
  background: rgba(255, 255, 255, 0.4); 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: ${props => (props.isOpen ? '10px' : '0')};
  box-sizing: border-box;
  backdrop-filter: blur(10px); 
  border: 1px solid rgba(0, 0, 0, 0.1); 
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    button {
      width: 30%;
      border: 1px solid #f9ae3f;
      color: black;
      background-color: white;
      border-radius: 12px; 
      padding: 10px 20px; 
      font-size: 16px; 
      cursor: pointer; 
      transition: background-color 0.1s ease, transform 0.1s ease; 

      &:hover {
        background-color: #FFA726; 
        transform: scale(1.02); 
        color: white;
      }

      &:active {
        background-color: #FB8C00; 
        transform: scale(1);
      }

      &:focus {
        outline: none; 
      }
    }
  }
`;

export const ToggleButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${props => (props.isOpen ? '' : 'flex-end')};
  margin-right: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  height: 100px; 
  border: 1px solid rgba(0, 0, 0, 0.2); 
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  background: rgba(255, 255, 255, 0.4); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* sombra leve */
  margin-bottom: 10px;
  backdrop-filter: blur(8px); 
`;

export const WelcomeMessage = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
  width: 100%;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-bottom: 10px; 
  margin-top: 10px; 

  svg {
    /* animation: ${shake} 0.6s infinite;  */
  }
`;

export const Language = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;