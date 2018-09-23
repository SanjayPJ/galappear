$(document).ready(function() {
    $('.row-1').hide()
    $('.row-2').hide()
    $('.row-3').hide()
    $('.sidenav').sidenav();
    $('.modal').modal();
});
$('.row-1').waypoint({
    handler: function() {
        $('.row-1').fadeIn()
    },
    offset: '80%'
})
$('.row-2').waypoint({
    handler: function() {
        $('.row-2').fadeIn()
    },
    offset: '80%'
})
$('.row-3').waypoint({
    handler: function() {
        $('.row-3').fadeIn()
    },
    offset: '80%'
})