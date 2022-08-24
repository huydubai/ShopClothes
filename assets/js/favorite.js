$$('.favorite-item').forEach(favoriteItem => {
    favoriteItem.addEventListener('click', function (e) {
        e.preventDefault()
        removeSelect()
        this.classList.add('selected')
        // countProduct()
    })
})
function removeSelect() {
    $('.favorite-item.selected').classList.remove('selected')
}
$('.favorite-item.status').addEventListener('click', () => {
    $('.favorite-icon-down').classList.toggle('hidden')
    $('.favorite-icon-up').classList.toggle('hidden')
    $('.favorite-list1').classList.toggle('hidden')
})
$('.favorite-item.industry').addEventListener('click', () => {
    $('.favorite-industry-down').classList.toggle('hidden')
    $('.favorite-industry-up').classList.toggle('hidden')
    $('.favorite-list2').classList.toggle('hidden')
})
$('.favorite-update__up').addEventListener('click', function(){
    this.classList.add('hidden-mb')
    $('.favorite-method').classList.remove('hidden-mb')
    $('.favorite-update__fis').classList.remove('hidden-mb')
})
$('.favorite-update__fis').addEventListener('click', function(){
    this.classList.add('hidden-mb')
    $('.favorite-method').classList.add('hidden-mb')
    $('.favorite-update__up').classList.remove('hidden-mb')
})
$('.favorite-method').addEventListener('click', (e)=>{
    e.preventDefault()
})
function countProduct() {
    var count = $$('.product-count').length
    $('.favorite-count').innerHTML = count
}
countProduct()
function countProductReload() {
    var count = $$('.product-count').length - $$('.product-count.hidden').length
    $('.favorite-count').innerHTML = count
}
function unLike(id) {
    console.log($(`.liked-${id}`));
    $(`.product__favorite-${id}`).classList.add('hidden')
    countProductReload()
}
$('.favorite-method').addEventListener('click', ()=>{
    console.log($$('.product-count'));
    $$('.product-count').forEach(item => {
        item.classList.add('hidden')
    })
    countProductReload()
})
$$('.card__product-option').forEach(itemOption =>{
    itemOption.addEventListener('click', ()=>{
       
    })
})
function productOption(id){
    $(`.card__product-option.option-${id}`).addEventListener('click', ()=>{
        $(`.option-list.list-${id}`).classList.remove('hidden-mb')
        $(`.option-list.list-${id}`).classList.remove('hidden-tablet')
        $(`.option-${id}`).style.color = 'var(--hover-color)'
    })
}
function Cancel(id){
    $(`.option-item.cancel-${id}`).addEventListener('click', ()=>{
        $(`.option-list.list-${id}`).classList.add('hidden-mb')
        $(`.option-list.list-${id}`).classList.add('hidden-tablet')
        $(`.option-${id}`).style.color = 'var(--black-color)'
    })
}
$$('.option-item.unlike').forEach(itemUnlike =>{
    itemUnlike.addEventListener('click', (e)=>{
        e.preventDefault()
    })
})

$$('.option-item:last-child').forEach(itemLast =>{
    itemLast.addEventListener('click', (e)=>{
        e.preventDefault()
    })
})


