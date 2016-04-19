import Backbone from 'backbone';
Backbone.$.ajaxSetup({
    headers: {'Authorization' :'Basic USERNAME:PASSWORD'}
});
export default Backbone.Model.extend({
	default: {
		title:'',
		body:'',
		auther:'',
		createdAt:'',
		updatedAt:''
	},
	urlRot: 'http://localhost:3000/api/v1/post',
	idAttribute:'id'
	
});




