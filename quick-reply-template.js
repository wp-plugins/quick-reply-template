if (typeof commentReply != 'undefined'){
	commentReply.overloaded_comment_reply_open_func = commentReply.open;
	
	commentReply.open = function(id,p,a){ 
	    var return_value = this.overloaded_comment_reply_open_func(id,p,a);

			// console.log(id+" : "+p+" : "+a);

			if(a == "edit"){
				return return_value;
			}
	
			if(quick_reply_template_parent_file == "index.php"){
				var css_selector = "cite";
			}else{
				var css_selector = "strong";
			}
				
			var name = jQuery("#comment-"+id+" "+css_selector)[0].innerHTML;

			// strip off leading whitespace
			name = name.replace(/^\s+/, '');
			
			if(name.match(/img|IMG/)){
				name = name.match(/>\s(.*)/)[1];
			}

			// Strip HTML from name
			name = name.replace(/<\/?[^>]+>/gi, '');

			var first_name = name;
			if(name.match(/ /) != null){
				first_name = name.match(/(.*?) /)[1];
			}
			
			var content = quick_reply_template_content;
			content = content.replace(/%NAME%/g, name);
			content = content.replace(/%FIRST_NAME%/g, first_name);
			content = content.replace(/%ID%/g, id);
	    		
			jQuery('#replycontent')[0].value = content;
			return return_value;
	}
}
