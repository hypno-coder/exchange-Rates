export interface DataToConvertType {
	to: string
	from: string
	amount: string
}

interface Info {
	rate: number;
	timestamp: number;
}

export interface ConvertResponseType {
	date: string;
	info: Info;
	query: DataToConvertType;
	result: number;
	success: boolean;
}