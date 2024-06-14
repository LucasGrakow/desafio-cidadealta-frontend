import { useEffect, useState } from 'react';
import * as S from './styles';
import moveSoundAudio from '../../assets/lockCracking/moveSound.mp3'
import unlockIndicatorSoundAudio from '../../assets/lockCracking/unlockIndicatorSound.mp3'
import unlockSoundAudio from '../../assets/lockCracking/unlockSound.mp3'
import { convertNumberToPercentage, getBorderColor, marginVerify, randomize } from '../../utils';
import { safecrackData } from '../../data';
import lockImage from '../../assets/lockCracking/lock.png'
import Timebar from '../timebar';

export default function SafeCrack({handleMinigameResult}: {handleMinigameResult: (status: string, startTime: Date) => void}) {
	const [startTime] = useState<Date>(new Date());

	const [time, setTime] = useState<number>(100);
	const [maxTime, setMaxTime] = useState<number>(100);
	const [sequences, setSequnces] = useState<number>(4);
	const [actualSequence, setActualSequence] = useState<number>(0);
	const [lockRotate, setLockRotate] = useState<number>(0);
	const [correctNumber, setCorrectNumber] = useState<number>(0);
	const [rotateLength] = useState<number>(2);
	const [lastClick, setLastClick] = useState(0);
	
	const [checking, setChecking] = useState<boolean>(false);
	const [status, setStatus] = useState<string>('');

	let moveSound = new Audio(moveSoundAudio)
	let unlockIndicator = new Audio(unlockIndicatorSoundAudio)
	let unlockAudio = new Audio(unlockSoundAudio)

	useEffect(() => {
		const props = safecrackData
		setActualSequence(0);
		setSequnces(props.sequences);
		setTime(props.time);
		setMaxTime(props.time);
		setCorrectNumber(randomize());
	}, [])

	useEffect(() => {
		if(time <= 0) {
			return handleMinigameResult('loss', startTime);
		}
		const interval = setInterval(() => {
		  	setTime((time) => time - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [time, setTime]);

	const handleKeyPress = (event: KeyboardEvent) => {
		const now = Date.now();
		const minimumDelay = 50;
		if (now - lastClick < minimumDelay) return;
		setLastClick(now);
		const previousRotation = lockRotate;
		const key = event.key.toLowerCase();
		if (key === 'a' && lockRotate > 0) {
			setLockRotate(lockRotate - rotateLength);
		} else if (key === 'd') {
			setLockRotate(lockRotate >= 360 ? 0 : lockRotate + rotateLength);
		}
		if (key === 'a' || key === 'd') {
			moveSound.play();
			const newRotation = lockRotate + (key === 'a' ? -rotateLength : rotateLength);
			if (newRotation === correctNumber && previousRotation !== newRotation) unlockIndicator.play();
		}

		if (key === 'w') {
			setChecking(true);
			setTimeout(() => {
				if (marginVerify(lockRotate, correctNumber, 2)) {
					handleColor('hit');
					unlockAudio.play();
					setTimeout(() => {
						handleMinigameResult('win', startTime);
					},800)
				} else {
					handleColor('error');
					setTime(time -2)
					handleLose()
					unlockIndicator.play();
				}
				setChecking(false)
			}, 250)
		}
	};

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handleKeyPress]);


	const handleLose = () => {
		setLockRotate(0);
		setCorrectNumber(randomize())
		if(actualSequence > 0) {
			setActualSequence(actualSequence -1)
		}
	}

	const handleColor = (type: string) => {
		setStatus(type);
		setTimeout(() => {
			setStatus('');
		}, 900)
	}

	return (
		<S.Container>
			<Timebar percentage={convertNumberToPercentage(time, maxTime)} />
			<S.SafeLock
				animate={{opacity: 1, transition: { delay: 0.3} }} initial={{ opacity: 0 }} style={{animation: checking ? 'shake 0.4s infinite' : 'none'}}
			>
				<div className="mark" />
				<img 
					style={{
						transform: `rotate(-${lockRotate}deg)`,
						filter: `drop-shadow(0 0 0.8vw ${getBorderColor(status)})`,
					}}
					src={lockImage} 
					draggable='false'
				/>
			</S.SafeLock>
		</S.Container>
	);
}