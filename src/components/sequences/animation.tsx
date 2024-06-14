import { motion } from "framer-motion";
import { ReactNode } from "react";

export const KeyCapVariant = {
    animate: {
        scale: [1, 1.2, 1.05], 
        transition: { ease: 'easeInOut', duration: 0.2 }
    }
};

export default function KeyAnimation({index, error, children}: {index: number, error: boolean, children: ReactNode}) {
    return(
        <motion.div animate={{opacity: [0, 0.5, 1], scale: [1, 1.2, 1], transition: { delay: 0.1*index/2} }} style={{willChange: 'transform', animation: error ? 'shake 0.3s infinite' : 'none'}}>{children}</motion.div>
    )
}