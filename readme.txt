=== Quick Reply Template Plugin ===
Contributors: paul1999
Requires at least: 2.8
Tested up to: 3.0.1
Stable tag: trunk
Tags: reply, template, quick, comments, author, 2.8, admin

Allows you to specify a reply template for the quick reply feature in Wordpress 2.9+.

== Description ==

This plugin allows you to specify a default text for the "quick reply" feature in Wordpress 2.8+. 

The template can contain the comment author's fullname, first name, link to the original comment and any other characters, spaces, symbols etc.

== Changelog ==
  
= 0.6 =

Updated for WP 2.8. Uses wp_enqueue_script API. Thanks to Matt Wiebe for javascript code.

= 0.4 =

Changed default reply template.

= 0.3 =

Improved options.

= 0.2 =

Added comment ID to the list of available tags. Strip HTML from name and first name. Add single empty space after content, so that user can start typing reply immediately.

= 0.1 =

Initial Release

== Credits ==

Matt Wiebe for javascript code.

Kaspars for adding the comment ID tag.

== Installation ==

1) Download the plugin zip file.

2) Unzip.

3) Upload the quick-reply-template directory to your wordpress plugin directory (/wp-content/plugins).

4) Activate the plugin.

5) Open up the options (In the left hand menu under Settings > Quick Reply Template)

6) Set your desired template.

7) When you click reply in the admin comments page, your reply template will be automatically inserted.

== Frequently Asked Questions ==

= How can I link to the original comment? =

The %ID% tag contains the comment id of the original comment. You can use this to link to the original. For example:

<a href="#comment-%ID%">%NAME%</a>
