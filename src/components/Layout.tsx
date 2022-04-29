import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
	const { data: session, status } = useSession();
	const router = useRouter();
	console.log(status);

	if (router.pathname == '/login' || router.pathname == '/register') {
		return <main>{children}</main>;
	} else {
		return (
			<>
				<Navbar sessionData={session} sessionStatus={status} />
				<main>{children}</main>
				<Footer />
			</>
		);
	}
}
