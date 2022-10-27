export interface DataToConvertType {
	to: string
	from: string
	amount: string
}

export interface FormProps {
	getCurrency?: (arg: string) => string
	dataToConvert?: DataToConvertType
	setDataToConvert?: (arg: DataToConvertType) => void
}
