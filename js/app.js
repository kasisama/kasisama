const getRealPath = (pathname, desc = false) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }
  let names = pathname.split("/");
  if (desc === false) {
    for (let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  } else {
    for (let i = 0; i < names.length; ++i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  }
  return "/";
};
let links = document.querySelectorAll(".nexmoe-list-item");
let rootRealPath = getRealPath(window.location.pathname, true);
for (let link of links) {
  let linkPath = link.getAttribute("href");
  if (linkPath && getRealPath(linkPath, true) === rootRealPath) {
    link.className = "active nexmoe-list-item mdui-list-item mdui-ripple";
  }
}

$("table")
  .has("img")
  .addClass("nexmoe-albums");
console.log("执行app.js")
function search() {
  window.open($("#search_form").attr("action_e") + " " + $("#search_value").val());
  return false;
}

// 平滑跳转同时修复锚点链接被转义
$(document).ready(function () {
  $("a.toc-link").click(function (ev) {
    ev.preventDefault();
    $("html, body").animate({
      scrollTop: $(decodeURI($(this).attr("href"))).offset().top - 25
    }, {
      duration: 500,
      easing: "swing"
    });
  });
  $(".catalog").mouseenter(function(){
    $(".nexmoe-toc").css('opacity','1');
    $(".nexmoe-toc").css('z-index','0');
    $(".toc").css('display','block')
  });
  $('.nexmoe-toc').mouseleave(function(){
    $('.nexmoe-toc').css('opacity','0');
    $(".nexmoe-toc").css('z-index','-1');
    // $(".toc").css('display','none');
  });
  $(".toc").mouseleave(function(){
    var timer=setTimeout(function(){
      $(".toc").css('display','none');
      clearTimeout(timer);
    },50);
    clearTimeout(timer);
  });
});

