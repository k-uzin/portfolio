$(function () {
    Fancybox.bind("[data-fancybox]", { 
        // Your options go here 
    });
    
    //카운트 업 함수
    $(function () {
        $('.num').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    // 사이트 접속 시, 스크롤을 0.2초 동안 맨 위로 올림.
    gsap.to(window, 0.2, { scrollTo: 0 });

    //스크롤시 배경색 변경 (스크롤 값 백분율 계산 -> 반응형 대응)
    $(document).ready(function () {
    
        $(document).scroll(function () {
            var document_height = $(document).height(); //문서 전체의 높이
            var scroll_pos = $(this).scrollTop();
            var scroll_percent = (scroll_pos / (document_height - $(window).height())) * 100;
    
            console.log(scroll_percent);
    
            if (scroll_percent >= 30 && scroll_percent < 65 || scroll_percent >= 90) {
                $("body").css('background-color', '#000000');
            } else if (scroll_percent >= 65 && scroll_percent < 90) {
                $("body").css('background-color', '#ffffff');
            } else {
                $("body").css('background-color', '#ffffff');
            }
        });
    });

    //프로젝트 메뉴 클릭 시 아이템 필터
    $(".project_menu button").click(function () {
        const filter = $(this).data("filter");
        $(this).addClass('on').siblings().removeClass('on');

        $(".project_item").each(function () {
            if (filter === "all" || filter === $(this).data("type")) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });

    $("header nav ul li a").click(function () {
        $("header nav ul li a").removeClass('on');
        $(this).addClass('on');
    });

    //마우스 따라다니는 효과
    $('body').mousemove(function(e){
        xVal = e.pageX;
        yVal = e.pageY;
        gsap.to('.cursor',{
          x:xVal,
          y:yVal,
          duration:.3,
        })
      })

      $('header .nav ul li a').mouseover(function(){
        gsap.to('.cursor',{backgroundColor:'#0f0', duration:.3})
        gsap.to('.cursor',{scale:.8})
      })
      $('header .nav ul li a').mouseleave(function(){
        gsap.to('.cursor',{backgroundColor:'#fff',})
        gsap.to('.cursor',{scale:1})
      })
      
      $('.project_item .image_area').mouseover(function(){
        gsap.to('.cursor',{scale:2})
        gsap.to('.cursor span', { visibility: "visible", opacity: 1})
      })
      $('.project_item .image_area').mouseleave(function(){
        gsap.to('.cursor',{scale:1})
        gsap.to('.cursor span', { visibility: "hidden", opacity: 0,})
      })

    //메뉴 클릭 시 해당 섹션으로 부드럽게 이동. 
    $('.header nav ul li a').click(function (e) {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    })
});