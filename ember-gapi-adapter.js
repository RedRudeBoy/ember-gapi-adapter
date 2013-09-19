define(["DS","./gapi","./config.gapi"], function(DS, Gapi, conf){

var GapiAdapter = DS.Adapter.extend({
	_initialized: false,
	_authorized: false,
	/**
	 * @ToDo:
	 *	Use promises 
	 *		¿jQuery or Ember?
	 */
	init: function() {
		if(typeof conf.apiKey === 'undefined') throw 'conf.apiKey undefined';
		if(typeof conf.clientId === 'undefined') throw 'conf.clientId undefined';
		if(typeof conf.scopes === 'undefined') throw 'conf.scopes undefined';
		
		Gapi.client.setApiKey(conf.apiKey);
//		window.setTimeout(function() {
			this._initialized = true;
			this.auth(false);
//		}, 100);
	},
	auth: function(immediate) {
		console.log('GapiAdapter auth');
		Gapi.auth.authorize({client_id: conf.clientId, scope: conf.scopes, immediate: immediate}, function(authResult) {
			if (authResult && !authResult.error) {
				this._initialized = true;
			} else {
				this._initialized = false;
				console.error(authResult);
			}
		});
	},
	find: function() {},
	findMany: function() {},
	createRecord: function() {},
	createRecords: function() {},
	updateRecord: function() {},
	updateRecords: function() {},
	deleteRecord: function() {},
	deleteRecords: function() {},
	commit: function() {}
});

	return GapiAdapter;
});

/**
return Em.Deferred.promise(function (p) {
			p.resolve();
		});

var request = gapi.client.plus.people.get({
			'userId': 'me'
		});

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
 */