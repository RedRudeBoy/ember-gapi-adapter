define({
	// Enter a client ID for a web application from the Google Developer Console.
	// The provided clientId will only work if the sample is run directly from
	// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
	// In your Developer Console project, add a JavaScript origin that corresponds to the domain
	// where you will be running the script.
	clientId: '837050751313',
	
	// Enter the API key from the Google Develoepr Console - to handle any unauthenticated
	// requests in the code.
	// The provided key works for this sample only when run from
	// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
	// To use in your own application, replace this API key with your own.
	apiKey: 'AIzaSyAdjHPT5Pb7Nu56WJ_nlrMGOAgUAtKjiPM',
	
	scopes: [
		'https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly',
		'https://www.googleapis.com/auth/tasks','https://www.googleapis.com/auth/tasks.readonly',
		'https://www.googleapis.com/auth/plus.me',
//		'https://www.googleapis.com/auth/urlshortener'
	]
});