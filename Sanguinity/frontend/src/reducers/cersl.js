const initialState = {
	cersl: {
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
		case "cersl_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive + 1,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
			
		}
		case "cersl_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative + 1,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}				
		case "cersl_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive + 1,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative + 1,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive + 1,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative + 1,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive + 1,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative + 1,
				}
			})
		}

		case "cersl_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive - 1,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
			
		}
		case "cersl_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative - 1,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}				
		case "cersl_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive - 1,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative - 1,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive - 1,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative - 1,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive - 1,
					O_negative: state.cersl.O_negative,
				}
			})
		}
		case "cersl_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cersl: {
					A_positive: state.cersl.A_positive,
					A_negative: state.cersl.A_negative,
					B_positive: state.cersl.B_positive,
					B_negative: state.cersl.B_negative,
					AB_positive: state.cersl.AB_positive,
					AB_negative: state.cersl.AB_negative,
					O_positive: state.cersl.O_positive,
					O_negative: state.cersl.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}