import '../assets/css/main.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../app/authSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
const SignIn: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.token);
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		console.log(email);
		console.log(password);

		try {
			const response = await fetch('http://localhost:3001/api/v1/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			console.log('data', data);

			if (response.ok) {
				dispatch(setToken(data.body.token)); // Assure-toi que `data.token` correspond au token retourné par ton backend
				console.log('token', data.body.token);
				dispatch(
					setUser({
						firstName: data.body.firstName,
						lastName: data.body.lastName,
					})
				);
			}
		} catch (error) {
			console.error('error', error);
		}
	};
	useEffect(() => {
		if (token) {
			console.log('Token present, navigating to /profile');
			navigate('/profile');
		} else {
			console.log('No token found, staying on SignIn page');
		}
	}, [token, navigate]);
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="email"
							id="username"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					{/* <a className="sign-in-button">Sign In</a> */}
					<button className="sign-in-button" type="submit">
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
};

export default SignIn;
