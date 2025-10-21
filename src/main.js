import 'owl.carousel/dist/assets/owl.carousel.css';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '@/assets/scss/style.scss';

import $ from 'jquery';
import 'jquery-countdown';
import 'jquery-validation/dist/jquery.validate.js';
import 'jquery-match-height';
import 'owl.carousel';
import { Fancybox } from "@fancyapps/ui";

// **********************************************************************//
// ! Owl Slider
// **********************************************************************//
const owlCarousel = function () {
  const $owlCarousel = $('[data-carousel]'),
    defaults = {
      items: 3,
      loop: false,
      center: false,
      margin: 20,
      autoWidth: false,
      rtl: false,
      responsive: {},
      responsiveBaseElement: window,
      lazyLoad: false,
      autoHeight: false,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      nav: false,
      navText: '',
      navElement: 'button',
      navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
      dots: true
    };

  // Check exit owl element
  if ($owlCarousel.length > 0) {
    $owlCarousel.each(function () {
      // config mode
      const configs = $(this).data('carousel'),
        opts = $.extend({}, defaults, configs),
        $scope = $('.' + $(this).data('scope')),
        $prev = $scope.find('.' + $(this).data('prev')),
        $next = $scope.find('.' + $(this).data('next'));

      // Run owl carousel with option merged
      const owl = $(this).owlCarousel(opts);

      // Trigger next
      $next.on('click', function () {
        owl.trigger('next.owl.carousel');
      });

      // Trigger prev
      $prev.on('click', function () {
        owl.trigger('prev.owl.carousel');
      });
    });
  }
};

// **********************************************************************//
// ! Scroll to item
// **********************************************************************//
const scrollTo = function () {
  const $scrollItem = $('[data-action="scroll"]');

  $scrollItem.on('click', function (e) {
    e.preventDefault();
    const $target = $($(this).attr('href')) || $('#' + $(this).data('target')),
      offset = parseInt($(this).data('offset')) || 0;
    $('html, body').animate({
      scrollTop: $target.offset().top - offset
    }, 800);
  });
};

// **********************************************************************//
// ! Check hash
// **********************************************************************//
const scrollToHash = function () {
  const $target = $(window.location.hash),
    offset = $target.data('offset') || 0;

  if ($target.length > 0) {
    $('html, body').animate({
      scrollTop: $target.offset().top - offset
    }, 800);
  }
};

// **********************************************************************//
// ! Countdown timer
// **********************************************************************//
const countDownTimer = function () {
  const $countDown = $('[data-countdown]'),
    countDownHtml = '<div class="countdown"><div class="countdown__time">%-D</div><div class="countdown__unit">Ngày</div></div>' +
      '<div class="countdown"><div class="countdown__time">%H</div><div class="countdown__unit">Giờ</div></div>' +
      '<div class="countdown"><div class="countdown__time">%M</div><div class="countdown__unit">Phút</div></div>' +
      '<div class="countdown"><div class="countdown__time">%S</div><div class="countdown__unit">Giây</div></div>';

  if ($countDown.length > 0) {

    $countDown.each(function () {
      const datetime = $(this).data('countdown');
      datetime.setDate(datetime.getDate() + 10);

      $(this)
        .countdown(datetime)
        .on('update.countdown', function (event) {
          $(this).html(event.strftime(countDownHtml));
        });
    });
  }
};

// **********************************************************************//
// ! Show modal payment
// **********************************************************************//
const modalShow = function () {
  const $modal = $('[data-modal="show"]');

  $modal.each(function () {
    const id = $(this).data('id');
    Fancybox.bind('[data-modal="'+ $(this).data('modal') +'"]', {
      id
    });
  });
};

