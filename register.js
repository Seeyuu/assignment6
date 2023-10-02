window.onload = pageLoad;
function pageLoad(){

    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;

}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    var re_password = document.forms["myForm"]["retype_password"].value;

    if (username == ''){

        document.getElementById("errormsg").innerHTML = "error";
      alert("Please input username");
      return false;

    }

    if (re_password != password){

      document.getElementById("errormsg").innerHTML = "error";
      alert("Password not match.");
      return false;

    }
}