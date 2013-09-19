define(["DS"], function(DS){

var Calendar = DS.Model.extend({

//Not writable
	kind: "calendar#calendar"		//Type of the resource
  , etag: DS.attr('string')			//{etag}
//  , id: DS.attr('string')			//Identifier of the calendar

//Necessary
  , summary: DS.attr('string')		//Title of the calendar

//Optional
  , description: DS.attr('string')	//Description of the calendar
  , location: DS.attr('string')		//Geographic location of the calendar as free-form text
  , timeZone: DS.attr('string')		//The time zone of the calendar
});

Calendar.FIXTURES =
[{
 "kind": "calendar#calendar",
 "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/2my-fJ0FGNr_sTa40mFE8YfYcQ4\"",
 "id": "userfixture1@gmail.com",
 "summary": "Calendar Fixture 1 summary",
 "description": "Calendar Fixture 1 description",
 "location": "Calendar Fixture 1 location Ex: Vila de Gràcia",
 "timeZone": "Europe/Paris"
}];

	return Calendar;
});
