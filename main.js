
document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".morph-header");
  let lastScroll = 0;

  window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;

    if (currentScroll > 80 && currentScroll > lastScroll) {
      // user is scrolling down
      header.classList.add("scrolled");
    } else if (currentScroll < 50) {
      // near top, reset
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const blobPath = document.getElementById("blobPath");
  
  const shapes = [
    "M437,336Q377,432,270,432Q163,432,122,336Q81,240,142,148Q203,56,305,90Q407,124,452,182Q497,240,437,336Z",
    "M446,330Q383,420,270,420Q157,420,108,330Q59,240,121,145Q183,50,297,73Q411,96,463,168Q515,240,446,330Z",
    "M453,323Q374,406,270,420Q166,434,109,337Q52,240,115,155Q178,70,285,80Q392,90,455,165Q518,240,453,323Z"
  ];
  
  let scrollFactor = 0;
  
  window.addEventListener("scroll", () => {
    scrollFactor = window.scrollY / window.innerHeight;
  });
  
  let shapeIndex = 0;
  
  function animateBlob() {
    shapeIndex = (shapeIndex + 1) % shapes.length;
    
    gsap.to(blobPath, {
      duration: 4 - Math.min(scrollFactor, 3), // faster morph on scroll
      attr: { d: shapes[shapeIndex] },
      ease: "power1.inOut",
      onComplete: animateBlob
    });
  }
  
  animateBlob();
});

