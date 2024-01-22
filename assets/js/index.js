let lastScroll = 0

$(window).scroll(function(){
  // btn-scroll-top
  let curr = $(this).scrollTop()
  if(curr>lastScroll){
    $('.btn-scroll-top').addClass('on')
  }else{
    $('.btn-scroll-top').removeClass('on')
  }
  lastScroll = curr  
})

// btn-scroll-top
$('.btn-scroll-top').click(function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})

// sc-intro
ScrollTrigger.create({
  // markers:true,
  trigger:".sc-intro",
  start:"20% 0%",
  end:"100% 0%",
  onEnter:function(){
    $('.header').addClass('on')
    $('.btn-scroll-top').addClass('hide')
  },
  onLeaveBack:function(){
    $('.header').removeClass('on')
    $('.btn-scroll-top').removeClass('hide')
  }
})

// .header .lang-title
$('.lang-title').click(function(){
  $('.lang-list').toggleClass('on')
})

// sc-intro
const introText = $('.sc-intro .desc')
const motionIntro = gsap.timeline()
motionIntro
.to(introText[0],{opacity:1,},'a')
.to('.sc-intro .group-text',{background:'rgba(0,0,0,.6)'},'a')
.to(introText[0],{opacity:0,})

.to(introText[1],{opacity:1,})
.to(introText[1],{opacity:0,})

.to(introText[2],{opacity:1,})
.to(introText[2],{opacity:0,})

.to(introText[3],{opacity:1,})

.to('.sc-intro .ico-arrow',{opacity:0,})

ScrollTrigger.create({
  animation:motionIntro,
  // markers:true,
  trigger:'.sc-intro',
  pin:true,
  start:'0 0',
  end:'+=7000',
  scrub:0,
  toggleClass:{
    targets:'.btn-scroll-top',
    className:'hide'
  }
})

// sc-showcase
// 글자 생겼다 사라졌다
// img 높이조절
const showtitleArr = $('.sc-showcase .group-title p');
const motionShowcase = gsap.timeline()
motionShowcase
.to('.sc-showcase .group-title',{background:'rgba(0,0,0,.6)'},'a')
.to(showtitleArr,{opacity:1},'a')

.to('.sc-showcase .group-title',{background:'rgba(0,0,0,0)'},'b')
.to(showtitleArr,{opacity:0},'b')
.to(showtitleArr[0],{xPercent:100},'b')
.to(showtitleArr[2],{xPercent:-100},'b')

.to('.sc-showcase .img-1',{height:0})
.to('.sc-showcase .img-2',{height:0})

.to('.sc-showcase .group-desc',{background:'rgba(0,0,0,.6)'},'c')
.to('.sc-showcase .group-desc p',{opacity:1},'c')

ScrollTrigger.create({
  // markers:true,
  animation:motionShowcase,
  trigger:'.sc-showcase',
  start:'0 0',
  end:'+=4000',
  pin:true,
  scrub:0
})

// sc-challenge.challenge1
ScrollTrigger.create({
  // markers:true,
  trigger:'.sc-challenge.challenge1',
  start:'0 10%',
  end:'0 0',
  onEnter:function(){
    $('.header').addClass('dark')
  },
  onLeaveBack:function(){
    $('.header').removeClass('dark')
  }
})


// sc-identity
const identityWidth = $('.sc-identity .width-area').width()
gsap.to('.sc-identity .group-hr',{
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-identity',
    start:'0 0',
    end:'+=3000',
    pin:true,
    scrub:0,
    invalidateOnRefresh: true
  },
  x:function(){
    return -identityWidth;
  }
})

// sc-banner
const motionBanner = gsap.timeline()
motionBanner
.from('.sc-banner .col-left',{xPercent:-20},'a')
.from('.sc-banner .color-box.green',{xPercent:20},'a')
.to('.sc-banner .bg-area',{opacity:1})
.to('.sc-banner .headline',{opacity:1})

ScrollTrigger.create({
  // markers:true,
  animation:motionBanner,
  trigger:'.sc-banner',
  start:'0 90%',
  end:'0 40%',
  scrub:0
})

// sc-safety
const hrTitle = $('.sc-safety .headline').outerWidth();
safetyTl1 = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:".sc-safety .group-hr",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
  }
})
safetyTl1.to('.sc-safety .group-hr .sticky',{x:-hrTitle-40})
for (i=1;i<4;i++) {
  safetyTl1.to(`.sc-safety .group-hr .card-item:nth-child(${i+1})`,{xPercent:-100*i,x:-40*i},'a')
}
safetyTl1.to('.sc-safety .card-item.colorful .ico-unlock',{opacity:0},'a')
safetyTl1.to('.sc-safety .card-item.colorful .ico-lock',{opacity:1})

safetyTl1.to('.sc-safety .card-item.colorful .ico-lock',{opacity:0})
safetyTl1.to('.sc-safety .card-item.colorful .text.hr',{opacity:1})

