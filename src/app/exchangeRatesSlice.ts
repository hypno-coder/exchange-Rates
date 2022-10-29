import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {fetchExchangeRates} from "./ActionCreators";
import {CurrencyResponseType} from './apiType'


interface exchangeRatesState {
	exchangeRates: CurrencyResponseType | null,
	isLoading: boolean,
	error: string,
}

const initialState: exchangeRatesState = {
	exchangeRates: null,
	isLoading: false,
	error: '',
}

export const exchangeRatesSlice = createSlice({
	name: 'exchangeRates',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchExchangeRates.fulfilled.type]: (state, action: PayloadAction<CurrencyResponseType>) => {
			state.isLoading = false;
			state.error = '';
			state.exchangeRates = action.payload;
		},
		[fetchExchangeRates.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchExchangeRates.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
})

export default exchangeRatesSlice.reducer