window.addEventListener('DOMContentLoaded', function() {
    var swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true,
        },
        spaceBetween: 10,
        autoplay: {
          delay: 10000,
        },
      });
      var swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination-v',
          clickable: true,
        },
      });

      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

      $(document).ready(function() {
        //прикрепляем клик по заголовкам acc-head
          $('#accordeon .acc-head').on('click', f_acc);
      });
       
      function f_acc(){
      //скрываем все кроме того, что должны открыть
        $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
      // открываем или скрываем блок под заголовком, по которому кликнули
          $(this).next().slideToggle(1000);
      }

      document.querySelector('#burger').addEventListener('click', function() {
          document.querySelector('#menu').classList.toggle('is-active')
      })

      tippy('#myButton', {
        content: "Прототип — быстрая, черновая реализация будущей системы.",
      });  

      new JustValidate('.footer-form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 10
            },
            comment: {
                required: true
            },
            checkbox_: {
              required: true
            },
            mail: {
                required: true,
                email: true,
                maxLength: 30
            },
        },
    });

    (function() {
 
      "use strict";
     
      var toggles = document.querySelectorAll(".c-hamburger");
     
      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };
     
      function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
      }
     
    })();
})