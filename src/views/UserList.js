var m = require('mithril');
var User = require('../models/User');

module.exports = {
	oninit: User.loadList,
	view: function() {
		return m('ul.user-list', User.list.map(function(user) {
			return m('li.user-list-item', user.firstName + ' ' + user.lastName);
		}));
	} 
}