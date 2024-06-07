import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
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
		setUser: (
			state,
			action: PayloadAction<{ firstName: string; lastName: string }>
		) => {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setToken, clearToken, setUser } = authSlice.actions;

export default authSlice.reducer;
export const updateUserProfile =
	(firstName: string, lastName: string) => async (dispatch, getState) => {
		try {
			const token = getState().auth.token;
			if (!token) {
				console.log('No token found in state');
				return;
			}

			const response = await axios.put(
				'http://localhost:3001/api/v1/user/profile',
				{ firstName, lastName },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			console.log('Profile updated successfully:', response.data);
			dispatch(setUser({ firstName, lastName }));
		} catch (error) {
			console.error('Error updating profile:', error);
		}
	};
