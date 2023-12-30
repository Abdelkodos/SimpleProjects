function toggleSidebar() {
    const sideBar = document.getElementById("side_bar")
    if ( sideBar.classList.contains("hidden"))
    // sideBar.classList -= " hidden"
      sideBar.classList.remove("hidden")
    else
    // sideBar.classList += " hidden"
      sideBar.classList.add("hidden")
  }
  const electronicsProducts = [
    {
      id: 1,
      title: "Smartphone XYZ",
      price: 599.99,
      image: "images/smartphone_xyz.png",
    },
    {
      id: 2,
      title: "Laptop ABC",
      price: 899.99,
      image: "images/laptop_abc.png",
    },
    {
      id: 3,
      title: "Tablet DEF",
      price: 349.99,

      image: "images/tablet_def.png",
      
    },
    {
      id: 4,
      title: "Smart TV",
      price: 799.99,
      image: "images/smart_tv.png",

    },
    {
      id: 5,
      title: "Gaming Console",
      price: 449.99,
      image: "images/gaming_console.png",
    },
    {
      id: 6,
      title: "Wireless Earbuds",
      price: 149.99,
      image: "images/wireless_earbuds.png",
    },
    {
      id: 7,
      title: "Digital Camera",
      price: 699.99,
      image: "images/digital_camera.png",
      
    },
    {
      id: 8,
      title: "Fitness Tracker",
      price: 79.99,
      image: "images/fitness_tracker.png",
     
    },
    {
      id: 9,
      title: "Home Security Camera",
      price: 129.99,
      image: "images/security_camera.png",
    
    },
    {
      id: 10,
      title: "Portable Speaker",
      price: 59.99,
      image: "images/portable_speaker.png",

    },
    {
      id: 11,
      title: "Smartwatch",
      price: 199.99,
      image: "images/smartwatch.png",
    
    },
    {
      id: 12,
      title: "Bluetooth Keyboard",
      price: 49.99,
      image: "images/bluetooth_keyboard.png",

    },
    {
      id: 13,
      title: "External Hard Drive",
      price: 129.99,
      image: "images/external_hard_drive.png",

    },
    {
      id: 14,
      title: "Wireless Router",
      price: 79.99,
      image: "images/wireless_router.png",

    },
    {
      id: 15,
      title: "Virtual Reality Headset",
      price: 299.99,
      image: "images/vr_headset.png",

    },
    {
      id: 16,
      title: "Printers",
      price: 199.99,
      image: "images/printer.png",

    },
    {
      id: 17,
      title: "Smart Thermostat",
      price: 129.99,
      image: "images/smart_thermostat.png",

    },
    {
      id: 18,
      title: "Wireless Mouse",
      price: 29.99,
      image: "images/wireless_mouse.png",

    },
    {
      id: 19,
      title: "Car Dash Cam",
      price: 89.99,
      image: "images/dash_cam.png",
    },
    {
      id: 20,
      title: "E-book Reader",
      brand: "FGH",
      image: "images/ebook_reader.png",
    }
  ];
  const shoppingCart= JSON.parse(localStorage.getItem('cartList'))
  let isStored = true
function generateProductItem(product){
    const productList = document.getElementById("product-list")
    var productItem = document.createElement('div')
    productItem.classList.add("product-item", "bg-white", "p-4", "shadow", "rounded")

    var img = document.createElement('img')
    //add classes using classList attribute, with the add() method
    img.classList.add("w-fit", "h-32", "object-cover", "mb-4")
    img.src = product.image
    img.alt = product.title

    var h2 = document.createElement('h2')
    h2.textContent = product.title
    // add classes using className Attribute
    h2.className = "product-title text-lg font-semibold mb-2"

    var p = document.createElement('p')
    p.textContent = product.price
    p.classList.add("text-gray-600", "mb-4")

    var desc = document.createElement('div')
    desc.className = "flex flex-columns justify-between"
    desc.append(h2, p)

    var button = document.createElement('button')
    button.innerText = "Add to Cart"
    button.classList.add("bg-purple-700", "hover:bg-purple-500", "text-white", "font-bold", "py-2", "px-4", "rounded")
    button.addEventListener('click', () => addToCart(product))
   
    // append elements:
    /* const els = [ img, h2, p, button ]
    els.forEach((el) => { productItem.appendChild(el) }) */
    // productItem.appendChild(img)
    // productItem.appendChild(h2)
    // productItem.appendChild(p)
    // productItem.appendChild(button)

    // or you can use append instead, exemple:
    productItem.append(img, desc, button)

    productList.appendChild(productItem)
    
    
}

function generateProductList(products){
  // products.map((product) => {
  //   generateProductItem(product)
  // })
  products.forEach((product) => {
    generateProductItem(product)
  })



}

