const url = 'data.json';
const cards = document.querySelector('div.cards');

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.businesses);
}

const displayData = (businesses) => {
  

  businesses.forEach((business) => {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h3 = document.createElement('h4');
    let p = document.createElement('p');
    
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Image for ${business.name}`);
    logo.classList.add('spotlight-img');
    logo.setAttribute('loading', 'lazy');
    card.appendChild(logo);

    h3.textContent = `${business.name}`;
    card.appendChild(h3);

    let address = document.createElement('span');
    address.textContent = business.address;
    card.appendChild(address);
    card.appendChild(document.createElement('br'));

    let phone = document.createElement('span');
    phone.textContent = business.phoneNumber;
    card.appendChild(phone);

    card.appendChild(document.createElement('br'));

    let website = document.createElement('span');

    website.innerHTML = `<a href="${business.website}" target="_blank">Website</a>`;

    card.appendChild(website);

    card.appendChild(document.createElement('br'));

    let membership = document.createElement('span');
    membership.textContent = business.membershipLevel;
    membership.textContent = `Membership Level: ${business.membershipLevel}`;
    card.appendChild(membership);
    
    card.appendChild(p);    
    cards.appendChild(card);
  }); 
}; 
getBusinessData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	cards.classList.add("directory-grid");
	cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	cards.classList.remove("directory-grid");
	cards.classList.add("list");
});



