import Link from 'next/link';

export default function Home() {
	return (
		<section className='text-gray-600 body-font mt-28'>
			<div className='container mx-auto flex px-10 mt-20 sm:mt-5 md:mt-20 py-24 md:flex-row flex-col items-center'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:hidden'>
					<img
						className='object-cover object-center rounded-lg'
						alt='hero'
						src='/main-banner.jpg'
					/>
				</div>

				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center divide-y'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Cloudbase
					</h1>
					<p className='py-3 mb-8 leading-8'>
						<span className='font-bold text-brand-green text-lg'>
							Cloudbase
						</span>{' '}
						is a Backend as a Service application suite aimed at
						improving developer productivity and reducing technical
						debt. We provide all the tools necessary for 360 degree
						application development.
						<span className='mt-5'>
							Out of the box solutions to common problems faced by
							a typical developer therefore reducing the man hours
							spent on menial tasks and spending more on
							developing the core product.
						</span>
					</p>
					<div className='flex justify-center'>
						<Link href={'/contact-us'}>
							<button className='hover:bg-brand-gray transition duration-300 inline-flex text-white bg-brand-green border-0 py-2 px-6 focus:outline-none  rounded '>
								Contact Us
							</button>
						</Link>
						<Link href={'/pricing'}>
							<button className='hover:bg-brand-gray transition duration-300 ml-4  flex  text-white bg-brand-orange border-0 py-2 px-6 focus:outline-none  rounded   '>
								Pricing
							</button>
						</Link>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img
						className='object-cover object-center rounded-lg hidden md:block'
						alt='hero'
						src='/main-banner.jpg'
					/>
				</div>
			</div>

			<div>
				<img
					src='/pattern.png'
					className='h-30 w-60 absolute -z-20 block md:hidden -mt-12'
				/>
				<section className='text-gray-600 body-font mb-20 pb-24'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-col text-center w-full mb-20'>
							<div className='flex mx-auto'>
								<h2 className='text-xs text-brand-green tracking-widest title-font mb-1 font-bold'>
									Cloudbase
									<span className='block w-7 h-1 bg-brand-green mx-auto my-1 rounded'></span>
								</h2>
							</div>
							<img
								src='/pattern.png'
								className='h-30 w-60 absolute -z-20 hidden  md:block -mt-28'
							/>

							<h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-800'>
								The Only Backend You will ever Need
							</h1>
						</div>

						<div className='flex flex-wrap -m-4'>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-brand-green text-white flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
											</svg>
										</div>
										<h2 className='text-gray-900 text-lg title-font font-medium'>
											Serverless
										</h2>
									</div>
									<div className='flex-grow'>
										<p className='leading-relaxed text-base'>
											Developers can build their
											application without having to manage
											the servers, which is taken care of
											by us.
										</p>
										<a className='mt-3 text-brand-green inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-brand-green text-white flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
												<circle
													cx='12'
													cy='7'
													r='4'></circle>
											</svg>
										</div>
										<h2 className='text-gray-900 text-lg title-font font-medium'>
											Authentication
										</h2>
									</div>
									<div className='flex-grow'>
										<p className='leading-relaxed text-base'>
											In an era where cyber attacks are
											getting more common, outsourcing
											your Authentication needs has never
											been more important.
										</p>
										<a className='mt-3 text-brand-green inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-brand-green text-white flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<circle
													cx='6'
													cy='6'
													r='3'></circle>
												<circle
													cx='6'
													cy='18'
													r='3'></circle>
												<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
											</svg>
										</div>
										<h2 className='text-gray-900 text-lg title-font font-medium'>
											Email Service
										</h2>
									</div>
									<div className='flex-grow'>
										<p className='leading-relaxed text-base'>
											The user will be able to send bulk
											promotional emails to their
											customers through this service.
										</p>
										<a className='mt-3 text-brand-green inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-brand-green text-white flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<circle
													cx='6'
													cy='6'
													r='3'></circle>
												<circle
													cx='6'
													cy='18'
													r='3'></circle>
												<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
											</svg>
										</div>
										<h2 className='text-gray-900 text-lg title-font font-medium'>
											Deep Link Generation
										</h2>
									</div>
									<div className='flex-grow'>
										<p className='leading-relaxed text-base'>
											Targeting the official installed
											applications rather than through
											their mobile browser improves user
											interaction and experience.
										</p>
										<a className='mt-3 text-brand-green inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-brand-green text-white flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<circle
													cx='6'
													cy='6'
													r='3'></circle>
												<circle
													cx='6'
													cy='18'
													r='3'></circle>
												<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
											</svg>
										</div>
										<h2 className='text-gray-900 text-lg title-font font-medium'>
											Static Site Hosting
										</h2>
									</div>
									<div className='flex-grow'>
										<p className='leading-relaxed text-base'>
											Hosting your frontend is now easier
											than ever. Just drag and drop your
											files, configure your DNS and you're
											good to go.
										</p>
										<a className='mt-3 text-brand-green inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-brand-green text-white flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<circle
													cx='6'
													cy='6'
													r='3'></circle>
												<circle
													cx='6'
													cy='18'
													r='3'></circle>
												<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
											</svg>
										</div>
										<h2 className='text-gray-900 text-lg title-font font-medium'>
											Image Resizing
										</h2>
									</div>
									<div className='flex-grow'>
										<p className='leading-relaxed text-base'>
											Dynamically resize your images on
											the fly to cater to different device
											sizes.
										</p>
										<a className='mt-3 text-brand-green inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div>
				<section className='text-white body-font bg-brand-green'>
					<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
						<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 -mt-40'>
							<img
								className='object-cover object-center'
								alt='hero'
								src='/Layer0.png'
							/>
						</div>
						<div className=' lg:-mt-60  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
							<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
								A software suite to cater to your every need
							</h1>
							<p className='mb-8 leading-relaxed'>
								Cloudbase can be a fully self hosted application
								that is open source and anti vendor lock in. You
								own your data and you have the keys.
							</p>
							<div className='flex justify-center'>
								<Link href='/pricing'>
									<button className='hover:bg-brand-gray transition duration-300 inline-flex text-white bg-brand-orange border-0 py-2 px-6 focus:outline-none  rounded text-lg'>
										View Pricing
									</button>
								</Link>

								<Link href='/contact-us'>
									<button className='hover:text-white hover:bg-brand-gray transition duration-300 ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded text-lg'>
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
