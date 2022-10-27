import React from "react";
import {useAppSelector} from "../../app/hooks";
import Form from "../../components/Form/Form";
import BaseСurrency from "../../components/BaseСurrency/BaseСurrency";


const Сonverter = (): JSX.Element => {
	const { currencies, error, convertData, isLoading } = useAppSelector(state => ({
		currencies: state.commonReducer.currencies,
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

	const getCurrency = (code: string) => {
		let currency = currencies.filter(elem => elem.value === code)
		return currency[0]?.name
	}

	return (
			<>
				<div>
					<BaseСurrency currencies={currencies} getCurrency={getCurrency}/>
				</div>
				<div className="styles.converterCurrency">
					<Form getCurrency={getCurrency} />
				</div>
				<div>
					{content}
				</div>
			</>
	);
};

export default Сonverter;