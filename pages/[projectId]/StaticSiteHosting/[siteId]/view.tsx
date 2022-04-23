import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function StaticSiteHosting() {
	const [file, setFile] = useState(null);
	const [status, setStatus] = useState(null);
	const [deployStatus, setDeployStatus] = useState(null);
	const [buildStatus, setBuildStatus] = useState(null);
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
		setStatus('Building an Image from your site...');
		const resp = await axios.post(
			`/backend/static-site-hosting/site/${projectId}/${siteId}/`,
			formData,
			{ headers: { owner: session.data.myToken as string } }
		);
		setBuildStatus('success');
		setStatus(null);
		console.log('resp : ', resp);
	};

	const deployHandler = async () => {
		setStatus('Deploying your site...');
		const resp = await axios.post(
			`/backend/static-site-hosting/site/${projectId}/${siteId}/deploy`,
			{},
			{ headers: { owner: session.data.myToken as string } }
		);
		setDeployStatus('success');
		setStatus(null);
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
									mkdir -p static-site-hosting/serve/{siteId}
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
					{status ? (
						<div
							style={{
								flexDirection: 'column',
								alignItems: 'center',
							}}
							className='flex justify-center'>
							<svg
								role='status'
								className='mr-2 w-36 h-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
								viewBox='0 0 100 101'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
									fill='currentColor'
								/>
								<path
									d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
									fill='currentFill'
								/>
							</svg>
							<div className='pt-5 font-mono text-lg'>
								{status}
							</div>
						</div>
					) : (
						<div>
							{!buildStatus && (
								<>
									<div className='text-2xl my-6'>
										Upload your Zip File
									</div>
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
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth='2'
																	d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
																/>
															</svg>
															<p className='pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600'>
																Attach a file
															</p>
														</div>
														<input
															onChange={
																onFileChangeHandler
															}
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
								</>
							)}

							{buildStatus && (
								<button
									onClick={deployHandler}
									className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
									type='button'>
									Deploy
								</button>
							)}

							{deployStatus && (
								<>
									Your site has been Deploy successfully!
									Check it out at :
									https://cloudbase.dev/backend/static-site-hosting/serve/
									{siteId}/
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
