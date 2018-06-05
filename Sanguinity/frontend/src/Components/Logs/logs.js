import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';	
import axios from 'axios';
import SearchInput, {createFilter} from 'react-search-input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment'

import './logs.css';


const cellEditProp = {
  mode: 'click'
};

const divStyle = {
  textAlign: 'right'
};

const searchInputStyle = { 
	marginLeft:0,
	marginRight:'auto',
	textAlign: 'left',
	verticalAlign: 'middle'
};



export default class Logs extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {
	  		searchTerm: '',
	  		filter: [],
	  		logs: [],
	  		startDate: moment(),
	  		endDate: moment(),
	  		isLoading: false,
	  		error: null,
	  		FILTER_KEY: ['id', 'log_id','nume', 'telefon', 'mesaj', 'send']
	  	}
		    this.handleChangeStart = this.handleChangeStart.bind(this);
		   	this.handleChangeEnd = this.handleChangeEnd.bind(this);
		   	this.searchUpdated = this.searchUpdated.bind(this)
	}

	handleChangeStart(date) {
		this.setState({
		  startDate: date
		});
	}

	searchUpdated (term) {
	    this.setState({searchTerm: term})
	    this.setState({filter: this.state.logs.filter(createFilter(this.state.searchTerm, this.state.FILTER_KEY))})
	   	if(this.state.searchTerm === '')
	   		this.setState({filter: this.state.logs})
	}

    componentDidMount() {
   		this.setState({ isLoading: true });
   		// headers: {'Authorization': 'Token dde102035b54a6de9cc3879c554ae7d9a2a44129'}
   		// https://test-api.radu.space/stock/

   		//http://5a1efe891dc90f001280228f.mockapi.io/logs
		axios
		.get('http://5a1efe891dc90f001280228f.mockapi.io/logs')//, headers: {'Authorization': 'Token dde102035b54a6de9cc3879c554ae7d9a2a44129'})
		.then(response => {
			if(response) {
						console.log(response.data)

				this.setState({
					logs: response.data,
					filter: response.data,
					isLoading: false
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

   	handleChangeEnd(date) {
	   	this.setState({
	   		endDate: date
	   	})
		console.log(this.state.startDate._d)

	   	axios
	   	.post('/blablalba', {
	    	startDate: this.state.startDate._d,
	    	endDate: this.state.endDate._d
		  })
	  	.then(function (response) {
			if(response) {
				this.setState({
					logs: response.data
				})
			} else {
				throw new Error('Something went wrooong !!!')
			}			
		})
		.catch(function (error) {
			console.log(error);
		});

  	}

	render() {
	    return (
	    <div className='col-xs-12 logs' style={{paddingTop: 60}}>
	    	<h1 style={{'text-align': 'center'}}>Log-uri SMS</h1>
	    	<div className='date-picker'>
		    	<div className='col-xs-12' style={divStyle}>
		    		<div className='col-xs-9 col-md-11 align-middle' style={{'paddingRight':'2.8%'}}>
		    			Data start
		    		</div>
		    		<div className='col-xs-2 col-md-1' style={{'marginLeft':'-3%'}}>
						<DatePicker
						    selected={this.state.startDate}
						    selectsStart
						    startDate={this.state.startDate}
						    endDate={this.state.endDate}
						    onChange={this.handleChangeStart}/>
					</div> 
				</div> 
				<div className='col-xs-12' style={{display:'inline-block'}}>
					<div className='col-xs-9 col-md-11' style={{'paddingRight':'2.8%'}}>
						Data sfarsit
					</div> 
		    		<div className='col-xs-2 col-md-1' style={{'marginLeft':'-3%'}}>
						<DatePicker
					    	selected={this.state.endDate}
					    	selectsEnd
					    	startDate={this.state.startDate}
					    	endDate={this.state.endDate}
					    	onChange={this.handleChangeEnd}/>
					</div>
			 	</div>
			 </div>
			 <div className='search-input col-xs-12' style={{padding: 50, paddingLeft: 50, textAlign: 'center', display:'inlineBlock'}}>
				<span className="col-xs-5 glyphicon glyphicon-search" style={{textAlign:'right', height: 32, verticalAlign:'middle'}}></span>
				<div className='col-xs-7 textLeft' style={searchInputStyle} >
					<SearchInput  onChange={this.searchUpdated} inputId={'Cauta'} style={{width: 500 }}/>
				</div>
			</div>
			<div></div>
			<div className='log-table col-xs-12'>
				<BootstrapTable data={ this.state.filter } exportCSV={ true } dataSort={ true } cellEdit={ cellEditProp }>
					<TableHeaderColumn width='125' dataField='id' isKey>Id</TableHeaderColumn>
					<TableHeaderColumn width='125' dataField='log_id' dataSort={ true }>Log</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='nume' dataSort={ true }>Nume</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='telefon' dataSort={ true }>Telefon</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='mesaj' dataSort={ true }>Mesaj</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='send' dataSort={ true }>Trimis la</TableHeaderColumn>
				 	<TableHeaderColumn width='125' dataField='tip' dataSort={ true }>Tip SMS</TableHeaderColumn>
				</BootstrapTable>
			</div>
	    </div>
	    );
	}
}