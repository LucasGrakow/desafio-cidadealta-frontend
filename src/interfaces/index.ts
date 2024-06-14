
export interface GamesInterface {
	id: number;
	name: string;
	difficulty: number;
	description: string;
}

export interface SequencesInterface {
	time: number;
	maxKeys: number;
    usableKeys: string[];
}

export interface SafeCrackInterfaces {
	time: number;
	sequences: number;
}