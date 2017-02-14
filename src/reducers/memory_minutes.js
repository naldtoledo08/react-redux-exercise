export default function memory_minutes (state =[], payload) {

	switch(payload.type){
		/*case 'filter':

			return Object.assign({}, state, {
				visibility_filter: payload.filter
			})*/
		case 'add':
			return [
				...state,
				payload.memory_minute
			]
			

		case 'publish':
			 var a = state.map((item, index) => {
				          if(item.id === payload.id) {
				            return Object.assign({}, item, {
				             	published : 1,
								points: payload.points
				            })
				          }
				          return item
				        })
			 return a;
		/*case 'add_points':
			return Object.assign({}, state, {
				points : (state.points + parseInt(payload.points, 10))
			})
	    
	    case 'deduct_points':
	      return Object.assign({}, state, {
				points : (state.points - parseInt(payload.points, 10))
			})*/

		case 'unlock':
			var new_state = state.map((item, index) => {
				          if(item.id === payload.id) {
				            return Object.assign({}, item, {
				             	unlocked : 1
				            })
				          }
				          return item
				        })
			 return new_state;
		default:
			return state;
	}
}

