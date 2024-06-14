import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    background: rgba(53,57,65,0.6);
    border-radius: 12px;
    padding: 0.8vw 2.7vw;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 1vw;
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

export const SafeLock = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.3vw;
    will-change: transform; 

    .mark {
        width: 0.1vw;
        height: 0.5vw;
        background: rgba(255,255,255,0.6);

        border-radius: 5vw;
        position: absolute;
        z-index: 1;
        margin-top: -9.7vw;
    }

    img {
        width: 11vw;
        height: 11vw;
        filter: drop-shadow(0 0 0.8vw rgba(0, 0, 0, 1));
        transition: ease 0.2s;
        border: solid 0.2vw black;
        border-radius: 100%;
    }
`;

export const LockerContainer = styled(motion.div)`
    display: flex;
    gap: 1vw;

    img {
        width: 11vw;
        filter: drop-shadow(0 0 0.8vw rgba(0, 0, 0, 1));

        &.locker {
            width: 2vw;
        }

        &.lockerOpen {
            width: 2vw;
        }
    }
`