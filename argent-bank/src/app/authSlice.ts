import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	token: string;
	firstName: string;
	lastName: string;
}

const initialState: AuthState = {
	token: '',
	firstName: '',
	lastName: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		clearToken: state => {
			state.token = '';
		},
		setUserInfo: (
			state,
			action: PayloadAction<{ firstName: string; lastName: string }>
		) => {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setToken, clearToken, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
