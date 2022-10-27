import React from "react";
import {BaseСurrencyProps} from "./BaseСurrency.props";
import {useAppSelector, useActions} from "../../app/hooks";
import styles from './BaseСurrency.module.css';


function pickCurrency(): string {
	let lang: string = window.navigator.language;
	if(lang! === "ru-RU"){
		return "810"
	}else{
		return "840"
	}
}

const BaseСurrency = ({ currencies, getCurrency }: BaseСurrencyProps): JSX.Element => {
	const { setBaseCurrency } = useActions()
	const { baseCurrency } = useAppSelector(state => state.commonReducer)

	const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		sessionStorage.setItem("baseCurrency", e.target.value)
		setBaseCurrency(e.target.value)
	}
	let lang: string | null = sessionStorage.getItem("baseCurrency")
	lang ? setBaseCurrency(lang) : sessionStorage.setItem("baseCurrency", pickCurrency())

	return (
				<form className={styles.arg}>
					<label>
						Базовая Валюта:
						<select value={getCurrency(baseCurrency)} onChange={handlerChange}>
							{
								[...currencies]
										.sort(
												function(x,y){
													return x.name === getCurrency(baseCurrency) ? -1 : y.name === getCurrency(baseCurrency) ? 1 : 0;
												})
										.map((elem) => <option key={elem.value} value={elem.value} >{elem.name}</option>)
							}
						</select>

					</label>
				</form>
	);
};

export default BaseСurrency;