function countItem() {
    var count = $$('.cart-item .checkbox-total--checked').length
    $('.count').innerHTML = count;
    $('.count-mb').innerHTML = count;
}
function countItemReload() {
    var count = $$('.cart-item .checkbox-total--checked').length - $$('.cart-item.hidden .checkbox-total--checked').length
    $('.count').innerHTML = count;
    $('.count-mb').innerHTML = count;
}
function checkCount() {
    $('.checkbox-total').classList.toggle('checkbox-total--checked')
    $$('.checkbox-item').forEach(checkboxItem => {
        checkboxItem.classList.toggle('checkbox-total--checked')
        countItemReload()
    });
}

$('.select-all').addEventListener('click', checkCount)
$('.checkbox-total__box').addEventListener('click', checkCount)

$$('.checkbox-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('checkbox-total--checked')
        countItem()
    })
})
$('.delete-all').addEventListener('click', () => {
    $$('.cart-item').forEach(cartDel => {
        cartDel.classList.add('hidden')
    })
    $('.count').innerHTML = 0
})
$('.save-cart').addEventListener('click', () => {
    $$('.cart-item .checkbox-total--checked').forEach(cartItem => {
        alert('Đã lưu sản phẩm: ')
    })
})



// Cart mobile

$('.select-all-mb').addEventListener('click', checkCount)
$('.checkbox-total__box').addEventListener('click', checkCount)

$('.delete-all-mb').addEventListener('click', () => {
    $$('.cart-item').forEach(cartDel => {
        cartDel.classList.add('hidden')
    })
    $('.count-mb').innerHTML = 0
})
$('.save-cart-mb').addEventListener('click', () => {
    $$('.cart-item .checkbox-total--checked').forEach(cartItem => {
        alert('Đã lưu sản phẩm: ')
    })
})

function deleteProduct(id) {
    $(`.cart-item-${id}`).classList.add('hidden')
    countItemReload()
}
function decreaseCount(id) {
    var value = $(`.text-input#count-${id}`).value;
    var result = Number(value) - 1;
    if (result >= 1) {
        $(`.text-input#count-${id}`).value = result;
        var total = $(`.price-total-${id}`).getAttribute('value') - ($(`.price-total-${id}`).getAttribute('value') / (Number(result) + 1));
        $(`.price-total-${id}`).innerHTML = total
        $(`.price-total-${id}`).setAttribute('value', total)
        console.log(total);
    }
}

function increaseCount(id) {
    var value = $(`.text-input#count-${id}`).value;
    var result = Number(value) + 1;
    $(`.text-input#count-${id}`).value = result;
    var total = result * $(`.price-new-${id}`).getAttribute('value')
    $(`.price-total-${id}`).setAttribute('value', total);
    $(`.price-total-${id}`).innerHTML = total
    console.log(total);
}
// console.log(document.querySelector('.mobile-update'));
$('.mobile-update').addEventListener('click', function () {
    this.classList.add('hidden-mb')
    $('.mobile-finish').classList.remove('hidden-mb')
    console.log($('.mobile-option__right'));
    $('.mobile-option__right').classList.remove('hidden-mb')
    $('.mobile-option__btn-right').classList.add('hidden-mb')
})
$('.mobile-finish').addEventListener('click', function () {
    this.classList.add('hidden-mb')
    $('.mobile-update').classList.remove('hidden-mb')
    $('.mobile-option__right').classList.add('hidden-mb')
    $('.mobile-option__btn-right').classList.remove('hidden-mb')
})

