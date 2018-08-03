function toggle(){
	document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

window.onscroll = function (){
	if(document.documentElement.scrollTop > 20){
		document.getElementsByClassName("navbar")[0].classList.add("ani");
	}else{
		document.getElementsByClassName("navbar")[0].classList.remove("ani");
	}
}

var images = document.getElementsByClassName("subimgcont");

var i;
for(i=0;i<images.length;i++){
	images[i].getElementsByTagName("IMG")[0].onclick = function (){
	var opencont = document.getElementsByClassName("opencont")[0],
		img = document.getElementById("openimg"),
		caption = document.getElementById("openimgcaption"),
		closebtn = document.getElementById("closebtn");
	opencont.style.display = "block";
	img.src = this.src;
	caption.innerHTML = this.alt;
	
	
window.onclick = function (event){
	if(event.target === opencont || event.target === img || event.target === closebtn || event.target === caption){
		opencont.style.display = "none";
	}	
}
}

}

