$(document).ready(function(){
    $(".parameters img").on("click", function() {
      if($(".parameters1").css("display") == "none") {
        $(".parameters1").css("display", "block");
        $(".parameters img").css("transform","rotate(0deg)");
      }
      else{
        $(".parameters1").css("display", "none");
        $(".parameters img").css("transform","rotate(-90deg)");
      }
    });
});
$(document).ready(function(){
    $("header i").on("click", function() {
      if($("header input").css("visibility") == "hidden") {
        $("header input").css("visibility", "visible");
      }
      else{
        $("header input").css("visibility", "hidden");
      }
    });


    $(".small-img-1").on("click", function() {
      $(".big-img").css("background","url('../img/Rectangle3@2x.png')" )
      $(".big-img").css("background-size","cover" )
      $(".big-img").css("background-repeat","no-repeat" )

    });
    $(".small-img-2").on("click", function() {
      $(".big-img").css("background","url('../img/Rectangle4@2x.png')")
      $(".big-img").css("background-size","cover" )
      $(".big-img").css("background-repeat","no-repeat" )

    });
    $(".small-img-3").on("click", function() {
      $(".big-img").css("background","url('../img/Rectangle5@2x.png')")
      $(".big-img").css("background-size","cover" )
      $(".big-img").css("background-repeat","no-repeat" )
    });
});






function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    console.log(document.getElementById('number').value);
}