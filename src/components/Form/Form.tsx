import React, {useState,useEffect, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchConvert} from "../../app/ActionCreators";
import styles from './Form.module.css'
import CN from "classnames";

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
		setFromCurrency(baseCurrency)
		setToCurrency('USD')
	}, [])

	return (
			<section className={styles.formWrapper}>
				<form>
					<input className={styles.inputCurrency} value={amountData}
					       onChange={amountOfCurrencyHandleChange} type="number" name="name" />
					<select className={styles.currencyStyle} value={fromCurrency} onChange={fromAreaHandleChange}>
						{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
					</select>
					<input className={styles.swapButton} type="button" onClick={SwapСurrenciesHandleButton} value=" < = > "/>
					<select className={styles.currencyStyle} value={toCurrency} onChange={toAreaHandleChange}>
						{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
					</select>
					<input className={CN(styles.currencyStyle, styles.convertButton)}
					       onClick={ConvertHandleButton} type="submit" value="перевести" />
				</form>
			</section>
	);
};

export default Form;