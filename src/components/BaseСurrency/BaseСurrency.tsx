import React from "react";
import {BaseСurrencyProps} from "./BaseСurrency.props";
import {useAppSelector, useActions} from "../../app/hooks";
import Option from "../Option/Option";
import styles from './BaseСurrency.module.css';


const BaseСurrency = ({ currencies, getCurrency }: BaseСurrencyProps): JSX.Element => {
	const { setBaseCurrency } = useActions()
	const { baseCurrency } = useAppSelector(state => state.rate)

	const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setBaseCurrency(e.target.value)
	}


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
										.map((elem) => <Option value={elem.value} name={elem.name} />)
							}
						</select>

					</label>
				</form>
	);
};

export default BaseСurrency;