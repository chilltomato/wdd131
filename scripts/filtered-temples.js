const cheeseburger = document.querySelector('#cheeseburger')
const hamburger = document.querySelector('#hamburger');
const alllink = document.querySelector('#all')
const oldlink = document.querySelector('#old')
const newlink = document.querySelector('#new')
const largelink = document.querySelector('#large')
const smalllink = document.querySelector('#small')


hamburger.addEventListener('click', () => {
	cheeseburger.classList.toggle('show');
	hamburger.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Las Vegas Nevada",
		location: "Las Vegas, Nevada",
		dedicated: "1989, December, 16",
		area: 80350,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
	},
	{
		templeName: "Salt Lake",
		location: "Salt Lake City, Utah",
		dedicated: "1893, April 6",
		area: 382207,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
	},
	{
		templeName: "Orlando Florida ",
		location: "Windermere, Florida ",
		dedicated: "1994, October, 9",
		area: 70000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51938-main.jpg"
	},	  
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
  ];






alllink.addEventListener("click", () => makeTempleCard(temples));

oldlink.addEventListener("click", () => makeTempleCard(temples.filter(temple => parseInt(temple.dedicated.split (",")[0]) < 1900)));

newlink.addEventListener("click", () => makeTempleCard(temples.filter(temple => parseInt(temple.dedicated.split (",")[0]) > 2000)));

largelink.addEventListener("click", () => makeTempleCard(temples.filter(temple => temple.area > 9000)));

smalllink.addEventListener("click", () => makeTempleCard(temples.filter(temple =>  temple.area < 10000)));


function makeTempleCard(filteredTemples) {
	document.querySelector(".temple-grid").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label"> location: </span> ${temple.location}`;
		dedication.innerHTML = `<span class="label"> dedication date: </span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label"> area: </span> ${temple.area}`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} temple`);
		img.setAttribute("loading", "lazy");

	
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);
	
		document.querySelector (".temple-grid").appendChild(card);
	});
	


}

makeTempleCard(temples);