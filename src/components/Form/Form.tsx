import React, {useState,useEffect, useCallback} from "react";
import { FormProps } from "./Form.props"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchConvert} from "../../app/ActionCreators";


const Form = ({getCurrency}: FormProps): JSX.Element => {
	const dispatch = useAppDispatch()
	const { baseCurrency, currencies } = useAppSelector((state) => state.commonReducer)
	const [amountData, setAmountData] = useState('')
	const [fromCurrency, setFromCurrency] = useState('')
	const [toCurrency, setToCurrency] = useState('')

	const amountOfCurrencyHandleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setAmountData(event.target.value)
	}, [setAmountData])

	const fromAreaHandleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		setFromCurrency(event.target.value)
	}, [setFromCurrency])

	const toAreaHandleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
		setToCurrency(event.target.value)
	}, [setToCurrency])

	const ConvertHandleButton = (event: React.MouseEvent<HTMLInputElement>) => {
		dispatch(fetchConvert({to: getCurrency(toCurrency), from: getCurrency(fromCurrency), amount: amountData}))
		event.preventDefault()
	}

	const SwapСurrenciesHandleButton = (event: React.MouseEvent<HTMLInputElement>) => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
		event.preventDefault()
	}

	useEffect(() => {
		setFromCurrency(getCurrency(baseCurrency))
		setToCurrency('USD')
	}, [])

	return (
			<form>
				<input value={amountData} onChange={amountOfCurrencyHandleChange} type="number" name="name" />
				<select value={fromCurrency} onChange={fromAreaHandleChange}>
					{
						[...currencies]
								.sort(
										function(x,y){
											return x.name === getCurrency(baseCurrency) ? -1 : y.name === getCurrency(baseCurrency) ? 1 : 0;
										})
								.map((elem) => <option key={elem.value} value={elem.value}>{elem.name}</option>)
					}
				</select>
				<input type="button" onClick={SwapСurrenciesHandleButton} value=" < > "/>
				<select value={toCurrency} onChange={toAreaHandleChange}>
					{currencies.map((elem) => <option key={elem.value} value={elem.value} >{elem.name}</option>)}
				</select>
				<input onClick={ConvertHandleButton} type="submit" value="Конвертировать" />
			</form>
	);
};

export default Form;