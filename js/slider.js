/*
  - if press right section your image you move to the next image
  - if the image last in sliders, it move back to the first one
  - if its first image and you press to the left section your image, nothing happen, try press right section
  - if press left section your image you move to the previous one
  - if press center navigate to Catalog
*/
(function(){
  var sliderField = document.querySelector('.slider');
  var area = document.querySelector(".slider_content figure");
  var menu = document.querySelector(".slider_store_img");
  var position = 0;

  sliderField.addEventListener("click",initializeSlideShow);

      function initializeSlideShow(e) {
        var pressPos = e.clientX;
        var w = window.innerWidth;
        var divideWindow = w/3;
        var position = getPosition(w);
        if (pressPos > w-divideWindow) {
          transitionSlideLeft(position)
        }
        else if (pressPos < divideWindow){
          transitionSlideRight(position)
        }
        else{
          redirect(e);
      }
    };

      function getPosition(w) {
        var style = getComputedStyle(area);
        var currLeft = parseInt(style.left);
        var num = Math.floor(currLeft/w)*100;
        return num;
      }

      function transitionSlideLeft(position) {
        //is it last slide?
        if (position == -300) {
          area.style.left = 0;
        }
        else {
          area.style.left = position - 100 + "%";
        }
      }
      function transitionSlideRight(position) {
          //is it first slide?
          if (position > -100) {
            return false;
          }
        area.style.left = position + 100 + "%";
      }

      function redirect(e) {
        var link = e.target.parentNode;
        if (link.tagName === "A") {
            link.href = "catalog.html"
          }
      }
})();
