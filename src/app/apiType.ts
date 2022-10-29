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

export interface DataCurrencyType {
	requestData: string;
	baseCurrency: string;
}

export interface Rates {
	[key: string]: number;
}

export interface CurrencyResponseType {
	base: string;
	date: string;
	rates: Rates;
	success: boolean;
	timestamp: number;
}
