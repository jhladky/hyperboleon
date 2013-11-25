$(function() {
    $("#pics > .artItem, #drawings > .artItem").each(function() {
        $(this).css("background-image", "url('art/small/" + $(this).attr("id") + "')")
            .css("background-size", "200%");
    });
    
    $("#projects > * > .artItem").each(function() {
        $(this).css("background-image", "url('projects/" + $(this).attr("id") + "')")
            .css("background-size", "200%");
    });
    
    $(window).resize(function() {
        if($("#nav").height() < (5 * 150)) {
            $(".navBackItem")
                .css("height", "135px")
                .css("width", "135px");
        } else {
            $(".navBackItem")
                .css("height", "150px")
                .css("width", "150px");
        }
        var header = $("#header");
        if(header.outerWidth() < 750) {
            $("#theTitle").css("font-size", (header.outerWidth() / 11.6) + "px");
            $("#subText").css("font-size", (header.outerWidth() / 38) + "px");
        } else {
            $("#theTitle").css("font-size", "70px");
            $("#subText").css("font-size", "22px");
        }
    });
    
    $("#" + $(location).attr("href").split('/')[3] + "Nav")
        .parent()
        .addClass("navSelected");
    
    $(window).resize();
    $("#aboutNav").click();
});
