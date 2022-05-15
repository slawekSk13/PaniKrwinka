// Hero Image Zoom

function heroImageResize() {
  var scroll = $(window).scrollTop();
  if (window.innerWidth >= 1655) {
    $("header").css({
      backgroundSize: (125 + scroll / 20) + "%",
      top: -(scroll / 10) + "%",
    });
  } else {
    $("header").css({
      backgroundSize: "",
      top: "",
    });
  }
}

$(window).scroll(heroImageResize);
$(window).resize(heroImageResize);

// TEXT COLOR CHANGE ON SCROLL

// document.getElementById("plusy").style.color="#f2f2f2";

const sections = $(".double-rose");


function changeColor(section) {
    section.classList.remove("double-rose");
  }


const sectionOptions = {
  threshold: .1,
  rootMargin: "0px 0px -200px 0px"
};

const sectionsObserver = new IntersectionObserver((sections,
   sectionsObserver) => {
     sections.forEach(section => {
  if (!section.isIntersecting) {
    return;
  } else {
      changeColor(section.target);
      sectionsObserver.unobserve(section.target);
  }
});
}, sectionOptions);

Array.from(sections).forEach(section => {
  sectionsObserver.observe(section);
});
