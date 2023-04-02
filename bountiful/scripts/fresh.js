
let selectedFruits = [];

const getFruit = async () => {

  const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
  fruitList = await response.json();
  
  for (let i = 1; i <= 3; i++) {
      let select = document.createElement("select");
      select.id = `list${i}`;

      select.addEventListener("change", () => {
          selectedFruits[i-1] = select.value;
      });

      let defaultOption = document.createElement("option");
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.text = "Select one...";
      select.appendChild(defaultOption);
  
      for (let fruit of fruitList) {
          let option = document.createElement("option");
          option.value = fruit.name;
          option.text = fruit.name;
          select.appendChild(option);
      }
      
      document.getElementById(`list${i}`).appendChild(select);
  }
}
getFruit();

const button = document.getElementById('submitBtn');
const order = document.getElementById('order');

button.addEventListener('click', function() {
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber =  document.getElementById('phone-number').value;
  let orderName = document.createElement('h2');
  orderName.textContent = `${firstName}`;
  let orderEmail = document.createElement('h3');
  orderEmail.textContent = `${email}`;
  let orderPhoneNumber = document.createElement('h3');
  orderPhoneNumber.textContent = `${phoneNumber}`;

  order.appendChild(orderName);
  order.appendChild(orderEmail);
  order.appendChild(orderPhoneNumber);


  for (let selection of selectedFruits) {
    let orderedFruit = document.createElement('h4');
    orderedFruit.textContent = `${selection}`;
    order.appendChild(orderedFruit);
  }

  
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;
  
  for (let fruit of fruitList) {
    if (selectedFruits.includes(fruit.name)) {
      totalCarbs += fruit.nutritions.carbohydrates;
      totalProtein += fruit.nutritions.protein;
      totalFat += fruit.nutritions.fat;
      totalSugar += fruit.nutritions.sugar;
      totalCalories += fruit.nutritions.calories;
    }
  }
  
  let carbs = document.createElement('p');
  carbs.textContent = `${totalCarbs}`;
  let protein = document.createElement('p');
  protein.textContent = `${totalProtein}`;
  let fat = document.createElement('p');
  fat.textContent = `${totalFat}`;
  let sugar = document.createElement('p');
  sugar.textContent = `${totalSugar}`;
  let calories = document.createElement('p');
  calories.textContent = `${totalCalories}`;

  order.appendChild(carbs);
  order.appendChild(protein);
  order.appendChild(fat);
  order.appendChild(sugar);
  order.appendChild(calories);

  let specialInstructions = document.createElement('h3');
  specialInstructions.textContent = `${document.getElementById('special-instructions').value}`;  

  order.appendChild(specialInstructions);

  
  const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('orderquantity='))
  ?.split('=')[1];

  const orderQuantity = parseInt(cookieValue);

  if (!isNaN(orderQuantity)) {
    document.cookie = `orderquantity=${orderQuantity + 1}; path=/`;
  } else {
    document.cookie = `orderquantity=${1}; path=/`;
  }

});
