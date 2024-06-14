import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle<any>`
    :root {
        --success: #79cd7d;
        --failure: #c54c4c;
        --orange: rgba(255,161,0, 1);
        --green: rgba(198,239,37, 1);

        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }

    body {
        width: 100%;
        margin: 0;
        overflow: hidden;
        user-select: none;
    }

    body, input, textarea, button, select {
        font: 400 1rem "Montserrat", sans-serif;
    }

    button {
        cursor: pointer;
    }

    @keyframes fadeIn {
        from {
            transform: translateX(-10px);
            opacity:0;
            display: none;

            }
        to{
            transform: translateX(0px);
            opacity:1;
            display: block;
        }
    }
	
    @keyframes goUp {
        from {
            transform: scale(0);
            opacity:0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }	

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(255, 0 ,0 , 0.3);
            box-shadow: 0 0 0 0 rgba(255, 0 ,0 , 0.4);
        }
        70% {
            -moz-box-shadow: 0 0 0 10px rgba(255,0,0, 0);
            box-shadow: 0 0 0 1vw rgba(255,0,0, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(255,0,0, 0);
            box-shadow: 0 0 0 0 rgba(255,255,0, 0);
        }
    }
`;
 
export default GlobalStyle;