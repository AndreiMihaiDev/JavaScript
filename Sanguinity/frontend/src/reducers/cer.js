const initialState = {
	cer: {
		A_positive: 0,
		A_negative: 0,
		B_positive: 0,
		B_negative: 0,
		AB_positive: 0,
		AB_negative: 0,
		O_positive: 0,
		O_negative: 34,
	}
}

export default function reducer(state= initialState, action) {
	switch(action.type) {
		case "cer_addAPositive": {
			console.log("cer_A_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive + 1,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
			
		}
		case "cer_addANegative": {
			console.log("cer_A_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative + 1,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}				
		case "cer_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive + 1,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative + 1,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive + 1,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative + 1,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive + 1,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative + 1,
				}
			})
		}

		case "cer_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive - 1,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
			
		}
		case "cer_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative - 1,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}				
		case "cer_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive - 1,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative - 1,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive - 1,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative - 1,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive - 1,
					O_negative: state.cer.O_negative,
				}
			})
		}
		case "cer_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cer: {
					A_positive: state.cer.A_positive,
					A_negative: state.cer.A_negative,
					B_positive: state.cer.B_positive,
					B_negative: state.cer.B_negative,
					AB_positive: state.cer.AB_positive,
					AB_negative: state.cer.AB_negative,
					O_positive: state.cer.O_positive,
					O_negative: state.cer.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}