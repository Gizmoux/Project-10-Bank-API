import '../assets/css/main.css';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';
import { updateUserProfile, setUser } from '../app/authSlice';
import axios from 'axios';
import { RootState } from '../app/store';

const User: React.FC = () => {
	const dispatch = useAppDispatch();
	const { firstName, lastName } = useSelector((state: RootState) => state.auth);
	const [editFirstName, setEditFirstName] = useState(firstName);
	const [editLastName, setEditLastName] = useState(lastName);
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const token = localStorage.getItem('token');
				if (!token) {
					// Rediriger vers la page de connexion si pas de token
					// navigate('/login');
					return;
				}

				const response = await axios.post(
					'http://localhost:3001/api/v1/user/profile',
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				dispatch(setUser(response.data.body));
				setEditFirstName(response.data.body.firstName);
				setEditLastName(response.data.body.lastName);
			} catch (error) {
				console.error('Error fetching user profile:', error);
			}
		};

		fetchUserProfile();
	}, [dispatch]);

	const handleChangeFirstName = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setEditFirstName(event.target.value);
	};

	const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEditLastName(event.target.value);
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = async () => {
		try {
			await dispatch(updateUserProfile(editFirstName, editLastName));
			setIsEditing(false);
		} catch (error) {
			console.error('Error updating profile:', error);
		}
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditFirstName(firstName);
		setEditLastName(lastName);
	};

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>Welcome back</h1>
				{isEditing ? (
					<div>
						<input
							type="text"
							value={editFirstName}
							onChange={handleChangeFirstName}
							placeholder="First Name"
						/>
						<input
							type="text"
							value={editLastName}
							onChange={handleChangeLastName}
							placeholder="Last Name"
						/>
						<br />
						<button className="save-button" onClick={handleSave}>
							Save
						</button>
						<button className="cancel-button" onClick={handleCancel}>
							Cancel
						</button>
					</div>
				) : (
					<div>
						<h2>
							{firstName} {lastName}
						</h2>
						<button className="edit-button" onClick={handleEdit}>
							Edit Name
						</button>
					</div>
				)}
			</div>

			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
};

export default User;
// import '../assets/css/main.css';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUserProfile } from '../app/authSlice';
// const User: React.FC = () => {
// 	const { firstName, lastName } = useSelector(state => state.auth);
// 	const [editFirstName, setEditFirstName] = useState('');
// 	const [editLastName, setEditLastName] = useState('');
// 	const [isEditing, setIsEditing] = useState(false);
// 	const [isSaving, setIsSaving] = useState(false);
// 	const dispatch = useDispatch();

// 	const handleChangeFirstName = (event: Event) => {
// 		setEditFirstName(event.target.value);
// 		// console.log(event.target.value);
// 	};
// 	const handleChangeLastName = (event: Event) => {
// 		setEditLastName(event.target.value);
// 		// console.log(event.target.value);
// 	};
// 	const handleEdit = () => {
// 		setIsEditing(true);
// 	};
// 	const handleSave = async () => {
// 		await dispatch(updateUserProfile(editFirstName, editLastName));
// 		setIsSaving(true);
// 		setIsSaving(false);
// 		setIsEditing(false);
// 	};
// 	const handleCancel = () => {
// 		setIsEditing(false);
// 		setEditFirstName(firstName);
// 		setEditLastName(lastName);
// 	};

// 	return (
// 		<main className="main bg-dark">
// 			{isEditing ? (
// 				<div className="header">
// 					<h1>Welcome back</h1>

// 					<input
// 						type="text"
// 						placeholder="Tony"
// 						onChange={handleChangeFirstName}
// 					/>
// 					<input
// 						type="text"
// 						placeholder="Jarvis"
// 						onChange={handleChangeLastName}
// 					/>
// 					<br />

// 					<button className="save-button" onClick={handleSave}>
// 						Save
// 					</button>
// 					<button className="cancel-button" onClick={handleCancel}>
// 						Cancel
// 					</button>
// 				</div>
// 			) : (
// 				<div className="header">
// 					<h1>Welcome back</h1>
// 					<h1>
// 						{editFirstName} {editLastName}
// 					</h1>
// 					<button className="edit-button" onClick={handleEdit}>
// 						Edit Name
// 					</button>
// 				</div>
// 			)}

// <h2 className="sr-only">Accounts</h2>
// <section className="account">
// 	<div className="account-content-wrapper">
// 		<h3 className="account-title">Argent Bank Checking (x8349)</h3>
// 		<p className="account-amount">$2,082.79</p>
// 		<p className="account-amount-description">Available Balance</p>
// 	</div>
// 	<div className="account-content-wrapper cta">
// 		<button className="transaction-button">View transactions</button>
// 	</div>
// </section>
// <section className="account">
// 	<div className="account-content-wrapper">
// 		<h3 className="account-title">Argent Bank Savings (x6712)</h3>
// 		<p className="account-amount">$10,928.42</p>
// 		<p className="account-amount-description">Available Balance</p>
// 	</div>
// 	<div className="account-content-wrapper cta">
// 		<button className="transaction-button">View transactions</button>
// 	</div>
// </section>
// <section className="account">
// 	<div className="account-content-wrapper">
// 		<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
// 		<p className="account-amount">$184.30</p>
// 		<p className="account-amount-description">Current Balance</p>
// 	</div>
// 	<div className="account-content-wrapper cta">
// 		<button className="transaction-button">View transactions</button>
// 	</div>
// </section>
// 		</main>
// 	);
// };

// export default User;
