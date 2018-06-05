import React from 'react'

export default class SendSMS extends React.Component {
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
	      </form>
	    <input type="text" value={this.state.mesaj} onChange={this.handleChangeMesaj} />		      	

	      <div>
	      	    <a href="/#" className="btn btn-danger btn-lg">
          			<span className="glyphicon glyphicon-send"></span> Send 
        		</a>
	
	      </div>
		  		</div>
	  		);
	  }
}