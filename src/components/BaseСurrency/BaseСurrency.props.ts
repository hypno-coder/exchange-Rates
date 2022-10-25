export interface currenciesType {
	name: string
	value: string
}
export interface BaseСurrencyProps {
	currencies: currenciesType[]
	getCurrency: (arg: string) => string
}