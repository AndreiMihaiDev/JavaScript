const initialState = {
	stua: {
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
		case "stua_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive + 1,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
			
		}
		case "stua_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative + 1,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}				
		case "stua_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive + 1,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative + 1,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive + 1,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative + 1,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive + 1,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative + 1,
				}
			})
		}

		case "stua_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive - 1,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
			
		}
		case "stua_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative - 1,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}				
		case "stua_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive - 1,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative - 1,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive - 1,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative - 1,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive - 1,
					O_negative: state.stua.O_negative,
				}
			})
		}
		case "stua_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				stua: {
					A_positive: state.stua.A_positive,
					A_negative: state.stua.A_negative,
					B_positive: state.stua.B_positive,
					B_negative: state.stua.B_negative,
					AB_positive: state.stua.AB_positive,
					AB_negative: state.stua.AB_negative,
					O_positive: state.stua.O_positive,
					O_negative: state.stua.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}