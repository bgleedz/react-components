import React from 'react';

const CommentDetail = props => { 
	/**props is an argument for the function that is referencing the 
	bundled attributes inside the parent function called App*/
	return (
		<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={props.avatar} />
				</a>
				<div className="content">
					<a href="/" className="author"> 
						{props.author} 
					</a>
					<div className="metadata">
						<span className="date">{props.timeAgo}</span>
					</div>
					<div className="text">{props.post}</div>
				</div>
			</div>
		);
}; 

export default CommentDetail;