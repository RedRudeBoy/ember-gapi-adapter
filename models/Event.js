define(["DS"], function(DS){
/**
 * @ToDo: More attrs to add
 */
var Event = DS.Model.extend({

//Not writable
	kind: "calendar#event"			//Type of the resource
  , etag: DS.attr('string')			//{etag}
//  , id: DS.attr('string')			//Identifier of the event
  , htmlLink: DS.attr('string')		//Absolute link to this event in Google Calendar Web UI
  , created: DS.attr('date')		//Creation time of the event (as a RFC 3339 timestamp)
  , updated: DS.attr('date')		//Last modification time of the event (as a RFC 3339 timestamp)

//Necessary
  , summary: DS.attr('string')		//Title of the event
  , status: DS.attr('string')		//"confirmed" / "tentative" / "cancelled"
  , start: {
	    date: DS.attr('date')		//The date, in format "yyyy-mm-dd", if this is an all-day event
	  , dateTime: DS.attr('date')	//The time, as a combined date-time value (according to RFC 3339)
	  , timeZone: DS.attr('string')	//The time zone of the calendar (Optional if is specified in dateTime)
  }

//Optional
  , end: {
	    date: DS.attr('date')		//The date, in format "yyyy-mm-dd", if this is an all-day event
	  , dateTime: DS.attr('date')	//The time, as a combined date-time value (according to RFC 3339)
	  , timeZone: DS.attr('string')	//The time zone of the calendar (Optional if is specified in dateTime)
  }
  , description: DS.attr('string')	//Description of the event
  , location: DS.attr('string')		//Geographic location of the calendar as free-form text
  , colorId: DS.attr('string')		//The color of the event

});


Event.FIXTURES =
[
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk60oj6c9gcks34phk6gs32cpp6ph62e35c4s3ec9k6oo3aob3c4p0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2MG9qNmM5Z2NrczM0cGhrNmdzMzJjcHA2cGg2MmUzNWM0czNlYzlrNm9vM2FvYjNjNHAwIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Event Fixture 1 summary",
   "location": "Event Fixture 1 location",
   "creator": {
    "email": "userfixture1+creator@gmail.com",
    "displayName": "Event Fixture 1 creator",
    "self": true
   },
   "organizer": {
    "email": "userfixture1+organizer@gmail.com",
    "displayName": "Event Fixture 1 organizer",
    "self": true
   },
   "start": {
    "date": "2008-02-04"
   },
   "end": {
    "date": "2008-02-06"
   },
   "iCalUID": "CSVConvert01310e82f4481396ba8ea8714605aca2",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk60rmacpl6sp3aphm6cr38c316kojaopjcdi3ap9jcpj62c1jckqg",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2MHJtYWNwbDZzcDNhcGhtNmNyMzhjMzE2a29qYW9wamNkaTNhcDlqY3BqNjJjMWpja3FnIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Event Fixture 2 summary",
   "creator": {
    "email": "userfixture2+creator@gmail.com",
    "displayName": "Event Fixture 2 creator",
    "self": true
   },
   "organizer": {
    "email": "userfixture2+organizer@gmail.com",
    "displayName": "Event Fixture 2 organizer",
    "self": true
   },
   "start": {
    "date": "2008-03-03"
   },
   "end": {
    "date": "2008-03-04"
   },
   "transparency": "transparent",
   "iCalUID": "CSVConvert07e35725f63640a515c3cd5e3ffa03e5",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  }
];

	return Event;
});