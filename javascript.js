window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var logoimg= document.getElementById('logoimg')
    var scrollTop = window.pageYOffset;
    if (scrollTop >0) {
      navbar.style.opacity = 0.9;
      logoimg.style.height='50px';
    } else {
      navbar.style.opacity = 1;
      logoimg.style.height='60px';
    }
  });