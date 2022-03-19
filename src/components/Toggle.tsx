import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
	name: string;
	link: string;
}

export default function Toggle(props: Props) {
	const [enabled, setEnabled] = useState<boolean>(false);

	return (
		// <div className='flex items-center justify-center w-full mb-12'>
		<div className='flex justify-center'>
			<div className='flex justify-between w-full'>
				<div className='flex w-full items-center justify-between mt-8 mb-4'>
					<Link href={props.link}>
						<span
							className={`ml-3 cursor-pointer text-gray-700 font-bold mx-2 text-2xl ${
								enabled && 'text-green-600'
							} `}>
							{props.name}
						</span>
					</Link>
					<label className='flex items-center cursor-pointer'>
						<div className='relative'>
							<input
								checked={enabled}
								type='checkbox'
								id='toggle'
								className='sr-only'
								onChange={(e) => setEnabled(e.target.checked)}
							/>
							<div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
							<div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
						</div>
						<div className='ml-3 text-gray-700 font-medium'>
							{enabled ? 'Enabled!' : 'Disabled!'}
						</div>
					</label>
				</div>
			</div>
		</div>
	);
}
