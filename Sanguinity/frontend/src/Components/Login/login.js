import React, { Component } from 'react';
import API from '../Table/table';

export default class Login extends Component {


	constructor(props)
	{
		super(props);
		this.store = this.props.store;
	}

	render() {

		return(
				<div>
					{/* if(logat) return */}					
					<API store={this.store} />
				</div>
			);
	}

} 