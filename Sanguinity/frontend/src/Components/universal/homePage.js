import React, { Component } from 'react';

const container = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  'paddingTop': 50
}

export default class HomePage extends Component {
  render() {
      return (
        <div className='col-xs-11' style={container}>
          <img src={'https://blogs.eui.eu/volunteercon/wp-content/uploads/sites/36/2016/08/donazione-sangue-2.jpg'} 
          alt="Bun venit!" style={{'height':'100%', 'text-align': 'center'}} className="img-responsive"/>
        </div>
      );
  }
}