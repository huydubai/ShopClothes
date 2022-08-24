var listImg = document.querySelectorAll('.img-item-2 img')
var imgMain = document.getElementById('img-main')
function changeImg(id) {
    imgMain.src = listImg[id].src;
    listImg.forEach(itemImg => {
        itemImg.classList.remove('selected')
    });
}
listImg.forEach((img, id) => {
    img.addEventListener('click', (e) => {
        changeImg(id)
        img.classList.add('selected')
    })
})

