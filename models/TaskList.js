define(["DS"], function(DS){

var TaskList = DS.Model.extend({

//Not writable
	kind: "tasks#taskList"		//Type of the resource
//  , id: DS.attr('string')		//Identifier of the task
  , etag: DS.attr('string')		//{etag}
  , updated: DS.attr('date')	//Last modification time of the task (as a RFC 3339 timestamp)
  , selfLink: DS.attr('string')	//URL pointing to this task. Used to retrieve, update, or delete this task

//Necessary
  , title: DS.attr('string')	//Title of the task
});

TaskList.FIXTURES = 
{
 "kind": "tasks#taskList",
 "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA",
 "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/igvYCA_mUwAu0ydv8PTRQfIUb7U\"",
 "title": "Smthngs",
 "updated": "2013-07-02T00:39:00.000Z",
 "selfLink": "https://www.googleapis.com/tasks/v1/users/@me/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA"
};

	return TaskList;
});