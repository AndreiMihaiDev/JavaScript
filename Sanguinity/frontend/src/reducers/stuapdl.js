const initialState = {
	stuapdl: {
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
		case "stuapdl_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive + 1,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
			
		}
		case "stuapdl_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative + 1,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}				
		case "stuapdl_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive + 1,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative + 1,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive + 1,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative + 1,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive + 1,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative + 1,
				}
			})
		}

		case "stuapdl_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive - 1,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
			
		}
		case "stuapdl_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative - 1,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}				
		case "stuapdl_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive - 1,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative - 1,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive - 1,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative - 1,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive - 1,
					O_negative: state.stuapdl.O_negative,
				}
			})
		}
		case "stuapdl_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				stuapdl: {
					A_positive: state.stuapdl.A_positive,
					A_negative: state.stuapdl.A_negative,
					B_positive: state.stuapdl.B_positive,
					B_negative: state.stuapdl.B_negative,
					AB_positive: state.stuapdl.AB_positive,
					AB_negative: state.stuapdl.AB_negative,
					O_positive: state.stuapdl.O_positive,
					O_negative: state.stuapdl.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}