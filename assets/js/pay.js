
document.querySelector('.delivery-address__change').addEventListener('click', () => {
    document.querySelector('.wrap-address').classList.add('appear')
    console.log(1234);
})
document.querySelectorAll('.change-address__left').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.wrap-address').classList.remove('appear')
    })
})
function checkID(id){
    document.querySelector(`.address-${id}`).addEventListener('click', ()=>{
        document.querySelector('.wrap-address').classList.remove('appear')
    })
}
