/**
 * Joins
 * 
 * @type {Array}
 */
module.exports = [
	{
		alias: 'from',				// the `alias` -- e.g. name of association
		parent: 'message',			// left table name
		parentKey: 'from',			// left table key
		child: 'user',				// right table name
		childKey: 'id'				// right table key
	}
];
