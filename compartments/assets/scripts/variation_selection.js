function loadVariationSelection () {
  $('.add-to-cart-button').click(function() {
    add_to_cart_list = $(this)[0]
    airshop_status = document.getElementsByClassName('airshop-status');
    airshop_status[0].style.opacity = 1;
    if(event!= null && !event.target.classList.contains('disabled')) {
      add_to_cart_list.className += ' added-to-cart';
      add_to_cart_list.disabled = true;
      add_to_cart_list.children[0].innerHTML = 'Added to Cart';
      add_to_cart_list.classList.remove('button-clickable');
      setTimeout(function(){ 
        airshop_status[0].style.opacity = 0;
        add_to_cart_list.disabled = false;
      }, 3000);
    }
  })
  // List selector, add to cart
  var add_to_cart_list = document.getElementById('add_to_cart_list');
  var airshop_status = document.getElementsByClassName('airshop-status');
};