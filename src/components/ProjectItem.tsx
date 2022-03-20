import Link from 'next/link';
import React from 'react';

interface Props {
	name: string;
	id: string;
}

export default function ProjectItem(props: Props) {
	return (
		<div className='flex  justify-between py-6 text-2xl rounded-md border my-6 px-20  '>
			<div className='font-semibold py-2 uppercase'>{props.name}</div>
			<Link href={`/${props.id}/edit`}>
				<div className='bg-brand-green cursor-pointer text-white rounded p-2 hover:bg-brand-gray transition duration-300'>
					Configure
				</div>
			</Link>
		</div>
	);
}
