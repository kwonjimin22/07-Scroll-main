$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $sideDot = $('.indicator > li');
  const $section = $('main > section');
  // console.log($window, $sideDot, $section);

  // 섹션별 y축 위치값 구하기
  const sec1Pos = $section.eq(0).offset().top;
  const sec2Pos = $section.eq(1).offset().top;
  const sec3Pos = $section.eq(2).offset().top;
  const sec4Pos = $section.eq(3).offset().top;
  console.log(sec1Pos, sec2Pos, sec3Pos, sec4Pos);

  let secIdx = 0;
  updateDot();

  // 스크롤 값 비교하기
  $window.on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop >= sec1Pos && scrollTop < sec2Pos) {
      secIdx = 0;
    } else if (scrollTop >= sec2Pos && scrollTop < sec3Pos) {
      secIdx = 1;
    } else if (scrollTop >= sec3Pos && scrollTop < sec4Pos) {
      secIdx = 2;
    } else if (scrollTop >= sec4Pos) {
      secIdx = 3;
    }

    //  $sideDot에 적용하기
    updateDot();
  });

  function updateDot() {
    $sideDot.removeClass('on').eq(secIdx).addClass('on');
  }

  // 인디케이터를 클릭하면 이동
  $sideDot.on('click', function (e) {
    e.preventDefault();
    secIdx = $(this).index();
    moveSection();
  });

  function moveSection() {
    $('html, body').animate(
      {
        scrollTop: $section.eq(secIdx).offset().top,
      },
      400
    );
  }

  const $btnTop = $('.btn-top');
  // TOP버튼을 클릭했을 때
  $btnTop.on('click', function (e) {
    e.preventDefault();
    moveSection();
  });

  // 기본 동작 테스트
  // 요소의 y위치값 구하기 : offset().top
  // let test = $section.eq(2).offset().top;

  // $('html, body').animate(
  //   {
  //     scrollTop: test,
  //   },
  //   400
  // );
});
