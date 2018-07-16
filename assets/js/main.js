window.onload = function() {
  document.querySelectorAll('.button').forEach((element) => {
    element.onmousemove = (e) => {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)
     
    }
  });
  $(function(){
    $(".typed").typed({
      strings: [ "Rent Payment Just Got Rewarding!"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: false,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
    $(".header__content").typed({
      strings: [ "Get unbeatable interests on your rent by our automated savings plans"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 40,
      // time before typing starts
      startDelay: 4000,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: false,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
    setTimeout(() => ($('.header__footer').show(500)), 9500)
  });
  
};

