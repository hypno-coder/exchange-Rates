import React, {useState, useCallback} from "react";
import Option from "../Option/Option";
import {FormProps} from "./Form.props";
import { useAppSelector } from "../../app/hooks";


const Form = ({ getCurrency }: FormProps): JSX.Element => {
	const { baseCurrency, currencies } = useAppSelector((state) => state.rate)

	const [currency, setCurrency] = useState({
		amountOfCurrency: '',
		fromArea: '',
		toArea: '',
	})

	const amountOfCurrencyHandleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrency({...currency, amountOfCurrency: event.target.value})
	}, [setCurrency, currency])

	const fromAreaHandleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrency({...currency, fromArea: e.target.value})
	}, [setCurrency, currency])

	const toAreaHandleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrency({...currency, toArea: e.target.value})
	}, [setCurrency, currency])

	return (
			<form>
				<input value={currency.amountOfCurrency} onChange={amountOfCurrencyHandleChange} type="number" name="name" />
				<select value={currency.fromArea} onChange={fromAreaHandleChange}>
					{
						[...currencies]
								.sort(
										function(x,y){
											return x.name === getCurrency(baseCurrency) ? -1 : y.name === getCurrency(baseCurrency) ? 1 : 0;
										})
								.map((elem) => <Option value={elem.value} name={elem.name} />)
					}
				</select>
				<input type="button" value=" < > "/>
				<select value={currency.toArea} onChange={toAreaHandleChange}>
					{currencies.map((elem) => <Option value={elem.value} name={elem.name} />)}
				</select>
				<input type="submit" value="Submit" />
			</form>
	);
};

export default Form;