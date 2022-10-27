import React from "react";
import styles from './Сonverter.module.css'
import {useAppSelector} from "../../app/hooks";
import Form from "../../components/Form/Form";
import BaseСurrency from "../../components/BaseСurrency/BaseСurrency";


const Сonverter = (): JSX.Element => {
	const { error, convertData, isLoading } = useAppSelector(state => ({
		isLoading: state.convertReducer.isLoading,
		convertData: state.convertReducer.convertData,
		error: state.convertReducer.error,
	}))

	let content
	if(convertData){
		content = (
				<div>{convertData.result}</div>
		)
	}if(isLoading){
		content = (
				<div>идет загрузка...</div>
		)
	}if(error){
		content = (
				<div>произошла ошибка: {error}</div>
		)
	}

	return (
			<div className={styles.convertWrapper}>
				<section className={styles.baseCurrencyWrapper}>
					<BaseСurrency/>
				</section>
				<section className={styles.formWrapper}>
					<Form />
				</section>
				<section className={styles.resultWrapper}>
					{content}
				</section>
			</div>
	);
};

export default Сonverter;