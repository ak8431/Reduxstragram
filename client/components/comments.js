import React from 'react';

export default class Comments extends React.Component{
	renderComments(comment, i){
		return (
			<div className="comment" key={i} >
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		)
	}

	handleSubmit(e){
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
	}

	render(){
		return(
			<div className="comments">
				{this.props.postComments.map(this.renderComments)}
				<form ref='commentForm' className="comment-form" onSubmit={this.handleSubmit.bind(this)} >
					<input type="text" ref="author" placeholder="Author" />
					<input type="text" ref="comment" placeholder="Comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
}