import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

export default function StaticSiteHosting() {
	const [sites, setSites] = useState([]);

	const createNewSiteHandler = async () => {
		const resp = await axios.post(
			'backend.cloudbase.dev/static-site-hosting/site/PROJECTID/create'
		);
		// TODO: fix this and set state
	};

	return (
		<div>
			<div className='mt-24  container mx-auto'>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					My Project
				</h1>
				<div className='flex justify-between mx-64'>
					<h1 className='text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
						Static Site Hosting
					</h1>
					<button
						onClick={createNewSiteHandler}
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Create new Site
					</button>
				</div>
				<div className='mx-64 my-10'>
					<div className='text-center font-mono py-9 text-base'>
						Hosting your React projects has never been easier!
						<br />
						Just Follow these simple instructions and you are good
						to go :)
						<br />
						Create a new Site to Continue
						<br />
					</div>
				</div>
				<h1 className='text-3xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					Your Sites
				</h1>

				<div className='flex mx-64 my-4 justify-between border rounded  hover:bg-slate-50 '>
					<div className=' font-semibold text-xl p-6 cursor-pointer px-10 '>
						82a6048d-f373-4999-99eb-761d619af0fb
					</div>
					<Link href='/asd/StaticSiteHosting/asndoiasj/view'>
						<button
							className='text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-teal-600 font-bold uppercase text-xs px-6  rounded outline-none focus:outline-none my-3 mx-14 ease-linear transition-all duration-150'
							type='button'>
							View
						</button>
					</Link>
				</div>
				<div className='flex mx-64 my-4 justify-between border rounded  hover:bg-slate-50 '>
					<div className=' font-semibold text-xl p-6 cursor-pointer px-10 '>
						aisdoajd-f373-4999-99eb-761d619af0fb
					</div>
					<button
						className='text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-teal-600 font-bold uppercase text-xs px-6  rounded outline-none focus:outline-none my-3 mx-14 ease-linear transition-all duration-150'
						type='button'>
						View
					</button>
				</div>
				<div className='flex mx-64 my-4 justify-between border rounded  hover:bg-slate-50 '>
					<div className=' font-semibold text-xl p-6 cursor-pointer px-10 '>
						Hello world Function
					</div>
					<button
						className='text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-teal-600 font-bold uppercase text-xs px-6  rounded outline-none focus:outline-none my-3 mx-14 ease-linear transition-all duration-150'
						type='button'>
						View
					</button>
				</div>
				<div className='flex mx-64 my-4 justify-between border rounded  hover:bg-slate-50 '>
					<div className=' font-semibold text-xl p-6 cursor-pointer px-10 '>
						Hello world Function
					</div>
					<button
						className='text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-teal-600 font-bold uppercase text-xs px-6  rounded outline-none focus:outline-none my-3 mx-14 ease-linear transition-all duration-150'
						type='button'>
						View
					</button>
				</div>
			</div>
		</div>
	);
}
