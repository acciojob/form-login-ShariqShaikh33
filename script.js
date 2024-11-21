function getFormvalue() {
    //Write your code here
	const first = document.getElementsByName("fname")[0];
	const last = document.getElementsByName("lname")[0];

	let firstname= first.value;
	let lastname = last.value;

	let result = (firstname+" "+lastname);
	
	alert(result);	
}





