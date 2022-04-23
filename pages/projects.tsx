import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import ProjectItem from '../src/components/ProjectItem';

interface Project {
	name: string;
	_id: string;
}

type Projects = Project[];

export default function Projects() {
	const session = useSession();

	// const [projects, setProjects] = useState<Projects>([
	// 	{ id: 'Asd1', name: 'first project' },
	// 	{ id: 'Asd2', name: 'second project' },
	// 	{ id: 'Asd3', name: 'other  project' },
	// 	{ id: 'Asd3', name: 'other  project' },
	// 	{ id: 'Asd3', name: 'other  project' },
	// 	{ id: 'Asd3', name: 'other  project' },
	// ]);
	const [projects, setProjects] = useState<Projects>([]);

	const createProjectHandler = async () => {
		const resp = await axios.post(
			'/backend/main/user/projects',
			{ name: 'My Project' },
			{ headers: { authorization: session.data.myToken as string } }
		);
		setProjects(resp.data.projects);
		console.log('RESP : ', resp);
	};

	useEffect(() => {
		const getProjects = async () => {
			const resp = await axios.get('/backend/main/user', {
				headers: { Authorization: session.data.myToken as string },
			});
			// TODO: set the projectlist
			setProjects(resp.data.projects);
			console.log('RESP : ', resp);
		};
		getProjects();
	}, []);

	return (
		<div className='mt-24  container mx-auto'>
			<div>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					Projects
				</h1>
			</div>
			<div className='flex my-9 justify-center'>
				<button
					onClick={createProjectHandler}
					className='  bg-brand-green hover:bg-brand-gray transition duration-300 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear '
					type='button'>
					Create new Project
				</button>
			</div>
			<div className=' mx-64'>
				{projects.length >= 0 && (
					<div className='mt-10  '>
						{projects.map((project) => (
							<ProjectItem
								name={project.name}
								key={project._id}
								id={project._id}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
