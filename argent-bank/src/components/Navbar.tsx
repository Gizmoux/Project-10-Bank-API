import '../assets/css/main.css';
import logo from '../assets/img/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setToken } from '../app/authSlice';

const NavBar: React.FC = () => {
	const token = useSelector((state: RootState) => state.auth.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { firstName } = useSelector(state => state.auth);

	const handleSignOut = () => {
		localStorage.removeItem('token');
		dispatch(setToken(''));
		console.log('token sign out', token);

		navigate('/');
	};
	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{token ? (
					<div className="navbar-container">
						<div className="navbar-user">
							<i className="fa-solid fa-user"></i>
							<h2>{firstName}</h2>
						</div>

						<button className="main-nav-item" onClick={handleSignOut}>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</button>
					</div>
				) : (
					<Link className="main-nav-item" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
