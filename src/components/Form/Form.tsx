import React, {useState,useEffect, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchConvert} from "../../app/ActionCreators";


const Form = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const {baseCurrency, currencies} = useAppSelector((state) => state.commonReducer)
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
		console.log("sdfg")
		console.log(fromCurrency)
		console.log(toCurrency)
		console.log(amountData)
		console.log("sdfg")
		dispatch(fetchConvert({
			to: toCurrency,
			from: fromCurrency,
			amount: amountData,
		}))
		event.preventDefault()
	}

	const SwapСurrenciesHandleButton = (event: React.MouseEvent<HTMLInputElement>) => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
		event.preventDefault()
	}

	useEffect(() => {
		setFromCurrency(baseCurrency)
		setToCurrency('USD')
	}, [])

	return (
			<form>
				<input value={amountData} onChange={amountOfCurrencyHandleChange} type="number" name="name" />
				<select value={fromCurrency} onChange={fromAreaHandleChange}>
					{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
				</select>
				<input type="button" onClick={SwapСurrenciesHandleButton} value=" < > "/>
				<select value={toCurrency} onChange={toAreaHandleChange}>
					{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
				</select>
				<input onClick={ConvertHandleButton} type="submit" value="Конвертировать" />
			</form>
	);
};

export default Form;