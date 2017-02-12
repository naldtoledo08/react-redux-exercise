export default(state =[], payload) =>{
	switch(payload.type){
		case 'add':
			return [
				...state, payload.memory_minutes
			];

		default:
			return state;
	}
}