// JavaScript Document

function process(){ 

var txtName=document.getElementById("txtName");
var output=document.getElementById("out"); 
	
var name= txtName.value; 

if(name=="ege"){
	output.innerHTML="<h1> Welcome Master "+name+" </h1>";

}
else{
	output.innerHTML="<h1> I still do not know you, try again later. </h1>";
}
	


}