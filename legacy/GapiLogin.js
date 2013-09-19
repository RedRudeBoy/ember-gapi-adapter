define(["./Gapi","AppConf"], function(Gapi, AppConf){
	if(typeof AppConf.apiKey === 'undefined') {
		console.error('AppConf.apiKey undefined');
	}
	if(typeof AppConf.clientId === 'undefined') {
		console.error('AppConf.clientId undefined');
	}
	if(typeof AppConf.scopes === 'undefined') {
		console.error('AppConf.scopes undefined');
	}
//	console.log('GapiLogin setApiKey');
	Gapi.client.setApiKey(AppConf.apiKey);
//	window.setTimeout(function() {
//		
//	}, 100);
	
	var GapiLogin = {
		auth: function(immediate, callback) {
			console.log('GapiLogin auth');
			Gapi.auth.authorize({client_id: AppConf.clientId, scope: AppConf.scopes, immediate: immediate}, callback);
		},
		init: function() {
			
		}
	};
	return GapiLogin;
});