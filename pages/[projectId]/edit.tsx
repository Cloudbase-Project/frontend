import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Toggle from '../../src/components/Toggle';

interface ProjectDetails {
	name: string;
	id: string;
	services: { name: string; enabled: boolean }[];
}

export default function Edit() {
	const session = useSession();

	const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
		name: 'Project Name',
		id: 'Asd1',
		services: [
			{ name: 'Authentication', enabled: false },
			{ name: 'Serverless', enabled: false },
			{ name: '', enabled: false },
		],
	});

	useEffect(() => {
		const getProject = async () => {
			const resp = await axios.get(
				'backend.cloudbase.dev/main/user/projects/PROJECTID',
				{ headers: { authorization: session.data.myToken as string } }
			);
		};
	});

	const toggleService = async (service: string) => {
		console.log('servie name : ', service);
		const resp = await axios.post(
			`backend.cloudbase.dev/main/user/projects/PROJECTID/services/${service}/toggle`,
			{},
			{ headers: { authorization: session.data.myToken as string } }
		);
		console.log('resp : ', resp);
	};

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
					action={() => toggleService('AUTHENTICATION')}
					link='/asd/authentication/'
					name='Cloudbase Authentication'
				/>
				<Toggle
					action={() => toggleService('SERVERLESS')}
					link='/asd/serverless'
					name='Serverless'
				/>
				<Toggle
					action={() => toggleService('EMAIL')}
					link='/asd/email'
					name='Email Service'
				/>
				<Toggle
					action={() => toggleService('DEEP_LINK_GENERATION')}
					link='/asd/deeplink'
					name='Deep Link Generation'
				/>
				<Toggle
					action={() => toggleService('IMAGE_RESIZE')}
					link='/asd/imageresize'
					name='Cloudbase Image Resize'
				/>
				<Toggle
					action={() => toggleService('STATIC_SITE_HOSTING')}
					link='/asd/StaticSiteHosting'
					name='Cloudbase  Static Site Hosting'
				/>
			</div>
		</div>
	);
}
