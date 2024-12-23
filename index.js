
function nav(){
    let navslider = document.querySelector(".navslider")
    let midns = document.querySelectorAll(".mid-ns div")
    let nav = document.querySelector(".mid")
    
    let t1 = gsap.timeline();
    nav.addEventListener("mouseenter",()=>{
        
        t1.to(".navslider" ,{
            height:150,
            duration:0.35,     
        })
        
        t1.to(".mid-ns" , {
            display : "flex",
        })
    
        t1.from(".mid-ns div" , {
            y:10,
            opacity:0,
            stagger:0.1,
            duration:0.65
        })
    })
    
    nav.addEventListener("mouseleave",()=>{
        
        t1.to(".mid-ns div" , {
            y:-10 ,
            opacity:0,
            stagger:0.1,
            duration:0.3,
        })
    
        t1.to(".mid-ns" , {
            display : "none",
            duration:0.1
        }) 
    
        t1.set(".mid-ns div" , {
            opacity:1
        })

        t1.to(".navslider" ,{
            height:0,
            duration:0.3
        })
    },)
}

function page1anime(){
    let tl = gsap.timeline();
    tl.from("nav",{
        y:-70,
        opacity:0,
        duration :0.6
    })

    tl.from(".h11",{
        x:-80,
        opacity:0,
        duration : 0.7
    },"a")

    tl.from(".h12",{
        x:80,
        opacity:0,
        duration : 0.7
    },"a")

    tl.from(".page1 .content",{
        opacity:0,
    })

    tl.from(".page1 .slider",{
        y:20,
        opacity:0
    })

}

function page2anime(){

    gsap.from(".page2 .left",{
        x:-60,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger : ".page2",
            scroll : "body",
            start : "top 65%"

        }
    })

    gsap.from(".page2 .right",{
        x:60,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger : ".page2",
            scroll : "body",
            start : "top 65%"
        }
    })

    let box = document.querySelectorAll(".box")
 
    box.forEach(function(dets){
        
        dets.addEventListener("mousemove", (b)=>{
            gsap.to(dets.childNodes[3] , {
                opacity:1,
                x: b.x - dets.getBoundingClientRect().x -60,
                y: b.y - dets.getBoundingClientRect().y - 110,
                
        })
        })

        dets.addEventListener("mouseleave", ()=>{
            gsap.to(dets.childNodes[3] , {
                opacity:0,
                x:0,
                y:0
                
        })
        })
    })
}

function page3anime(){
    let vid = document.querySelector(".page3 video")
    let  center = document.querySelector(".v-center")
    center.addEventListener("click" , ()=>{
        center.style.opacity=0;
        vid.play()
        gsap.to( vid , {
            opacity:1,
            scale:1,
            duration:0.5
        })
    })

    vid.addEventListener("click" , ()=>{
        vid.style.opacity=0;
        center.style.opacity=1;
        vid.load()
    })
}

function page4anime(){
    gsap.from(".page4 .top .left ",{
        y: 50,
        opacity:0,
        scrollTrigger :{
            trigger:".page4 .top",
            scroll: "body",
            start: "top 70%"
        }
    })
}

function page6anime(){
    gsap.from(".page6 .ai1 .left div .h2 h2",{
        y:10,
        opacity:0,
        stagger:0.2,
        duration : 0.5,
        scrollTrigger :{
            trigger:".page6 .ai1",
            scroll: "body",
            start: "top 75%"
        }
    })

    gsap.from(".page6 .fintech .left div .h2 h2",{
        y:10,
        opacity:0,
        stagger:0.2,
        duration : 0.5,
        scrollTrigger :{
            trigger:".page6 .fintech",
            scroll: "body",
            start: "top 75%"
        }
    })

    gsap.from(".page6 .web3 .left div .h2 h2",{
        y:10,
        opacity:0,
        stagger:0.1,
        duration : 0.5,
        scrollTrigger :{
            trigger:".page6 .web3",
            scroll: "body",
            start: "top 75%"
        }
    })

    let crt = document.querySelectorAll(".crt")
    let v = document.querySelectorAll("page6 ")
    crt.forEach((dets)=> { 
       dets.addEventListener("mouseenter", ()=>{ 
           dets.childNodes[5].childNodes[1].childNodes[3].play();
           gsap.to( dets.childNodes[3] , {
               scale : 1,
           })
        })
        dets.addEventListener("mousemove", (val)=>{
           gsap.to( dets.childNodes[3] , {
               x: val.x - dets.getBoundingClientRect().x -75,
               y: val.y - dets.getBoundingClientRect().y -60,
           })
        })
        dets.addEventListener("mouseleave", ()=>{
            dets.childNodes[5].childNodes[1].childNodes[3].load();
           gsap.to( dets.childNodes[3], {
               scale:0,
               x: 0,
               y: 0,
           })
        })
    })
}

function page7anime(){

    let opens = document.querySelectorAll(".open")

    opens.forEach( (val) => {
        val.addEventListener("mouseenter",()=>{
            let tl = gsap.timeline()
            tl.set( val.childNodes[1] ,{
                top : "0%",
                height: "0%",
            })
            tl.to( val , {
                borderTop:" 1px solid white"
            }, "a")
            tl.to( val.childNodes[1] ,{
                top: "0%",
                height : "100%" ,
                duration: 0.3,
                ease: "power3.out"
            }, "a" )
            tl.to( val.childNodes[3].childNodes[1] ,{
                x:10
            }, "a")
            tl.to( val.childNodes[3].childNodes[5] ,{
                x:-10
            }, "a")
        })

        val.addEventListener("mouseleave",()=>{
            let tl = gsap.timeline()
            tl.to( val.childNodes[1] ,{
                top : "100%",
                duration: 0.3,
                ease: "power3.out",
                height:"0%"
            } ,"a")
            tl.to( val , {
                borderTop:" 1px solid #333"
            }, "a")
            tl.to( val.childNodes[3].childNodes[1] ,{
                x:0
            }, "a")
            tl.to( val.childNodes[3].childNodes[5] ,{
                x:0
            }, "a") 
                
        })

    });

    let summary = document.querySelectorAll("summary")
    summary.forEach((val)=>{
        val.addEventListener("click",()=>{
            const det = val.parentElement;
            if(det.hasAttribute("open")){
                let tl = gsap.timeline()
                tl.to( val.childNodes[3].childNodes[1],{
                    rotate : 0,

                },"a")
                tl.to( val , {
                    borderTop:" 1px solid #333"
                }, "a")
            }else{
                let tl = gsap.timeline()
                tl.to( val.childNodes[3].childNodes[1],{
                    rotate : -180,

                },"a")
                tl.to( val , {
                    borderTop:" 1px solid white"
                }, "a")

            }
            
        })


    })
}

function page8anime(){
    gsap.from(".btn-0 ",{
        x:0,
        scrollTrigger:{
            trigger:".scroll",
            scroller: "body",
            start : "top 60%",
            end: "top 18%",
            scrub: 2
        }       
    })

}

function page9anime(){
    gsap.from( ".share a" , {
        y:20,
        opacity:0,
        stagger: 0.2,
        scrollTrigger:{
            trigger:".page9",
            scroll: "body",
            start:"top 63%",
        }
    } )
}

page9anime()
nav()
page1anime()
page2anime()
page3anime()
page4anime()
page6anime()
page7anime()
page8anime()




