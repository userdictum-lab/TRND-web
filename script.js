// Menu toggle
function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

// Header scroll effect
window.addEventListener("scroll",()=>{
document.getElementById("header").classList.toggle("scrolled", window.scrollY>50);
document.getElementById("scrollTop").style.display = window.scrollY>300 ? 'block':'none';
});

// Scroll to top button
document.getElementById("scrollTop").addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});

// Hero mouse parallax
document.getElementById("hero").addEventListener("mousemove",(e)=>{
const x = (e.clientX/window.innerWidth -0.5)*30;
const y = (e.clientY/window.innerHeight -0.5)*30;
document.getElementById("hero").style.transform=`translate(${x}px,${y}px)`;
});

// Reveal on scroll
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
},{threshold:0.2});

document.querySelectorAll(".card,.hero-content,.reveal").forEach(el=>{
observer.observe(el);
});

// Initial hero content fade-in
window.addEventListener("load",()=>{
document.querySelector(".hero").classList.add("visible");
});