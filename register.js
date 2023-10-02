window.onload = pageLoad;
function pageLoad(){

    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;

}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myForm"]["password"].value;
    var re_password = document.forms["myForm"]["retype_password"].value;

    if (re_password != password) {

      document.getElementById("errormsg").innerHTML = "Password not match.";
      alert("Password not match.");
      return false;

    }

    else {

      alert("Register completed.");

    }
}