define(["DS"], function(DS){

var CalendarList = DS.Model.extend({

//Not writable
	kind: "calendar#calendarList"		//Type of the resource
  , etag: DS.attr('string')			//{etag}
  , items: DS.hasMany('calendarListEntry', {inverse: 'parent'})
});


CalendarList.FIXTURES =
{
 "kind": "calendar#calendarList",
 "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/w3RyuvRFKLzjYptqq7R2rkswxz4\"",
 "items": [
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/YiYsydz-jgooAoBvMYRx4dj3xAM\"",
   "id": "ca.catalan#holiday@group.v.calendar.google.com",
   "summary": "Festes Catalanes",
   "description": "Festes Catalanes",
   "timeZone": "Europe/Paris",
   "colorId": "18",
   "backgroundColor": "#b99aff",
   "foregroundColor": "#000000",
   "accessRole": "reader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/NPNE0dAmDFgSZ5wAzUi5M79j_10\"",
   "id": "ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com",
   "summary": "Fases de la lluna",
   "description": "Mostra les fases principals de la lluna",
   "timeZone": "Europe/Paris",
   "colorId": "15",
   "backgroundColor": "#9fc6e7",
   "foregroundColor": "#000000",
   "accessRole": "reader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/bj8qRixXO0W1pdDP1ti_Ivql_4I\"",
   "id": "spa_6162_+%42arcelona#sports@group.v.calendar.google.com",
   "summary": " Barcelona",
   "timeZone": "Europe/Paris",
   "colorId": "14",
   "backgroundColor": "#9fe1e7",
   "foregroundColor": "#000000",
   "accessRole": "reader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/XjRzJUYlNFXTeyHl3q62c8smVc0\"",
   "id": "998h7jra4pnmlorrm8vg7hhaho@group.calendar.google.com",
   "summary": "Pirates de Catalunya - PIRATA.CAT",
   "description": "Esdeveniments i trobades dels Pirates de Catalunya\nhttp://pirata.cat",
   "location": "Catalunya",
   "timeZone": "Europe/Madrid",
   "colorId": "4",
   "backgroundColor": "#fa573c",
   "foregroundColor": "#000000",
   "accessRole": "reader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/Gd2XUMibjuMjpfzq4uOv-U_lYjQ\"",
   "id": "redrudeboy@gmail.com",
   "summary": "Personal Lenin",
   "description": "Ces't ma vie xD",
   "location": "Vila de Gràcia",
   "timeZone": "Europe/Paris",
   "colorId": "17",
   "backgroundColor": "#9a9cff",
   "foregroundColor": "#000000",
   "selected": true,
   "accessRole": "owner",
   "defaultReminders": [
    {
     "method": "popup",
     "minutes": 10
    },
    {
     "method": "sms",
     "minutes": 10
    }
   ],
   "primary": true
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/gud1WTh4uHtJT4yiS-vrjMHIuh4\"",
   "id": "corretge.cat_p5021cv611qthvrobqsrtoodr0@group.calendar.google.com",
   "summary": "Anuari",
   "timeZone": "Europe/Paris",
   "colorId": "9",
   "backgroundColor": "#7bd148",
   "foregroundColor": "#000000",
   "accessRole": "reader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/gEEkoD7gSxJImI7EAOZp_1uo0Oo\"",
   "id": "avn1ikunrr5g8htllqi8kmt8ik@group.calendar.google.com",
   "summary": "A.E. Ramon llull 2012-2013",
   "timeZone": "Europe/Madrid",
   "colorId": "6",
   "backgroundColor": "#ffad46",
   "foregroundColor": "#000000",
   "accessRole": "writer"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/ELPWDQDZaiQWCxwLpsyqTOU0jB0\"",
   "id": "nusm0i4dmlnms2k60p664i104o@group.calendar.google.com",
   "summary": "Eventos de desarrollo - Genbeta Dev",
   "timeZone": "Europe/Madrid",
   "colorId": "22",
   "backgroundColor": "#f691b2",
   "foregroundColor": "#000000",
   "selected": true,
   "accessRole": "reader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/jJiknjh2VSNu3gqdIAAwqFrc1ak\"",
   "id": "qi1qfhg2rhpd4m1551nmfukaes@group.calendar.google.com",
   "summary": "Ramon LLuLL",
   "location": "Vila de Gràcia",
   "timeZone": "UTC",
   "colorId": "12",
   "backgroundColor": "#fad165",
   "foregroundColor": "#000000",
   "accessRole": "owner",
   "defaultReminders": [
    {
     "method": "popup",
     "minutes": 10
    }
   ]
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/LJdwfiCKgBDasn-9_VEk6yVaLAc\"",
   "id": "0pg5b2cv28s53583v619uqvg1g@group.calendar.google.com",
   "summary": "Feina",
   "description": "PDD, tècnics informàtics, webs...",
   "location": "Vila de Gràcia",
   "timeZone": "Europe/Paris",
   "colorId": "3",
   "backgroundColor": "#f83a22",
   "foregroundColor": "#000000",
   "accessRole": "owner",
   "defaultReminders": [
    {
     "method": "popup",
     "minutes": 60
    }
   ]
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/YMXjoF7BnGMDHfDPLIVqwur4O28\"",
   "id": "arnau.lenin@carritus.com",
   "summary": "arnau.lenin@carritus.com",
   "timeZone": "Europe/Madrid",
   "colorId": "9",
   "backgroundColor": "#7bd148",
   "foregroundColor": "#000000",
   "accessRole": "freeBusyReader"
  },
  {
   "kind": "calendar#calendarListEntry",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/cd5HwpS5nN1kER0X8xRT2rSwxfc\"",
   "id": "pfk9uescf4mel3uqf1r054kp8hk9bhr5@import.calendar.google.com",
   "summary": "Songkick: Your Artists (arnau-lenin-gols-rov)",
   "timeZone": "UTC",
   "summaryOverride": "Songkick",
   "colorId": "1",
   "backgroundColor": "#ac725e",
   "foregroundColor": "#000000",
   "accessRole": "reader"
  }
 ]
};

	return CalendarList;
});
