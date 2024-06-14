
import * as S from './styles';
import { useEffect, useState } from 'react';
import { sequencesData } from '../../data';
import { convertNumberToPercentage, generateRandomKeys } from '../../utils';
import Timebar from '../timebar';
import KeyAnimation, { KeyCapVariant } from './animation';

export default function Sequences({handleMinigameResult}: {handleMinigameResult: (status: string, startTime: Date) => void}) {
	const [startTime] = useState<Date>(new Date());
	const [keys, setKeys] =  useState<string[]>(() => {
		return generateRandomKeys(sequencesData.usableKeys, sequencesData.maxKeys)
	})
	const [keyIndex, setKeyIndex] = useState<number>(0);
	const [time, setTime] = useState<number>(sequencesData.time);
	const [maxTime] = useState<number>(time);
	const [error, setError] = useState<boolean>(false);

	const restartMinigame = () => {
		setError(true);
		setTimeout(() => {
			setError(false);
			setTime(time-5);
			setKeys(generateRandomKeys(sequencesData.usableKeys, sequencesData.maxKeys))
			setKeyIndex(0);
		},500)
	}

	const handleKeyPress = (event: KeyboardEvent) => {
		if (keys[keyIndex].toLowerCase() !== event.key.toLowerCase()) {
			return restartMinigame()
		} 
		if(!keys[keyIndex+1]) {
			handleMinigameResult('win', startTime);
		}
		setKeyIndex(keyIndex + 1)
	};

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);

	useEffect(() => {
		if(time <= 0) {
			return handleMinigameResult('loss', startTime);
		}
		const interval = setInterval(() => {
		  	setTime((time) => time - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [time, setTime]);

	return (
		<S.Container>
			<Timebar percentage={convertNumberToPercentage(time, maxTime)} />
			<S.KeyCapContainer>
				{keys.map((item: string, index: number) => 
					<KeyAnimation error={error} index={index}>
						{index === keyIndex 
						?
							<S.Selected>
								<S.KeyCap disabled={false} animate={KeyCapVariant.animate}>
									<div className="text">{error ? <S.ErrorIcon/> : item}</div>
								</S.KeyCap>
								<S.KeyCapIndicator error={error} />
							</S.Selected>
						:
							<S.KeyCap disabled={true}>
								<div className="text">{error ? <S.ErrorIcon/> : (index < keyIndex) ? <S.CheckIcon /> : item}</div>
							</S.KeyCap>
						}
					</KeyAnimation>
				)}
			</S.KeyCapContainer>
		</S.Container>
	);
}
