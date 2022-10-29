import React, {useEffect} from 'react'
import Spinner from "../../components/Spinner/Spinner";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import styles from './Currency.module.css';
import {fetchExchangeRates} from "../../app/ActionCreators";
import currencyData from "../../app/curencyData";

const Currency = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const { baseCurrency, error, exchangeRates, isLoading } = useAppSelector(state => ({
		baseCurrency: state.commonReducer.baseCurrency,
		exchangeRates: state.exchangeRatesReducer.exchangeRates,
		isLoading: state.exchangeRatesReducer.isLoading,
		error: state.exchangeRatesReducer.error,
	}))

	useEffect(() => {
		const requestData = currencyData.map(elem => elem.value).join(",")
		dispatch(fetchExchangeRates({requestData, baseCurrency}))
	}, [dispatch, baseCurrency])

	let content
	if(exchangeRates){
		content = <>
				{
					currencyData.map(elem => (
							<div className={styles.exchangeRatesWrapper}>
								<div>{elem.value}</div>
								<div>{elem.name}</div>
								<div>{exchangeRates.rates[elem.value].toFixed(2)}</div>
							</div>
					))
				}
	</>
	}else if(isLoading){
		content = <Spinner/>
	}else if(error){
		content = <p>{error}</p>
	}


	return (
			<section className={styles.currencyRateWrapper}>
				<h1>Курсы валют на сегодня</h1>
					{content}
			</section>
	);
};

export default Currency;

