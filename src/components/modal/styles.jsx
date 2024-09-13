import styled from 'styled-components';

export const ModalOverlay = styled.div`
    display: ${props => (props.$show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    width: 80%;
    min-width: 500px;
    min-height: 500px;
    border-radius: 8px;
    position: relative;
    h2{
        border-bottom: 2px solid black;
    }
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 500px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

`;

export const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid ${props => (props.active ? 'black' : 'lightgray')};;
    color: ${props => (props.active ? 'black' : 'lightgray')}; /* Muda a cor do texto do botão baseado na prop active */
    font-weight: ${props => (props.active ? 'bold' : 'normal')}; /* Destaca o botão ativo */
`;
