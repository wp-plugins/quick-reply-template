jQuery(".reply a").click(function(){
	

	// name is found in different elements on different pages
	if (jQuery("body").hasClass("index-php") ) { // dashboard page
		
		var commentParent = jQuery(this).parents(".comment");
		var name = jQuery.trim(commentParent.find("cite.comment-author").text() );

	} else if (jQuery("body").hasClass("edit-comments-php") ) { // edit comments page

		var commentParent = jQuery(this).parents("tr");
		var name = jQuery.trim(commentParent.find(".author strong").text() );

	} else { // let's not do things elsewhere
		return false;
	}
	
	// Strip HTML from name
	name = name.replace(/<\/?[^>]+>/gi, '');
	
	// the ID of the comment is:
	var id = commentParent.attr("id");
	
	var first_name = name;
	if(name.match(/ /) != null){ // get a first name if it's longer than 1 character
		first_name = name.match(/(.*?) /)[1];
	}
	
	// the user-defined insertion string
	var content = quick_reply_template_content;
	
	// some replacements
	content = content.replace(/%NAME%/g, name);
	content = content.replace(/%ID%/g, id);
	content = content.replace(/%FIRST_NAME%/g, first_name);
	
	// insert into form
	jQuery("#replycontent").attr("value", content);
	
});
