function postcomments(state = [], action){
    switch (action.type) {
        case 'ADD_COMMENT':
    	    //return the new state with the existing one
            return [
                ...state, {
    	            user: action.author,
                    text : action.comment
                }
            ]
        case 'REMOVE_COMMENT' :
            console.log('removing Comment');
            //return the newstate without deleted comment
            return [
                //from the start to the point that we want to delete
                ...state.slice(0,action.i),
                //after the deleted comment
                ...state(action.i+1)
            ]
            return state;
    	default:
    		return state;
    }
}

function comments(state=[], action){
	if(typeof action.postId !== 'undefined'){
		return {
		    //take the current state
			...state,
            //overwrite the post with a new one
			[action.postId]:postcomments(state[action.postId],action)
		}
	}
	return state;
}

export default comments;