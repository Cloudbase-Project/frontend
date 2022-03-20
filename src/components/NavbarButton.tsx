import React, { Component } from 'react';

export class NavbarButton extends Component<any> {
	state = { isHovering: false };

	onMouseOverHandler = (event) => {
		this.setState({
			isHovering: true,
		});
		console.log(this.state.isHovering);
	};
	onMouseOutHandler = (event) => {
		this.setState({
			isHovering: false,
		});
	};

	render() {
		return (
			<div
				onMouseOver={this.onMouseOverHandler}
				onMouseLeave={this.onMouseOutHandler}
				className='relative inline-block text-left flex-row h-max '>
				<div>
					<a
						type='button'
						className='  cursor-pointer flex items-center justify-center w-full mr-5  xl:px-4 lg:px-1 py-8  hover:text-brand-green'
						id='options-menu'>
						{this.props.content}
						<svg
							width='20'
							height='20'
							fill='#278575'
							viewBox='0 0 1792 1792'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
						</svg>
					</a>
				</div>
				<div className=' fixed right-0  left-0 mt-0  rounded-md w-full   bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-0 shadow-inner shadow-gray-400 '>
					<div
						className={`py-1 ${
							!this.state.isHovering ? 'hidden' : ''
						} border-x-2 border-b-2 shadow-lg `}
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='options-menu'>
						<section className='text-gray-600 body-font'>
							<div className='container flex flex-wrap px-5 py-5 mx-auto items-center'>
								<div className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200'>
									<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
										{this.props.content}
									</h1>
									<p className='leading-relaxed text-base'>
										{this.props.content == 'Softwares' ||
										this.props.content == 'Solutions' ||
										this.props.content == 'HSE MS'
											? `HSE Compliance Software
										Transcend can be used to control and maintain all aspects of an organisation's HSE compliance requirements.
										
										So whatever your needs - be they Learning Management system, Behaviour modification, ePermit to work, PHA - or all four - Transcend is the answer.`
											: ''}
									</p>
								</div>
								{this.props.content == 'Softwares' ? (
									<div className='flex flex-col md:w-1/2 md:pl-12'>
										{/* <h2 className="title-font font-semibold text-brand-orange tracking-wider text-lg mb-3">
                                        Softwares
                                    </h2> */}
										<nav className='flex flex-wrap list-none -mb-1'>
											<li className='lg:w-2/4 mb-1 w-1/2'>
												<a
													href='/softwares/pha'
													className=' cursor-pointer text-brand-green hover:text-brand-orange flex'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													PHA
												</a>
											</li>

											<li className='lg:w-2/4 mb-1 w-1/2'>
												<a
													href='/softwares/epermit-to-work'
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													ePermit to Work
												</a>
											</li>
											<li className='lg:w-2/4 mb-1 w-1/2'></li>
											<li className='lg:w-2/4 mb-1 w-1/2'></li>

											<li className='lg:w-2/4 mb-1 w-1/2 '>
												<a
													href='/softwares/behaviour-modification'
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Behaviour Modification
												</a>
											</li>
											<li className='lg:w-2/4 mb-1 w-1/2'>
												<a
													href='/softwares/learning-management-system'
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Learning Management System
												</a>
											</li>
										</nav>
									</div>
								) : null}
								{this.props.content == 'Solutions' ? (
									<div className='flex flex-col md:w-1/2 md:pl-12'>
										{/* <h2 className="title-font font-semibold text-brand-orange tracking-wider text-lg mb-3">
									Softwares
								</h2> */}
										<nav className='flex flex-wrap list-none -mb-1'>
											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className=' cursor-pointer text-brand-green hover:text-brand-orange flex'
													href='/solutions/environment'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Environment
												</a>
											</li>

											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'
													href='/solutions/safety'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Safety
												</a>
											</li>
											<li className='lg:w-1/3 mb-1 w-1/2'></li>

											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'
													href='/solutions/health'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Health
												</a>
											</li>
											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'
													href='/solutions/risk-management'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Risk Management
												</a>
											</li>
											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'
													href='/solutions/fire-engineering'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Fire Engineering
												</a>
											</li>
											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'
													href='/solutions/business-continuity'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Business Continuity
												</a>
											</li>
											<li className='lg:w-1/3 mb-1 w-1/2'>
												<a
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'
													href='/solutions/hse-training'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													HSE Training
												</a>
											</li>
										</nav>
									</div>
								) : null}

								{this.props.content == 'HSE MS' ? (
									<div className='flex flex-col md:w-1/2 md:pl-12'>
										{/* <h2 className="title-font font-semibold text-brand-orange tracking-wider text-lg mb-3">
									Softwares
								</h2> */}
										<nav className='flex flex-wrap list-none -mb-1'>
											<li className='lg:w-2/4 mb-1 w-1/2'>
												<a
													href='/hse-ms/framework-development'
													className=' cursor-pointer text-brand-green hover:text-brand-orange flex'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													Framework Development
												</a>
											</li>
											<li className='lg:w-2/4 mb-1 w-1/2'></li>

											<li className='lg:w-2/4 mb-1 w-1/2'>
												<a
													href='/hse-ms/bbs-assessment'
													className='text-brand-green hover:text-brand-orange flex cursor-pointer'>
													<svg
														width='20'
														height='20'
														fill='#278575'
														viewBox='0 0 1792 1792'
														transform='rotate(270)'
														xmlns='http://www.w3.org/2000/svg'>
														<path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
													</svg>
													BBS (Safety Culture)
													Assessment
												</a>
											</li>
										</nav>
									</div>
								) : null}
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default NavbarButton;
