import { PayloadAction } from "@reduxjs/toolkit";
import {currenciesType} from "../components/BaseСurrency/BaseСurrency.props";
import { createSlice } from "@reduxjs/toolkit";

interface stateType {
	baseCurrency: string
	currencies: currenciesType[]
}


const initialState: stateType = {
	baseCurrency: "810",
	currencies: [
		{value: "840", name:"USD"},
		{value: "810", name:"RUB"},
		{value: "978", name:"EUR"},
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