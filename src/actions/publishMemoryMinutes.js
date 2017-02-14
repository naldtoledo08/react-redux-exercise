export const publishMemoryMinutes = (id, points) =>{
	//console.log("publish Memory Minutes ", id);
	return {
		type: 'publish',
		id : id,
		points: points
	}
}