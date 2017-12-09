import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';	
import './table.css'
import axios from 'axios';

export default class Table extends React.Component {
	  constructor(props)
	  {
	  	super(props);
	  	this.store = this.props.store;

	  	this.state = {
	  		products: [],
	  		isLoading: false,
	  		error: null,
	  		sms_matrix: []
	  	}
	  }

	fetchStore(products)
	{	
		this.store.getState().cedl.cedl = products[0];
		this.store.getState().cer.cer = products[1];
		this.store.getState().cerdl.cerdl = products[2];
		this.store.getState().cersl.cersl = products[3];
		this.store.getState().cp.cp = products[4];
		this.store.getState().cts.cts = products[5];
		this.store.getState().ppc.ppc = products[7];
		this.store.getState().stua.stua = products[8];
		this.store.getState().stuadl.stuadl = products[9];
		this.store.getState().stuapdl.stuapdl = products[10];
	}


	total(products)
	{
		// eslint-disable-next-line
		for(let i=0;i<products.length;i++) {
			products[i].Total = products[i].A_positive + products[i].A_negative 
							  + products[i].B_positive + products[i].B_negative
							  + products[i].AB_positive + products[i].AB_negative;
							  + products[i].O_positive + products[i].O_negative
		}
		return 0;
	}

   componentDidMount() {
   		this.setState({ isLoading: true });

		axios.get('http://5a1efe891dc90f001280228f.mockapi.io/blood')
		.then(response => {
			if(response) {
				this.total(response.data);
				this.setState({products: response.data, isLoading: false})
				this.fetchStore(this.state.products);		
			}else {
				throw new Error('Something went wrooong !!!')
			}			
		})
		.catch(error => this.setState({ error, isLoading: false }));
	}


	  background(fieldValue, row, rowIdx, colIdx)
	  {
	  	if(fieldValue <= 15)
	  	{
	  		return 'background-red';	  		
	  	}
	  	if(fieldValue > 15 && fieldValue < 50)
	  		return 'background-orange';
	  	if(fieldValue >= 50 && fieldValue < 75)
	  		return 'background-darkOrange';
	  	if(fieldValue >= 75)
	  		return 'background-green';	  	
	  }
	  
	  componentDidUpdate(prevProps, prevState) {
	  	axios.get('http://5a1efe891dc90f001280228f.mockapi.io/blood')
		.then(response => {
			this.total(response.data);
			this.setState({products: response.data})
			this.fetchStore(this.state.products);			
		})
		.catch(error => {
			console.log('Error fetching and parsing data', error);
		});
	  }

	  render() {
	  	 const { products, isLoading, error } = this.state;
	  	 
	  	 if (error) {
     	 return (<div className="alert alert-danger">
				  <strong>Error....!</strong>
				</div>);
    	}

	  	if (isLoading) {
     	 return (<div className="alert alert-info">
				  <strong>Loading....!</strong>
				</div>);
    	}

	    return (
	    <div>
	      <BootstrapTable data={ products } exportCSV={ true }>
	        <TableHeaderColumn width='125' dataField='Product' isKey>Product</TableHeaderColumn>
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
	      <h1>Trimite SMS</h1>
	      </div>
	    );
	  }
}