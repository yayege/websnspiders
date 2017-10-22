// JavaScript Document

function switch1(){ 

	var txtname= document.getElementById("#1"); 
	
    var name=txtname.value; 
	
	switch(name){
		case "Bill Gates":
			alert("Thanks for inventing the MS");
			break; 
		case "Steve Jobs": 
			alert("Thanks for the revoltionary apple.");
			break; 
		default:
			alert("I do not know you, do I know you?");
			
	}



}