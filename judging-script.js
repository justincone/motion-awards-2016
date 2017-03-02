/* 
JUDGING GALLERY

This code is copy and pasted into the sidebar source for the judging gallery page */
$( document ).ready(function() {
	//$(".judgingGallery_scoreBox").hide();
	$(".gallery_desc h3 a").css({
		   'pointer-events' : 'auto',
		   'cursor' 		: 'pointer',
		   'font-weight' 	: 'normal',
		   'line-height' 	: '120%'
		});
	$(".results_list .gallery_col .gallery_desc.gallery_noimg").css("width","100%");
	$("a.btn_view_entry").text("View");
	$("a.btn_view_entry").addClass("btn_view_custom");
	$(".gallery_list").addClass("gallery_list_custom");
	$(".totalScore_label").text("Status");

	/* Format title of each entry */
	$('.gallery_desc h3 a').each(function(){
	var $heading = $(this),
	    $contents = $heading.contents(),
	    index = $contents.index($heading.children('br').first());
		$contents.slice(0, index).wrapAll('<div style="font-size: 18px; margin-bottom: 10px; font-weight: bold;">');
	});
});