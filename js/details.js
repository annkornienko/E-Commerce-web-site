(function () {

  var redirect = document.querySelector(".list_items a");
  var addToBasket = document.querySelector(".add_to_bag");
  var navBarTotalPrice = document.querySelector(".product_price_total");
  var countItems = document.querySelector(".num_items");
  var basketStorage = JSON.parse(localStorage.getItem("_basket"));
  var basketSummary = JSON.parse(localStorage.getItem("_basket::summary"));
  var products = {};
  var countProduct = 0;
  var total = {};

  addToBasket.addEventListener("click", addProductToBasket);

  function isEmptyObject(obj) {
    for(var key in obj){
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
      return true;
    };

  function addProductToBasket(e) {
    e.preventDefault();

    total.totalQuantity = 0;
    total.totalPrice = 0;
    var oldItem = JSON.parse(localStorage.getItem("_basket")) || [];
    var summary = localStorage.getItem("_basket::summary") || localStorage.setItem("_basket::summary", JSON.stringify(total));
    var productsInfo = splitInfoProduct(e);
    var addToBasket = isAddedToBasket(productsInfo);
    //add new product
    if (!addToBasket) {
      oldItem.push(productsInfo);
      localStorage.setItem("_basket", JSON.stringify(oldItem));
      updateNavbarCounter();
    }
    //update quantity product
    else {
      localStorage.setItem("_basket", JSON.stringify(addToBasket));
      updateNavbarCounter();
    }
  };

  function updateNavbarCounter() {
      var currCount = JSON.parse(localStorage.getItem("_basket::summary"));
      total.totalQuantity = currCount.totalQuantity;
      ++total.totalQuantity;
      localStorage.setItem("_basket::summary", JSON.stringify(total));
      countItems.innerText = "(" + total.totalQuantity + ")";
  };

  function getPath(){
    var hash = window.location.hash;
    var path = hash.replace('#', '');
    return path;
    // return path[0] ? path : [this.defaultPath];
  };


  function splitInfoProduct(e) {
    if (e.target.tagName === "A") {
      var currEl = e.target.parentNode.parentNode;
      var parentCurr = currEl.parentElement.children;
      var productInfo = parentCurr[1].children;
      productInfo = [].slice.apply(productInfo);
      var oldItem = basketStorage || [];
      var imgProduct = document.querySelector(".viewer_full img");
      products.imgSrc = imgProduct.getAttribute("src");
      products.id = getPath();
      products.quantity = 1;
      for (var i = 0; i < productInfo.length; i++) {
        switch (productInfo[i].className) {
          case "product_title":
            products.name = productInfo[i].innerText;
            break;
          case "product_description":
            products.description = productInfo[i].innerText;
            break;
          case "price":
            products.price = productInfo[i].innerText;
            updatePrice(products.price, products);
            break;
          case "product_size":
            var checkedSize = document.querySelectorAll(".product_size .size");
            products.size = checkRadio(checkedSize,"size selected", "UK 52");
            break;
          case "product_color":
            var checkedColor = document.querySelectorAll(".product_color li");
            products.color = checkRadio(checkedColor, "selected", "black");
            break;
          }
      }
    }
    return products;
  };

  function isAddedToBasket(product) {
    var products = JSON.parse(localStorage.getItem("_basket"));
    if (localStorage.getItem("_basket")) {
      ++countProduct;
      var isExistProducts = products.filter(function (item,i) {
        return item.id === product.id;
      });
      for (var i = 0; i < isExistProducts.length; i++) {
        if (isExistProducts[i].color == product.color && isExistProducts[i].size == product.size) {
          isExistProducts[i].quantity = ++isExistProducts[i].quantity;
          return products;
        }
      }
      return false;
    }
  };


  function checkRadio(item, nameClass, defaultValue) {
    item = [].slice.apply(item);
    var checkedVal = item.filter(function(item) {
      return item.className === nameClass;
    });
    return checkedVal.length>0 ? checkedVal[0].innerText : defaultValue;
  };

  function updatePrice(item) {
    var currCount = JSON.parse(localStorage.getItem("_basket::summary"));
    currCount = currCount.totalPrice;
    var count = calcPrice(item,currCount);
    navBarTotalPrice.innerText = "";
    navBarTotalPrice.innerText = "£" + count;
    total.totalPrice = count;
  };

  function calcPrice(item, totalPriceNavBar) {
    //take only number
    var number = item.match(/\d+.\d+/g);
    number = Number(number.join(""));
    totalPriceNavBar = Number(totalPriceNavBar);
    var count = number+totalPriceNavBar;
    return count;
  }
})();
