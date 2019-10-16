var Category = function(){
var id;
var img ;
var isEmailVisible;
var isPhoneEditable;
var name;
var notHomePageCategory;
var searchCategory;
var showPhotos;
var url;
var view;

this.getId = function(){
	return id;
}
this.getImg = function(){
	return img;
}
this.getIsEmailVisible = function(){
	return isEmailVisible;
}
this.getisPhoneEditable = function(){
	return isPhoneEditable;	
}
this.getName = function(){
	return name;
}
this.getNotHomePageCategory = function(){
	return notHomePageCategory;
}
this.getSearchCategory = function(){
	return searchCategory;
}
this.getShowPhotos = function(){
	return showPhotos;
}
this.getUrl = function(){
	return url;
}
this.getView = function(){
	return view;
}

this.setId = function(id){
	this.id = id; 
}
this.setImg = function(img){
	this.img = img;
}
this.setIsEmailVisible = function(isEmailVisible){
	this.isEmailVisible = isEmailVisible;
}
this.setisPhoneEditable = function(isPhoneEditable){
	this.isPhoneEditable = isPhoneEditable;	
}
this.setName = function(name){
	this.name = name;
}
this.setNotHomePageCategory = function(notHomePageCategory){
	this.notHomePageCategory = notHomePageCategory;
}
this.setSearchCategory = function(searchCategory){
	this.searchCategory = searchCategory;
}
this.setShowPhotos = function(showPhotos){
	this.showPhotos = showPhotos;
}
this.setUrl = function(url){
	this.url = url;
}
this.setView = function(view){
	this.view = view;
}

};

