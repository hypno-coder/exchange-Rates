import React, {useEffect} from "react";
import {useActions} from "../../app/hooks";
import Form from "../../components/Form/Form";
import { useAppSelector } from "../../app/hooks";
import BaseСurrency from "../../components/BaseСurrency/BaseСurrency";

function pickCurrency(): string {
	let lang: string = window.navigator.language;
	if(lang === "ru-RU"){
		return "810"
	}else{
		return "840"
	}
}

const Сonverter = (): JSX.Element => {
	const { setBaseCurrency } = useActions()
	const { currencies } = useAppSelector((state) => state.rate)
	const getCurrency = (code: string) => {
		let currency = currencies.filter(elem => elem.value === code)
		return currency[0].name
	}

	useEffect(() => {
		setBaseCurrency(pickCurrency())
	}, [])

	return (
			<>
				<div>
					<BaseСurrency currencies={currencies} getCurrency={getCurrency}/>
				</div>
				<div className="styles.converterCurrency">
					<Form getCurrency={getCurrency} />
				</div>
			</>
	);
};

export default Сonverter;