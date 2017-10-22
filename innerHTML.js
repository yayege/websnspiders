// JavaScript Document

function sayHi(){
	txtName=document.getElementById("txtName");
	divOutput=document.getElementById("divOutput");
	
	name=txtName.value; 
	
	divOutput.innerHTML="<em>"+name +" </em> is a very nice name.";	}
