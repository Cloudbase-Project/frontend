import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSession } from 'next-auth/react';
// import SSE from 'sse.js';
const { SSE } = require('sse.js');

export default function ViewFunction() {
	const router = useRouter();
	const { projectId, functionId } = router.query;
	const session = useSession();

	const [func, setFunc] = useState(null);
	const [code, setCode] = useState(null);
	const [status, setStatus] = useState('');
	const [buildStatus, setBuildStatus] = useState(null);
	const [deployStatus, setDeployStatus] = useState(null);

	useEffect(() => {
		const getFunction = async () => {
			const resp = await axios.get(
				`/backend/serverless/function/${projectId}/${functionId}`,
				{ headers: { owner: session.data.myToken as string } }
			);
			console.log('qweqwe : ', resp.data);
			setFunc(resp.data);
			setCode(resp.data.code);
		};

		getFunction();
	}, []);

	const buildFunctionHandler = async () => {
		console.log('CCCCOOOODE : ');
		// console.log('sse : ', SSE);
		// const events = new SSE(
		// 	`/backend/serverless/function/${projectId}/${functionId}/build`,
		// 	{
		// 		headers: {
		// 			owner: session.data.myToken as string,
		// 			'Content-Type': 'application/json',
		// 		},
		// 		payload: { Code: code, Language: 'NODEJS' },
		// 	}
		// );
		try {
			setStatus('Building your function');
			const resp = await axios.post(
				`/backend/serverless/function/${projectId}/${functionId}/build`,
				{ Code: code, Language: 'NODEJS' },
				{ headers: { owner: session.data.myToken as string } }
			);

			console.log('resp ', resp);
			setBuildStatus('success');
			setStatus('');
		} catch (error) {
			console.log('error : ', error);
			console.log('errorsd: ', error.response);
		}
	};

	const deployFunctionHandler = async () => {
		// const events = new SSE(
		// 	`/backend/serverless/function/${projectId}/${functionId}/deploy`,
		// 	{
		// 		headers: {
		// 			owner: session.data.myToken as string,
		// 			'Content-Type': 'application/json',
		// 		},
		// 		payload: {},
		// 	}
		// );

		try {
			setStatus('Deploying your function');
			const resp = await axios.post(
				`/backend/serverless/function/${projectId}/${functionId}/deploy`,
				{},
				{
					headers: {
						owner: session.data.myToken as string,
						'Content-Type': 'application/json',
					},
				}
			);
			console.log('resp : ', resp);
			setDeployStatus('Deployed');
			setStatus('');
		} catch (error) {
			console.log('Err : ', error);
			console.log('errr : ', error.response);
		}

		// events.onmessage = (e) => {
		// 	console.log('d : ', e);
		// 	setStatus(e.data);
		// };

		// events.onerror = (e) => {
		// 	console.log('erroorr: ', e);
		// 	setDeployStatus('success');
		// 	setStatus('');
		// 	events.close();
		// };
	};

	return (
		<div>
			<div className='mt-24  container mx-auto'>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					My Project
				</h1>
				<div className='flex justify-between my-7 mx-64'>
					<h1 className='  text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
						{functionId}
					</h1>
					{buildStatus && (
						<button
							onClick={deployFunctionHandler}
							className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
							type='button'>
							Deploy Function
						</button>
					)}
					<button
						onClick={buildFunctionHandler}
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Build Function
					</button>
				</div>
				{deployStatus && (
					<div>
						Test out your function here :
						http://cloudbase.dev/backend/serverless/serve/
						{functionId}
					</div>
				)}
				{status !== '' ? (
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
						<div className='pt-5 font-mono text-lg'>{status}</div>
					</div>
				) : (
					<div>
						<div className='mx-64'>
							<div>
								<div className='w-full flex justify-between  '>
									<div className='font-bold text-2xl my-6'>
										Configuration
									</div>
									<Link
										href={`/${projectId}/serverless/${functionId}/logs`}>
										<div className='underline font-bold text-lg text-brand-green py-8 cursor-pointer'>
											View Logs
										</div>
									</Link>
								</div>
								<div className='p-4 ml-4 flex justify-between px-14 pr-8 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
									<div>Runtime :</div>{' '}
									<select name='threshold'>
										<option value='javascript'>
											Javascript
										</option>
										<option value='go'>Golang</option>
										<option value='python'>Python</option>
									</select>
								</div>
								<div className='p-4 ml-4 flex justify-between px-14 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
									<div>Deployed Number of Instances :</div>{' '}
									<div>4</div>
								</div>
								<div className='p-4 ml-4 flex justify-between px-14 pr-8 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
									<div>Maximum Number of Instances :</div>{' '}
									<input
										className='w-9 '
										type={'number'}
										defaultValue={10}
										max={10}
										min={1}
									/>
								</div>
								<div className='p-4 ml-4 flex justify-between px-14 pr-8 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
									<div>Minimum Number of Instances :</div>{' '}
									<input
										className='w-9 '
										type={'number'}
										defaultValue={2}
										max={10}
										min={0}
									/>
								</div>
								<div className='p-4 ml-4 flex justify-between px-14 pr-8 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
									<div>Scaling :</div>{' '}
									<select name='threshold'>
										<option value='CPU'>CPU</option>
										<option value='Memory'>Memory</option>
										<option value='Requests per Second'>
											Requests per Second
										</option>
									</select>
								</div>
								<div className='p-4 ml-4 flex justify-between px-14 pr-4 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
									<div>Threshold for Scaling :</div>{' '}
									<div>
										<input
											className='w-10'
											type={'number'}
											defaultValue={25}
											max={100}
											min={25}
										/>{' '}
										%
									</div>
								</div>
							</div>
							<div className='w-full font-bold text-2xl mt-10 '>
								Add Your Code Here {console.log(code)}
							</div>
						</div>
						<div
							className='flex justify-center mt-5 mx-64
								'>
							<Editor
								value={code}
								height='500px'
								width='100%'
								defaultLanguage='javascript'
								onChange={(e) => {
									// console.log(e);
									setCode(e);
								}}
								defaultValue={code}
								// 						defaultValue={`import express from "express"
								// const app = express();
								// app.get("/", (_, res) => {
								//     return res.send("hello world");
								// })`}
								theme='vs-dark'
								options={{
									fontSize: 20,
									padding: {
										top: 25,
										bottom: 5,
									},
								}}
							/>
						</div>
					</div>
				)}
				{deployStatus && <div>Function Deployed successfully</div>}
			</div>
		</div>
	);
}
