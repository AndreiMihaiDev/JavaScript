const initialState = {
	cerdl: {
		A_positive: 0,
		A_negative: 0,
		B_positive: 0,
		B_negative: 0,
		AB_positive: 0,
		AB_negative: 0,
		O_positive: 0,
		O_negative: 80,
	}
}

export default function reducer(state= initialState, action) {
	switch(action.type) {
		case "cerdl_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive + 1,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
			
		}
		case "cerdl_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative + 1,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}				
		case "cerdl_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive + 1,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative + 1,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive + 1,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative + 1,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive + 1,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative + 1,
				}
			})
		}

		case "cerdl_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive - 1,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
			
		}
		case "cerdl_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative - 1,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}				
		case "cerdl_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive - 1,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative - 1,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive - 1,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative - 1,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive - 1,
					O_negative: state.cerdl.O_negative,
				}
			})
		}
		case "cerdl_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cerdl: {
					A_positive: state.cerdl.A_positive,
					A_negative: state.cerdl.A_negative,
					B_positive: state.cerdl.B_positive,
					B_negative: state.cerdl.B_negative,
					AB_positive: state.cerdl.AB_positive,
					AB_negative: state.cerdl.AB_negative,
					O_positive: state.cerdl.O_positive,
					O_negative: state.cerdl.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}