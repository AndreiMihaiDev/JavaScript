import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';	
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment'

export default class Stiva extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {
	  		stiva: [],
	  		error: null,
	  	}
	}

    componentDidMount() {
   		this.setState({ isLoading: true });

		axios
		.get('http://5a1efe891dc90f001280228f.mockapi.io/logs')
		.then(response => {
			if(response) {
						console.log(response.data)

				this.setState({
					stiva: response.data,
				})
			}else {
				throw new Error('Something went wrooong !!!')
			}			
		})
		.catch(error => this.setState({ 
				error, 
				isLoading: false 
			})
		);

	}

	render() {
	    return (
	    <div className='col-xs-12 logs' style={{paddingTop: 60}}>
	    	<h1 style={{'text-align': 'center'}}>Stiva SMS LIVE</h1>

			<div></div>
			<div className='log-table col-xs-12'>
				<BootstrapTable data={ this.state.stiva } exportCSV={ true } dataSort={ true }>
					<TableHeaderColumn width='125' dataField='id' isKey>Id</TableHeaderColumn>
					<TableHeaderColumn width='125' dataField='log_id' dataSort={ true }>Log</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='nume' dataSort={ true }>Nume</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='telefon' dataSort={ true }>Telefon</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='mesaj' dataSort={ true }>Mesaj</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='send' dataSort={ true }>Se trimite la</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='tip' dataSort={ true }>Tip SMS</TableHeaderColumn>
				</BootstrapTable>
			</div>
	    </div>
	    );
	}
}




