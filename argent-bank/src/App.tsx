import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Footer from './components/Footer';

const App: React.FC = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/user" element={<User />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
