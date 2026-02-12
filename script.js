const translations = {
en:{
nav_about:"About",
nav_services:"Services",
nav_why:"Why Us",
nav_contact:"Contact",
hero_title:"Institutional Media Solutions",
hero_desc:"Professional media production and documentation services for organizations and major enterprises.",
hero_btn:"Request Collaboration",
about_title:"About The Company",
about_desc:"We specialize in delivering institutional media solutions with high standards of professionalism and commitment.",
services_main:"Core Services",
support_title:"Supporting Services",
s1_title:"Media Production",
s1_desc:"High-quality production for projects and events.",
s2_title:"Project Documentation",
s2_desc:"Professional documentation aligned with institutional standards.",
s3_title:"Content Management",
s3_desc:"Structured communication content for organizations.",
s4_title:"Communication Strategy",
s4_desc:"Strategic media planning supporting long-term goals.",
s5_title:"Digital Marketing",
s5_desc:"Professional campaigns that enhance institutional reach.",
s6_title:"Sales Management",
s6_desc:"Structured sales systems for companies and enterprises.",
why_title:"Why Choose Us",
w1_title:"Institutional Commitment",
w1_desc:"We operate with discipline and structured execution.",
w2_title:"Execution Excellence",
w2_desc:"Precision and quality across all project phases.",
w3_title:"Understanding Organizations",
w3_desc:"We align with long-term institutional visions.",
contact_title:"Contact Us",
send_btn:"Send Request",
name_placeholder:"Full Name",
email_placeholder:"Email Address",
msg_placeholder:"Project Details"
},
ar:{
nav_about:"عن الشركة",
nav_services:"الخدمات",
nav_why:"لماذا نحن",
nav_contact:"تواصل",
hero_title:"حلول إعلامية مؤسسية",
hero_desc:"خدمات إنتاج وتوثيق إعلامي احترافية موجهة للمنظمات والشركات الكبرى.",
hero_btn:"طلب تعاون",
about_title:"عن الشركة",
about_desc:"نقدم حلول إعلامية مؤسسية وفق أعلى معايير الاحتراف والالتزام.",
services_main:"الخدمات الأساسية",
support_title:"الخدمات المساندة",
s1_title:"الإنتاج الإعلامي",
s1_desc:"إنتاج احترافي للمشاريع والفعاليات.",
s2_title:"توثيق المشاريع",
s2_desc:"توثيق دقيق وفق المعايير المؤسسية.",
s3_title:"إدارة المحتوى",
s3_desc:"محتوى يعكس صورة احترافية للجهات.",
s4_title:"استراتيجية التواصل",
s4_desc:"تخطيط إعلامي يدعم الأهداف طويلة المدى.",
s5_title:"التسويق الإلكتروني",
s5_desc:"حملات احترافية تعزز الوصول.",
s6_title:"إدارة المبيعات",
s6_desc:"أنظمة دعم مبيعات للشركات.",
why_title:"لماذا نحن",
w1_title:"التزام مؤسسي",
w1_desc:"عمل منظم وفق أعلى المعايير.",
w2_title:"جودة تنفيذ",
w2_desc:"دقة في جميع مراحل المشروع.",
w3_title:"فهم المنظمات",
w3_desc:"نواكب الرؤى المؤسسية طويلة المدى.",
contact_title:"تواصل معنا",
send_btn:"إرسال الطلب",
name_placeholder:"الاسم الكامل",
email_placeholder:"البريد الإلكتروني",
msg_placeholder:"تفاصيل المشروع"
}
};

let currentLang="en";

document.getElementById("langToggle").addEventListener("click",()=>{
currentLang=currentLang==="en"?"ar":"en";
document.documentElement.lang=currentLang;
document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";

document.querySelectorAll("[data-key]").forEach(el=>{
el.textContent=translations[currentLang][el.dataset.key];
});

document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
el.placeholder=translations[currentLang][el.dataset.keyPlaceholder];
});

document.getElementById("langToggle").textContent=currentLang==="en"?"AR":"EN";
});

function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}