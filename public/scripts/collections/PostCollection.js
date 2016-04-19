import Backbone from 'backbone';
import PostModel from '../models/PostModel';

export default Backbone.Collection.extend({
	models: PostModel,
	url:'http://localhost:3000/api/v1/post'
});