function genarateShoppingCartItem(addedProduct){
    const cartItem = document.createElement('div')
    const cartList = document.getElementById("cart-list")

    // addedProduct.quantity = 1

    cartItem.className = "bg-white p-4 shadow-lg rounded-lg max-w-xs w-40 "
    cartItem.innerHTML = `<div style="padding-bottom: 18px;" class="flex items-center justify-between mb-4">
    <img class="h-1/6 w-1/6" src="${addedProduct.image}" alt="${addedProduct.title}">
    <h2 class="text-sm font-semibold">${addedProduct.title}</h2>
    <span class="text-gray-500 text-sm">${addedProduct.price} $</span>
  </div>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <button onclick="addQuantity(${addedProduct.id})" class="upBtn bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded">
        +
      </button>
      <span id="product${addedProduct.id}" class="mx-2"> ${addedProduct.quantity} </span>
      <button onclick="downQuantity(${addedProduct.id})" class="downBtn bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded">
        -
      </button>
    </div>
    <button class="removeBtn text-red-500 hover:text-red-700" onclick="removeProduct(${addedProduct.id})">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>`
  cartList.appendChild(cartItem)
}


function getItemsFromStorage(){
    let items = JSON.parse(localStorage.getItem('cartList'))
    for ( let item of items ) {
      const cartItem = document.createElement('div')
      const cartList = document.getElementById("cart-list")
  
      // addedProduct.quantity = 1
  
      cartItem.className = "bg-white p-4 shadow-lg rounded-lg max-w-xs w-40 "
      cartItem.innerHTML = `<div style="padding-bottom: 18px;" class="flex items-center justify-between mb-4">
      <img class="h-1/6 w-1/6" src="${item.image}" alt="${item.title}">
      <h2 class="text-sm font-semibold">${item.title}</h2>
      <span class="text-gray-500 text-sm">${item.price} $</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <button onclick="addQuantity(${item.id})" class="upBtn bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded">
          +
        </button>
        <span id="product${item.id}" class="mx-2"> ${item.quantity} </span>
        <button onclick="downQuantity(${item.id})" class="downBtn bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded">
          -
        </button>
      </div>
      <button class="removeBtn text-red-500 hover:text-red-700" onclick="removeProduct(${item.id})">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>`
    cartList.appendChild(cartItem)
    }
}

// the mentor way
function generateShopingCartList(cartList){
  const cartListEl = document.getElementById("cart-list")
  cartListEl.innerHTML = ""

  let totalCart = 0
  cartList.forEach((product) => {
    genarateShoppingCartItem(product)
    totalCart += (product.price * product.quantity )
  })
  document.getElementById('total-card').textContent = parseFloat(totalCart).toFixed(2) + '$'
  console.log(shoppingCart)
  localStorage.setItem('cartList', JSON.stringify(shoppingCart))
}
function addToCart(product){
  let setProducts = new Set(shoppingCart)
  isStored = false
  if ( setProducts.has(product) ) {
    addQuantity(product.id)
  } else {
    const cartList = document.getElementById("cart-list")
    cartList.innerHTML = ""
    product.quantity = 1
    setProducts.add(product)
    generateShopingCartList(setProducts)
  }
  
}

// my way
/* function generateShopingCartList(cartList){

  genarateShoppingCartItem(cartList[ cartList.length - 1 ])
}
function addToCart(product){
  
  shoppingCart.push(product)
  generateShopingCartList(shoppingCart)
} */
function removeProduct(id){
      shoppingCart.forEach((els) => {
        if ( els.id === id ) {
          shoppingCart.delete(els)
          generateShopingCartList(shoppingCart)
        }
      })
}
function addQuantity(id){
      {/* Je vais essayer ma méthode plus-tard */}
      // let total = document.getElementById('total-card').textContent
      // total = total.slice(' ')
      // total = total.slice('$')
      // if ( typeof total == 'string') {
      //   Number(total)
      // }
      shoppingCart.forEach((els) => {
        if ( els.id === id ) {
          els.quantity++
          // document.getElementById(`product${id}`).textContent = els.quantity
          // total += (els.price * els.quantity )
          generateShopingCartList(shoppingCart)
        }
      })
      

  }
function downQuantity(id){
  shoppingCart.forEach((els) => {
    if ( els.id === id ) {
      els.quantity--
      if ( els.quantity <= 0 )
          removeProduct(id)
      // document.getElementById(`product${id}`).textContent = els.quantity
      // total += (els.price * els.quantity )
      generateShopingCartList(shoppingCart)
    }
  })

  }

generateProductList(electronicsProducts)
console.log(shoppingCart)

if ( isStored === true )
  getItemsFromStorage()