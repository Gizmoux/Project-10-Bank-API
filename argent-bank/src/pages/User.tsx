import '../assets/css/main.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../app/authSlice';
const User: React.FC = () => {
	const { token, firstName, lastName } = useSelector(state => state.auth);
	const [editFirstName, setEditFirstName] = useState('');
	const [editLastName, setEditLastName] = useState('');
	const [isEditing, setIsEditing] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const dispatch = useDispatch();

	const handleChangeFirstName = event => {
		setEditFirstName(event.target.value);
		console.log(event.target.value);
	};
	const handleChangeLastName = event => {
		setEditLastName(event.target.value);
		console.log(event.target.value);
	};
	const handleEdit = () => {
		setIsEditing(true);
	};
	const handleSave = async () => {
		setIsSaving(true);
		await dispatch(updateUserProfile(editFirstName, editLastName));
		setIsSaving(false);
		setIsEditing(false);
	};
	return (
		<main className="main bg-dark">
			{isEditing ? (
				<div className="header">
					<h1>Welcome back</h1>
					<input
						type="text"
						placeholder="Tony"
						onChange={handleChangeFirstName}
					/>
					<input
						type="text"
						placeholder="Jarvis"
						onChange={handleChangeLastName}
					/>
					<br />

					<button className="save-button" onClick={handleSave}>
						Save
					</button>
					<button className="cancel-button">Cancel</button>
				</div>
			) : (
				<div className="header">
					<h1>Welcome back</h1>

					<button className="edit-button" onClick={handleEdit}>
						Edit Name
					</button>
				</div>
			)}

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
