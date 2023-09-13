let toggleClass = () => {
    let element = document.getElementById("page1");
    let containsSlide1 = element.classList.contains("slide1");
    if (containsSlide1) {
      document.getElementById("page1").className = "slide2";
      document.getElementById("page2").className = "slide1";
    } else {
      document.getElementById("page1").className = "slide1";
      document.getElementById("page2").className = "slide2";
    }
  };