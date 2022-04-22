import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function StaticSiteHosting() {
	const [file, setFile] = useState(null);
	const session = useSession();

	const onFileChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		console.log(event.target.files[0]);
		setFile(event.target.files[0]);
	};

	const router = useRouter();
	const { projectId } = router.query;
	const { siteId } = router.query;

	const fileUploadHandler = async () => {
		const formData = new FormData();
		formData.append('myFile', file, file.name);
		const resp = await axios.post(
			`backend.cloudbase.dev/static-site-hosting/site/${projectId}/${siteId}/`,
			formData,
			{ headers: { owner: session.data.myToken as string } }
		);
		console.log('resp : ', resp);
	};

	const deployHandler = async () => {
		const resp = await axios.post(
			`backend.cloudbase.dev/static-site-hosting/site/${projectId}/${siteId}/deploy`,
			{},
			{ headers: { owner: session.data.myToken as string } }
		);
		console.log('respr : ', resp);
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
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Save Changes
					</button>
				</div>
				<div className='mx-64 my-10'>
					<div className=' font-mono py-9 text-base'>
						Hosting your React projects has never been easier!
						<br />
						Just Follow these simple instructions and you are good
						to go :)
						<br />
						<br />
						<ol>
							<li className='mt-2'>1. Build your application</li>
							<li className='mt-2'>
								2. Go to the build folder and run the following
								script
							</li>
							<div className='flex justify-center'>
								<code className=' my-4  text-center border rounded-lg bg-slate-100 w-full overflow-hidden p-5'>
									mkdir -p static-site-hosting/serve/SITEID
								</code>
							</div>
							<li className='mt-2'>
								3. Move all files to this folder except
								index.html
							</li>
							<li className='mt-2'>4. Zip the build folder</li>
							<li className='mt-2'>5. Upload</li>
							<li className='mt-2'>6. That's it!</li>
						</ol>
					</div>
					<div className='text-2xl my-6'>Upload your Zip File</div>
					<div className='flex justify-center mt-8'>
						<div className='max-w-2xl rounded-lg shadow-xl bg-gray-50'>
							<div className='m-4'>
								<label className='inline-block mb-2 text-gray-500'>
									File Upload
								</label>
								<div className='flex items-center justify-center w-full'>
									<label className='flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300'>
										<div className='flex flex-col items-center justify-center pt-7'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-8 h-8 text-gray-400 group-hover:text-gray-600'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
												/>
											</svg>
											<p className='pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600'>
												Attach a file
											</p>
										</div>
										<input
											onChange={onFileChangeHandler}
											type='file'
											className='opacity-0'
										/>
									</label>
								</div>
							</div>
							<div className='flex justify-center p-2'>
								<button
									onClick={fileUploadHandler}
									className='w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl'>
									Upload
								</button>
							</div>
						</div>
					</div>
					<button
						onClick={deployHandler}
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Deploy
					</button>
				</div>
			</div>
		</div>
	);
}
