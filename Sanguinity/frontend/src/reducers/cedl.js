const initialState = {
	cedl: {
		A_positive: 1,
		A_negative: 55,
		B_positive: 80,
		B_negative: 55,
		AB_positive: 100,
		AB_negative: 0,
		O_positive: 34,
		O_negative: 55,
	}
}

export default function reducer(state= initialState, action) {
	switch(action.type) {
		case "cedl_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive + 1,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
			
		}
		case "cedl_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative + 1,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}				
		case "cedl_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive + 1,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative + 1,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive + 1,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative + 1,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive + 1,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative + 1,
				}
			})
		}

		case "cedl_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive - 1,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
			
		}
		case "cedl_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative - 1,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}				
		case "cedl_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive - 1,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative - 1,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive - 1,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative - 1,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive - 1,
					O_negative: state.cedl.O_negative,
				}
			})
		}
		case "cedl_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cedl: {
					A_positive: state.cedl.A_positive,
					A_negative: state.cedl.A_negative,
					B_positive: state.cedl.B_positive,
					B_negative: state.cedl.B_negative,
					AB_positive: state.cedl.AB_positive,
					AB_negative: state.cedl.AB_negative,
					O_positive: state.cedl.O_positive,
					O_negative: state.cedl.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}