import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function StaticSiteHosting() {
	const session = useSession();

	const [sites, setSites] = useState([]);

	const router = useRouter();
	const { projectId } = router.query;

	const createNewSiteHandler = async () => {
		const resp = await axios.post(
			`/backend/static-site-hosting/site/${projectId}/create`,
			{},
			{ headers: { owner: session.data.myToken as string } }
		);
		console.log('respsp :', resp);
		setSites([...sites, resp.data.Site]);
		// TODO: fix this and set state
	};

	useEffect(() => {
		const getSites = async () => {
			const resp = await axios.get(
				`/backend/static-site-hosting/sites/${projectId}`,
				{ headers: { owner: session.data.myToken as string } }
			);
			setSites(resp.data);
			console.log('reso : ', resp);
		};
		getSites();
	}, []);

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

				{sites.map((site) => (
					<div className='flex mx-64 my-4 justify-between border rounded  hover:bg-slate-50 '>
						<div className=' font-semibold text-xl p-6 cursor-pointer px-10 '>
							{site.id}
						</div>
						<Link
							href={`/${projectId}/StaticSiteHosting/${site.id}/view`}>
							<button
								className='text-brand-green bg-transparent border border-solid border-brand-green hover:bg-brand-green hover:text-white active:bg-teal-600 font-bold uppercase text-xs px-6  rounded outline-none focus:outline-none my-3 mx-14 ease-linear transition-all duration-150'
								type='button'>
								View
							</button>
						</Link>
					</div>
				))}

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
