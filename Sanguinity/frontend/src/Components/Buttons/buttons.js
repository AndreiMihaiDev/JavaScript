import React, { Component } from 'react';

import { cedl_addAPositive, cedl_addANegative, cedl_addBPositive, cedl_addBNegative, cedl_addABPositive, cedl_addABNegative, cedl_addOPositive, cedl_addONegative, } from "../../actions/cedl";
import { cer_addAPositive, cer_addANegative, cer_addBPositive, cer_addBNegative, cer_addABPositive, cer_addABNegative, cer_addOPositive, cer_addONegative, } from "../../actions/cer";
import { cerdl_addAPositive, cerdl_addANegative, cerdl_addBPositive, cerdl_addBNegative, cerdl_addABPositive, cerdl_addABNegative, cerdl_addOPositive, cerdl_addONegative, } from "../../actions/cerdl";
import { cersl_addAPositive, cersl_addANegative, cersl_addBPositive, cersl_addBNegative, cersl_addABPositive, cersl_addABNegative, cersl_addOPositive, cersl_addONegative, } from "../../actions/cersl";
import { cp_addAPositive, cp_addANegative, cp_addBPositive, cp_addBNegative, cp_addABPositive, cp_addABNegative, cp_addOPositive, cp_addONegative, } from "../../actions/cp";
import { cts_addAPositive, cts_addANegative, cts_addBPositive, cts_addBNegative, cts_addABPositive, cts_addABNegative, cts_addOPositive, cts_addONegative, } from "../../actions/cts";
import { ppc_addAPositive, ppc_addANegative, ppc_addBPositive, ppc_addBNegative, ppc_addABPositive, ppc_addABNegative, ppc_addOPositive, ppc_addONegative, } from "../../actions/ppc";
import { stua_addAPositive, stua_addANegative, stua_addBPositive, stua_addBNegative, stua_addABPositive, stua_addABNegative, stua_addOPositive, stua_addONegative, } from "../../actions/stua";
import { stuadl_addAPositive, stuadl_addANegative, stuadl_addBPositive, stuadl_addBNegative, stuadl_addABPositive, stuadl_addABNegative, stuadl_addOPositive, stuadl_addONegative, } from "../../actions/stuadl";
import { stuapdl_addAPositive, stuapdl_addANegative, stuapdl_addBPositive, stuapdl_addBNegative, stuapdl_addABPositive, stuapdl_addABNegative, stuapdl_addOPositive, stuapdl_addONegative, } from "../../actions/stuapdl";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = 
    {
      product: this.props.product
    };
  }

  handleAPositive = () => {
    switch(this.state.product)
    {
    	case "cedl":
    	{
    		console.log("cedl_APositive");
    		this.store.dispatch(cedl_addAPositive());
    		break;
    	}

      case "cer":
      {
        console.log("cer_APositive");
        this.store.dispatch(cer_addAPositive());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_APositive");
        this.store.dispatch(cerdl_addAPositive());
        break;
      }

      case "cersl":
      {
        console.log("cersl_APositive");
        this.store.dispatch(cersl_addAPositive());
        break;
      }


      case "cp":
      {
        console.log("cp_APositive");
        this.store.dispatch(cp_addAPositive());
        break;
      }

      case "cts":
      {
        console.log("cts_APositive");
        this.store.dispatch(cts_addAPositive());
        break;
      }

      case "ppc":
      {
        console.log("ppc_APositive");
        this.store.dispatch(ppc_addAPositive());
        break;
      }

      case "stua":
      {
        console.log("stua_APositive");
        this.store.dispatch(stua_addAPositive());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_APositive");
        this.store.dispatch(stuadl_addAPositive());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_APositive");
        this.store.dispatch(stuapdl_addAPositive());
        break;
      }

      default:
        break;

    }    
  }

  handleANegative = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_ANegative");
        this.store.dispatch(cedl_addANegative());
        break;
      }

      case "cer":
      {
        console.log("cer_ANegative");
        this.store.dispatch(cer_addANegative());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_ANegative");
        this.store.dispatch(cerdl_addANegative());
        break;
      }

      case "cersl":
      {
        console.log("cersl_ANegative");
        this.store.dispatch(cersl_addANegative());
        break;
      }

      case "cp":
      {
        console.log("cp_ANegative");
        this.store.dispatch(cp_addANegative());
        break;
      }

      case "cts":
      {
        console.log("cts_ANegative");
        this.store.dispatch(cts_addANegative());
        break;
      }

      case "ppc":
      {
        console.log("ppc_ANegative");
        this.store.dispatch(ppc_addANegative());
        break;
      }

      case "stua":
      {
        console.log("stua_ANegative");
        this.store.dispatch(stua_addANegative());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_ANegative");
        this.store.dispatch(stuadl_addANegative());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_ANegative");
        this.store.dispatch(stuapdl_addANegative());
        break;
      }

      default:
        break; 
    }    
  }

  handleBPositive = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_BPositive");
        this.store.dispatch(cedl_addBPositive());
        break;
      }

      case "cer":
      {
        console.log("cer_BPositive");
        this.store.dispatch(cer_addBPositive());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_BPositive");
        this.store.dispatch(cerdl_addBPositive());
        break;
      }

      case "cersl":
      {
        console.log("cersl_BPositive");
        this.store.dispatch(cersl_addBPositive());
        break;
      }

      case "cp":
      {
        console.log("cp_BPositive");
        this.store.dispatch(cp_addBPositive());
        break;
      }

      case "cts":
      {
        console.log("cts_BPositive");
        this.store.dispatch(cts_addBPositive());
        break;
      }

      case "ppc":
      {
        console.log("ppc_BPositive");
        this.store.dispatch(ppc_addBPositive());
        break;
      }

      case "stua":
      {
        console.log("stua_BPositive");
        this.store.dispatch(stua_addBPositive());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_BPositive");
        this.store.dispatch(stuadl_addBPositive());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_BPositive");
        this.store.dispatch(stuapdl_addBPositive());
        break;
      }

      default:
        break;

    }    
  }

  handleBNegative = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_BNegative");
        this.store.dispatch(cedl_addBNegative());
        break;
      }

      case "cer":
      {
        console.log("cer_BNegative");
        this.store.dispatch(cer_addBNegative());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_BNegative");
        this.store.dispatch(cerdl_addBNegative());
        break;
      }

      case "cersl":
      {
        console.log("cersl_BNegative");
        this.store.dispatch(cersl_addBNegative());
        break;
      }

      case "cp":
      {
        console.log("cp_BNegative");
        this.store.dispatch(cp_addBNegative());
        break;
      }

      case "cts":
      {
        console.log("cts_BNegative");
        this.store.dispatch(cts_addBNegative());
        break;
      }

      case "ppc":
      {
        console.log("ppc_BNegative");
        this.store.dispatch(ppc_addBNegative());
        break;
      }

      case "stua":
      {
        console.log("stua_BNegative");
        this.store.dispatch(stua_addBNegative());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_BNegative");
        this.store.dispatch(stuadl_addBNegative());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_BNegative");
        this.store.dispatch(stuapdl_addBNegative());
        break;
      }

      default:
        break;

    }    
  }

  handleABPositive = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_ABPositive");
        this.store.dispatch(cedl_addABPositive());
        break;
      }

      case "cer":
      {
        console.log("cer_ABPositive");
        this.store.dispatch(cer_addABPositive());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_ABPositive");
        this.store.dispatch(cerdl_addABPositive());
        break;
      }

      case "cersl":
      {
        console.log("cersl_ABPositive");
        this.store.dispatch(cersl_addABPositive());
        break;
      }

      case "cp":
      {
        console.log("cp_ABPositive");
        this.store.dispatch(cp_addABPositive());
        break;
      }

      case "cts":
      {
        console.log("cts_ABPositive");
        this.store.dispatch(cts_addABPositive());
        break;
      }

      case "ppc":
      {
        console.log("ppc_ABPositive");
        this.store.dispatch(ppc_addABPositive());
        break;
      }

      case "stua":
      {
        console.log("stua_ABPositive");
        this.store.dispatch(stua_addABPositive());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_ABPositive");
        this.store.dispatch(stuadl_addABPositive());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_ABPositive");
        this.store.dispatch(stuapdl_addABPositive());
        break;
      }

      default:
        break;

    }    
  }

  handleABNegative = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_ABNegative");
        this.store.dispatch(cedl_addABNegative());
        break;
      }

      case "cer":
      {
        console.log("cer_ABNegative");
        this.store.dispatch(cer_addABNegative());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_ABNegative");
        this.store.dispatch(cerdl_addABNegative());
        break;
      }

      case "cersl":
      {
        console.log("cersl_ABNegative");
        this.store.dispatch(cersl_addABNegative());
        break;
      }

      case "cp":
      {
        console.log("cp_ABNegative");
        this.store.dispatch(cp_addABNegative());
        break;
      }

      case "cts":
      {
        console.log("cts_ABNegative");
        this.store.dispatch(cts_addABNegative());
        break;
      }

      case "ppc":
      {
        console.log("ppc_ABNegative");
        this.store.dispatch(ppc_addABNegative());
        break;
      }

      case "stua":
      {
        console.log("stua_ABNegative");
        this.store.dispatch(stua_addABNegative());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_ABNegative");
        this.store.dispatch(stuadl_addABNegative());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_ABNegative");
        this.store.dispatch(stuapdl_addABNegative());
        break;
      }

      default:
        break;

    }    
  }

  handleOPositive = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_OPositive");
        this.store.dispatch(cedl_addOPositive());
        break;
      }

      case "cer":
      {
        console.log("cer_OPositive");
        this.store.dispatch(cer_addOPositive());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_OPositive");
        this.store.dispatch(cerdl_addOPositive());
        break;
      }

      case "cersl":
      {
        console.log("cersl_OPositive");
        this.store.dispatch(cersl_addOPositive());
        break;
      }

      case "cp":
      {
        console.log("cp_OPositive");
        this.store.dispatch(cp_addOPositive());
        break;
      }

      case "cts":
      {
        console.log("cts_OPositive");
        this.store.dispatch(cts_addOPositive());
        break;
      }

      case "ppc":
      {
        console.log("ppc_OPositive");
        this.store.dispatch(ppc_addOPositive());
        break;
      }

      case "stua":
      {
        console.log("stua_OPositive");
        this.store.dispatch(stua_addOPositive());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_OPositive");
        this.store.dispatch(stuadl_addOPositive());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_OPositive");
        this.store.dispatch(stuapdl_addOPositive());
        break;
      }

      default:
        break;
    }    
  }

  handleONegative = () => {
    switch(this.state.product)
    {
      case "cedl":
      {
        console.log("cedl_ONegative");
        this.store.dispatch(cedl_addONegative());
        break;
      }

      case "cer":
      {
        console.log("cer_ONegative");
        this.store.dispatch(cer_addONegative());
        break;
      }

      case "cerdl":
      {
        console.log("cerdl_ONegative");
        this.store.dispatch(cerdl_addONegative());
        break;
      }

      case "cersl":
      {
        console.log("cersl_ONegative");
        this.store.dispatch(cersl_addONegative());
        break;
      }

      case "cp":
      {
        console.log("cp_ONegative");
        this.store.dispatch(cp_addONegative());
        break;
      }

      case "cts":
      {
        console.log("cts_ONegative");
        this.store.dispatch(cts_addONegative());
        break;
      }

      case "ppc":
      {
        console.log("ppc_ONegative");
        this.store.dispatch(ppc_addONegative());
        break;
      }

      case "stua":
      {
        console.log("stua_ONegative");
        this.store.dispatch(stua_addONegative());
        break;
      }

      case "stuadl":
      {
        console.log("stuadl_ONegative");
        this.store.dispatch(stuadl_addONegative());
        break;
      }

      case "stuapdl":
      {
        console.log("stuapdl_ONegative");
        this.store.dispatch(stuapdl_addONegative());
        break;
      }
      default:
        break;

    }    
  }

  componentWillReceiveProps(nextProps){
    this.setState({product: nextProps.product})
  }


  render() {
    return (
      <div>               
          <br />
          <div className="row">
            <div className="col-xs-3">
              <button onClick = {this.handleAPositive}>A Positive</button>
            </div>
            <div className="col-xs-3">
              <button onClick = {this.handleANegative}>A Negative</button>
            </div>
            <div className="col-xs-3">
              <button onClick = {this.handleBPositive}>B Positive</button>
            </div>
            <div className="col-xs-3">
              <button onClick = {this.handleBNegative}>B Negative</button>
            </div>          
          </div>
      </div>
    );
  }
}

export default Buttons;