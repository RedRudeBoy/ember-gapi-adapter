/*
 * Interface between Google Calendar & Ember
 * https://developers.google.com/google-apps/calendar/v3/reference/calendars#resource
 */
define(["ember","Gapi/GapiFactory"], function(Ember,Gapi) {
	
	//Instance methods
	var GapiCalendar = Ember.Object.extend({
		//Properties
		kind: "calendar#calendar",	//		Not writable	Type of the resource
		etag: null,			//{etag}	Not writable
		id: null,			//{string}	Not writable
		summary: null,			//{string}			Title of the calendar
		description: null,		//{string}	Optional	Description of the calendar
		location: null,			//{string}	Optional	Geographic location of the calendar as free-form text
		timeZone: null,			//{string}	Optional	The time zone of the calendar
		
		//Promise methods
		loadSomething: function() {
			return Em.Deferred.promise(function (p) {
				p.resolve();
			});
		}
	});
	//Class Methods
	GapiCalendar.reopenClass({
		list: function() {
			// If we've already loaded the list, return it
			if (this._events) { return this._events; }
			// Recover the list
			var events = Em.A();
			// Remember what we've created so we don't request it twice.
			this._events = events;
			return events;
		},
		fetchEvents: function() {
		
		}, 
		defaultSubreddit: function() {
			return this.list()[0];
		},
		init: function() {
			
		},
		populate: function() {
			//Global scope?
			gapi.a();
		},
		getOrCreate: function() {
			return gapi.a();
		}
	});
	return GapiCalendar;
});