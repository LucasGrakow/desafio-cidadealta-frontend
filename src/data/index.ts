import { GamesInterface, SafeCrackInterfaces, SequencesInterface } from "../interfaces";

export const gamesData:GamesInterface[] = [
	{
		id: 1,
		name: 'Mini Game 1',
		difficulty: 4,
		description: 'Teste sua agilidade pressionando as teclas na ordem correta.'
	},
	{
		id: 2,
		name: 'Mini Game 2',
		difficulty: 3,
		description: 'Gire o cadeado utilizando as teclas A e D, pressione W quando achar que o cadeado está na posição correta. Obs: Se atente aos barulhos!'
	},
]

export const sequencesData:SequencesInterface = {
	time: 520,
	maxKeys: 10,
	usableKeys: [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z' ]
}

export const safecrackData:SafeCrackInterfaces = {
	time: 80,
	sequences: 3
}