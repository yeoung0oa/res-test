let funcObj = {
  f_0:function(){
    const tl = gsap.timeline();
    tl.to('#section0 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to('#section1 h2.tit',{
      opacity: 1,
      y:-30,
    })
    tl.to('.s1_list li',{
      opacity: 1,
      stagger: 0.3,
      y:-30,
    })
    tl.to('.sub_txt_wrap ',{
      opacity:1,
      y:-30,
    })

    //숫자 카운팅-자바스크립트내에서 제이쿼리 셋팅함
    //.count 클래스의 요소가 data-count 속성에 설정된 숫자까지 3초 동안 점점 숫자가 증가하는 카운트 애니메이션
    //대상.animate({속성:값, 속성:값, }, 시간, 이징, 끝나면 할일);
    $(function(){
      $('.count').each(function(){  //각각의 요소들을 반복적으로 순회(자바스크립트의 forEach와 동일)
        let crt = $(this); //각각의 요소
        let countTo = crt.attr('data-count');
        //console.log(countTo);
        $({
          countNum:crt.text() //초기숫자를 객체로 생성(현재 요소의 텍스트 내용)->이 객체의 countNum 속성이 애니메이션 대상
        }).animate({
          countNum:countTo  //countNum 속성을 countTo 값까지 애니메이션
        },{
          duration:3000,
          easing:'linear',
          step:function(){ //애니메이션 중 매 스텝(step)마다 실행
            crt.text(Math.floor(this.countNum))
          },
          complete:function(){  //애니메이션 끝난 후 실행
            crt.text(this.countNum)  //마지막 숫자를 정확히 최종값으로 설정
          }
        });
      });
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to('#section2 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('.s2_card',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to('#section3 .rel  > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_4:function(){
    const tl = gsap.timeline();
    tl.to('#section4 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('#section4 .img_wrap > .deco',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_5:function(){
    const tl = gsap.timeline();
    tl.to('#section5 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('#section5 .img_wrap > .deco',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_6:function(){
    const tl = gsap.timeline();
    tl.to('#section6 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('#section6 .img_wrap > .deco',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_7:function(){
    const tl = gsap.timeline();
    tl.to('#section7 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('.s7_list li',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
};

let section = document.querySelectorAll('section');
funcObj['f_0'](); //섹션0은 스크롤과 상관없이 첫번째는 먼저 실행이 되게 함

window.addEventListener('scroll',function(){
  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight; //브라우저의 높이값(border와 padding을 포함한 높이값)

  //console.log(scroll,outHeight);

  //인덱스 i는 forEach((element, index) => {})의 두 번째 인자로 받아옴
  section.forEach((sec,i) => {
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        //console.log(i);
    }
  }); 
});
/* 
  스크롤이 섹션의 offsetTop에 정확히 맞을 때만 감지하면 너무 늦음!
  그래서 outHeight만큼 미리 앞당겨서 인식 → 뷰포트에 다 들어오기 전에 이미 동작
  현재 스크롤 위치가 "섹션이 뷰포트에 등장하기 시작할 시점"과 "섹션이 뷰포트를 벗어나기 직전 시점" 사이에 있는지, 그때마다 섹션별 함수 f_i()를 실행 
*/


//JQuery____________start
$(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  //(4)Mobile Menu
  mobBtn.on("click", function (e) {
    e.preventDefault();  
    BODY.toggleClass("mOpen");
  });

  //(1)scroll-header
  $(window).on("scroll", function(){
    let scroll = $(this).scrollTop();
    
    if(scroll > 60){
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On')
    };
  });

  //(2)Top Button scroll
  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

  //(3)Footer
  const ftrBtn = $('.family_wrap>a');
  const ftrWrap = $('.family_wrap');

  ftrBtn.on('click', function(e){
    e.preventDefault();
    ftrWrap.toggleClass('active');
  });

});
//JQuery____________end