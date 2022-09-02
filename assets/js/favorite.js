const listLikes = products.slice(0, 12)
const listFavorites = listLikes.map((itemFavorite =>{
    return `
    <div class="col-lg-3 col-md-6 mb-20 product-count product__favorite-${itemFavorite.id}">
                <div class="card" style="width: 100%">
                    <a href="./productDetail.html" class="product__new-item">
                        <img src=${itemFavorite.image} alt="" class="card-img-top">
                    </a>
                    <div class="card-body">
                        <h4 class="card-title">${itemFavorite.name}</h4>
                        <div class="product__price">
                            <span class="product__price-old">${itemFavorite.priceOld}đ</span>
                            <span class="product__price-new">${itemFavorite.priceNew}đ</span>
                        </div>
                        <div class="card__product-action">
                            <span class="card__product-like hidden-mb hidden-tablet">
                                <i class="card__product-nolike far fa-heart"></i>
                                <i class="card__product-liked liked-${itemFavorite.id} fas fa-heart" onclick="unLike(${itemFavorite.id})"></i>
                            </span>
                            <span class="card__product-option option-${itemFavorite.id} hidden-pc" onclick="productOption(${itemFavorite.id})"><i class="fas fa-ellipsis-h"></i></span>
                            <span class="card__product-addcart"><i class="fas fa-cart-plus"></i></span>
                        </div>
                        <div class="card__product-sale">
                            <span class="card__product-sale--percent">${itemFavorite.percent}</span>
                            <span class="card__product-sale--label">Giảm</span>
                        </div>
                    </div>
                    <form action="" class="card-select">
                        <a href="./cart.html" title="Mua ngay" class="btn-add-to-cart">
                            <i class="fas fa-cart-plus"></i>
                        </a>
                        <a data-toggle="modal" data-target="#myModal" title="Xem nhanh" class="quickview">
                            <i class="fas fa-search"></i>
                        </a>
                    </form>
                </div>
                <ul class="option-list list-${itemFavorite.id} hidden-mb hidden-tablet hidden-pc">
                    <li class="option-item"><a href="./product.html" class="option-link">Tìm kiếm sản phẩm tương tự</a></li>
                    <li class="option-item unlike" onclick="unLike(${itemFavorite.id})"><a href="" class="option-link">Bỏ thích</a></li>
                    <li class="option-item cancel-1" onclick="Cancel(${itemFavorite.id})"><a href="" class="option-link">Hủy bỏ</a></li>
                </ul>
            </div>
    `
}))
    $('#productFavorite').innerHTML = listFavorites.join('')


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


