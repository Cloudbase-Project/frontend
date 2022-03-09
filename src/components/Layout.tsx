import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar
			// sessionData={session} sessionStatus={status}
			/>
			<main>{children}</main>
			<Footer />
		</div>
	);
}
