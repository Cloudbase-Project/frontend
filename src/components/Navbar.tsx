import React, { useState, useEffect } from 'react';
// import NavbarButton from '../components/NavbarButton';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';

export default function Navbar(props) {
	const [open, setOpen] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const data = useSession();

	console.log('Data: ', data);

	const handleDropdown = () => {
		if (dropdown) setDropdown(false);
		if (!dropdown) setDropdown(true);
	};

	return (
		<header className='text-gray-600 body-font top-0 shadow-lg fixed  bg-white w-full py-2 px-10 z-50 justify-center'>
			<div className=' mx-auto flex flex-wrap py-0 flex-row items-center justify-between '>
				<div>
					<Link href='/'>
						<img
							src='/cloudbaselogo.png'
							className='h-11 sm:h-12 md:h-14 lg:h-12 xl:h-14  rounded-md mx-2  cursor-pointer'
						/>
					</Link>
				</div>
				<nav className='nav-link md:mr-auto md:ml-4 md:py-1 md:pl-4 hidden lg:flex flex-wrap items-center xl:text-lg lg:text-md'>
					<Link href='/about-us'>
						<span className='inline-flex cursor-pointer mr-5  xl:px-4 lg:pr-0 py-2'>
							<span className='nav hover:text-brand-green'>
								Services
							</span>
						</span>
					</Link>
					{/* <NavbarButton content='Solutions' /> */}
					{/* <Link href='/textContent'>
						<span className='inline-flex cursor-pointer mr-5 hover:text-brand-green  xl:px-4 lg:pr-0 py-2'>
							<span className='nav'> </span>
						</span>
					</Link> */}
					{/* <NavbarButton content='HSE MS' /> */}

					{/* <NavbarButton content='Softwares' /> */}
					<Link href='/pricing'>
						<span className='inline-flex cursor-pointer mr-5  xl:px-4 lg:pr-0 py-2'>
							<span className='nav hover:text-brand-green'>
								Blog
							</span>
						</span>
					</Link>
					<Link href='/contact-us'>
						<span className='inline-flex cursor-pointer mr-5  xl:px-4 lg:pr-0 py-2'>
							<span className='nav hover:text-brand-green'>
								Pricing
							</span>
						</span>
					</Link>
					<Link href='/contact-us'>
						<span className='inline-flex cursor-pointer mr-5  xl:px-4 lg:pr-0 py-2'>
							<span className='nav hover:text-brand-green'>
								Guide
							</span>
						</span>
					</Link>
					<Link href='/projects'>
						<span className='inline-flex cursor-pointer mr-5  xl:px-4 lg:pr-0 py-2'>
							<span className='nav hover:text-brand-green'>
								Projects
							</span>
						</span>
					</Link>
				</nav>
				{props.sessionStatus !== 'authenticated' ? (
					<Link href='/login'>
						<button className=' login bg-brand-green  text-white font-bold py-2 px-6 rounded hidden lg:block hover:bg-brand-gray transition duration-300'>
							Sign In
						</button>
					</Link>
				) : (
					<>
						{/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <button
                                onClick={() => signOut()}
                                className="login bg-brand-green  text-white font-bold py-2 px-6 rounded hidden lg:block hover:bg-brand-gray transition duration-300"
                            >
                                Sign Out
                            </button> */}
						<div
							className='justify-center items-center  h-fit w-12 hidden lg:flex '
							onClick={handleDropdown}>
							<div className='flex justify-center items-center mx-22 '>
								<div className='relative border-b-4 border-transparent py-3   '>
									<div className='flex justify-center items-center space-x-3 cursor-pointer -ml-28'>
										<div className='w-12 h-12 rounded-full overflow-hidden border-2  border-brand-green'>
											{data.data.user.image ? (
												<img
													src={data.data.user.image}
													className='p-1 rounded-full '
												/>
											) : (
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-full w-full '
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fillRule='evenodd'
														d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
														clipRule='evenodd'
													/>
												</svg>
											)}
										</div>
									</div>
									{dropdown ? (
										<div className='absolute  w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5 -ml-2 lg:-ml-48  '>
											<ul className='space-y-3 dark:text-white'>
												<li className='font-medium'>
													<a
														href='/my-account'
														className='flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-brand-green'>
														<div className='mr-3'>
															<svg
																className='w-6 h-6'
																fill='none'
																stroke='currentColor'
																viewBox='0 0 24 24'
																xmlns='http://www.w3.org/2000/svg'>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth='2'
																	d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
															</svg>
														</div>
														Account
													</a>
												</li>

												<hr className='dark:border-gray-700' />
												<li className='font-medium cursor-pointer'>
													<a
														onClick={() =>
															signOut()
														}
														className='flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600'>
														<div className='mr-3 text-red-600'>
															<svg
																className='w-6 h-6'
																fill='none'
																stroke='currentColor'
																viewBox='0 0 24 24'
																xmlns='http://www.w3.org/2000/svg'>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth='2'
																	d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path>
															</svg>
														</div>
														Sign Out
													</a>
												</li>
											</ul>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</>
				)}

				<div
					className='p-3 space-y-2 bg-brand-green rounded shadow block lg:hidden cursor-pointer'
					onClick={() => {
						setOpen(true);
					}}>
					<span className='block w-7 h-0.5 bg-gray-100 '></span>
					<span className='block w-7 h-0.5 bg-gray-100 '></span>
					<span className='block w-7 h-0.5 bg-gray-100 '></span>
				</div>

				{open ? (
					<Sidebar
						close={() => {
							setOpen(false);
						}}
					/>
				) : null}
			</div>
		</header>
	);
}
