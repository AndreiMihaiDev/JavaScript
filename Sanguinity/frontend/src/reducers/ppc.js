const initialState = {
	ppc: {
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
		case "ppc_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive + 1,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
			
		}
		case "ppc_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative + 1,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}				
		case "ppc_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive + 1,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative + 1,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive + 1,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative + 1,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive + 1,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative + 1,
				}
			})
		}

		case "ppc_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive - 1,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
			
		}
		case "ppc_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative - 1,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}				
		case "ppc_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive - 1,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative - 1,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive - 1,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative - 1,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive - 1,
					O_negative: state.ppc.O_negative,
				}
			})
		}
		case "ppc_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				ppc: {
					A_positive: state.ppc.A_positive,
					A_negative: state.ppc.A_negative,
					B_positive: state.ppc.B_positive,
					B_negative: state.ppc.B_negative,
					AB_positive: state.ppc.AB_positive,
					AB_negative: state.ppc.AB_negative,
					O_positive: state.ppc.O_positive,
					O_negative: state.ppc.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}