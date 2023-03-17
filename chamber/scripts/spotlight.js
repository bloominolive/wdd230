const dataurl = 'data.json';
const cards = document.querySelector('div.business-grid');

async function getBusinessData() {
  const response = await fetch(dataurl);
  const data = await response.json();
  
  displayData(data.businesses);
}

const displayData = (businesses) => {
  
  silverAndGoldMembers = businesses.filter(o => o.membershipLevel === 'Silver' || o.membershipLevel === 'Gold')
  const numBusinessesToShow = 3;
  const randomBusinesses = [];
      while (randomBusinesses.length < numBusinessesToShow && silverAndGoldMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * silverAndGoldMembers.length);
        randomBusinesses.push(silverAndGoldMembers[randomIndex]);
        silverAndGoldMembers.splice(randomIndex, 1);
      }

  randomBusinesses.forEach((business, index) => {
    const businessDiv = document.createElement('div');
    const indexPlus = index + 1
    const className = "business " + "business" + indexPlus
    businessDiv.className = className;
    businessDiv.innerHTML = `<h2>${business.name}</h2>
    <picture class="bus-img"> 
    <img class="bus-logo" src="${business.logo}" alt="${business.name} logo">
    </picture>
    <hr>
    <p class="contact-info">${business.address}<br>${business.phoneNumber} <a href="${business.website}"><b>Website</b></a></p>`;
  cards.appendChild(businessDiv);    
  }); 
}; 

getBusinessData();



