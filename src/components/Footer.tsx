import Link from 'next/link';
import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			// <footer className='text-white body-font bg-brand-gray '>
			// 	<div className='container px-5 py-24 mx-auto'>
			// 		<div className='flex flex-wrap md:text-left text-center order-first'>
			// 			<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
			// 				<h2 className='title-font font-medium text-brand-orange tracking-widest text-sm mb-3'>
			// 					SOFTWARES
			// 				</h2>
			// 				<nav className='footer-nav list-none mb-10 '>
			// 					<li>
			// 						<a
			// 							href='/softwares/pha'
			// 							className='text-white'>
			// 							PHA
			// 						</a>
			// 					</li>
			// 					<li>
			// 						<a
			// 							href='/softwares/epermit-to-work'
			// 							className='text-white '>
			// 							ePermit to work
			// 						</a>
			// 					</li>
			// 					<li>
			// 						<a
			// 							href='/softwares/behaviour-modification'
			// 							className='text-white '>
			// 							Behaviour Modification
			// 						</a>
			// 					</li>
			// 					<li>
			// 						<a
			// 							href='/softwares/learning-management-system'
			// 							className='text-white '>
			// 							Learning Management system
			// 						</a>
			// 					</li>
			// 				</nav>
			// 			</div>
			// 			<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
			// 				<h2 className='title-font font-medium text-brand-orange tracking-widest text-sm mb-3'>
			// 					SOLUTIONS
			// 				</h2>
			// 				<nav className='footer-nav list-none mb-10'>
			// 					<li>
			// 						<a className='text-white '>Environment</a>
			// 					</li>
			// 					<li>
			// 						<a className='text-white '>Health</a>
			// 					</li>
			// 					<li>
			// 						<a className='text-white '>
			// 							Business Continuity
			// 						</a>
			// 					</li>
			// 					<li>
			// 						<a className='text-white '>Safety</a>
			// 					</li>

			// 					<li>
			// 						<a className='text-white '>
			// 							Risk Management
			// 						</a>
			// 					</li>
			// 					<li>
			// 						<a className='text-white '>HSE Training</a>
			// 					</li>
			// 					<li>
			// 						<a className='text-white '>
			// 							Fire Engineering
			// 						</a>
			// 					</li>
			// 				</nav>
			// 			</div>
			// 			<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
			// 				<h2 className='title-font font-medium text-brand-orange tracking-widest text-sm mb-3'>
			// 					HSE MS
			// 				</h2>
			// 				<nav className='footer-nav list-none mb-10'>
			// 					<li>
			// 						<a className='text-white '>
			// 							Framework Development
			// 						</a>
			// 					</li>
			// 					<li>
			// 						<a className='text-white '>
			// 							BBS (Safety Culture) Assessment
			// 						</a>
			// 					</li>
			// 				</nav>
			// 			</div>
			// 			<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
			// 				<h2 className='title-font font-medium text-brand-orange tracking-widest text-sm mb-3'>
			// 					ABOUT TRANSCEND
			// 				</h2>
			// 				<div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
			// 					<div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
			// 						Lorem ipsum dolor sit amet consectetur
			// 						adipisicing elit. Molestiae odit,
			// 						reprehenderit perspiciatis suscipit, iusto
			// 						minima, minus temporibus dolorum iste dolore
			// 						praesentium repudiandae? Quia veritatis
			// 						natus quasi dignissimos, ratione maiores
			// 						minus!
			// 						<div className='mt-5'>
			// 							<h2>Contact Transcend</h2>
			// 							<Link href='/contact-us'>
			// 								<button className='login bg-brand-orange hover:text-brand-orange hover:bg-white transition duration-300  text-white font-bold py-2 px-6 rounded mt-2 '>
			// 									Contact Us
			// 								</button>
			// 							</Link>
			// 						</div>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div className='bg-brand-gray '>
			// 		<div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
			// 			<img
			// 				src='/Transcend.png'
			// 				className='h-11 sm:h-12 md:h-14 lg:h-16 xl:h-14  rounded-md mx-2 bg-white '
			// 			/>

			// 			<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
			// 				<span className='ml-3 text-xl text-white'>
			// 					Transcend
			// 				</span>
			// 			</a>
			// 			<p className='text-sm text-white sm:ml-6 sm:mt-0 mt-4'>
			// 				© 2022 Transcend —
			// 				<a
			// 					href='https://twitter.com/knyttneve'
			// 					rel='noopener noreferrer'
			// 					className='text-white ml-1'
			// 					target='_blank'>
			// 					@transcend
			// 				</a>
			// 			</p>
			// 			<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
			// 				<a className='ml-3 text-white'>
			// 					<svg
			// 						fill='currentColor'
			// 						strokeLinecap='round'
			// 						strokeLinejoin='round'
			// 						strokeWidth='2'
			// 						className='w-5 h-5'
			// 						viewBox='0 0 24 24'>
			// 						<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
			// 					</svg>
			// 				</a>
			// 				<a className='ml-3 text-white'>
			// 					<svg
			// 						fill='currentColor'
			// 						strokeLinecap='round'
			// 						strokeLinejoin='round'
			// 						strokeWidth='2'
			// 						className='w-5 h-5'
			// 						viewBox='0 0 24 24'>
			// 						<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
			// 					</svg>
			// 				</a>
			// 				<a className='ml-3 text-white'>
			// 					<svg
			// 						fill='none'
			// 						stroke='currentColor'
			// 						strokeLinecap='round'
			// 						strokeLinejoin='round'
			// 						strokeWidth='2'
			// 						className='w-5 h-5'
			// 						viewBox='0 0 24 24'>
			// 						<rect
			// 							width='20'
			// 							height='20'
			// 							x='2'
			// 							y='2'
			// 							rx='5'
			// 							ry='5'></rect>
			// 						<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
			// 					</svg>
			// 				</a>
			// 				<a className='ml-3 text-white'>
			// 					<svg
			// 						fill='currentColor'
			// 						stroke='currentColor'
			// 						strokeLinecap='round'
			// 						strokeLinejoin='round'
			// 						strokeWidth='0'
			// 						className='w-5 h-5'
			// 						viewBox='0 0 24 24'>
			// 						<path
			// 							stroke='none'
			// 							d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
			// 						<circle
			// 							cx='4'
			// 							cy='4'
			// 							r='2'
			// 							stroke='none'></circle>
			// 					</svg>
			// 				</a>
			// 			</span>
			// 		</div>
			// 	</div>
			// </footer>

			<footer className='text-gray-600 body-font mt-28 '>
				<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
					<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-10 h-10 text-white p-2 bg-brand-green rounded-full'
							viewBox='0 0 24 24'>
							<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
						</svg>
						<span className='ml-3 text-xl'>Cloudbase</span>
					</a>
					<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
						© 2022 Cloudbase —
						<a
							href='https://github.com/catastrophe0123'
							className='text-gray-600 ml-1'
							rel='noopener noreferrer'
							target='_blank'>
							@Cloudbase
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
						<a className='text-gray-500'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-500'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-500'>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<rect
									width='20'
									height='20'
									x='2'
									y='2'
									rx='5'
									ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-500'>
							<svg
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'>
								<path
									stroke='none'
									d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
								<circle
									cx='4'
									cy='4'
									r='2'
									stroke='none'></circle>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
