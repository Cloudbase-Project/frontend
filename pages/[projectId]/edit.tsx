import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Toggle from '../../src/components/Toggle';

interface ProjectDetails {
	name: string;
	id: string;
	services: { name: string; enabled: boolean }[];
}

export default function Edit() {
	const session = useSession();
	const router = useRouter();

	const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
		name: 'Project Name',
		id: 'Asd1',
		services: [
			{ name: 'Authentication', enabled: false },
			{ name: 'Serverless', enabled: false },
			{ name: '', enabled: false },
		],
	});

	const [services, setServices] = useState([]);
	const { projectId } = router.query;

	useEffect(() => {
		const getProject = async () => {
			const resp = await axios.get(
				`/backend/main/user/projects/${projectId}`,
				{ headers: { authorization: session.data.myToken as string } }
			);

			console.log('resp : ', resp);
			setProjectDetails(resp.data);
			let enabledServices = [];
			for (const service of resp.data.projects.services) {
				if (service.enabled) enabledServices.push(service.name);
			}
			setServices(enabledServices);
		};
		getProject();
	}, []);

	const toggleService = async (service: string) => {
		console.log('servie name : ', service);
		const resp = await axios.post(
			`/backend/main/user/projects/${projectId}/services/${service}/toggle`,
			{},
			{ headers: { authorization: session.data.myToken as string } }
		);
		setProjectDetails(resp.data);
		let enabledServices = [];
		for (const service of resp.data.services) {
			if (service.enabled) enabledServices.push(service.name);
		}
		setServices(enabledServices);
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
					enabled={services.includes('AUTHENTICATION')}
					action={() => toggleService('AUTHENTICATION')}
					link={`/${projectId}/authentication/`}
					name='Cloudbase Authentication'
				/>
				<Toggle
					enabled={services.includes('SERVERLESS')}
					action={() => toggleService('SERVERLESS')}
					link={`/${projectId}/serverless`}
					name='Serverless'
				/>
				<Toggle
					enabled={services.includes('STATIC_SITE_HOSTING')}
					action={() => toggleService('STATIC_SITE_HOSTING')}
					link={`/${projectId}/StaticSiteHosting`}
					name='Cloudbase  Static Site Hosting'
				/>
				<Toggle
					enabled={services.includes('IMAGE_RESIZE')}
					action={() => toggleService('IMAGE_RESIZE')}
					link={`/${projectId}/imageresize`}
					name='Cloudbase Image Resize'
				/>
				<Toggle
					enabled={services.includes('EMAIL')}
					action={() => toggleService('EMAIL')}
					link={`/${projectId}/email`}
					name='Email Service'
				/>
				<Toggle
					enabled={services.includes('DEEP_LINK_GENERATION')}
					action={() => toggleService('DEEP_LINK_GENERATION')}
					link={`/${projectId}/deeplink`}
					name='Deep Link Generation'
				/>
			</div>
		</div>
	);
}
