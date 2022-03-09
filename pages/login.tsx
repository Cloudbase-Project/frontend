import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
// import axios from '../axios-config';

export default function login() {
	const { data: session, status } = useSession();
	const router = useRouter();
	if (status == 'authenticated') {
		router.push('/');
	}

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async () => {
		if (email && password) {
			// await axios.post('/auth/login', {
			// 	email: email,
			// 	password: password,
			// });
		} else {
			setError('Please fill all the fields');
			setTimeout(() => {
				setError('');
			}, 2000);
		}
	};

	// render() {
	return (
		<div>
			<header className='text-gray-600 body-font'></header>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
					<div className='lg:w-3/5  md:pr-16 lg:pr-0 pr-0   mb-10  pb-2 border-b mx-auto md:text-center lg:text-left lg:border-r lg:border-b-0'>
						<h1 className='title-font font-medium text-3xl text-gray-900 hidden md:block'>
							Lorem Ipsum
						</h1>
						<img src='/Transcend.png' className='md:hidden h-20' />
						<p className='leading-relaxed mt-4 hidden md:block'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsum, esse. Ad aliquid magni suscipit quia
							dolor ex sunt natus, assumenda repellendus incidunt
							amet, aut praesentium nesciunt error earum pariatur
							iste.
						</p>
						<br />
						<img
							src='/pattern.png'
							className='h-30 w-60 absolute -z-20  hidden lg:block '
						/>
					</div>
					<div className='lg:w-2/6 md:w-9/12 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-2 md:mt-0 md:mx-auto shadow-xl shadow-gray-500'>
						<h2 className='text-gray-900 text-xl font-bold title-font mb-5 mx-auto'>
							Login
						</h2>
						<div className='relative mb-4'>
							<label
								htmlFor='email'
								className='leading-7 text-sm text-gray-600'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='w-full bg-white rounded border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='relative mb-4'>
							<label
								htmlFor='password'
								className='leading-7 text-sm text-gray-600'>
								Password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								className='w-full bg-white rounded border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<p className='p-2 text-gray-800 font-medium cursor-pointer'>
							Forgot Password ?
						</p>

						{error ? (
							<p className='text-lg text-red-600 mt-3 font-normal text-center'>
								{error}
							</p>
						) : null}

						<button
							onClick={async () => {
								const signin = await signIn('credentials', {
									email: email,
									password: password,
									// callbackUrl: "http://localhost:3000",
									redirect: false,
								});

								if (signin.error) {
									setError(signin.error);
								}
							}}
							className='text-white bg-brand-green border-0 py-2 mt-3 px-8 focus:outline-none  rounded text-lg hover:bg-brand-gray transition duration-300'>
							Login
						</button>
						<div
							onClick={() =>
								signIn('google', {
									callbackUrl: 'http://localhost:3000',
								})
							}
							className='google-btn w-full flex flex-wrap  cursor-pointer border-2 border-zinc-200 shadow-sm shadow-gray-400 rounded-md py-2 justify-center mt-2'>
							<div className='google-icon-wrapper'>
								<img
									className='google-icon'
									src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								/>
							</div>
							<p className='btn-text ml-2'>
								<b>Sign in with google</b>
							</p>
						</div>
						<Link href='/register'>
							<p className='text-lg hover:text-brand-green-hover cursor-pointer text-brand-green mt-3 font-bold text-center'>
								Create Account
							</p>
						</Link>
						<p className='text-xs text-gray-500 mt-3 font-bold text-center'>
							© Cloudbase- All Rights Reserved
						</p>
					</div>
				</div>
			</section>
		</div>
	);
	// }
}
