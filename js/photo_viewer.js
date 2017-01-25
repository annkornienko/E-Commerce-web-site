(function () {
  var request;
  var current;
  var cache = {};
  var frame = document.querySelector('.item-img-full');
  var fullImage = document.querySelector('.viewer_full');
  var thumbs = document.querySelectorAll(".list_thumb li");

  for (var i = 0; i < thumbs.length; i++) {
    console.log(thumbs[i]);
    thumbs[i].addEventListener("click", crossFade);
  }

  function crossFade(e) {
    if (current) {
      current.classList.remove("active");
    }

      frame.src = e.target.parentNode.dataset.src;
      fullImage.classList.add("fadeIn");
      this.classList.add("active");
      current = this;

      setTimeout(function () {
        fullImage.classList.remove("fadeIn");
      },1000)

  };

  function fadeOut() {
    if (frame.classList.contains("active")){
    }
  }
})();
