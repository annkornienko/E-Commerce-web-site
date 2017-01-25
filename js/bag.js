(function () {
  var addToBag = document.querySelector(".add_to_bag");
  var totalPr = document.querySelector(".product_price_total");
  var countItems = document.querySelector(".num_items");
  var emptyBagBtn = document.querySelector(".empty_bag span");
  var bagOperate = document.querySelector(".product-cart_operate");
  var buyBtn = document.querySelector(".buy");

  var basketStorage = JSON.parse(localStorage.getItem("_basket"));
  var basketTitle = document.querySelector(".bag_title_heading");
  var basketTitleSub = document.querySelector(".bag_title_subheading");
  var bannerBag = document.querySelector(".banner_bag");
  var listProductCart = document.querySelector(".list_product-cart");
  var totalCost = document.querySelector(".cost span");
  var navBarTotalPrice = document.querySelector(".product_price_total");
  var total = {};

  emptyBagBtn.addEventListener("click", emptyBag);
  buyBtn.addEventListener("click", buy);

  renderBasket();

  function renderBasket() {
    if (localStorage.getItem("_basket")) {
      if (basketStorage.length > 0) {
        addProducts();
        var removeProductBtn = document.querySelectorAll(".remove_from_cart");
        removeProductBtn = [].slice.apply(removeProductBtn);
        totalCost.innerText = totalPr.innerText;
        for (var i = 0; i < removeProductBtn.length; i++) {
          removeProductBtn[i].addEventListener("click", removeProduct);
        }
      }
      else {
        emptyBag();
      }
    }
    else {
      emptyBag();
    }
  };

  function updateNavbarCounter() {
    var currCount = getTotalValueFromStorage();
    var quantity = --currCount.totalQuantity
    countItems.innerText =  "(" + (quantity) + ")";
    total.totalQuantity = quantity
    localStorage.setItem("_basket::summary", JSON.stringify(total));
  };

  function updateNavbarPrice(price) {
    var storagePrice = getTotalValueFromStorage();
    price = price.match(/\d+.\d+/g);
    price = price.join("");
    var navBarPrice = navBarTotalPrice.innerText;
    navBarPrice = navBarPrice.match(/\d+.\d+/g);
    navBarPrice = navBarPrice.join("");
    navBarPrice = Number(navBarPrice) - Number(price);
    if (isBasketEmpty(navBarPrice)) {
      return false;
    }
    navBarTotalPrice.innerText = "";
    navBarTotalPrice.innerText = "£" + navBarPrice;
    totalCost.innerText = "£" + navBarPrice;
    total.totalPrice = navBarPrice;
    // localStorage.setItem("_basket::summary", JSON.stringify(storagePrice));

  };

  function isBasketEmpty(price) {
    if (price === 0) {
      emptyBag();
      return true;
    }
    return false;
  }

  function getProductFromStorage() {
    var itemsBasket = JSON.parse(localStorage.getItem("_basket"));
    return itemsBasket;
  };

  function getTotalValueFromStorage() {
    var countBasket = JSON.parse(localStorage.getItem("_basket::summary"));
    return countBasket;
  };



  function addProducts() {
    var itemsBasket = getProductFromStorage();
    for (var i = 0; i < itemsBasket.length; i++) {
      var prod = document.createElement("LI");
      prod.classList.add("product-cart");
      prod.dataset.id = itemsBasket[i].id;
      prod.innerHTML = constructProductTemplate(itemsBasket[i]);
      listProductCart.appendChild(prod);
    }
  };

  function constructProductTemplate(product) {
      var html = [
          '<article class="product-cart_wrapper">',
            '<div class="first-col">',
              '<div class="product_img">',
                '<a href="#">',
                  '<img src="'+product.imgSrc+'" alt="Only Skinny Jeans">',
                '</a>',
              '</div>',
              '<div class="price">',
                '<span>'+product.price+'</span>',
              '</div>',
            '</div>',
            '<div class="second-col">',
              '<div class="product-cart_info">',
                '<div class="product-cart_title">',
                  '<h4>'+product.name+'</h4>',
                '</div>',
                '<div class="product-cart_attribute">',
                  '<dl class="product-cart_color">',
                    '<dt>Color:</dt>',
                    '<dd>'+product.color +'</dd>',
                  '</dl>',
                  '<dl class="product-cart_size">',
                    '<dt>Size:</dt>',
                    '<dd>'+product.size+'</dd>',
                  '</dl>',
                  '<dl class="product-cart_quanity">',
                    '<dt>Quantity:</dt>',
                    '<dd>'+product.quantity+'</dd>',
                  '</dl>',
                '</div>',
              '</div>',
              '<span class="remove_from_cart" id="red_color">Remove item</span>',
            '</div>',
          '</article>',
        '</li>'
      ].join("");
      return html;
  };

  function empty() {
    var shoppingCart = document.querySelector(".shopping_cart_product");
    var shippingInfo = document.querySelector(".shipping_info");
    shoppingCart.style.display = "none";
    shippingInfo.style.display = "none";
    bagOperate.style.display = "none";
    totalPr.innerText = "";
    countItems.innerText = "";
    bannerBag.style.display = "block";
    if (localStorage.getItem("_basket") && localStorage.getItem("_basket::summary")) {
      localStorage.removeItem("_basket");
      localStorage.removeItem("_basket::summary");
    };
  };

  function emptyBag() {
    empty();
    basketTitle.innerText = 'Your shopping bag is empty :(';
  };

  function removeProduct(e) {
    //REMOVE FROM HTML
    var parentProduct = e.target.parentNode.parentNode.parentNode;
    var k = e.target.parentElement.childNodes[0];
    var currInfo = k.childNodes[1];
    var currQuantity = currInfo.childNodes[2].childNodes[1];
    var currSize = currInfo.childNodes[1].childNodes[1];
    var currColor = currInfo.childNodes[0].childNodes[1];
    //REMOVE FROM localStorage
    var allProduct = getProductFromStorage();
    for (var i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id == parentProduct.dataset.id) {
        if (allProduct[i].color == currColor.innerText && allProduct[i].size ==  currSize.innerText){
          if (allProduct[i].quantity > 1) {
            updateNavbarPrice(allProduct[i].price);
            currQuantity.innerText = --(allProduct[i].quantity);
          }
        else {
          updateNavbarPrice(allProduct[i].price);
          allProduct.splice(i,1);
          parentProduct.parentNode.removeChild(parentProduct);
        }
      }
      }
      else {
        updateNavbarPrice(allProduct[i].price);
        allProduct.splice(i,1);
      }
    };
    localStorage.setItem("_basket", JSON.stringify(allProduct));
    updateNavbarCounter();
  };

  function buy(e) {
      empty();
      basketTitle.innerText = 'ORDER SENT!';
      basketTitleSub.innerText = 'Thank you for purchase!';
  };
})();
