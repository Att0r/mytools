$('.open-new').click(function () {
    if ($(this).is('.close-new')) {
        $(".news").css("height", "0px");
    } else {
        $(".news").css("height", "215px");
    }
    $("#show-newletter").toggleClass('fa-arrow-circle-up fa-arrow-circle-down');
    $("#show-newletter").toggleClass('close-new');
 });