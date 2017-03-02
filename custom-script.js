/* 
PUBLIC GALLERY

This code is copy and pasted into the sidebar source for the public gallery page */
$( document ).ready(function() {
    console.log( "ready!" );

    var bns = $( "span:contains('Best New Studio')" ).first().closest("div.gallery_col");
    bns.css( "clear", "both" );
    bns.before("<h2 style='display: block; clear: both; width: 100%;'>Best New Studio</h2>");

    var bnt = $( "span:contains('Best New Talent')" ).first().closest("div.gallery_col");
    bnt.css( "clear", "both" );
    bnt.before("<h2 style='display: block; clear: both; width: 100%;'>Best New Talent</h2>");

	$(".btn_vote").text("Vote");  
	$("a.btn_view_entry").hide(); 
	$("a.btn_vote").show(); 
});

/* 
JUDGING GALLERY

This code is copy and pasted into the sidebar source for the judging gallery page */
$( document ).ready(function() {
	$(".judgingGallery_scoreBox").hide();
	$(".gallery_desc h3 a").css("pointer-events", "auto");
	$(".gallery_desc h3 a").css("cursor", "pointer");
	$(".gallery_desc h3 a").css("font-weight", "normal");
	$(".gallery_desc h3 a").css("line-height", "120%");
	$(".results_list .gallery_col .gallery_desc.gallery_noimg").css("width","100%");

	var $heading = $('.gallery_desc h3 a'),
	    $contents = $heading.contents(),
	    index = $contents.index($heading.children('br').first());
		$contents.slice(0, index).wrapAll('<div style="font-size: 18px; margin-bottom: 10px; font-weight: bold;">');
});