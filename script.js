setInterval(movebolinha, 2000)

function movebolinha() {
    $("#bolinha").animate({left:'590'}, 1000)
    $("#bolinha").animate({left:'590', top: '590'}, 1000)
    $("#bolinha").animate({left:'-10', top: '590'}, 1000)
    $("#bolinha").animate({left:'-10', top: '-10'}, 1000)
}
function subir() {
    $("#menu").slideUp(2000)
    $("#menu").animate({right:'50'}, 1000)
}
function descer() {
    $("#menu").slideDown(2000)
    $("#menu").animate({right:'100'})

}