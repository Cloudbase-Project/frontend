import Link from 'next/link';
import React from 'react';

export default function serverless() {
	return (
		<div>
			<div className='mt-24  container mx-auto'>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					My Project
				</h1>
				<div className='flex justify-between mx-64'>
					<h1 className='text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
						Serverless
					</h1>
					<button
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Create new Function
					</button>
				</div>
				<h1 className='text-3xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					Functions
				</h1>

				<div className='flex mx-64 my-4 justify-between border rounded  hover:bg-slate-50 '>
					<div className=' font-semibold text-xl p-6 cursor-pointer px-10 '>
						Hello world Function
					</div>
					<Link href='/asd/serverless/functionid/view'>
						<button
							className='text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-teal-600 font-bold uppercase text-xs px-6  rounded outline-none focus:outline-none my-3 mx-14 ease-linear transition-all duration-150'
							type='button'>
							View
						</button>
					</Link>
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
