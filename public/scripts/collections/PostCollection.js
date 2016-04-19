import Backbone from 'backbone';
import PostModel from '../models/PostModel';

export default Backbone.Collection.extend({
	models: PostModel,
	url:'api/v1/post'
});