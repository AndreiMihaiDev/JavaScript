const initialState = {
	cp: {
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
		case "cp_addAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive + 1,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
			
		}
		case "cp_addANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative + 1,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}				
		case "cp_addBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive + 1,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_addBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative + 1,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_addABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive + 1,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_addABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative + 1,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_addOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive + 1,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_addONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative + 1,
				}
			})
		}

		case "cp_subAPositive": {
			console.log("A_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive - 1,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
			
		}
		case "cp_subANegative": {
			console.log("A_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative - 1,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}				
		case "cp_subBPositive": {
			console.log("B_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive - 1,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_subBNegative": {
			console.log("B_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative - 1,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_subABPositive": {
			console.log("AB_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive - 1,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_subABNegative": {
			console.log("AB_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative - 1,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_subOPositive": {
			console.log("O_Positive")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive - 1,
					O_negative: state.cp.O_negative,
				}
			})
		}
		case "cp_subONegative": {
			console.log("O_Negative")
			return Object.assign({}, state, {
				cp: {
					A_positive: state.cp.A_positive,
					A_negative: state.cp.A_negative,
					B_positive: state.cp.B_positive,
					B_negative: state.cp.B_negative,
					AB_positive: state.cp.AB_positive,
					AB_negative: state.cp.AB_negative,
					O_positive: state.cp.O_positive,
					O_negative: state.cp.O_negative - 1,
				}
			})
		}
      
		default:
		    return state;		
	}
}