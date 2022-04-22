import { useRouter } from 'next/router';
import React from 'react';

export default function ImageResize() {
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
						Cloudbase Image Manipulation
					</h1>
					<button
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Save Changes
					</button>
				</div>

				<div className='mx-64 my-10'>
					<div className='text-center font-mono py-9 text-base'>
						Image Manipulation is a simple service to use once
						configured.
						<br />
						Use the provided webhooks to perform your action from
						any source.
						<br />
						<br />
					</div>

					<div className='text-base text-slate-600 m-2 '>
						Image Resize URL
					</div>
					<div className='flex justify-center'>
						<code className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'>
							{/* http://my-project-1293812300219.cloudbase.dev/image-resize/config/resize */}
							http://backend.cloudbase.dev/image-resize/config/resize/
							{projectId}/
						</code>
					</div>
					<div className='text-2xl my-6'>Configure S3</div>
					<div>
						<div className='text-base text-slate-600 m-2 '>
							Bucket Name
						</div>
						<div className='flex justify-center'>
							<input
								placeholder='Enter Bucket Name'
								className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'
							/>
						</div>
						<div className='text-base text-slate-600 m-2 '>
							AWS Access Key
						</div>
						<div className='flex justify-center'>
							<input
								placeholder='Enter AWS Access Key'
								className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'
							/>
						</div>
						<div className='text-base text-slate-600 m-2 '>
							AWS Secret Key
						</div>
						<div className='flex justify-center'>
							<input
								placeholder='Enter AWS Secret Key'
								className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
