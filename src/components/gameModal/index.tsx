import * as S from './styles';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { GamesInterface } from "../../interfaces";
import { AnimatePresence } from "framer-motion";
import Ranking from "../ranking";
import Sequences from '../sequences/index';
import SafeCrack from '../safecrack/index';
import { modalVariants } from './animation';

interface InfoText {
    message: string;
    buttonMessage: string;
}

export default function Modal({selectedGame, setSelectedGame}: { selectedGame: GamesInterface|undefined, setSelectedGame: Dispatch<SetStateAction<GamesInterface | undefined>>}) {
    const [runningGame, setRunningGame] = useState<number|boolean>(false);
    const [isRankOpen, setRankOpen] = useState<boolean>(false);
    const [infoText, setInfoText] = useState<InfoText>();

    useEffect(() => {
        handleInfoText('default')
    }, [])

    const handleClose = () => {
        setSelectedGame(undefined);
        setRunningGame(false);
        setRankOpen(false);
        handleInfoText('default')
    }

    const handleStart = () => {
        setRankOpen(false);
        setRunningGame(selectedGame?.id ?? 1)
    }

    const handleMinigameResult = (status: string, startTime: Date) => {
        setRunningGame(false);
        if (status !== 'win') return handleInfoText(status);

        const date = new Date()
        const differenceDate = new Date(date.getTime() - startTime.getTime());
        const rankStorage = JSON.parse(String(localStorage.getItem(String(selectedGame?.id)))) ?? []
        const data = {
            rawTime: differenceDate,
            date: date
        }

        rankStorage.push(data);
        localStorage.setItem(String(selectedGame?.id), JSON.stringify(rankStorage));
        setInfoText({
            message: `Boa! Seu tempo foi de ${differenceDate.getSeconds()}s e ${differenceDate.getMilliseconds()}ms`,
            buttonMessage: ' Jogar Novamente'
        }); 
    }

    const handleInfoText = (status: string) => {
        type statusType = {[key: string]: InfoText};
        const statusRelated: statusType = {
            ['default']: {
                message: '',
                buttonMessage: 'Iniciar'
            },
            ['loss']: {
                message: 'Você falhou!',
                buttonMessage: 'Tentar Novamente'
            },
        }
        setInfoText(statusRelated[status]);
    }
     
    return(
        <AnimatePresence>
            {selectedGame &&
                <S.ModalWrapper>
                    <S.Modal
                        animate={modalVariants.visible}
                        exit={modalVariants.hidden}
                    >   
                        <S.CloseIcon onClick={handleClose}/>
                        <S.ModalContent>
                            <span className="title">{selectedGame.name}</span>
                            {infoText?.message ? <span className="status">{infoText.message}</span> : <span className="description">{selectedGame.description}</span>}
                        </S.ModalContent>

                        {!runningGame ?
                            <S.ButtonsContainer>
                                <button onClick={() => setRankOpen(prevState => !prevState)}>{!isRankOpen ? 'Abrir Ranking' : 'Fechar Ranking'}</button>
                                <button onClick={handleStart}>{infoText?.buttonMessage ?? 'Iniciar'}</button>
                            </S.ButtonsContainer>
                        :
                            <Fragment>
                                {runningGame == 1 && <Sequences handleMinigameResult={handleMinigameResult}/>}
                                {runningGame == 2 && <SafeCrack handleMinigameResult={handleMinigameResult}/>}
                            </Fragment>
                        }
                        {isRankOpen && <Ranking id={selectedGame.id}/>}
                    </S.Modal>
                </S.ModalWrapper>
            }
        </AnimatePresence>
    )
}