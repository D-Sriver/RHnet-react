import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import navigationReducer from './navigationSlice';

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
		employees: employeeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
