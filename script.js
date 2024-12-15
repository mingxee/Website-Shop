function addProduct(imageSrc, name, price, discountPrice, sizes, description, images) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productAnchor = document.createElement('a');
  productAnchor.href = "#";
  productAnchor.addEventListener('click', function (event) {
    event.preventDefault();
    showProductDetails(imageSrc, name, price, discountPrice, sizes, description, images, 'https://example.com');
  });

  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  imgElement.alt = name;

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('product-name');
  nameDiv.textContent = name;

  const priceDiv = document.createElement('div');
  priceDiv.classList.add('product-price');
  if (discountPrice) {
    priceDiv.innerHTML = `<span class="original-price">$${price.toFixed(2)}</span><span class="discount-price">$${discountPrice.toFixed(2)}</span>`;
  } else {
    priceDiv.textContent = `$${price.toFixed(2)}`;
  }

  productAnchor.appendChild(imgElement);
  productAnchor.appendChild(nameDiv);
  productAnchor.appendChild(priceDiv);

  productDiv.appendChild(productAnchor);
  document.getElementById('product-container').appendChild(productDiv);
}

function showProductDetails(imageSrc, name, price, discountPrice, sizes, description, images, buyLink) {
  const productDetails = document.getElementById('product-details');
  const productContent = document.querySelector('.product-details-content');

  document.getElementById('main-image').src = imageSrc;
  document.getElementById('details-name').textContent = name;

  const priceElement = document.getElementById('details-price');
  if (discountPrice) {
    priceElement.innerHTML = `<span class="original-price">$${price.toFixed(2)}</span><span class="discount-price">$${discountPrice.toFixed(2)} (Discount)</span>`;
  } else {
    priceElement.textContent = `Price: $${price.toFixed(2)}`;
  }

  document.getElementById('details-description').textContent = description;

  const sizeList = document.getElementById('size-list');
  sizeList.innerHTML = '';
  sizes.forEach(size => {
    const li = document.createElement('li');
    li.textContent = size;
    sizeList.appendChild(li);
  });

  const thumbnails = document.getElementById('image-thumbnails');
  thumbnails.innerHTML = '';
  images.forEach(img => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = name;
    thumb.addEventListener('click', () => {
      document.getElementById('main-image').src = img;
    });
    thumbnails.appendChild(thumb);
  });

  const buyButton = document.getElementById('buy-btn');
  buyButton.href = buyLink;

  productDetails.style.display = 'block';
  productDetails.classList.add('fadeIn');
}

document.getElementById('close-btn').addEventListener('click', () => {
  const productDetails = document.getElementById('product-details');
  const productContent = document.querySelector('.product-details-content');

  productContent.style.animation = 'slideOut 0.5s forwards';
  productDetails.style.animation = 'fadeOut 0.5s forwards';

  setTimeout(() => {
    productDetails.style.display = 'none';
    productContent.style.animation = '';
    productDetails.style.animation = '';
  }, 500);
});

// addProduct('IMG.JPG', 'Product', normal-price, discount-price, ['Small', 'Medium', 'Large'], 'Description of Product.', ['IMG.JPG', 'IMG.JPG']);
addProduct('IMG_1809.JPG', 'Cool Graphic Tee', 19.99, 14.99, ['Small', 'Medium', 'Large'], 'A stylish t-shirt made from 100% cotton, perfect for everyday wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Summer Vibes T-Shirt', 18.99, null, ['Medium', 'Large'], 'Comfortable and breathable, this t-shirt is ideal for warm weather.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Classic Fit Top', 21.99, 16.99, ['Small', 'Medium'], 'Featuring a classic fit, this t-shirt is a must-have for your wardrobe.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Urban Style Tee', 19.99, 14.99, ['Small', 'Medium', 'Large'], 'A stylish t-shirt made from 100% cotton, perfect for everyday wear.', ['IMG_1809.JPG', 'IMG_1810.JPG']);
addProduct('IMG_1809.JPG', 'Beach Day T-Shirt', 18.99, null, ['Medium', 'Large'], 'Comfortable and breathable, this t-shirt is ideal for warm weather.', ['IMG_1809.JPG', 'IMG_1810.JPG']);