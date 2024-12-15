

const games = [
	{
	  gameName: "Doubutsu no Mori",
	  platforms: "Nintendo 64 (japan only)",
	  releasedate: "2001, April, 14",
	  info: "the first game in the series, released on the nintendo 64 in japan.",
	  imageUrl:
	  "https://dodo.ac/np/images/2/2b/DnM_Logo.svg"
	},
	{
		gameName: "Doubutsu no Mori+",
		platforms: "Nintendo Gamecube (japan only)",
		releasedate: "2001, December, 14",
		info: "Released in japan as a GameCube port of the game. Introduces the museum, an island, and the Able Sisters",
		imageUrl:
		"https://dodo.ac/np/images/b/b6/DnM%2B_Logo.svg"
	  },
	  {
		gameName: "Animal Crossing",
		platforms: "Nintendo GameCube",
		releasedate: "2002, September, 16",
		info: "the first game to be released in the west.",
		imageUrl:
		"https://dodo.ac/np/images/9/97/PG_Logo_English.png"
	  },
	  {
		gameName: "Doubutsu no Mori e+",
		platforms: "Nintendo GameCube  (japan only)",
		releasedate: "2003, June, 27",
		info: "a relocilization of Animal Crossing for Japan. also featured additional changes.",
		imageUrl:
		"https://dodo.ac/np/images/f/f7/DnMe%2B_Logo.png"
	  },
	  {
		gameName: "Animal Crossing: Wild World",
		platforms: "Nintendo DS",
		releasedate: "2005, December, 5",
		info: "the first game to be released worldwide and the first one on an handheld console. made change to villager interactions and added online multiplayer",
		imageUrl:
		"https://dodo.ac/np/images/f/f3/WW_Logo_English.png"
	  },
	  {
		gameName: "Animal Crossing: City Folk",
		platforms: "Nintendo Wii",
		releasedate: "2008, November, 16",
		info: "Adds a city for you to vist, which isn't in New Horizons :(. New events like bunny day got added",
		imageUrl:
		"https://dodo.ac/np/images/b/b0/CF_Logo_English.png"
	  },
	  {
		gameName: "Animal Crossing: New Leaf",
		platforms: "Nintendo 3DS",
		releasedate: "2013, June, 19",
		info: "Introduces significant things like a player being the mayor, dreams, and minigames",
		imageUrl:
		"https://dodo.ac/np/images/thumb/a/a4/NL_Logo_English.png/1920px-NL_Logo_English.png"
	  },
	  {
		gameName: "Animal Crossing: New Horizons",
		platforms: "Nintendo Switch",
		releasedate: "2020, March, 20",
		info: "the first game in the series to be high-defenetion. changes the usual envioment to have the player live on a deserted istland. introduces crafting.",
		imageUrl:
		"https://dodo.ac/np/images/5/52/NH_Logo_English.png"
	  },
	
  ];








function makegamesCard(games) {
	document.querySelector(".timeline-grid").innerHTML = "";
	games.forEach(game => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let platforms = document.createElement("p");
		let releasedate = document.createElement("p");
		let info = document.createElement("p");
		let img = document.createElement("img");


		card.setAttribute("class", 'card');
		name.textContent = game.gameName;
		platforms.innerHTML = `<span class="label"> location: </span> ${game.platforms}`;
		releasedate.innerHTML = `<span class="label"> dedication date: </span> ${game.releasedate}`;
		info.innerHTML = `<span class="label"> info: </span> ${game.info}`;
		img.setAttribute("src", game.imageUrl);
		img.setAttribute("alt", `${game.gameName} boxart`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", 900);
		img.setAttribute("height", 300);

		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(platforms);
		card.appendChild(releasedate);
		card.appendChild(info);
	
		document.querySelector (".timeline-grid").appendChild(card);
	});
	


}

makegamesCard(games);