import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";
import { MdClose, MdKeyboardDoubleArrowUp } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
    background: rgba(53,57,65,0.6);
    border-radius: 12px;
    padding: 0.8vw 1.7vw;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 25px;
    will-change: transform;

    :before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit; 
        padding: 1.5px;
        background: rgba(53,57,65,0.6);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude; 
    }
    animation: pulse 4s infinite;
`;

export const Header = styled.div`
    font-size: 0.8vw;
    color: white;
    font-family: montserrat;
    font-weight: bold;
`;

export const KeyCapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8vw;
    will-change: transform;
`;

export const KeyCap = styled(motion.div)<{disabled: boolean}>`
    ${props => props.disabled && `
        opacity: 0.4;
    `}

    position: relative;
    display: inline-block;
    min-width: 3.0vw;
    height: 3.0vw;
    border-radius: 0.4208333333333334vw;
    background: linear-gradient(180deg, #282828, #202020);
    box-shadow: inset -0.4166666666666667vw 0 0.4166666666666667vw rgba(0,0,0,0.15),
    inset 0 -0.4166666666666667vw 0.4166666666666667vw rgba(0,0,0,0.25),
    0 0 0 0.10416666666666667vw rgba(0,0,0,0.75),
    0.5208333333333334vw  1.0416666666666667vw 1.3020833333333333vw rgba(0,0,0,0.4);
    overflow: hidden;
    will-change: transform;

    display: flex;
    justify-content: center;
    align-items: center;

    :before {
        content: '';
        position: absolute;
        top: 0.15625vw;
        left: 0.20833333333333334vw;
        bottom: 0.5208333333333334vw;
        right: 0.46875vw;
        background: linear-gradient(90deg, #232323, #4a4a4a);
        border-radius: 0.4208333333333334vw;
        box-shadow: -0.5208333333333334vw -0.5208333333333334vw 0.5208333333333334vw rgba(255,255,255,0.25),
        0.5208333333333334vw 5px 0.5208333333333334vw rgba(0,0,0,0.15);
        border-left: 0.052083333333333336vw solid #0004;
        border-bottom: 0.052083333333333336vw solid #0004;
        border-top: 0.052083333333333336vw solid #2f2f52;
        overflow: hidden;
    }

    div.text {
        position: relative;
        color: #fff;
        font-style: normal;
        font-size: 1vw;
        text-transform: uppercase;
        margin-left: 18%;
        margin-left: -1vw;
        margin-top: -1.3vw;
        text-shadow: 0vw 0vw 0.8vw white;
    }
`;

export const Selected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 0.3vw;
`;

export const ErrorIcon = styled(MdClose)`
    color: red;
    animation: none; 
    filter: none;
`;

export const CheckIcon = styled(BsCheckLg)`
    color: #68D391;
    filter: drop-shadow(0vw 0vw 0.3vw #68D391);
    font-size: 1vw;
    animation: checkShowUp 0.4s; 

    @keyframes checkShowUp {
        0% {
            opacity: 0;
            margin-top: 50vw;
            transform: rotate(360deg);
        }

        100% {
            opacity: 1;
            transform: rotate(0deg);
        }
    }
`;

export const KeyCapIndicator = styled(MdKeyboardDoubleArrowUp)<{error:boolean}>`
    color: #68D391;
    filter: drop-shadow(0vw 0vw 0.3vw #68D391);
    font-size: 1.8vw;

    ${props => props.error && `
        color: red;
        animation: none; 
        filter: none;
    `}
`;