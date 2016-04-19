import React from 'react';


export default React.createClass({
	render: function() {
		
		return (
			<div className="container">
				<div className="title">{this.props.title}</div>
				<div className="auther">{this.props.author}</div>
				<div className="postdate">{this.props.postDate}</div>
				<div className="body">{this.props.body}</div>
			</div>
			);
	}
});

