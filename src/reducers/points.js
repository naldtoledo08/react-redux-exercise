export default function points (state = 0, payload) {
	
	console.log('--- Points Counter');
  switch (payload.type) {
    case 'add_points':
      return state + parseInt( payload.points, 10)
    case 'deduct_points':
      return state - parseInt(payload.points, 10)
    default:
      return state
  }
}