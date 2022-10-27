import { PayloadAction } from "@reduxjs/toolkit";
import {currenciesType} from "../components/BaseСurrency/BaseСurrency.props";
import { createSlice } from "@reduxjs/toolkit";

interface stateType {
	baseCurrency: string
	currencies: currenciesType[]
}

const initialState: stateType = {
	baseCurrency: "",
	currencies: [
		{value: "USD",},
		{value: "RUB"},
		{value: "EUR"},
	]
}

export const commonSlice = createSlice({
	name: 'searchUser',
	initialState,
	reducers: {
		setBaseCurrency(state, action: PayloadAction<string>) {
			state.baseCurrency = action.payload
		},
	}
})

export default commonSlice.reducer