import { DataToConvertType } from "../components/Form/Form.props";

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