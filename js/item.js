(function() {
  var data = [
  {
    "id": "0",
    "name": "Monki Festval Knitted",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers.  ",
    "pictures": [
      "img/products/photo1_2.jpeg",
      "img/products/photo1_2s.jpeg",
      "img/products/photo1_3s.jpeg",
      "img/products/photo1_4s.jpeg",
    ],
    "src": [
      "img/products/photo1_2.jpeg",
      "img/products/photo1_2.jpeg",
      "img/products/photo1_3.jpeg",
      "img/products/photo1_4.jpeg",
    ],
    "description": "Only Skinny Jeans",
    "price": "65.50",
    "target": "men"
  },
  {
    "id": "1",
    "name": "Neck Knitted Jumper",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers.",
    "pictures": [
      "img/products/photo2.png",
      "img/products/photo2_2s.jpeg",
      "img/products/photo2_3s.jpeg",
      "img/products/photo2.png"
    ],
    "src": [
      "img/products/photo2.png",
      "img/products/photo2_2.jpeg",
      "img/products/photo2_3.jpeg",
      "img/products/photo2.png"
    ],
    "price": "76.25",
    "ref": "12056/4528",
    "color": "green",
  },
  {
    "id": "2",
    "name": "Turtle Neck Jumper in Rib",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers.  ",
    "pictures": [
      "img/products/photo3_1.jpeg",
      "img/products/photo3_2s.jpeg",
      "img/products/photo3_3s.jpeg",
      "img/products/photo3_4s.jpeg"
    ],
    "src": [
      "img/products/photo3_1.jpeg",
      "img/products/photo3_2.jpeg",
      "img/products/photo3_3.jpeg",
      "img/products/photo3_4.jpeg"
    ],
    "price": "130.25",
    "ref": "12056/4528",
    "color": "green",
  },
  {
    "id": "3",
    "name": "With Parchwork Crochet",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers. ",
    "pictures": [
      "img/products/photo4_1.jpeg",
      "img/products/photo4_2s.jpeg",
      "img/products/photo4_3s.jpeg",
      "img/products/photo4_4s.jpeg",
    ],
    "src": [
      "img/products/photo4_1.jpeg",
      "img/products/photo4_2.jpeg",
      "img/products/photo4_3.jpeg",
      "img/products/photo4_4.jpeg",
    ],
    "price": "159",
    "ref": "12056/4528",
    "color": "white",
  },
  {
    "id": "4",
    "name": "Levi`s Jeans for women",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers.  ",
    "pictures": [
      "img/products/photo5_1.jpeg",
      "img/products/photo5_2s.jpeg",
      "img/products/photo5_3s.jpeg",
      "img/products/photo5_4s.jpeg",
    ],
    "src": [
      "img/products/photo5_1.jpeg",
      "img/products/photo5_2.jpeg",
      "img/products/photo5_3.jpeg",
      "img/products/photo5_4.jpeg",
    ],
    "price": "120",
    "ref": "12056/4528",
    "color": "blue",
  },
  {
    "id": "5",
    "name": "Boyfriend T-Shirt with Boohemiant Print",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers.",
    "pictures": [
      "img/products/photo6_1.jpeg",
      "img/products/photo6_2s.jpeg",
      "img/products/photo6_3s.jpeg",
      "img/products/photo6_4s.jpeg",
    ],
    "src": [
      "img/products/photo6_1.jpeg",
      "img/products/photo6_2.jpeg",
      "img/products/photo6_3.jpeg",
      "img/products/photo6_4.jpeg",
    ],
    "price": "90.00",
    "ref": "12056/4528",
    "color": "green",
  },
  {
    "id": "6",
    "name": "Colour Block",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers.  ",
    "pictures": [
      "img/products/photo7_1.jpeg",
      "img/products/photo7_2s.jpeg",
      "img/products/photo7_3s.jpeg",
      "img/products/photo7_4s.jpeg",
    ],
    "src": [
      "img/products/photo7_1.jpeg",
      "img/products/photo7_2.jpeg",
      "img/products/photo7_3.jpeg",
      "img/products/photo7_4.jpeg",
    ],
    "price": "550.50",
    "ref": "12056/4528",
    "color": "grey",
  },
  {
    "id": "7",
    "name": "Adolescent Clothing Boyfriend T-Shirt With Twerk Friends Print",
    "description":"A British label that was brought to fruition in the 70s, Bellfield is an upmarket ready-to-wear brand known for heritage casualwear inspired by historical explorers. Combining practicality with high-end aesthetics, this directional lifestyle brand offers beautifully crafted clothing and accessories for men and women that are comfortable, durable and timeless in design. From chunky knit sweaters to slouchy cardigans, Bellfield knitwear is great for cozying down in style 'pair these printed statement pullovers with your favorite jeans and you are good to go. ",
    "pictures": [
      "img/products/photo8_1.jpeg",
      "img/products/photo8_2s.jpeg",
      "img/products/photo8_3s.jpeg",
      "img/products/photo8_4s.jpeg",
    ],
    "pictures": [
      "img/products/photo8_1.jpeg",
      "img/products/photo8_2.jpeg",
      "img/products/photo8_3.jpeg",
      "img/products/photo8_4.jpeg",
    ],
    "price": "£24.75",
    "ref": "12056/4528",
    "color": "blue",
  }
];

  var fullImage = document.querySelector(".viewer_full img");
  var title = document.querySelector(".product_title h1");
  var price = document.querySelector(".price");
  var description = document.querySelector(".product_description")
  // var listThumbImg = document.querySelectorAll(".list_thumb li img")
  // listThumbImg = [].slice.apply(listThumbImg);
  var listThumbImg = document.querySelectorAll(".list_thumb li img")
  listThumbImg = [].slice.apply(listThumbImg);
  var listThumb = document.querySelectorAll(".list_thumb li")
  listThumb = [].slice.apply(listThumb);

  var param = document.querySelectorAll("span");
  //delegation

  for (var i = 0; i < param.length; i++) {
    param[i].addEventListener("click", select);
  }

  var getPath = function(){
    var hash = window.location.hash;
    var path = hash.replace('#', '');
    return path;
    // return path[0] ? path : [this.defaultPath];
  }


  var productId = getPath();
  if (productId) {
    // productId = +productId;
    var item = data.map(function(val) {
      if (val.id === productId) {
        setPreview(val);
        setDetails(val)
        var title = val.name;
      }
    })
  }

  function setPreview(product) {
    var pictures = product.pictures[0];
    fullImage.src = "";
    fullImage.src = product.pictures[0];
    var fullPicture = pictures[0];
    var content = [];
    var contentImg = [];
      listThumb.map(function(item,ind) {
          item.dataset.src  = product.src[ind+1];
          // item.src = product.pictures[ind+1];
      });
      listThumbImg.map(function(item,ind) {
          item.src  = "";
          item.src = product.pictures[ind+1];
      });
    };

  function setDetails(product) {
    title.innerText = "";
    title.innerText = product.name;

    price.innerText = "";
    price.innerText = "£" + product.price;

    description.innerText = "";
    description.innerText = product.description;
  }



  function select(e) {
    if (e.target.tagName === "SPAN") {
      var currEl = e.target.parentNode;
      var parentCurr = currEl.parentElement.children;
      var sectionVal = [];
      for (var i = 0; i < parentCurr.length; i++) {
        if (parentCurr[i].nodeType != 1) continue;
        sectionVal.push(parentCurr[i])
      }
      for (var i = 0; i < sectionVal.length; i++) {
        if (sectionVal[i].classList.contains("selected")) {
          sectionVal[i].firstElementChild.style.border = "1px solid transparent";
          sectionVal[i].classList.remove("selected")
        }
      }
      currEl.classList.add("selected");
      e.target.style.border = "1px solid #e5e5e5";
    }
  };

  function removeSelect(currEl) {
    currEl.classList.remove("selected");
  }

})();
