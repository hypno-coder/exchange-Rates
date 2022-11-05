import React, {useEffect} from "react";
import {useAppSelector, useActions} from "../../app/hooks";
import styles from './BaseCurrency.module.css';


function pickCurrency(): string {
	let lang: string = window.navigator.language;
	if(lang! === "ru-RU"){
		return "RUB"
	}else{
		return "USD"
	}
}

const BaseСurrency = (): JSX.Element => {
	const { setBaseCurrency } = useActions()
	const { baseCurrency, currencies } = useAppSelector(state => state.commonReducer)
	const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		sessionStorage.setItem("baseCurrency", e.target.value)
		setBaseCurrency(e.target.value)
	}

	useEffect(() => {
		let lang: string | null = sessionStorage.getItem("baseCurrency")
		lang || sessionStorage.setItem("baseCurrency", pickCurrency())
		lang && setBaseCurrency(lang)
		//eslint-disable-next-line
	}, [])

	return (
				<form className={styles.currencyForm}>
						<select value={baseCurrency} onChange={handlerChange}>
							{[...currencies].map((elem) => <option key={elem.value} value={elem.value} >{elem.value}</option>)}
						</select>
				</form>
	);
};

export default BaseСurrency;