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
//  (function(){
//      const buttons=document.querySelectorAll('.btn')
//      const storeApps= document.querySelectorAll('.all')

//      buttons.forEach(button) => {
//          button.addEventListener('click',(e)=>{
//              e.preventDefault()
//              const filter= e.target.dataset.filter
//                       storeApps.forEach((item)=>{
//                          if(filter==='all'){
//                               item.style.display='flex'
//                               }else{
//                                  if(item.classList.contains(filter)){
//                                       item.style.display='block'
//                                      } else{
//                                          item.style.display='none';
//                                       }}
//                                   })
//                                  })
//                              }
//                          })();

function loadXMLDoc() {
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		// Request finished and response
		// is ready and Status is "OK"
		if (this.readyState == 4 && this.status == 200) {
			empDetails(this);
		}
	};

	// projects.xml is the external xml file
	xmlhttp.open("GET", "./projects.xml", true);
	xmlhttp.send();
}

function empDetails(xml) {
	let i;
	let xmlDoc = xml.responseXML;

	let x = xmlDoc.getElementsByTagName("project");

	console.log(x[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);
	// Start to fetch the data by using TagName
	for (i = 0; i < x.length; i++) {
		document.getElementsByTagName("h2")[i].innerHTML =
			x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		document.getElementsByTagName("h4")[i].innerHTML = `--
						 ${x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue}`;
		document.getElementsByClassName("link")[i].attributes[0].value =
			x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
		document.getElementsByClassName("tech_stack")[i].innerHTML =
			x[i].getElementsByTagName("tech_stack")[0].childNodes[0].nodeValue;
	}
}
loadXMLDoc();
