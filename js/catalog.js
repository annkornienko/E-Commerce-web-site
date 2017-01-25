(function() {
  var listProduct = document.querySelectorAll(".list_items a");
  var filterCategoryList = document.querySelector(".category_list");
  var btnOpenTabletFilter = document.querySelector(".openTabletFilter");
  var btnCloseFilter = document.querySelector(".closeFilter");
  var selectFilterDesktop = document.querySelectorAll(".list_box_select");
  var selectFilterMobile = document.querySelector(".openMobileFilter");
  var filterCategoryName = document.querySelectorAll(".category_list li span");
  var main = document.querySelector("main");
  var catalog = document.querySelector(".catalog");
  var overlay = document.querySelector(".overlay")
  var filterTablet = document.querySelector(".filter_nested_tablet");
  var itemArr = [];
  var stopResize = false;


  var filterBtn = document.querySelectorAll(".f-btn");
  for (var i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", openFilter);
  };

  for (var i = 0; i < listProduct.length; i++) {
    listProduct[i].addEventListener("click", redirect);
  }

  btnCloseFilter.addEventListener("click", closeFilterTablet);
  var nested = document.querySelectorAll('.nested_list_box');


  for (var i = 0; i < nested.length; i++) {
  nested[i].style.display = "none";
  }
  //check current size window
    if (window.innerWidth >= 1024) {
      for (var i = 0; i < selectFilterDesktop.length; i++) {
        selectFilterDesktop[i].addEventListener("click", changeStateFilterDesktop);
      }
    }
    else {
      window.addEventListener("resize",checkSize);
    }

    function checkSize() {
      if (window.innerWidth >= 1024) {
        if (!stopResize) {
          stopResize = true;
          for (var i = 0; i < selectFilterDesktop.length; i++) {
            selectFilterDesktop[i].addEventListener("click", changeStateFilterDesktop);
          }
        }
      }
    };


  function redirect(e) {
    var linkProduct = e.target.parentNode;
    linkProduct.href = "item.html" + "#" + linkProduct.dataset.id;
  }


  function openFilter(e) {
    if (e.target.className == "f-btn openMobileFilter"){
      selectFilterMobile.style.visibility = "hidden";
    }
    filterTablet.classList.add("open");
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    btnOpenTabletFilter.style.visibility = "hidden";
    btnCloseFilter.style.display = "inline-block"
  }

  function closeFilterTablet() {
    filterTablet.classList.remove("open");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    btnOpenTabletFilter.style.visibility = "visible";
    selectFilterMobile.style.visibility = "visible";
    btnCloseFilter.style.display = "none";
  };

  function changeStateFilterDesktop(e) {
    var currEl = "";
    if (e.target.tagName === "SPAN" || e.target.tagName === "I") {
      currEl = e.target.parentNode.parentNode.parentNode;
      if (currEl.classList.contains("selected")) {
        closeFilterDesktop(currEl);
      }
      else {
        openFilterDesktop(currEl)
      }
    }
    else if (e.target.tagName === "IMG") {
      currEl = e.target.parentNode.parentNode.parentNode.parentNode;
      if (currEl.classList.contains("selected")) {
        closeFilterDesktop(currEl);
      }
      else {
        openFilterDesktop(currEl)
      }
    }
  };

  function openFilterDesktop(currEl) {
      var parentCurr = currEl.children;
      parentCurr[1].style.display = "inline";
      currEl.classList.add("selected");
  };

  function closeFilterDesktop(currEl){
    var parentCurr = currEl.children;
    parentCurr[1].style.display = "none";
    currEl.classList.remove("selected");
  }
})();
