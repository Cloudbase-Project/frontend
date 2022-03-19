import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

export default function ViewFunction() {
	return (
		<div>
			<div className='mt-24  container mx-auto'>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					My Project
				</h1>
				<div className='flex justify-between mx-64'>
					<h1 className='  text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
						Hello world Function
					</h1>
					<button
						className='bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
						type='button'>
						Save Changes
					</button>
				</div>

				<div
					className='flex justify-center mt-10
                '>
					<Editor
						height='500px'
						width='75%'
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
								top: 16,
								bottom: 5,
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
