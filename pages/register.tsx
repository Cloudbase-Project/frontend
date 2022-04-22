import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { signIn, signOut } from 'next-auth/react';

export default function register() {
	const { data: session, status } = useSession();
	const router = useRouter();
	if (status == 'authenticated') {
		router.push('/');
	}

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const handleRegister = async () => {
		if (name && email && password && confirmPassword) {
			if (password === confirmPassword) {
				try {
					await axios.post(
						'http://cloudbase-main-svc/auth/register',
						{
							name: name,
							email: email,
							password: password,
						}
					);
					await signIn('credentials', {
						email: email,
						password: password,
						callbackUrl: 'http://cloudbase.dev/',
						redirect: false,
					});
				} catch (e) {
					console.log(e.response.data.errors[0].message);
					setError(e.response.data.errors[0].message);
				}
			} else {
				setError('Please check the password');
				setTimeout(() => {
					setError('');
				}, 2000);
			}
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
			<header className='text-gray-600 body-font'>
				<div className='container mx-auto  flex-wrap p-5 flex-col md:flex-row items-center hidden md:flex'>
					<Link href='/'>
						<img
							src='/Transcend.png'
							className='h-11 sm:h-12 md:h-14 lg:h-16 xl:h-14  rounded-md mx-2 cursor-pointer'
						/>
					</Link>
				</div>
			</header>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
					<div className='lg:w-3/5  md:pr-16 lg:pr-0 pr-0   mb-10  pb-2 border-b sm:mx-auto md:text-center lg:text-left lg:border-r lg:border-b-0'>
						<h1 className='title-font font-medium text-3xl text-gray-900 hidden md:block'>
							Cloudbase
						</h1>
						<img src='/Transcend.png' className='md:hidden h-20' />
						<p className='leading-relaxed mt-4 hidden md:block'>
							Cloudbase is a Backend as a Service application
							suite aimed at improving developer productivity and
							reducing technical debt. We provide all the tools
							necessary for 360 degree application development.Out
							of the box solutions to common problems faced by a
							typical developer therefore reducing the man hours
							spent on menial tasks and spending more on
							developing the core product.
						</p>
						<br />
						<img
							src='/pattern.png'
							className='h-30 w-60 absolute -z-20  hidden lg:block '
						/>
					</div>
					<div className='lg:w-2/6 md:w-9/12 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-2 md:mt-0 md:mx-auto shadow-xl shadow-gray-500'>
						<h2 className='text-gray-900 text-xl font-bold title-font mb-5 mx-auto'>
							Create your Transcend Account
						</h2>
						<div className='relative mb-4'>
							<label
								htmlFor='full-name'
								className='leading-7 text-sm text-gray-600'>
								Name
							</label>
							<input
								type='text'
								id='full-name'
								name='full-name'
								className='w-full bg-white rounded border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className='relative mb-4'>
							<label
								htmlFor='email'
								className='leading-7 text-sm text-gray-600'>
								Email
							</label>
							<input
								type='text'
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
						<div className='relative mb-4'>
							<label
								htmlFor='password'
								className='leading-7 text-sm text-gray-600'>
								Confirm Password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								className='w-full bg-white rounded border border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
								onKeyDown={(e) => {
									if (e.key == 'Enter') {
										handleRegister();
									}
								}}
							/>
						</div>
						{error ? (
							<p className='text-lg text-red-600 mt-3 font-normal text-center'>
								{error}
							</p>
						) : null}

						<button
							onClick={() => handleRegister()}
							className='text-white mt-3 bg-brand-green border-0 py-2 px-8 focus:outline-none  rounded text-lg hover:bg-brand-gray transition duration-300'>
							Create Account
						</button>

						<Link href='/login'>
							<p className='text-lg hover:text-brand-green-hover cursor-pointer text-brand-green mt-3 font-bold text-center'>
								Sign in instead
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
