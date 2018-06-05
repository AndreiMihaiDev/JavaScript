import React from 'react'

export default class Settings extends React.Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  			mesaj: 'Mesaj mesaj mesaj',
		  	}
		  	this.handleChangeMesaj = this.handleChangeMesaj.bind(this);
	  	}

	  	  handleChangeMesaj(event) {
    this.setState({mesaj: event.target.mesaj});
  }

	  render()
	  {
	  	return (
	  		<div style={{paddingTop: 60, paddingBottom: 30}}>
	  		<div><h1 style={{'textAlign': 'center'}} >Trimite Sms</h1></div>
	  		<div className="row">
	      <div className='col-sm-12' style={{}}>	
	        <div className="checkbox col-sm-offset-2 col-xs-1 col-xs-1">
	          <label> <input type="checkbox" value="option1" /> A+ </label>
	        </div>
	       	<div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option2" /> A- </label>
	        </div>
	        <div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option3" /> B+  </label>  
	          </div>
	         <div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option4" /> B-  </label>  
	          </div>
	        <div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option5" />  AB+  </label>  
	          </div>
	         <div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option6" />  AB-  </label>  
	          </div>
	         <div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option7" />  0+  </label>  
	          </div>
	         <div className="checkbox col-xs-1">
	          <label> <input type="checkbox" value="option8" />  0-  </label>  
	          </div>
	          </div>
	      </div>
	    <input className='col-sm-offset-2 col-sm-8' type="text" value={this.state.mesaj} onChange={this.handleChangeMesaj} />		      	

	      <div>
	      	    <a href="/#" className="btn btn-danger btn-lg col-sm-offset-9 col-sm-1">
          			<span className="glyphicon glyphicon-send"></span> Send 
        		</a>
	
	      </div>
		  		</div>
	  		);
	  }
}