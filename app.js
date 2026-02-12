const app=document.getElementById("app")
const links=document.querySelectorAll("nav a")

fetch("content.json")
.then(res=>res.json())
.then(data=>{

const pages={

home:()=>`
<section class="hero">
<h1>${data.hero.title}</h1>
<p>${data.hero.subtitle}</p>
<div class="btn">Start Project</div>
</section>
`,

about:()=>`
<h1>About</h1>
<p>${data.about}</p>
`,

services:()=>`
<h1>Services</h1>
<div class="grid">
${data.services.map(s=>`<div class="card">${s}</div>`).join("")}
</div>
`,

portfolio:()=>{
let items=data.projects

setTimeout(()=>initFilter(items),50)

return`
<h1>Portfolio</h1>

<div class="filter">
<button class="active" data="all">All</button>
<button data="video">Video</button>
<button data="branding">Branding</button>
<button data="campaign">Campaign</button>
</div>

<div class="grid" id="projects">
${items.map(p=>`
<div class="project" data-cat="${p.cat}">
<h3>${p.title}</h3>
<p>${p.type}</p>
</div>`).join("")}
</div>`
},

contact:()=>`
<h1>Start Project</h1>
<input placeholder="Name">
<input placeholder="Email">
<textarea placeholder="Project Details"></textarea>
<button class="submit">Send</button>
`
}

function render(page){
app.innerHTML=pages[page]()
links.forEach(l=>l.classList.remove("active"))
document.querySelector(`[data-page="${page}"]`).classList.add("active")
}

links.forEach(link=>{
link.onclick=()=>render(link.dataset.page)
})

render("home")
})

/* filter */
function initFilter(items){
const btns=document.querySelectorAll(".filter button")
const grid=document.getElementById("projects")

btns.forEach(btn=>{
btn.onclick=()=>{
btns.forEach(b=>b.classList.remove("active"))
btn.classList.add("active")

let cat=btn.dataset

grid.innerHTML=items
.filter(p=>cat==="all"||p.cat===cat)
.map(p=>`
<div class="project">
<h3>${p.title}</h3>
<p>${p.type}</p>
</div>`).join("")
}
})
}

/* loader */
window.onload=()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none"
},900)
}