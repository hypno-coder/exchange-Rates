import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { bindActionCreators } from 'redux'
import { commonSlice } from './commonSlice'
import {convertSlice} from "./convertSlice";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators({...commonSlice.actions, ...convertSlice.actions}, dispatch)
}
