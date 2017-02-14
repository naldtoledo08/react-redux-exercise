export const submitMemoryMinutes = (id, title, text) =>{
	//console.log("adding Memory Minutes ", id, title, text);
	
	return {
		type: 'add',
		memory_minute : {
			id 			: id,
			title 		: title,
			text		: text,
			points		: 0,
			published	: 0,
			unlocked	: 0
		}
	}
}