const toggle=document.getElementById("toggle")
const menu=document.querySelector("nav")

toggle.onclick=()=>menu.classList.toggle("active")

window.addEventListener("scroll",()=>{
header.classList.toggle("scrolled",scrollY>50)
topBtn.style.display=scrollY>400?"block":"none"
})

const topBtn=document.getElementById("top")
topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"})

const observer=new IntersectionObserver(e=>{
e.forEach(el=>{
if(el.isIntersecting) el.target.classList.add("show")
})
})

document.querySelectorAll(".fade").forEach(el=>observer.observe(el))

document.querySelectorAll("[data]").forEach(el=>{
let target=+el.getAttribute("data")
let n=0
function update(){
n+=target/60
if(n<target){
el.textContent=Math.floor(n)
requestAnimationFrame(update)
}else el.textContent=target
}
update()
})

const cursor=document.getElementById("cursor")
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})