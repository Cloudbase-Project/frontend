import React, { useState } from 'react';
import ProjectItem from '../src/components/ProjectItem';

interface Project {
	name: string;
	id: string;
}

type Projects = Project[];

export default function projects() {
	const [projects, setProjects] = useState<Projects>([
		{ id: 'Asd1', name: 'first project' },
		{ id: 'Asd2', name: 'second project' },
		{ id: 'Asd3', name: 'other  project' },
		{ id: 'Asd3', name: 'other  project' },
		{ id: 'Asd3', name: 'other  project' },
		{ id: 'Asd3', name: 'other  project' },
	]);

	return (
		<div className='mt-24  container mx-auto'>
			<div>
				<h1 className='text-6xl text-center font-normal leading-normal mt-0 mb-2 text-blueGray-800'>
					Projects
				</h1>
			</div>
			<div className=' mx-64'>
				{projects.length >= 0 && (
					<div className='mt-10  '>
						{projects.map((project) => (
							<ProjectItem name={project.name} id={project.id} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
