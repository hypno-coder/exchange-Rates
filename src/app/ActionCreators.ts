import {createAsyncThunk} from "@reduxjs/toolkit";
import { DataToConvertType } from './apiType'
import {ConvertResponseType} from "./apiType";
import axios from "axios";

export const fetchConvert = createAsyncThunk(
		'convert/fetch',
		async (data: DataToConvertType, thunkAPI) => {
			const url: string = `https://api.apilayer.com/fixer/convert?to=${data.to}&from=${data.from}&amount=${data.amount}`
			const Headers = {
				'apikey': 'LA4s8I40YhtSKt0erk2N7b3N5S06LTvl'
			}
			try {
				const response = await axios<ConvertResponseType>(url, {headers: Headers})
				console.log(response.data)
				return await response.data
			} catch (e) {
				return thunkAPI.rejectWithValue('не удалось посчитать курс валют')
			}
		}
)