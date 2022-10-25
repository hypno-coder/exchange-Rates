import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface stateType {
	baseCurrency: string
}

const initialState: stateType = {
	baseCurrency: '',
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

export default commonSlice.reducer;