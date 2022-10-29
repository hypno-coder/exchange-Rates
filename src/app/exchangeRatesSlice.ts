import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchConvert } from "./ActionCreators";
import { ConvertResponseType } from './apiType'


interface exchangeRatesState {
	exchangeRates: ConvertResponseType | null,
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
		[fetchConvert.fulfilled.type]: (state, action: PayloadAction<ConvertResponseType>) => {
			state.isLoading = false;
			state.error = '';
			state.exchangeRates = action.payload;
		},
		[fetchConvert.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchConvert.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
})

export default exchangeRatesSlice.reducer