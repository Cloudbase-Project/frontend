import { useRouter } from 'next/router';
import React from 'react';
import Toggle from '../../src/components/Toggle';

export default function authentication() {
	const router = useRouter();
	const { projectId } = router.query;

	return (
		<div>
			<div className='mt-24  container mx-auto'>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					My Project
				</h1>
				<div className='flex justify-between mx-64'>
					<h1 className='text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
						Authentication
					</h1>
					<button
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Save Changes
					</button>
				</div>

				<div className='mx-64 mt-10'>
					<Toggle link='#' name='Credentials' />
					<div className='mb-2 text-lg mx-3 '>
						Use this Unique URL in your application to Authenticate
						with credentials
					</div>
					<div className='text-base text-slate-600 m-2 '>
						Registration
					</div>
					<div className='flex justify-center'>
						<code className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'>
							{/* http://my-project-1293812300219.cloudbase.dev/auth/register */}
							http://backend.cloudbase.dev/auth/auth/{projectId}
							/register
						</code>
					</div>
					<div className='text-base text-slate-600 m-2 '>Login</div>

					<div className='flex justify-center'>
						<code className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'>
							{/* http://my-project-1293812300219.cloudbase.dev/auth/login */}
							http://backend.cloudbase.dev/auth/auth/{projectId}
							/Login
						</code>
					</div>
					<Toggle link='#' name='Login with Google' />
					<div className='mb-2 text-lg mx-3 '>
						Use this Unique URL in your application to Authenticate
						with Google
					</div>
					<div className='flex justify-center'>
						<code className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'>
							{/* http://my-project-1293812300219.cloudbase.dev/auth/google */}
							http://backend.cloudbase.dev/auth/auth/{projectId}
							/googleLogin
						</code>
					</div>
					<div className='text-base text-slate-600 m-2 '>
						Enter Client ID
					</div>
					<div className='mb-3 pt-0'>
						<input
							type='text'
							placeholder='Client ID'
							className='px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-slate-100 rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:ring w-full'
						/>
					</div>
					<div className='text-base text-slate-600 m-2 '>
						Enter Client Secret
					</div>
					<div className='mb-3 pt-0'>
						<input
							type='text'
							placeholder='Client Secret'
							className='px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-slate-100 rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:ring w-full'
						/>
					</div>

					<Toggle link='#' name='Login with Facebook' />
					<div className='mb-2 text-lg mx-3 '>
						Use this Unique URL in your application to Authenticate
						with Facebook
					</div>
					<div className='flex justify-center'>
						<code className=' my-4 text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'>
							{/* http://my-project-1293812300219.cloudbase.dev/auth/facebook */}
							http://backend.cloudbase.dev/auth/auth/{projectId}
							/facebookLogin
						</code>
					</div>
					<div className='text-base text-slate-600 m-2 '>
						Enter Client ID
					</div>
					<div className='mb-3 pt-0'>
						<input
							type='text'
							placeholder='Client ID'
							className='px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-slate-100 rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:ring w-full'
						/>
					</div>
					<div className='text-base text-slate-600 m-2 '>
						Enter Client Secret
					</div>
					<div className='mb-3 pt-0'>
						<input
							type='text'
							placeholder='Client Secret'
							className='px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-slate-100 rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:ring w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
