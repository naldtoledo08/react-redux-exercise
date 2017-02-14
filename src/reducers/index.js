import memory_minutes from './memory_minutes';
import points from './points';
import visibility_filter from './visibility_filter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	visibility_filter, points, memory_minutes
});

export default rootReducer;