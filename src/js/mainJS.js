window.addEventListener("load", () => {
  // // height of main page section
  // const pageHeaderHeight = document.getElementById("pageHeader");
  // const mainPageHeight = document.getElementById("mainPage");
  // mainPageHeight.style.height =
  //   window.innerHeight - (pageHeaderHeight.clientHeight + 60) + "px";



  // // changing parameters after display's resezie
  // window.addEventListener("resize", () => {
  //   mainPageHeight.style.height =
  //     window.innerHeight - pageHeaderHeight.clientHeight + "px";

  //   console.log(window.screen.width - 40);
  // });


  // menu button open/close
  const btn = document.getElementById("menuBtn");
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    document.getElementById("navigationMenu").classList.toggle("open");
  });
  
});