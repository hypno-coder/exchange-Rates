import React, {useState,useEffect, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchConvert} from "../../app/ActionCreators";
import styles from './Form.module.css'


const Form = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const {currencies} = useAppSelector((state) => state.commonReducer)
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
		if(amountData === ''){
			alert('укажите сумму')
		}else {
			dispatch(fetchConvert({
				to: toCurrency,
				from: fromCurrency,
				amount: amountData,
			}))
		}
		event.preventDefault()
	}

	const SwapСurrenciesHandleButton = (event: React.MouseEvent<HTMLInputElement>) => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
		event.preventDefault()
	}
	useEffect(() => {
		let baseCurrency: string | null = sessionStorage.getItem('baseCurrency')
		setFromCurrency(baseCurrency!)
		setToCurrency('USD')
		//eslint-disable-next-line
	}, [])

	return (
				<form className={styles.currencyForm}>
					<input className={styles.amountCurrency} value={amountData}
					       onChange={amountOfCurrencyHandleChange} type="number" name="name" />
					<div>
					<select value={fromCurrency} onChange={fromAreaHandleChange}>
						{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
					</select>
					<input type="button" onClick={SwapСurrenciesHandleButton} value="<=>" />
					<select value={toCurrency} onChange={toAreaHandleChange}>
						{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
					</select>
					</div>
					<input className={styles.convertButton}
					       onClick={ConvertHandleButton} type="submit" value="перевести" />
				</form>
	);
};

export default Form;