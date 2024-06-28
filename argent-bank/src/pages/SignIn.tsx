import '../assets/css/main.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../app/authSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
const SignIn: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.token);
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			// Première requête : Login
			const loginResponse = await fetch(
				'http://localhost:3001/api/v1/user/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, password }),
				}
			);
			const loginData = await loginResponse.json();

			if (loginResponse.ok) {
				const token = loginData.body.token;
				dispatch(setToken(token));
				setIsAuthenticated(true);

				// Deuxième requête : Obtenir le profil
				const profileResponse = await fetch(
					'http://localhost:3001/api/v1/user/profile',
					{
						method: 'POST',
						headers: {
							Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					}
				);
				const profileData = await profileResponse.json();

				if (profileResponse.ok) {
					dispatch(
						setUser({
							firstName: profileData.body.firstName,
							lastName: profileData.body.lastName,
						})
					);
					console.log('Profile data:', profileData.body);
				}

				navigate('/profile');
			}
		} catch (error) {
			console.error('error', error);
		}
	};
	useEffect(() => {
		if (token && isAuthenticated) {
			console.log('Token ok, je vais sur /profile');
			console.log('isAuthenticated2', isAuthenticated);

			navigate('/profile');
		} else {
			console.log('Pas de token, je reste sur la page');
		}
	}, [isAuthenticated, token, navigate]);
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
							id="email"
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
