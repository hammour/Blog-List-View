import React from 'react';
import PostCollection from '../collections/PostCollection.js';
import Preview from './Preview.js';

export default React.createClass({

	getInitialState: function() {
		let items = new PostCollection();
		return ({
			items: items
		});
	},
	componentDidMount: function() {
		this.state.items.on('update', () => {
			this.setState({items: this.state.items});
		});
		this.state.items.fetch();
		console.log(this.state.items.fetch());
	},
	render: function() {
		
		return (

			<div>
				{
					this.state.items.map((val, i, array) => {
						let today = convertDay(val.get('createdAt'));
						return (

							<Preview 
							key={i}
							title={val.get('title')}
							author = {val.get('author').firstName+' '+ val.get('author').lastName}
							postDate= {today}
							body = {val.get('body')}
							/>
						);
					})
				}
			</div>
			);
	}
});
// convert date format
function convertDay(d){
var theDay = d.slice(0, 10).split('-');   
return theDay[1] +'/'+ theDay[2] +'/'+ theDay[0];
};





