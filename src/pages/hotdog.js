export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];
  
  export const toggleTopping = (index) => {
      if (index >=0 && index < toppings.length) {
          toppings[index].selected = !toppings[index].selected;
      }}
  
  export const renderToppings = (toppings) => {
      document.body.innerHTML = "";
      toppings.forEach((topping) => {
          let trida = "";
      if (topping.selected === true) {
          trida = " topping--selected";
      }
      document.body.innerHTML +=  `
      <div class="topping${trida}">
        <h3>${topping.name}</h3>
        <p>${topping.price}</p>
      </div>
    `});
  
    const vyber = document.querySelectorAll (".topping")
    vyber.forEach ((topppingElement, index) => {
      topppingElement.addEventListener("click", () => {
          toggleTopping(index);
          renderToppings(toppings);
    })
  })
  };