export const unlockMemoryMinutes = (id) =>{
	//console.log("unlock Memory Minutes ", id);

	return {
		type: 'unlock',
		id : id
	}
}