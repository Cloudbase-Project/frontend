import React, { useState } from 'react';
import Toggle from '../../src/components/Toggle';

interface ProjectDetails {
	name: string;
	id: string;
	services: { name: string; enabled: boolean }[];
}

export default function Edit() {
	const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
		name: 'Project Name',
		id: 'Asd1',
		services: [
			{ name: 'Authentication', enabled: false },
			{ name: 'Serverless', enabled: false },
			{ name: '', enabled: false },
		],
	});

	return (
		<div className='mt-24  container mx-auto'>
			<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
				My Project
			</h1>
			<h1 className='text-4xl ml-48 font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
				Services
			</h1>
			<div className='text-center font-normal leading-normal text-xl '>
				Configure your Cloudbase services. Click on a service to explore
				more.
			</div>
			<div className='mx-64 mt-12 '>
				<Toggle
					link='/asd/authentication/'
					name='Cloudbase Authentication'
				/>
				<Toggle link='/asd/serverless' name='Serverless' />
				<Toggle link='/asd/email' name='Email Service' />
				<Toggle link='/asd/deeplink' name='Deep Link Generation' />
				<Toggle link='/asd/imageresize' name='Cloudbase Image Resize' />
				<Toggle
					link='/asd/StaticSiteHosting'
					name='Cloudbase  Static Site Hosting'
				/>
			</div>
		</div>
	);
}
