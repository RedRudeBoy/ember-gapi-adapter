/*
 * Interface between Google Tasks & Ember
 * https://developers.google.com/google-apps/tasks/v1/reference/tasks#resource
 */
define(["ember","Gapi/GapiFactory"], function(Ember,Gapi) {
	
	//Instance methods
	var GapiTask = Ember.Object.extend({
		//Properties
		kind: "tasks#task",	//		Not writable	Type of the resource
		etag: null,		//{etag}	Not writable
		id: null,		//{string}	Not writable
		title: null,		//{string}
		updated: null,		//{datetime}			Last modification time of the task (as a RFC 3339 timestamp)
		selfLink: null,		//{string}			URL pointing to this task. Used to retrieve, update, or delete this task
		parent: null,		//{string}	MoveMethod	Parent task identifier. This field is omitted if it is a top-level task
		position: null,		//{string}	MoveMethod	String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level)
		notes: null,		//{string}	Optional	Notes describing the task
		status: 'needsAction',	//{string}			"needsAction" or "completed"
		due: null,		//{datetime}	Optional	Due date of the task (as a RFC 3339 timestamp)
		completed: null,	//{datetime}	This field is omitted if the task has not been completed
		deleted: false,		//{boolean}
		hidden: false,		//{boolean}	ReadOnly	Cleared from the list
		links: [{		//		ReadOnly
			type: 'tag',	//{string}			Type of the link
			description: null,//{string}			The description. In HTML speak: Everything between <a> and </a>
			link: null	//{string}			URL
		}]
		//Promise methods
//		loadSomething: function() {
//			return Em.Deferred.promise(function (p) {
//				p.resolve();
//			});
//		}
	});
	//Class Methods
	GapiTask.reopenClass({
		list: function() {
			// If we've already loaded the list, return it
			if (this._events) { return this._events; }
			// Recover the list
			var events = Em.A();
			// Remember what we've created so we don't request it twice.
			this._events = events;
			return events;
		},
		fetch: function() {}
	});
	return GapiTask;
});