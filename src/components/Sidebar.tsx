import React from 'react';
// import { useSession } from 'next-auth/react';
// import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Sidebar(props) {
	// render() {
	// const { data: session, status } = useSession();

	return (
		<div>
			<div className='h-screen flex items-end justify-end px-4 pb-6 absolute  lg:hidden '>
				<div className='z-20 fixed top-0  lg:right-0 h-screen w-11/12 -right-5 bg-white shadow-2xl peer-focus:right-0 peer:transition ease-out delay-150 duration-200'>
					<nav role='navigation' className='p-6'>
						<div className='flex p-4 mx-2 space-y-2 justify-between'>
							<div className='mt-5'>
								<h5 className=' font-bold text-lg'>
									Lorem Ipsum
								</h5>
							</div>
							<div
								className='p-3 bg-brand-green rounded shadow block lg:hidden  mx-2 right-0 cursor-pointer'
								onClick={() => {
									props.close();
								}}>
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='white'
									aria-hidden='true'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</div>
						</div>
						<br></br>
						<br></br>
						<div className='mt-0 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]'>
							{status === 'authenticated' ? (
								<span className=' block uppercase mt-4 bg-brand-green text-brand-green  py-2 px-5 rounded  bg-opacity-10'>
									<a href='/my-account' className='flex '>
										<svg
											className='w-6 h-6 mr-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
										</svg>
										MY ACCOUNT
									</a>
								</span>
							) : null}

							<span className='flex uppercase mt-4 bg-brand-green text-brand-green  py-2 px-5 rounded  bg-opacity-10'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 mr-2'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
									/>
								</svg>
								Services
							</span>

							<span className='flex uppercase   bg-brand-green text-brand-green  py-2 px-5 rounded  bg-opacity-10'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 mr-2'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
									/>
								</svg>
								Pricing
							</span>

							<span className='flex uppercase   bg-brand-green text-brand-green  py-2 px-5 rounded  bg-opacity-10'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 mr-2'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
									/>
								</svg>
								Blog
							</span>

							<span className='flex uppercase   bg-brand-green text-brand-green  py-2 px-5 rounded  bg-opacity-10'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 mr-2'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
									/>
								</svg>
								<a href='/audits'>Guide</a>
							</span>

							{status !== 'authenticated' ? (
								<Link href={'/login'}>
									<button className='login bg-brand-green  text-white font-bold py-2 px-6 rounded mb-32 mt-10 w-4/5 mx-10 '>
										Sign In
									</button>
								</Link>
							) : (
								<button
									onClick={() => {
										console.log('im runnign');
									}}
									className='login bg-brand-green  text-white font-bold py-2 px-6 rounded mb-32 mt-10 w-4/5 mx-10 '>
									Sign Out
								</button>
							)}
						</div>
					</nav>
				</div>

				<div className='z-10 lg:hidden fixed top-0 right-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200'></div>
			</div>
		</div>
	);
}
