import React from "react";
import {useAppSelector} from "../../app/hooks";
import Form from "../../components/Form/Form";
import Spinner from "../../components/Spinner/Spinner";
import styles from './Сonverter.module.css'
import CN from "classnames";
import Result from "../../components/Result/Result";


const Сonverter = (): JSX.Element => {
	const { error, convertData, isLoading } = useAppSelector(state => ({
		isLoading: state.convertReducer.isLoading,
		convertData: state.convertReducer.convertData,
		error: state.convertReducer.error,
	}))

	let content
	if(convertData){
		content = <Result convertData={convertData}/>
	}if(isLoading){
		content = <Spinner/>
	}if(error){
		content = <p>{error}</p>
	}

	return (
			<div className={styles.convertPageWrapper}>
				<h1>Конвертер валют</h1>
				<section className={CN(styles.formWrapper, {[styles.extendContentField]: content})}>
					<Form />
				</section>
				<section className={CN(styles.resultWrapper, {[styles.contentDisplay]: !content})}>
					{content}
				</section>
			</div>
	);
};

export default Сonverter;