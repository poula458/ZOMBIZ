const back=document.getElementById('arrow')
window.addEventListener('scroll', ()=> {
if(window.scrollY >300) {
    arrow.style.display='block'
}
else{
    arrow.style.display='none'
}
})

back.addEventListener('click',()=> {
    window.scrollTo({top:0, behavior:"smooth"});
})