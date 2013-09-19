/**
 * Code From:
 *	https://github.com/eviltrout/emberreddit/blob/master/js/app.js
 */
//Instance methods
App.GAPI = Ember.Object.extend({
	//Properties
	title: function() {
		return "/r/" + this.get('id');
	}.property('id'),
	//Promise methods
	loadSomething: function() {
		return Em.Deferred.promise(function (p) {
			p.resolve();
		});
	}
});
//Class Methods
App.GAPI.reopenClass({
	list: function(id) {
		// If we've already loaded the list, return it
		if (this._list) { return this._list; }
		// Recover the list
		list = [];
		// Remember what we've created so we don't request it twice.
		this._list = list;
		return list;
	},
	defaultSubreddit: function() {
		return this.list()[0];
	}
});
/**
 * More example code in:
 *	https://github.com/arkadiyk/ember-google-drive-browser
 */


/*
//Basic Object with extend feature & initialize function
App.Util = function(options) {
	_.extend(this,options);
	this.initialize.apply(this, arguments);
};
App.Util.extend = Backbone.Model.extend;
App.Utils.GAPI = App.Util.extend({
	toString: function() {return 'GAPI'},
	clientId: '',
	apiKey2: '',
	scopes: [
		'https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly',
		'https://www.googleapis.com/auth/tasks','https://www.googleapis.com/auth/tasks.readonly',
		'https://www.googleapis.com/auth/plus.me',
		'https://www.googleapis.com/auth/urlshortener'
	],
	isAuthorized: false,
	initialize: function () {
		if(typeof gapi == 'undefined') {
			console.error(this+': gapi undefined!');
		}
		if(typeof gapi.client == 'undefined') {
			console.error(this+': gapi.client undefined!');
		}
		App.log(this+': authorize');
		gapi.client.setApiKey(this.apiKey2);
	},
	//auth
	authorize: function (immediate) {
		App.log(this+': authorize');
		var conf = {'client_id': this.clientId,'scope': this.scopes,immediate: immediate};
		gapi.auth.authorize(conf,this.authorizeCB);
	},
	authorizeCB: function(authResult) {
		App.log(this+': authorizeCB');
		console.log(authResult);
		console.log(gapi.auth.getToken());
		if (authResult && !authResult.error) {
			App.gapi.isAuthorized = true;
			App.trigger('gapi:authok',authResult);
			$("#info-panel").text('Login OK!');
		} else {
			App.gapi.isAuthorized = false;
			App.trigger('gapi:authko',authResult);
			$("#info-panel").text('Login KO...');
		}
	},
	//load
	_numGapiClients: 3,
	_numGapiClientsLoaded: 0,
	loadGapiClients: function(cb) {
		App.log(this+': loadGapiClients');
		gapi.client.load('calendar', 'v3', function(resp) {
			if(resp && !resp.error) {
				App.log(this+': calendar loaded!');
				App.gapi.loadedGapiClient(cb)
			} else {
				console.error(resp);
			}
		});
		gapi.client.load('tasks', 'v1', function(resp) {
			if(resp && !resp.error) {
				App.log(this+': tasks loaded!');
				App.gapi.loadedGapiClient(cb)
			} else {
				console.error(resp);
			}
		});
		gapi.client.load('plus', 'v1', function(resp) {
			if(resp && !resp.error) {
				App.log(this+': plus loaded!');
				App.gapi.loadedGapiClient(cb)
			} else {
				console.error(resp);
			}
		});
	},
	loadedGapiClient: function(cb) {
		this._numGapiClientsLoaded++;
		App.log(this+': loadedGapiClient '+this._numGapiClientsLoaded+'/'+this._numGapiClients);
		if(this._numGapiClientsLoaded >= this._numGapiClients) {
			App.log(this+': All Gapi clients loaded!');
			if(typeof cb == 'function') {
				cb();
			}
		}
	},
	//api
	testAllApiCalls: function() {
		App.log(this+': testAllApiCalls');
		this.doTasksCall();
		this.doCalendarCall();
		this.doPlusCall();
	},
	doRequest: function(req, cb) {
		req.execute(function(resp, raw) {
			if(resp && !resp.error) {
				App.gapi.lastResp = resp;
				App.gapi.lastRaw = raw;
				App.log(resp);
				App.log(raw);
				if(typeof cb == 'function') {
					cb();
				}
			} else {
				console.error(resp);
			}
		});
	},
	doPlusCall: function() {
		App.log(this+': doPlusCall');
		var request = gapi.client.plus.people.get({
			'userId': 'me'
		});
		this.doRequest(request, function() {
			App.log(this+': doPlusCall done!');
		});
	},
	doTasksCall: function() {
		App.log(this+': doTasksCall');
		var request = gapi.client.tasks.tasklists.list({
			'userId': 'me'
		});
		this.doRequest(request, function() {
			App.log(this+': doTasksCall done!');
		});
	},
	getCalendars: function() {
		App.log(this+': doCalendarCall');
		var request = gapi.client.calendar.calendarList.list();
		this.doRequest(request, function() {
			App.log(this+': doCalendarCall done!');
		});
	},
	createCalendar: function() {
//		var request = gapi.client.calendar.calendarList.insert(this.calObj);
		var request = gapi.client.calendar.calendars.insert(this.calObj);
		this.doRequest(request, function() {
			App.log(this+': createCalendar done!');
		});
	},
	getEvents: function(id) {
		var req = gapi.client.calendar.events.list({
			'calendarId': id
		});
		this.doRequest(req);
	},
	createEvent: function() {
		var request = gapi.client.calendar.events.insert({
			'calendarId': 'primary',
			'resource': this.eveObj
		});
		this.doRequest(request, function() {
			App.log(this+': createEvent done!');
		});
	},
	calObj: {
//		"kind": "calendar#calendarListEntry",
//		"id": 'HowManyCalendar',
		"summary": 'How Many',
//		"summaryOverride": 'How Many',
		"title": 'How Many',
		"description": 'How Many Days have been since...',
		"backgroundColor": '#a00000',
		"foregroundColor": '#007000',
		"accessRole": 'owner',
		"timeZone": "Europe/Madrid",
//		"location": string,
//		"summaryOverride": string,
//		"colorId": string,
//		"defaultReminders": [
//			{
//				"method": string,
//				"minutes": integer
//			}
//		]
	},
	eveObj: {
		"summary": "All day event",
		"location": "Somewhere",
		"start": {
			"dateTime": "2013-08-14T00:00:00",
			"timeZone": "Europe/Madrid"
		},
		"end": {
			"dateTime": "2013-08-15T00:00:00",
			"timeZone": "Europe/Madrid"
		}
	}
});

App.on('gapi:loaded', function() {
	App.gapi = new App.Utils.GAPI();
	App.gapi.authorize(true);
});
App.on('gapi:authok', function() {
	App.log('gapi:authok')
	App.gapi.loadGapiClients(function () {
		App.trigger('gapi:ready');
	});
});
*/