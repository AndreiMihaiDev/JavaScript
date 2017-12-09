const initialState = {
	cts: {
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
		case "cts_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive + 1,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
			
		}
		case "cts_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative + 1,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}				
		case "cts_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive + 1,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative + 1,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive + 1,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative + 1,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive + 1,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative + 1,
				}
			})
		}

		case "cts_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive - 1,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
			
		}
		case "cts_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative - 1,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}				
		case "cts_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive - 1,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative - 1,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive - 1,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative - 1,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive - 1,
					O_negative: state.cts.O_negative,
				}
			})
		}
		case "cts_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cts: {
					A_positive: state.cts.A_positive,
					A_negative: state.cts.A_negative,
					B_positive: state.cts.B_positive,
					B_negative: state.cts.B_negative,
					AB_positive: state.cts.AB_positive,
					AB_negative: state.cts.AB_negative,
					O_positive: state.cts.O_positive,
					O_negative: state.cts.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}