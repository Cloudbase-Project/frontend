import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Link from 'next/link';

export default function ViewFunction() {
	return (
		<div>
			<div className='mt-24  container mx-auto'>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					My Project
				</h1>
				<div className='flex justify-between my-7 mx-64'>
					<h1 className='  text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
						Hello world Function
					</h1>
					<button
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Save Changes
					</button>
				</div>

				<div className='mx-64'>
					<div>
						<div className='w-full flex justify-between  '>
							<div className='font-bold text-2xl my-6'>
								Configuration
							</div>
							<Link href={'/asd/serverless/functionid/logs'}>
								<div className='underline font-bold text-lg text-brand-green py-8 cursor-pointer'>
									View Logs
								</div>
							</Link>
						</div>
						<div className='p-4 ml-4 flex justify-between px-14 pr-8 mt-2 text-lg border rounded-md hover:bg-slate-50 hover:shadow-sm '>
							<div>Runtime :</div>{' '}
							<select name='threshold'>
								<option value='javascript'>Javascript</option>
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
						Add Your Code Here
					</div>
				</div>
				<div
					className='flex justify-center mt-5 mx-64
                '>
					<Editor
						height='500px'
						width='100%'
						defaultLanguage='javascript'
						defaultValue={`import express from "express"

const app = express();

app.get("/", (_, res) => {
    return res.send("hello world");
})`}
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
		</div>
	);
}
