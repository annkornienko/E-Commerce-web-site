(function() {
  var toggleBtn = document.querySelector(".toggle_button");
  var navbar = document.querySelector(".navbar ");
  var navbarItem = document.querySelectorAll(".navbar_menu_item");
  navbarItem = [].slice.apply(navbarItem);
  var navBarTotalPrice = document.querySelector(".product_price_total");
  var countItems = document.querySelector(".num_items");
  var closeBtn = document.querySelector(".closeBtn");
  var openBtn = document.querySelector(".openBtn");
  var container = document.querySelector(".container");
  var firstColumn = document.querySelector(".first_column");
  var searchBtn = document.querySelector('.search_img img');
  var searchInput = document.querySelector('.search_input');

  window.addEventListener("resize", checkSizePage);
  if (window.innerWidth < 1024) {
    toggleBtn.addEventListener("click", changeStateMenu);
    searchBtn.addEventListener("mouseover", showSearch);
  };

  function checkSizePage() {
    if (window.innerWidth > 1024) {
      searchInput.style.display = "inline";
      searchInput.style.width = "150px";
      for (var i = 0; i < navbarItem.length; i++) {
        if(i <= 7) {
          navbarItem[i].style.display = "inline";
        }
      }
      toggleBtn.removeEventListener("click", changeStateMenu);
      searchBtn.removeEventListener("mouseover",showSearch);
      document.body.removeEventListener('click', hideSearch);
    }
    else {
      searchInput.style.display = "none";
      searchInput.style.width = '0px';
      toggleBtn.addEventListener("click", changeStateMenu);
      searchBtn.addEventListener("mouseover", showSearch);
    }
  };

  function changeStateMenu() {
    if (toggleBtn.className == "toggle_button open") {
        toggleBtn.className = "toggle_button";
        navbar.className = "navbar unvisible";
        container.style.padding = "0 16px";
        firstColumn.style.paddingLeft = "0";
    }
    else {
      toggleBtn.className = "toggle_button open";
      navbar.className = "navbar visible";
      container.style.padding = "0";
      firstColumn.style.paddingLeft = "16px";
    }
  }

  function showSearch() {
    if (window.innerWidth >= 780) {
      searchInput.style.display = "inline";
      searchInput.style.width = '300px';
      document.body.addEventListener('click', hideSearch);
      for (var i = 0; i < navbarItem.length; i++) {
        if(i <= 7) {
          navbarItem[i].style.display = "none";
        }
      }
      navbar.style.height = "45px"
      navbar.classList.add("expand");
    }
  };

  function hideSearch(e) {
    if (e.target.className == "search_input") {
      e.stopPropagation();
    }
    else {
      searchInput.style.display = "none";
      for (var i = 0; i < navbarItem.length; i++) {
        if(i <= 7) {
          navbarItem[i].style.display = "inline";
        }
      }
    }
  };

  function navBarTotal() {
    if (JSON.parse(localStorage.getItem("_basket"))) {
      if (JSON.parse(localStorage.getItem("_basket")).length > 0) {
        var itemsBasket = JSON.parse(localStorage.getItem("_basket"));
        // if (localStorage.getItem("_basket::summary")) {
          var itemsBasketSummary = JSON.parse(localStorage.getItem("_basket::summary"));
          countItems.innerText = "(" + itemsBasketSummary.totalQuantity + ")";
        // }
        // var lastIitemBasket = itemsBasket[itemsBasket.length - 1];
        navBarTotalPrice.innerText = "£" + itemsBasketSummary.totalPrice;
        }
      }
    };

  navBarTotal();
})();
