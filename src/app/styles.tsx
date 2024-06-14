import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    background: rgb(17, 19, 29);
`;

export const Wrapper = styled.div`
    padding: 16px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px rgb(46, 51, 78);
    background: rgb(22, 25, 34);
    
    svg.frame {
        width: 1296px;
        height: 424px;
        position: absolute;
        pointer-events: none;
    }
`;

export const GamesWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 16px;
    overflow: auto;
    gap: 12px;
`;

export const ResetRankingButton = styled.button`
    border: none;
    padding: 12px 26px;
    border-radius: 12px;
    color: white;
    background: #2E334E;
    font-weight: 600;
`;