const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var btnBars = $('.header-bars')
var menu = $('.mobile-menu')
var overlay = $('.overlay')

var btnClose = $('.mobie-menu__close')
var cong = $('.cong')
var tru = $('.tru')

var list = $('.__list')


function menuShow() {
    menu.classList.toggle('translateX')
    overlay.classList.toggle('hidden')
}
btnBars.addEventListener('click', menuShow)
overlay.addEventListener('click', menuShow)
btnClose.addEventListener('click', menuShow)


function show(e) {
    cong.classList.toggle('hidden');
    tru.classList.toggle('hidden');
    list.classList.toggle('hidden')
    e.preventDefault();
    $('.__list:last-child').style.borderBottom = '1px solid #000'
}
cong.addEventListener('click', show)
tru.addEventListener('click', show)

function show2(id) {
    $(`.cong${id}`).classList.toggle('hidden');
    $(`.tru${id}`).classList.toggle('hidden');
    $(`.list-item${id}`).classList.toggle('hidden');
}
var linkAll = $$('.__link')
for (var i = 0; i < linkAll.length; i++) {
    var link = linkAll[i]
    link.addEventListener('click', (e) => {
        e.preventDefault()
    })
}


function check() {
    var type = document.getElementsByName('size')
    if (type[0].checked) {
        var value = type[0].value;
        console.log(value);
    }
    else if (type[1].checked) {
        var value = type[1].value;
        console.log(value);
    }
    else if (type[2].checked) {
        var value = type[2].value;
        console.log(value);
    }
}


function decrease(id) {
    var value = $(`.text-input#count-${id}`).value;
    var result = Number(value) - 1;
    if (result >= 1) {
        $(`.text-input#count-${id}`).value = result;
    }
}
function increase(id) {
    var value = $(`.text-input#count-${id}`).value;
    var result = Number(value) + 1;
    $(`.text-input#count-${id}`).value = result;
}




function validate(event) {
    var theEvent = event || window.event;
    // console.log(theEvent.type);
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plan')
    } else {
        var key = theEvent.keyCode || theEvent.which
        key = String.fromCharCode(key)
        console.log(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault)
            theEvent.preventDefault();
    }
}

var showGoToTop = 300;
var toTop = $('#go-to-top')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > showGoToTop || document.documentElement.scrollTop > showGoToTop) {
        toTop.classList.add('active')
    }
    else {
        toTop.classList.remove('active')
    }
})

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


