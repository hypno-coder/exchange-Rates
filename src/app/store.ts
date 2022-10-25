import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import commonReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    rate: commonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
