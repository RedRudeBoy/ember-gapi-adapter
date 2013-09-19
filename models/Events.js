define(["DS"], function(DS){

var Events = DS.Model.extend({

//Not writable, info from calendar:
	kind: "calendar#events"			//Type of the resource
  , etag: DS.attr('string')			//{etag}
  , summary: DS.attr('string')		//Title of the event
  , description: DS.attr('string')	//Description of the event
  , updated: DS.attr('date')		//Last modification time of the event (as a RFC 3339 timestamp)
  , timeZone: DS.attr('string')		//The time zone of the calendar (Optional if is specified in dateTime)
  , accessRole: DS.attr('string')	//
  , defaultReminders: {
	  , method: DS.attr('string')	//
	  , minutes: DS.attr('number')	//
  }
  , nextPageToken: DS.attr('string')
  , items: DS.hasMany('event', {inverse: 'parent'})

});


Events.FIXTURES =
{
 "kind": "calendar#events",
 "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/IUe8GAvva8Mcli2ynPztpCfNqg0\"",
 "summary": "Personal Lenin",
 "description": "Ces't ma vie xD",
 "updated": "2013-09-13T21:55:56.131Z",
 "timeZone": "Europe/Paris",
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
 "nextPageToken": "CigKGmJhMjBkMGF0cmxnOGkwdThndjVxYWljNnNzGAEggICAsN2d46UTGg0IABIAGLilndquybkC",
 "items": [
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk60oj6c9gcks34phk6gs32cpp6ph62e35c4s3ec9k6oo3aob3c4p0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2MG9qNmM5Z2NrczM0cGhrNmdzMzJjcHA2cGg2MmUzNWM0czNlYzlrNm9vM2FvYjNjNHAwIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Skiar",
   "location": "Port Del Compte",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
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
   "summary": "Sant Medir",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
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
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk61hmao9j6gp68p1lclhj4opl64sj0dhn60rjgor56gpmco9l68s0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2MWhtYW85ajZncDY4cDFsY2xoajRvcGw2NHNqMGRobjYwcmpnb3I1NmdwbWNvOWw2OHMwIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Multa Sonora",
   "location": "Ajuntament de Gràcia",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "dateTime": "2008-01-19T17:00:00+01:00"
   },
   "end": {
    "dateTime": "2008-01-19T18:00:00+01:00"
   },
   "iCalUID": "CSVConvert0cea342dd5ec2c519067078ce43fa528",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk64pj2e9icdim2c9occp36e1j6tj3cdj26pi38dr3coq64c9i6dj0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2NHBqMmU5aWNkaW0yYzlvY2NwMzZlMWo2dGozY2RqMjZwaTM4ZHIzY29xNjRjOWk2ZGowIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Revisio IC",
   "location": "C6-E101",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "dateTime": "2008-01-24T10:00:00+01:00"
   },
   "end": {
    "dateTime": "2008-01-24T11:00:00+01:00"
   },
   "iCalUID": "CSVConvert13192cea18c23837f66b6d47cf4b123f",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk64s64phocpim4phl6tgjid1j69ij8p1p69im4d9l70q62p9g6os0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2NHM2NHBob2NwaW00cGhsNnRnamlkMWo2OWlqOHAxcDY5aW00ZDlsNzBxNjJwOWc2b3MwIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Festa Bernat",
   "location": "Razz",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "dateTime": "2008-01-18T23:00:00+01:00"
   },
   "end": {
    "dateTime": "2008-01-18T23:59:00+01:00"
   },
   "iCalUID": "CSVConvert18bf8febf57a9432e4d92eb5584ae068",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk65hmcdhic8oj8db1c8o38ohi6coj6e9o6sojeopo65gj0ohn74rg",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2NWhtY2RoaWM4b2o4ZGIxYzhvMzhvaGk2Y29qNmU5bzZzb2plb3BvNjVnajBvaG43NHJnIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Aniversari Sigrid",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-03-20"
   },
   "end": {
    "date": "2008-03-21"
   },
   "transparency": "transparent",
   "iCalUID": "CSVConvert1cf62b145ab04b231398717c81a0b797",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk68qm4e326lh3gohmcph3adj46kpjeo9oc8q36p9pcgs3ce9nc9h0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2OHFtNGUzMjZsaDNnb2htY3BoM2FkajQ2a3BqZW85b2M4cTM2cDlwY2dzM2NlOW5jOWgwIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Aniversari Guillem F.",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-03-21"
   },
   "end": {
    "date": "2008-03-22"
   },
   "transparency": "transparent",
   "iCalUID": "CSVConvert25b8b5b8b6fb56d537a8b43e9d8697bb",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk68sm2dj3ckrm4db4corm4cb5cko3ed1ockpmcdj3cgrj2oj669ig",
   "status": "tentative",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2OHNtMmRqM2Nrcm00ZGI0Y29ybTRjYjVja28zZWQxb2NrcG1jZGozY2dyajJvajY2OWlnIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Montse",
   "location": "Cap de setmana d vacances",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-02-22"
   },
   "end": {
    "date": "2008-02-25"
   },
   "iCalUID": "CSVConvert29a6ce7b5df7b1ee0748e3f6cd71bf2e",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk69hm4cr16gqm6chl6cq30cpkc8r34d1m6oomcpb660o3iob66hig",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2OWhtNGNyMTZncW02Y2hsNmNxMzBjcGtjOHIzNGQxbTZvb21jcGI2NjBvM2lvYjY2aGlnIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Aniversari Anna Colomer",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-02-08"
   },
   "end": {
    "date": "2008-02-09"
   },
   "transparency": "transparent",
   "iCalUID": "CSVConvert2cb3a45c2534034b624661fef009af4e",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk69hmapj2cgqjgeb3cli62c9pclhj2c1p6kr6ao9nccr68e9j69j0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2OWhtYXBqMmNncWpnZWIzY2xpNjJjOXBjbGhqMmMxcDZrcjZhbzluY2NyNjhlOWo2OWowIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Fariem 1 mes més!",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-03-07"
   },
   "end": {
    "date": "2008-03-08"
   },
   "transparency": "transparent",
   "visibility": "private",
   "iCalUID": "CSVConvert2cefbd589ceda19ec10956ea7c6d932f",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk6co68db474qjacr4ckq3ee1kckojacj66or3ce1jcdim4phj65h0",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2Y282OGRiNDc0cWphY3I0Y2txM2VlMWtja29qYWNqNjZvcjNjZTFqY2RpbTRwaGo2NWgwIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Teatre Familiar",
   "location": "CaixaFòrum",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "dateTime": "2008-02-16T17:30:00+01:00"
   },
   "end": {
    "dateTime": "2008-02-16T20:00:00+01:00"
   },
   "iCalUID": "CSVConvert30d5d9553de4784e152f66683cebf31b",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk6cq38cpi6sp64cr460s62oj46kp68db369j62ob5clh66opm69hg",
   "status": "confirmed",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2Y3EzOGNwaTZzcDY0Y3I0NjBzNjJvajQ2a3A2OGRiMzY5ajYyb2I1Y2xoNjZvcG02OWhnIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Aniversari Mallen",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-02-11"
   },
   "end": {
    "date": "2008-02-12"
   },
   "transparency": "transparent",
   "iCalUID": "CSVConvert3443272b3d08abd52d5c2faaeebcc62c",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  },
  {
   "kind": "calendar#event",
   "etag": "\"HvdNzJLFsPN6WzLOxlO1URKnJIE/MA\"",
   "id": "_8d9lcgrfdpr6asjk6crj8cj574p3ceb560pj8db3c8q3ae9k6th3ad1kccrm6e1g6co0",
   "status": "tentative",
   "htmlLink": "https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2Y3JqOGNqNTc0cDNjZWI1NjBwajhkYjNjOHEzYWU5azZ0aDNhZDFrY2NybTZlMWc2Y28wIHJlZHJ1ZGVib3lAbQ",
   "created": "1900-01-01T12:00:00.000Z",
   "updated": "1970-01-01T00:00:00.000Z",
   "summary": "Carnestoldes",
   "creator": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "organizer": {
    "email": "redrudeboy@gmail.com",
    "displayName": "Lenin Gols",
    "self": true
   },
   "start": {
    "date": "2008-02-24"
   },
   "end": {
    "date": "2008-02-25"
   },
   "iCalUID": "CSVConvert3742e9269e0345cb45947b544c7c8030",
   "sequence": 0,
   "reminders": {
    "useDefault": true
   }
  }
]};

	return Events;
});