// **********************************************************************//
// ! Validate form
// **********************************************************************//
const validateForm = function () {
  const $registerForm = $('#register-form'),
    $rechargeForm = $('#recharge-form'),
    $deliveryForm = $('#delivery-form');

  // Modal register
  if ($registerForm.length > 0) {
    $registerForm.validate({
      submitHandler: function (form) {
        // Gọi ajax ở đây nếu form được submit

        // Kết quả submit ok sẽ show ra modal payment
        Fancybox.show([{
          src: '#modal--payment',
          type: "inline"
        }], {
          on: {
            init: () => {
              const registerModal = Fancybox.getInstance('register-form');

              if (registerModal) {
                registerModal.close();
              }
            }
          }
        });
      },
      ignore: [],
      errorClass: 'modal__control--error',
      rules: {
        reg_phone: {
          required: true,
          number: true,
          minlength: 8,
          maxlength: 11
        },
        reg_name: {
          required: true,
          minlength: 6,
          maxlength: 40
        },
        reg_pass: {
          required: true,
          minlength: 6,
          maxlength: 32
        },
        reg_pass_confirm: {
          required: true,
          minlength: 6,
          maxlength: 32,
          equalTo: '#reg_pass'
        },
        'g-recaptcha-response': {
          required: true
        }
      },
      messages: {
        reg_phone: {
          required: 'Vui lòng nhập số điện thoại',
          number: 'Vui lòng chỉ nhập chữ số',
          minlength: 'Số điện thoại tối thiểu 8 chữ số',
          maxlength: 'Số điện thoại tối đa 11 chữ số'
        },
        reg_name: {
          required: 'Vui lòng nhập họ và tên',
          minlength: 'Họ và tên thiểu 6 ký tự',
          maxlength: 'Họ và tên tối đa 40 ký tự'
        },
        reg_pass: {
          required: 'Vui lòng nhập mật khẩu',
          minlength: 'Mật khẩu tối thiểu 6 chứ số',
          maxlength: 'Mật khẩu tối đa 32 chứ số'
        },
        reg_pass_confirm: {
          required: 'Vui lòng nhập mật khẩu',
          minlength: 'Mật khẩu tối thiểu 6 chứ số',
          maxlength: 'Mật khẩu tối đa 32 chứ số',
          equalTo: 'Xác nhận mật khẩu không đúng'
        },
        'g-recaptcha-response': {
          required: 'Vui lòng xác nhận mã bảo vệ'
        }
      }
    });
  }

  if ($rechargeForm.length > 0) {
    $rechargeForm.validate({
      submitHandler: function (form) {
        // Gọi ajax ở đây nếu form được submit

        // Kết quả submit ok sẽ show ra modal payment
        // Tùy thuộc vào số thẻ nạp để quyết định người dùng có phải nạp tiền tiếp hay không
        // Nếu phải nạp tiền thêm

        // Fancybox.show([{
        //   src: '#modal--recharge',
        //   type: "inline"
        // }]);

        // Nếu đã nạp đủ
        Fancybox.show([{
          src: '#modal--refill',
          type: "inline"
        }], {
          id: 'refill-form',
          on: {
            init: () => {
              const paymentModal = Fancybox.getInstance('modal--payment-form');

              if (paymentModal) {
                paymentModal.close();
              }
            }
          }
        });
      },
      ignore: [],
      errorClass: 'modal__control--error',
      rules: {
        card_series: {
          required: true,
          number: true
        },
        card_pin: {
          required: true,
          number: true
        }
      },
      messages: {
        card_series: {
          required: 'Vui lòng nhập series của thẻ điện thoại',
          number: 'Mã thẻ không hợp lệ, vui lòng nhập lại'
        },
        card_pin: {
          required: 'Vui lòng nhập pin của thẻ điện thoại',
          number: 'Mã thẻ không hợp lệ, vui lòng nhập lại'
        }
      }
    });
  }

  if ($deliveryForm.length > 0) {
    $deliveryForm.validate({
      submitHandler: function (form) {
        // Gọi ajax ở đây nếu form được submit

        // Kết quả submit ok sẽ show ra modal payment
        // Tùy thuộc vào số thẻ nạp để quyết định người dùng có phải nạp tiền tiếp hay không
        // Nếu phải nạp tiền thêm

        // Fancybox.show([{
        //   src: '#modal--recharge',
        //   type: "inline"
        // }]);

        // Nếu đã nạp đủ
        Fancybox.show([{
          src: '#modal-success',
          type: "inline"
        }], {
          on: {
            init: () => {
              const deliveryModal = Fancybox.getInstance('modal--payment-form');

              if (deliveryModal) {
                deliveryModal.close();
              }
            }
          }
        });
      },
      ignore: [],
      errorClass: 'modal__control--error',
      rules: {
        delivery_name: {
          required: true,
          minlength: 6,
          maxlength: 40
        },
        delivery_phone: {
          required: true,
          number: true,
          minlength: 8,
          maxlength: 11
        },
        delivery_address: {
          required: true,
          minlength: 6,
          maxlength: 200
        },
        delivery_note: {
          minlength: 6,
          maxlength: 200
        }
      },
      messages: {
        delivery_name: {
          required: 'Vui lòng nhập họ và tên',
          minlength: 'Họ và tên thiểu 6 ký tự',
          maxlength: 'Họ và tên tối đa 40 ký tự'
        },
        delivery_phone: {
          required: 'Vui lòng nhập số điện thoại',
          number: 'Vui lòng chỉ nhập chữ số',
          minlength: 'Số điện thoại tối thiểu 8 chữ số',
          maxlength: 'Số điện thoại tối đa 11 chữ số'
        },
        delivery_address: {
          required: 'Vui lòng nhập địa chỉ giao hàng',
          minlength: 'Địa chỉ giao hàng tối thiểu 6 ký tự',
          maxlength: 'Địa chỉ giao hàng tối đa 200 ký tự'
        },
        delivery_note: {
          minlength: 'Địa chỉ giao hàng tối thiểu 6 ký tự',
          maxlength: 'Địa chỉ giao hàng tối đa 200 ký tự'
        }
      }
    });
  }
};

// **********************************************************************//
// ! Fancybox Modal
// **********************************************************************//
const modalRegister = function () {
  const $registerBtn = $('#register__btn', '.register');

  $registerBtn.on('click', function (e) {
    e.preventDefault();

    const $this = $(this),
      target = $this.attr('href'),
      yourName = $.trim($('#your_name', '.register').val()),
      yourPhone = $.trim($('#your_phone', '.register').val());

    // Set value phone and name for modal
    $(target)
      .find('#reg_name').val(yourName).end()
      .find('#reg_phone').val(yourPhone);

    // Show modal
    Fancybox.show([
      {
        src: target,
        type: "inline"
      }
    ],
      {
        id: 'register-form'
      }
    );
  });
};


// **********************************************************************//
// ! Window load
// **********************************************************************//
$(window).on('load', function () {
  scrollToHash();
});


// **********************************************************************//
// ! window dome ready
// **********************************************************************//
$(function () {
  validateForm();
  owlCarousel();
  scrollTo();
  modalRegister();
  modalShow();
  countDownTimer();
});