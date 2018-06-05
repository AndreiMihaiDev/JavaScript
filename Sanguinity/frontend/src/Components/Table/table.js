import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';	
import axios from 'axios';
import './table.css';



export default class Table extends React.Component {
	 
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		products: [],
	  		isLoading: false,
	  		error: null
	  	}
	  }

   	componentDidMount() {
   		this.setState({ 
   			isLoading: true 
   		});
   		// headers: {'Authorization': 'Token dde102035b54a6de9cc3879c554ae7d9a2a44129'}
   		// https://test-api.radu.space/stock/
   		// headers: {'Authorization': 'Token dde102035b54a6de9cc3879c554ae7d9a2a44129'}

   		//http://5a1efe891dc90f001280228f.mockapi.io/blood

		axios
		.get('https://test-api.radu.space/stock/', { headers: {'Authorization': 'Token dde102035b54a6de9cc3879c554ae7d9a2a44129'} })
		.then(response => {
			if(response) {
				this.setState({
					products: response.data,
					isLoading: false
				})
			console.log(this.state.products)
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



	background(fieldValue, row, rowIdx, colIdx) {
	  	if(fieldValue <= 15) 
	  		return 'background-red';	  		
	  	if(fieldValue > 15 && fieldValue < 50)
	  		return 'background-orange';
	  	if(fieldValue >= 50 && fieldValue < 75)
	  		return 'background-darkOrange';
	  	if(fieldValue >= 75)
	  		return 'background-green';	  	
	}

	render() {
	  	const { products, isLoading, error } = this.state;

	  	if (error) {
     	 	return (
     	 		<div className="alert alert-danger">
				  <strong>Error!</strong>
				</div>
			);
    	}

	  	if (isLoading) {
	     	return (
	     	 	<div className="alert alert-info text-center">
					<strong>Loading...</strong>
				</div>
			);
    	}

	    return (
	    	<div className='col-xs-12' style={{paddingTop: 60}} >
	    		<h1 style={{'text-align': 'center'}}>Stocuri</h1>
		    	<div className='table-content'>
		      		<BootstrapTable data={ products } exportCSV={ true } >
				        <TableHeaderColumn width='125' dataField='Product' isKey>Produs</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='A_positive' columnClassName={ this.background }>A+</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='A_negative' columnClassName={ this.background }>A-</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='B_positive' columnClassName={ this.background }>B+</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='B_positive' columnClassName={ this.background }>B-</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='AB_positive' columnClassName={ this.background }>AB+</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='AB_negative' columnClassName={ this.background }>AB-</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='O_positive' columnClassName={ this.background }>O+</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='O_negative' columnClassName={ this.background }>O-</TableHeaderColumn>
				        <TableHeaderColumn width='125' dataField='Total'>Total</TableHeaderColumn>
			      	</BootstrapTable>
		      	</div>								
		      	<div className='text-right send-sms'>
		      		<h1>Trimite SMS</h1>
		      		<a href="/sms" className="btn btn-danger btn-lg">
          				<span className="glyphicon glyphicon-send"></span> Send 
        			</a>
		      	</div>
	      	</div>
	      	
	    );
	}
}