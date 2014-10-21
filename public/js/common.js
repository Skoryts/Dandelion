/**
 * Created by Stanislav on 04.10.2014.
 */
var FormElements = {
  select: function(){
    var selects = $(".form-el select");

    for (var i = 0; i < selects.length; i++){
      var opts = selects[i].options;
      $(selects[i]).wrap("<div class='select-styled'>").css("display", "none");
      $("<span class='selectedEl'></span>")
          .appendTo($(selects[i]).parent(".select-styled"))
          .text(selects[i].options[selects[i].options.selectedIndex].value);
      var List = $("<ul class='hidden'></ul>").insertBefore(selects[i]);
      for (var p = 0; p < opts.length; p++){
        $("<li></li>").text($(opts[p]).val()).appendTo(List);
      }
    }
    $(".select-styled").on("click", function (e) {
      var el = e.target;

      $(this).find("ul").toggleClass("hidden", 200);

      if (el.tagName == "LI"){
        var ul = $(el).parent();
        $(ul).siblings("span").text($(el).text());

        var selectOpts = $(ul).siblings("select");
        var nextSelected = $(selectOpts).find("option")[$(el).index()];
        $(nextSelected).attr("selected", true);
      }
    })
  },

  checkbox: function () {
    var chk = $(".form-el input[type='checkbox']").parents("label");

    for (var i = 0; i < chk.length; i++){
      $(chk[i]).wrap("<div class='chk-styled'>").children().css("display", "none");
    }

    $(".chk-styled").on("click", function (e) {
      e.preventDefault();
      $(this).find("label").toggleClass("on");
      $(this).find("input").attr("checked", ($(this).find("input").attr("checked")) ? false : true);
    })
  }
};

$(document).ready(function(){
  FormElements.select();
  FormElements.checkbox();
});