  // Get days since last visit to site
  const currentDate = new Date();
  const lastVisit = localStorage.getItem('lastVisit');
  if (!lastVisit) {
    localStorage.setItem('lastVisit', currentDate.toString());
  } else {
    const lastVisitDate = new Date(lastVisit);
    const timeDiff = currentDate.getTime() - lastVisitDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    document.getElementById("visits").innerHTML = `<em> ${daysDiff} </em>`;
    localStorage.setItem('lastVisit', currentDate.toString());
  }