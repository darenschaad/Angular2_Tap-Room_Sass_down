$(function() {
  setTimeout(function() {
    $('.barSlide').click(function() {

      $(".inventorySide").animate({
        left: '180%'
      }, 500);

      $(".barSide").animate({
        left: '15'
      }, 500);
    });
    $('.inventorySlide').click(function() {

      $(".barSide").animate({
        left: '-165%'
      }, 500);

      $(".inventorySide").animate({
        left: '0'
      }, 500);
    });
  }, 1000);
});
