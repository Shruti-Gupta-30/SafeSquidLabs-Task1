function toggleMenu(event) {
	event.preventDefault();

	let slinks = document.querySelector("#slinks");

	if (slinks.style.opacity == "100") {
		slinks.style.opacity = "0";
	} else {
		slinks.style.opacity = "100";
	}
}

let smenu = document.querySelector("#menu");
smenu.addEventListener("click", toggleMenu);
