import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchConvert } from "./ActionCreators";
import { ConvertResponseType } from './apiType'


interface ConverterState {
	convertData: ConvertResponseType | null,
	isLoading: boolean,
	error: string,
}

const initialState: ConverterState = {
	convertData: null,
	isLoading: false,
	error: '',
}

export const convertSlice = createSlice({
	name: 'converter',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchConvert.fulfilled.type]: (state, action: PayloadAction<ConvertResponseType>) => {
			state.isLoading = false;
			state.error = '';
			state.convertData = action.payload;
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

export default convertSlice.reducer