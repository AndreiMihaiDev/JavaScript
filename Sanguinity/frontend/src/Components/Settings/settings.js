import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';	
import axios from 'axios'

const cellEditProp = {
  mode: 'click'
};

export default class Settings extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		limits: [],
	  		smsNumber: 0
	  	}
	  	   this.handleChangeMesaj = this.handleChangeMesaj.bind(this);
			this.handleSmsNumberPlus = this.handleSmsNumberPlus.bind(this);
			this.handleSmsNumberMinus = this.handleSmsNumberMinus.bind(this);
	  }


  handleChangeMesaj(event) {
    this.setState({smsNumber: event.target.smsNumber});
  }

  handleSmsNumberPlus(event){
  	this.setState({smsNumber: this.state.smsNumber + 1})
  }

  handleSmsNumberMinus(event){
  	if(this.state.smsNumber > 0)
  		this.setState({smsNumber: this.state.smsNumber - 1})
  }


	componentDidMount() {
		axios
		.get('http://5a1efe891dc90f001280228f.mockapi.io/blood')
		.then(response => {
			if(response) {
				this.setState({
					limits: response.data,
				})
				console.log(this.state.limits)
			}else {
				throw new Error('Something went wrooong !!!')
			}			
		})
	}


	render() {
	    return (
	    	<div style={{paddingTop: 60}}>
	    		<h1 style={{'text-align': 'center'}}>Alerte SMS</h1>
	    			<div className='table-content'>
			      		<BootstrapTable data={ this.state.limits } exportCSV={ true } cellEdit={ cellEditProp }>
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

        		<div className='col-xs-12' style={{'text-align': 'center'}}>
					<h1>Numar maxim SMS/zi</h1>
	        		<span class="input-group-btn">
		              <button type="button" class="btn btn-default btn-number" disabled={ !this.state.smsNumber } data-type="minus" data-field="quant[1]" onClick={this.handleSmsNumberMinus}>
		                  <span class="glyphicon glyphicon-minus"></span>
		              </button>
	          		</span>
	          		<input type="text" value={this.state.smsNumber} onChange={this.handleChangeMesaj}/>
		        	<span class="input-group-btn">
		            	<button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={this.handleSmsNumberPlus}>
		                	<span class="glyphicon glyphicon-plus"></span>
		              	</button>
		          	</span>
	    		</div>

	    		<div className='col-xs-11' style={{'text-align': 'right'}}>
		      		<a href="#" className="btn btn-info btn-lg">
          				<span className="glyphicon glyphicon-saved"></span> Salveaza	
        			</a>
        		</div>
	    	</div>
	    );
	}
}