safetyTl2 = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:".sc-safety .group-vt",
    start:"0% 0%",
    end:"100% 100%",
    onEnter:function(){
      $('.sc-safety .group-hr').addClass('hide')
      $('.sc-safety .group-vt').removeClass('hide')
    },
    onLeaveBack:function(){
      $('.sc-safety .group-hr').removeClass('hide')
      $('.sc-safety .group-vt').addClass('hide')
    }
  }
})

safetyTl2 = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:".sc-safety .group-bottom",
    start:"0% 0%",
    end:"100% 100%",
    onEnter:function(){
      $('.sc-safety .group-bottom .sticky-box').removeClass('hide')
      $('.sc-safety .group-vt').addClass('hide')
    },
    onLeaveBack:function(){
      $('.sc-safety .group-bottom .sticky-box').addClass('hide')
      $('.sc-safety .group-vt').removeClass('hide')
    }
  }
})

safetyTl3 = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-safety .group-bottom',
    start:'0% 0%',
    end:'100% 100%',
    scrub:0
  }
})
for (i=1;i<4;i++) {
  safetyTl3.to(`.sc-safety .group-bottom .card-item.blur:nth-child(${i})`,{xPercent:-100*i,x:-40*i},'a')
}
safetyTl3.to('.sc-safety .group-bottom .last-text',{opacity:1})

ScrollTrigger.create({
  // markers:true,
  trigger:'.sc-safety .group-bottom',
  start:'50% 0',
  end:'0 0',
  onEnter:function(){
    $('.sc-safety .group-bottom .card-item').addClass('bg-on')
  },
  onLeaveBack:function(){
    $('.sc-safety .group-bottom .card-item').removeClass('bg-on')
  }
})

// sc-identity
ScrollTrigger.create({
  // markers:true,
  trigger:'[data-theme="dark"]',
  start:'0 50%',
  end:'100% 50%',
  toggleClass:{
    targets:"body",
    className:"dark"
  }
})

// sc-finance
const motionFinance = gsap.timeline()
motionFinance
.to('.sc-finance .group-hr',{
  xPercent:-100,
  x:function(){
    return window.innerWidth;
  }
},'a')

ScrollTrigger.create({
  animation:motionFinance,
  // markers:true,
  trigger:'.sc-finance',
  start:'0 0',
  end:'+=2000',
  pin:true,
  scrub:0,
  invalidateOnRefresh:true,
  onUpdate:function(self){
    num=self.progress.toFixed(2)*100;
    if (num >= 50) {
      $('.hide1').addClass('hide')
      $('.hide2').removeClass('hide')
    }else{
      $('.hide1').removeClass('hide')
      $('.hide2').addClass('hide')      
    }

  },
  onEnter:function(){
    $('.sc-finance .blur-box').addClass('blur')
    $('.sc-finance .group-arrow').addClass('on')
  },
  onEnterBack:function(){
    $('.sc-finance .group-arrow').addClass('on')
  },
  onLeave:function(){
    $('.sc-finance .group-arrow').removeClass('on')
  },
  onLeaveBack:function(){
    $('.sc-finance .group-arrow').removeClass('on')
  }
})

// sc-prove - prove1,prove2
$('.sc-prove').each(function(idx,item){
  const proveTl = gsap.timeline()
  proveTl
  .to($(this).find('.line:first-child span'),{xPercent:-172},'a')
  .to($(this).find('.line:last-child span'),{xPercent:132},'a')
  .to($(this).find('.box-top-right'),{xPercent:-100},'a')
  .to($(this).find('.box-bottom-left'),{xPercent:100},'a')
  
  ScrollTrigger.create({
    // markers:true,
    animation:proveTl,
    trigger:item,
    start:'0 60%',
    end:'0 20%',
    scrub:0
  })
})

// sc-creator
const motionCreator = gsap.timeline()
motionCreator
.to('.sc-creator .group-title',{opacity:1})
.to('.sc-creator .group-title',{opacity:0})

ScrollTrigger.create({
  // markers:true,
  animation:motionCreator,
  trigger:'.sc-creator',
  start:'0 0',
  end:'+=2000',
  pin:true,
  scrub:0
})

// sc-wise
const motionWise = gsap.timeline()
motionWise
.to(".sc-wise .group-hr",{xPercent:-104,x:'100vw'})

ScrollTrigger.create({
  // markers:true,
  animation:motionWise,
  trigger:".sc-wise",
  start:"0 0",
  end:"+=2000",
  pin:true,
  scrub:0,
  onEnter:function(){
      $('.sc-wise .blur-box').addClass('blur')
  }
})

// sc-banner2, btn-scroll-top
ScrollTrigger.create({
  // markers:true,
  trigger:'.footer',
  start:'-100px 100%',
  end:'0 0',
  onEnter:function(){
    $('.btn-scroll-top').addClass('fixed')
    $('.sc-banner2').addClass('on')
  },
  onLeaveBack:function(){
    $('.btn-scroll-top').removeClass('fixed')
    $('.sc-banner2').removeClass('on')
  }
})
