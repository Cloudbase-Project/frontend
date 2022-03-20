import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<div>
				<h1 className='text-6xl font-normal leading-normal mt-0 mb-2 text-blue-500'>
					{this.props.children}
				</h1>
			</div>
		);
	}
}

export default Header;
