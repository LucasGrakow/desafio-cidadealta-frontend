const marginVerify = (number: number, reference: number, margin: number) => {
	return number >= reference - margin && number <= reference + margin;
}

const convertNumberToPercentage = (time: number, maxTime: number) => {
	const porcentagem = (time / maxTime) * 100;
	return Math.round(porcentagem);
}

const randomize = () => {
	const min = Math.ceil(50 / 2) * 2;
	const max = Math.floor(360 / 2) * 2;
	const randomValue = Math.floor(Math.random() * (max - min + 2) / 2) * 2 + min;
	return randomValue
}

const generateRandomKeys = (avaiableKeys: any[], amount: number) => {
	let data = []
	for (let i = 0; i < amount; i++) {
	  const randomIndex = Math.floor(Math.random() * avaiableKeys.length);
	  data.push(avaiableKeys[randomIndex]);
	}
	return data;
};

const getBorderColor = (action: string) => {
	const colorsRelated: {[key: string]: string} = {
		['hit']: '#68D391',
		['error']: 'red',
	}
	return colorsRelated[action];
}


export {
	marginVerify,
	convertNumberToPercentage,
	randomize,
	generateRandomKeys,
	getBorderColor
}