import styled from "styled-components";

export const Main = styled.div`
    height: 310px;
    width: 230px;
    border-radius: 12px;
    background: radial-gradient(#2E334E , rgba(0,0,0,0.5));
    display: flex;
    flex-direction: column;
    color: white;
    border: solid 2px rgba(111,111,111,0.2);
`;

export const Header = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 18px;
    text-transform: uppercase;
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button.playButton {
        border: none;
        padding: 8px 32px;
        border-radius: 12px;
        font-weight: 800;
        cursor: pointer;
    }
`;