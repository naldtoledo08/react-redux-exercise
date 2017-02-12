export const submitMemoryMinutes = (id, title, text) =>{
	console.log("adding Memory Minutes ", id, title, text);

	return {
		type: 'add',
		memory_minutes : {
			id 		: id,
			title 	: title,
			text	: text
		}
	}
}