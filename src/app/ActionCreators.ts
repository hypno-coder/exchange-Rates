import {createAsyncThunk} from "@reduxjs/toolkit";
import {DataToConvertType, DataCurrencyType, CurrencyResponseType, ConvertResponseType} from './apiType'
import axios from "axios";

const Headers = {
	'apikey': 'qOrAaCuiOrljLIW0qrMOAs9itJl2gYk9'
}

export const fetchConvert = createAsyncThunk(
		'convert/fetch',
		async ({to, from, amount = "0"}: DataToConvertType, thunkAPI) => {
			const url: string = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`
			try {
				const response = await axios<ConvertResponseType>(url, {headers: Headers})
				return await response.data
			} catch (e) {
				return thunkAPI.rejectWithValue('не удалось посчитать курс валют')
			}
		}
)

export const fetchExchangeRates = createAsyncThunk(
		'exchangeRates/fetch',
		async ({requestData, baseCurrency}: DataCurrencyType, thunkAPI) => {
			const url: string = `https://api.apilayer.com/fixer/latest?symbols=${requestData}&base=${baseCurrency}`
			try {
				const response = await axios<CurrencyResponseType>(url, {headers: Headers})
				return await response.data
			} catch (e) {
				return thunkAPI.rejectWithValue('не удалось получить курсы валют')
			}
		}
)