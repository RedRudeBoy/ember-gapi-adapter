define(["DS"], function(DS){

var FileList = DS.Model.extend({

//Not writable
	kind: "drive#fileList"		//Type of the resource
  , etag: DS.attr('string')				//{etag}
//  , id: DS.attr('string')
  , selfLink: DS.attr('string')
  , nextPageToken: DS.attr('string')
  , nextLink: DS.attr('string')
  , items: DS.hasMany('file', {inverse: 'parent'})
});

FileList.FIXTURES =
{
 "kind": "drive#fileList",
 "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/l3eKDfYnviadDn4rj4YVoG0dWSc\"",
 "selfLink": "https://content.googleapis.com/drive/v2/files?maxResults=3",
 "nextPageToken": "!!|~EAIanQELEgA6lAEKfPejPEZz_____3__AAD__wAA_-MN7vKYzs3LzM3PzcfHzs_M0cvM0Yyzm46JiJ2ZmIaPjZuUvI-2rZWuxoWu_wAA__8A_v_-f_8A_wDjDe7ymM7Ny8zNz83Hx87PzNHLzNGMs5uOiYidmZiGj42blLyPtq2VrsaFrv8A__4QAyFVhA7Kvoa7STkAAAAAjLnDXEgBDEAAIgsJZw0R8hwAAAAgBg",
 "nextLink": "https://content.googleapis.com/drive/v2/files?maxResults=3&pageToken=!!%7C~EAIanQELEgA6lAEKfPejPEZz_____3__AAD__wAA_-MN7vKYzs3LzM3PzcfHzs_M0cvM0Yyzm46JiJ2ZmIaPjZuUvI-2rZWuxoWu_wAA__8A_v_-f_8A_wDjDe7ymM7Ny8zNz83Hx87PzNHLzNGMs5uOiYidmZiGj42blLyPtq2VrsaFrv8A__4QAyFVhA7Kvoa7STkAAAAAjLnDXEgBDEAAIgsJZw0R8hwAAAAgBg",
 "items": [
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
   "thumbnailLink": "https://docs.google.com/feeds/vt?gd=true&id=1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM&v=48&s=AMedNnoAAAAAUjXVB0Gb-SVUiDHrFCVgB1iw7YI7m6j3&sz=s220",
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
  },
  {
   "kind": "drive#file",
   "id": "0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc",
   "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/MTM3NzA4MzQxMDY4NQ\"",
   "selfLink": "https://content.googleapis.com/drive/v2/files/0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc",
   "alternateLink": "https://docs.google.com/spreadsheet/ccc?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&usp=drivesdk",
   "embedLink": "https://docs.google.com/spreadsheet/ccc?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&output=html&chrome=false&widget=true",
   "openWithLinks": {
    "132126269022": "https://docs.google.com/spreadsheet/ccc?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&usp=drive_web"
   },
   "defaultOpenWithLink": "https://docs.google.com/spreadsheet/ccc?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&usp=drive_web",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_spreadsheet_list.png",
   "thumbnailLink": "https://docs.google.com/feeds/vt?gd=true&id=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&v=1&s=AMedNnoAAAAAUjXVCASCbgi_qU4rXVsbo3MBLomWmHhx&sz=s220",
   "title": "Errores C_PRODUCTOS_OFERTAS 18/08/2013",
   "mimeType": "application/vnd.google-apps.spreadsheet",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-08-21T11:09:36.533Z",
   "modifiedDate": "2013-08-21T11:10:10.685Z",
   "modifiedByMeDate": "2013-08-21T11:10:10.685Z",
   "lastViewedByMeDate": "2013-08-21T11:09:50.512Z",
   "parents": [
    {

     "kind": "drive#parentReference",
     "id": "0AACmKr4yxBqUUk9PVA",
     "selfLink": "https://content.googleapis.com/drive/v2/files/0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc/parents/0AACmKr4yxBqUUk9PVA",
     "parentLink": "https://content.googleapis.com/drive/v2/files/0AACmKr4yxBqUUk9PVA",
     "isRoot": true
    }
   ],
   "exportLinks": {
    "application/pdf": "https://docs.google.com/feeds/download/spreadsheets/Export?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&exportFormat=pdf",
    "application/x-vnd.oasis.opendocument.spreadsheet": "https://docs.google.com/feeds/download/spreadsheets/Export?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&exportFormat=ods",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "https://docs.google.com/feeds/download/spreadsheets/Export?key=0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc&exportFormat=xlsx"
   },
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/IDXsp_UEb_sCc1uwCLWwyPGVZkQ\"",
    "id": "me",
    "selfLink": "https://content.googleapis.com/drive/v2/files/0AgCmKr4yxBqUdHVsczc1bXVaVkJrM1JCLWp6V3FuQWc/permissions/me",
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
   "lastModifyingUserName": "Lenin Gols",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Lenin Gols",
    "isAuthenticatedUser": true,
    "permissionId": "16346832560241230683"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false
  },
  {
   "kind": "drive#file",
   "id": "1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM",
   "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/MTM3Njg0Njg2NTc3Ng\"",
   "selfLink": "https://content.googleapis.com/drive/v2/files/1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM",
   "alternateLink": "https://docs.google.com/forms/d/1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM/edit?usp=drivesdk",
   "openWithLinks": {
    "196802322321": "https://docs.google.com/forms/d/1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM/edit?usp=drive_web"
   },
   "defaultOpenWithLink": "https://docs.google.com/forms/d/1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM/edit?usp=drive_web",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_form_list.png",
   "thumbnailLink": "https://lh3.googleusercontent.com/sihDMh6qoqysELQJmgYvPmL5cFSxxVgZzEVfUYvUb0ZWgu-hb3MKxYpqXqOTVzBeBAs-jcczgcod3JoMWQ=s220",
   "title": "HowMany",
   "mimeType": "application/vnd.google-apps.form",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-08-17T16:47:57.192Z",
   "modifiedDate": "2013-08-18T17:27:45.776Z",
   "modifiedByMeDate": "2013-08-18T17:27:45.776Z",
   "lastViewedByMeDate": "2013-08-18T17:27:45.776Z",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0BwCmKr4yxBqUVGthUFJMUjlFS0k",
     "selfLink": "https://content.googleapis.com/drive/v2/files/1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM/parents/0BwCmKr4yxBqUVGthUFJMUjlFS0k",
     "parentLink": "https://content.googleapis.com/drive/v2/files/0BwCmKr4yxBqUVGthUFJMUjlFS0k",
     "isRoot": false
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"PA40KOhMf9e-1Hypww_TkG8doNA/HWsEBnOwh21CXNJ1b9DCRKxp-SM\"",
    "id": "me",
    "selfLink": "https://content.googleapis.com/drive/v2/files/1OoXlSlw-k7_S7sxOGk011Gm-euJEhOqkmuYgtrqgIfM/permissions/me",
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
   "lastModifyingUserName": "Lenin Gols",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Lenin Gols",
    "isAuthenticatedUser": true,
    "permissionId": "16346832560241230683"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "appDataContents": false
  }
 ]
};

	return FileList;
});