import {combineReducers ,configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';
import commonReducer from './commonSlice';
import  convertReducer from './convertSlice';
import exchangeRatesReducer from "./exchangeRatesSlice";


export const RootReducer = combineReducers({
  commonReducer,
  convertReducer,
  exchangeRatesReducer,
})

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
