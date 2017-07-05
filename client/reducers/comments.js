function postcomments(state = [], action){
    switch (action.type) {
    	case 'ADD_COMMENT':
    		break;
    	case 'REMOVE_COMMENT' : 
    		break;
    	default:
    		return state;
    }
}

function comments(state=[], action){
	if(typeof action.postId !== 'undefined'){
		return {
			...state,
			[action.postId]:postcomments(state[action.postId],action)
		}
	}
	return state;
}

export default comments;