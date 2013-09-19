/**
 * @ToDo
 */
define(["DS"], function(DS){

var Contact = DS.Model.extend({});

Contact.FIXTURES =
[
{	id: 'userfixture1@gmail.com',
	name: 'Bob'
}
,{	id: 'userfixture2@gmail.com',
	name: 'Bot'
}
,{	id: 'userfixture3@gmail.com',
	name: 'Tob'
}
,{	id: 'userfixture4@gmail.com',
	name: 'Lenin'
}
,{	id: 'userfixture5@gmail.com',
	name: 'Linux'
}
,{	id: 'userfixture5@gmail.com',
	name: 'LeLinux'
}
,{	id: 'userfixture5@gmail.com',
	name: 'Leninux'
}
];

return Contact;

});