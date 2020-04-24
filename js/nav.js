$( document ).ready( function() {
    // Overwrite ye_navbar with shared nav bar.
    // Wastes CPU cycles, but so does everything on my site.
    $.get('/nav/').done( function( data ) { 
        $(".ye_navbar").html(data);
    } );
});