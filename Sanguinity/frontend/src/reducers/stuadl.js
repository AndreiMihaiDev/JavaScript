const initialState = {
	stuadl: {
		A_positive: 0,
		A_negative: 0,
		B_positive: 0,
		B_negative: 0,
		AB_positive: 0,
		AB_negative: 0,
		O_positive: 0,
		O_negative: 0,
	}
}

export default function reducer(state= initialState, action) {
	switch(action.type) {
		case "stuadl_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive + 1,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
			
		}
		case "stuadl_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative + 1,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}				
		case "stuadl_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive + 1,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative + 1,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive + 1,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative + 1,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive + 1,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative + 1,
				}
			})
		}

		case "stuadl_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive - 1,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
			
		}
		case "stuadl_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative - 1,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}				
		case "stuadl_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive - 1,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative - 1,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive - 1,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative - 1,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive - 1,
					O_negative: state.stuadl.O_negative,
				}
			})
		}
		case "stuadl_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				stuadl: {
					A_positive: state.stuadl.A_positive,
					A_negative: state.stuadl.A_negative,
					B_positive: state.stuadl.B_positive,
					B_negative: state.stuadl.B_negative,
					AB_positive: state.stuadl.AB_positive,
					AB_negative: state.stuadl.AB_negative,
					O_positive: state.stuadl.O_positive,
					O_negative: state.stuadl.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}