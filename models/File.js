define(["DS"], function(DS){

var File = DS.Model.extend({

//Not writable
	kind: "drive#file"						//Type of the resource
  , etag: DS.attr('string')					//{etag}
//  , id: DS.attr('string')
  , selfLink: DS.attr('string')
  , alternateLink: DS.attr('string')
  , embedLink: DS.attr('string')
//  , openWithLinks: {}
  , defaultOpenWithLink: DS.attr('string')
  , iconLink: DS.attr('string')
  , thumbnailLink: DS.attr('string')
  , title: DS.attr('string')
  , mimeType: DS.attr('string')
//  , labels: {}
  , createdDate: DS.attr('date')
  , modifiedDate: DS.attr('date')
  , modifiedByMeDate: DS.attr('date')
  , lastViewedByMeDate: DS.attr('date')
//  , parents: {}
//  , exportLinks: {}
//  , userPermission: {}
  , quotaBytesUsed: DS.attr('number')
//  , ownerNames: {}
//  , owners: {}
  , lastModifyingUserName: DS.attr('string')
//  , lastModifyingUser: {}
  , editable: DS.attr('boolean')
  , copyable: DS.attr('boolean')
  , writersCanShare: DS.attr('boolean')
  , shared: DS.attr('boolean')
  , appDataContents: DS.attr('boolean')
});

File.FIXTURES =
  {
   "kind": "drive#file",
   "id": "1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM",
   "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/MTM3NzU0MTQ2NTY1Ng\"",
   "selfLink": "https://content.googleapis.com/drive/v2/files/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM",
   "alternateLink": "https://docs.google.com/document/d/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM/preview",
   "openWithLinks": {
    "619683526622": "https://docs.google.com/document/d/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM/edit?usp=drive_web"
   },
   "defaultOpenWithLink": "https://docs.google.com/document/d/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM/edit?usp=drive_web",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
//   "thumbnailLink": "https://docs.google.com/feeds/vt?gd=true&id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&v=48&s=AMedNnoAAAAAUjXVB0Gb-SVUiDHrFCVgB1iw7YI7m6j3&sz=s220",
   "thumbnailLink": "img/uploads/Familia.png",
   "title": "Rosa dels vents personal",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-08-14T16:40:46.392Z",
   "modifiedDate": "2013-08-26T18:24:25.656Z",
   "modifiedByMeDate": "2013-08-15T03:38:13.397Z",
   "lastViewedByMeDate": "2013-08-15T03:38:13.397Z",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0BwCmKr4yxBqUVGthUFJMUjlFS0k",
     "selfLink": "https://content.googleapis.com/drive/v2/files/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM/parents/0BwCmKr4yxBqUVGthUFJMUjlFS0k",
     "parentLink": "https://content.googleapis.com/drive/v2/files/0BwCmKr4yxBqUVGthUFJMUjlFS0k",
     "isRoot": false
    }
   ],
   "exportLinks": {
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://docs.google.com/feeds/download/documents/export/Export?id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&exportFormat=docx",
    "application/vnd.oasis.opendocument.text": "https://docs.google.com/feeds/download/documents/export/Export?id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&exportFormat=odt",
    "text/html": "https://docs.google.com/feeds/download/documents/export/Export?id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&exportFormat=html",
    "application/rtf": "https://docs.google.com/feeds/download/documents/export/Export?id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&exportFormat=rtf",
    "text/plain": "https://docs.google.com/feeds/download/documents/export/Export?id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&exportFormat=txt",
    "application/pdf": "https://docs.google.com/feeds/download/documents/export/Export?id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&exportFormat=pdf"
   },
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/d07lvquKtPhUJeTsNOOE7adwKpw\"",
    "id": "me",
    "selfLink": "https://content.googleapis.com/drive/v2/files/1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Lenin Gols"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Lenin Gols",
     "isAuthenticatedUser": true,
     "permissionId": "16346832560241230683"
    }
   ],
   "lastModifyingUserName": "Carmen Garcia Lopez",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Carmen Garcia Lopez",
    "isAuthenticatedUser": false,
    "permissionId": "08738772213662325285"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "appDataContents": false
  };

	return File;
});