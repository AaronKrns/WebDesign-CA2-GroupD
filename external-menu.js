//JavaScript by Aaron Kearns for menu web page

//In this function, the variable 'v' returns the function 'veganMenuItems'/'(a)' to the values in the if and else statements. When 'v' returns as 'true' (when button that is assigned to the function 'veganMenuItems' is clicked), and if 'v' is already displayd as 'none'(invisible), then v is displayed as 'block' (visible). Else if 'v' is not displayed as 'block' and returns true, then 'v' is displayed as 'none'
//reference: http://www.meadinkent.co.uk/expand_sections.htm
function veganMenuFilter(a){
	var v=document.getElementById(a);
	if(!v)return true;
	if(v.style.display=="none"){v.style.display="block"}
	else{v.style.display="none"}
	return true;
}

//This function works the same as the previous one
function menuSectionFilter(a){
	var v=document.getElementById(a);
	if(!v)return true;
	if(v.style.display=="none"){v.style.display="block"}
	else{v.style.display="none"}
	return true;
}