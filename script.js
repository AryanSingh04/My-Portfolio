const ham = document.getElementById("ham");
const menu = document.getElementById("menu");
const list = menu.getElementsByTagName("li");
let b = document.getElementsByClassName("b");
let loader = document.getElementsByClassName("loader");
var text = [".Hello",".नमस्ते",".Bonjour", ".Ciao", ".Olà", ".やあ", ".Hallå", ".Guten tag", ".Hello"];
let bl= document.getElementsByClassName("bl");
let skill_wrap= document.getElementsByClassName("wrap");
[...skill_wrap].forEach((e)=>{
  e.addEventListener("mouseenter",(e)=>{
    gsap.to("#cur",{
      backgroundColor:"black"
    })
  })
  e.addEventListener("mouseleave",(e)=>{
    gsap.to("#cur",{
      
      backgroundColor:"white"
    })
  })
});
[...bl].forEach((e)=>{
  e.addEventListener("mouseenter",(e)=>{
    gsap.to("#cur",{
      backgroundColor:"white"
    })
  })
  e.addEventListener("mouseleave",(e)=>{
    gsap.to("#cur",{
      backgroundColor:"black"
    })
  })
})
gsap.to(".ran",{
  y:-100
});
gsap.to(".name>*",{
  y:800,
})
gsap.to(".marquee",{
  scale:0 
})
async function me() {
setTimeout(async()=>{
// Iterate over each element in text array
for (let i = 0; i < text.length; i++) {
  await new Promise((resolve) => {
    setTimeout(() => {
      loader[0].firstChild.nextSibling.innerHTML = text[i];
      resolve();
    }, (100-i*15) * i);
  });
}

// Animate loader scale to 0
loader[0].style.transition = 'all 0.5s ease';
loader[0].style.top = '-120%';
let timeLine = gsap.timeline()
setTimeout(()=>{
  timeLine.to(".ran",{
      y:0
  });
  timeLine.to(".name>*",{
      y:0,
      stagger:0.15,
  })
  timeLine.to(".marquee",{
      scale:1
  })
},500)
},500)
  
}
me();
const marquee = document.getElementsByClassName("marquee");
[...b].forEach((el)=>{
  [el].forEach((e)=>{
    const k =e.innerHTML;
    e.innerHTML=k+""+k
  })

})
function  addMarquee(){
    [...marquee].forEach((e)=>{
        childs = e.innerHTML;
        e.innerHTML=childs+" "+childs;
    })
}
addMarquee()
function toggleMenu(){
    ham.classList.toggle('active');
    menu.classList.toggle('ctive');
   if(menu.classList.contains( 'ctive' )){
    document.body.style.height="100vh"
    document.body.style.overflow='hidden';
   }
   else{
    document.body.style.height=""
    document.body.style.overflow="";
   }
}
ham.addEventListener( "click", toggleMenu);
[...list].forEach((e)=>{
    e.onclick = toggleMenu;
});


function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();
function cursor(x, y) {
  gsap.to("#cur", {
    x: x,
    y: y,
  });
}

gsap

document.addEventListener("mousemove", (e) => {
  cursor(e.pageX, e.pageY);
  
})


let magnets=document.querySelectorAll(".mag")
console.log(magnets)
magnets.forEach((e)=>{
  e.addEventListener("mousemove", (event) => {
    const rect = e.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(e, {
      x: x * 0.6, // Adjust the strength of the "magnetic" pull
      y: y * 0.6,
      ease: "power2.out"
    });
  });
  e.addEventListener("mouseleave",(event)=>{
   gsap.to(e,{
    x:0,
    y:0,
    ease:"bounce(0.5)"
   })
  })
})
