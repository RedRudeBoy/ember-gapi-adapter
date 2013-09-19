/*
 * Interface between Google Events & Ember
 * https://developers.google.com/google-apps/calendar/v3/reference/calendars#resource
 */
define(["ember","Gapi/GapiFactory"], function(Ember,gapi) {
	var GapiCalendar = Ember.Object.extend({
		kind: "calendar#calendar",	//		Not writable	Type of the resource
		etag: null,			//{etag}	Not writable
		id: null,			//{string}	Not writable
		summary: null,			//{string}			Title of the calendar
		description: null,		//{string}	Optional	Description of the calendar
		location: null,			//{string}	Optional	Geographic location of the calendar as free-form text
		timeZone: null			//{string}	Optional	The time zone of the calendar
	});
	return GapiCalendar;
});