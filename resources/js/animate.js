$(function() {
  setTimeout(function() {
    $('.barSlide').click(function() {

      $(".inventorySide").animate({
        left: '180%'
      }, 500);

      $(".barSide").animate({
        left: '0'
      }, 500);
    });
    $('.inventorySlide').click(function() {

      $(".barSide").animate({
        left: '-180%'
      }, 500);

      $(".inventorySide").animate({
        left: '0'
      }, 500);
    });
  }, 1000);
});
