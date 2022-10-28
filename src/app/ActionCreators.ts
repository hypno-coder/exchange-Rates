import {createAsyncThunk} from "@reduxjs/toolkit";
import { DataToConvertType } from './apiType'
import {ConvertResponseType} from "./apiType";
import axios from "axios";

export const fetchConvert = createAsyncThunk(
		'convert/fetch',
		async ({to, from, amount = "0"}: DataToConvertType, thunkAPI) => {
			const url: string = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`
			const Headers = {
				'apikey': '1cc8VwunRVQu6U2o4QWu8CpoD5tCxiZ1'
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