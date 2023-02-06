$('.active-element').on({
  'touchstart' : function () {
    $(this).addClass('fake-active');
  },
  'touchend' : function () {
    $(this).removeClass('fake-active');
  }
})