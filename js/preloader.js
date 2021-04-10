$(document).ready(function () {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});

// $(window).on("load",function(){
//     $(".loader-wrapper").fadeOut("slow");
//   });

// var preloader = document.getElementById("loading");

// function pagePreload()
// {
//    preloader.style.display = 'none';
// };

// pagePreload();
