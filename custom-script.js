/* This code is copy and pasted into the sidebar source for the public galery page */
$( document ).ready(function() {
    console.log( "ready!" );
    var bns = $( "span:contains('Best New Studio')" ).first().closest("div.gallery_col");
    bns.css( "clear", "both" );
    bns.before("<h2 style='display: block; clear: both; width: 100%;'>Best New Studio</h2>");
    var bnt = $( "span:contains('Best New Talent')" ).first().closest("div.gallery_col");
    bnt.css( "clear", "both" );
    bnt.before("<h2 style='display: block; clear: both; width: 100%;'>Best New Talent</h2>");
});