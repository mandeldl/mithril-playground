var m = require('mithril');

module.exports = {
	view: function () {
		return m('h1', {class: 'testClass', id:'testId', data: 'test-data'}, 'Hello from a module');
	}
}