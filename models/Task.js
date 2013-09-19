define(["DS"], function(DS){

var Task = DS.Model.extend({

//Not writable
	kind: "tasks#task"			//Type of the resource
//  , id: DS.attr('string')		//Identifier of the task
  , etag: DS.attr('string')		//{etag}
  , updated: DS.attr('date')	//Last modification time of the task (as a RFC 3339 timestamp)
  , selfLink: DS.attr('string')	//URL pointing to this task. Used to retrieve, update, or delete this task

//Not writable directly, use MoveMethod
  , parent: DS.attr('string')	//Parent task identifier. This field is omitted if it is a top-level task
  , position: DS.attr('string')	//String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level)

//Necessary
  , title: DS.attr('string')	//Title of the task
  , status: DS.attr('string', "needsAction")	//"needsAction" or "completed"

//Optional
  , notes: DS.attr('string')	//Notes describing the task
  , due: DS.attr('date')		//Expected or scheduled date of the task (as a RFC 3339 timestamp)
  , completed: DS.attr('date')	//This field is omitted if the task has not been completed
  , deleted: DS.attr('boolean')	//

//ReadOnly
  , hidden: DS.attr('boolean')	//Cleared from the list
//  , links: [{					//
//	  , type: DS.attr('string')			//Type of the link
//	  , description: DS.attr('string')	//The description. In HTML speak: Everything between <a> and </a>
//	  , link: DS.attr('string')			//URL
//	}]
});


Task.FIXTURES =
//{
// "kind": "tasks#tasks",
// "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTE2NjM5OTQ0MzQ\"",
// "items":
[
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/MjAxMzYxMTE1NA\"",
   "title": "Task Fixture Title 1",
   "updated": "2013-07-02T00:22:02.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA",
   "position": "00000000000571437301",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjQ4Mzk3MTcxOA",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTEzMTYwNTI5OTc\"",
   "title": "Task Fixture Title 2",
   "updated": "2013-07-02T00:38:54.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjQ4Mzk3MTcxOA",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA",
   "position": "00000000000975315488",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEyNjg1ODI2NTA",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTU0MzIxMDQxMQ\"",
   "title": "Task Fixture Title 3",
   "updated": "2013-07-02T00:38:54.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEyNjg1ODI2NTA",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA",
   "position": "00000000001234803096",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjkxMDQ5MjE2NQ",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/NTA2NDYwNTcx\"",
   "title": "Task Fixture Title 4",
   "updated": "2013-07-02T00:39:00.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjkxMDQ5MjE2NQ",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEyNjg1ODI2NTA",
   "position": "00000000001234803096",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE1NzkxMzU1MA",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/MTIwNjIwMjQ5Nw\"",
   "title": "Task Fixture Title 5",
   "updated": "2013-07-02T00:39:00.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE1NzkxMzU1MA",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEyNjg1ODI2NTA",
   "position": "00000000001610612734",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE5MzgwOTExMDk",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/MTI4ODk1MDIxNQ\"",
   "title": "Task Fixture Title 6",
   "updated": "2013-07-02T00:38:59.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE5MzgwOTExMDk",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEyNjg1ODI2NTA",
   "position": "00000000002147483647",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEzOTc4MDEwMTA",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTMzNTA3NzI2OA\"",
   "title": "Task Fixture Title 7",
   "updated": "2013-07-02T00:38:53.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEzOTc4MDEwMTA",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA",
   "position": "00000000001610612734",
   "notes": "Task Fixture Notes 7",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjQ1ODY4ODQ0Ng",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTEzOTM0NjIxOTQ\"",
   "title": "Task Fixture Title 8",
   "updated": "2013-07-02T00:38:58.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjQ1ODY4ODQ0Ng",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEzOTc4MDEwMTA",
   "position": "00000000001610612734",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEzMDY5NDQwMzM",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTEwMTExNjY3MTY\"",
   "title": "Task Fixture Title 9",
   "updated": "2013-07-02T00:38:58.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEzMDY5NDQwMzM",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEzOTc4MDEwMTA",
   "position": "00000000002147483647",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEwOTc2NDI1NDI",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/MTUyMDg2NzMxMQ\"",
   "title": "Task Fixture Title 10",
   "updated": "2013-07-02T00:38:52.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEwOTc2NDI1NDI",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA",
   "position": "00000000002147483647",
   "notes": "Task Fixture Notes 10",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjYwNTc5NzE0NA",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/MTk2NzM0NDMwMw\"",
   "title": "Task Fixture Title 11",
   "updated": "2013-07-02T00:38:57.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjYwNTc5NzE0NA",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEwOTc2NDI1NDI",
   "position": "00000000000975315488",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NzM1NDYyMDQ",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTE0MzI3NzIwNjA\"",
   "title": "Task Fixture Title 12",
   "updated": "2013-07-02T00:38:56.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NzM1NDYyMDQ",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEwOTc2NDI1NDI",
   "position": "00000000001234803096",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE1NDgxMTk1MTI",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/NzY0MDc2MDI5\"",
   "title": "Task Fixture Title 13",
   "updated": "2013-07-02T00:38:56.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE1NDgxMTk1MTI",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEwOTc2NDI1NDI",
   "position": "00000000001610612734",
   "notes": "Task Fixture Notes 13",
   "status": "needsAction"
  },
  {
   "kind": "tasks#task",
   "id": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE1NTQ2NDM3NTE",
   "etag": "\"LJPT_ZSILIuNUhSL1lVvNuXyPys/LTE4NTUwOTMzMDc\"",
   "title": "Task Fixture Title 14",
   "updated": "2013-07-02T00:38:55.000Z",
   "selfLink": "https://www.googleapis.com/tasks/v1/lists/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjA/tasks/MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE1NTQ2NDM3NTE",
   "parent": "MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjEwOTc2NDI1NDI",
   "position": "00000000002147483647",
   "notes": "Recursivitat lliure",
   "status": "needsAction"
  }
 ];
//};

	return Task;
});
