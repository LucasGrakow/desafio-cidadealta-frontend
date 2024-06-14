import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 410px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    width: 100%;
    text-align: center;
    padding: 8px 0;
    background: rgba(0,0,0,0.3);

    span {
        color: rgb(74, 197, 243);
        font-size: 22px;
        font-weight: 600;
    }
`;

export const Filter = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    background: rgba(0,0,0,0.5);
    
    button {
        padding: 8px 0;
        width: 100%;
        border: none;
        outline: none;
        color: rgb(74, 197, 243);
        font-weight: 600;
        background: transparent;
    }
`;

export const FilterIndicator = styled.div`
    width: 5%;
    height: 5.8px;
    position: absolute;
    background: var(--green);
    transform: translateX(-50%);
    transition: ease 0.3s;
`;

export const List = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: white;
`;

export const ListBox = styled.div`
    width: 100%;
    height: 45px;
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
`;