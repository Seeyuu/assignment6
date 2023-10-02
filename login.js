window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);

	const urlParam = new URLSearchParams(queryString);
	const username = urlParam.get('username');
	console.log(username);

	const password = urlParam.get('password');
	console.log(password);

	var user_val = document.forms["myLogin"]["username"].value;
	var pass_val = document.forms["myLogin"]["password"].value;

	if (user_val == username && pass_val == password){
		
		alert("Now login");
	}
	else{
		alert("Username or password not match.");
		return false;
	}
}

			