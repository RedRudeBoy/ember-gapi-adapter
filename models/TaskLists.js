define(["DS"], function(DS){

var TaskLists = DS.Model.extend({
	//Not writable
	kind: "tasks#taskLists"			//Type of the resource
  , etag: DS.attr('string')		//{etag}
  , items: DS.hasMany('TaskList', {inverse: 'parent'})
});

TaskLists.FIXTURES = 
{
 "kind": "tasks#taskLists",
 "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/0XPmL_f73Aka9FEb1_utkAuc634\"",
 "items": [
  {

   "kind": "tasks#taskList",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MDow",
   "title": "Llista predeterminada",
   "updated": "2013-07-02T00:22:11.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/users/@me/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MDow"
  },
  {

   "kind": "tasks#taskList",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA",
   "title": "Smthngs",
   "updated": "2013-07-02T00:39:00.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/users/@me/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA"
  }
 ]
};

	return TaskLists;
});