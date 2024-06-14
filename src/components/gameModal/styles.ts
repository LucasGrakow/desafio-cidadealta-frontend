import { motion } from "framer-motion";
import styled from "styled-components";
import { MdClose } from "react-icons/md";


export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(18px);
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform;

`;

export const Modal = styled(motion.div)`
    padding: 28px 16px;
    background: rgb(22, 25, 34);
    border: solid 2px #2E334E;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    border-radius: 4px;
`;

export const CloseIcon = styled(MdClose)`
    font-size: 32px;
    color: white;
    position: absolute; 
    right: 8px;
    top: 8px;
    cursor: pointer;
    transition: ease 0.5s;

    &:hover {
        transform: scale(1.2);
    }
`;
export const ButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;    
    gap: 16px;

    button {
        border-radius: 6px;
        border: none;
        padding: 8px 12px;
        font-weight: 600;
    }
`;

export const ModalContent = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    .title {
        font-size: 28px;
        font-weight: 700;
        text-transform: uppercase;
    }

    .description {
        text-align: center;
        width: 100%;
        color: rgba(255,255,255,0.8);
    }

    .status {
        font-size: 16px;
    }
`;