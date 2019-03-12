
var big = document.querySelector('.big');
var small = document.querySelector('.small');
var qiu = document.querySelectorAll('.qiu');
var x = 0;
var y = 0;
// 外圈
function dong(){
    x= x+0.3;
    qiu[0].setAttribute('style','transform: rotate('+x+'deg)');
    qiu[1].setAttribute('style','transform: rotate(120'+x+'deg)');
    qiu[2].setAttribute('style','transform: rotate(240'+x+'deg)');
}
var ss = setInterval(dong,17);

big.onmousemove = function(){
    clearInterval(ss)
}
big.onmouseout = function(){
    ss = setInterval(dong,17);
}
// 内圈
function dong2(){
    y = y +0.2;
    qiu[3].setAttribute('style','transform: rotate(320'+y+'deg)');
    qiu[4].setAttribute('style','transform: rotate(160'+y+'deg)');
}
var ss2 = setInterval(dong2,17);
small.onmousemove = function(){
    clearInterval(ss2)
}
small.onmouseout = function(){
    ss2 = setInterval(dong2,17);
}

