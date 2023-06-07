let numberofwrite=15;
function control_write(event){
	if(event.target.id=="neg"){
		numberofwrite-=1;
	}
	else if(event.target.id=="pos"){
		numberofwrite+=1;
	}
	document.getElementById("number").innerHTML=numberofwrite;
	document.getElementById("parg").style.fontSize=numberofwrite+"px";
}
function change_background_p(){
	document.getElementById("parg").style.color=document.getElementById("change_color").value;
}
function funchange(){
	document.getElementById("parg").style.fontFamily=document.getElementById("font_family").value;
}
function funitalic(){
	document.getElementById("parg").classList.toggle("italic-pargraph");
}