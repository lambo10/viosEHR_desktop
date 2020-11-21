
   $.fn.pass_record_id = function(email,password){
    $.post("http://localhost:5000/login_professional",
{
email_c: email,
password_c: password
},
function(result){
  process_login_output(result);
});
  }

  function process_login_output(data){
    if(text_equality(data,"Doctor")){
      window.location.href = "docturs_portal.html";
      }else if(text_equality(data,"Record_manager")){
        window.location.href = "records_portal.html"
      }else if(text_equality(data,"Pharmacist")){
        window.location.href = "pharmacisit_portal.html"
      }else if(text_equality(data,"Admin_Manager")){
        window.location.href = "Administartion_portal.html"
      }else if(text_equality(data,"LabScientist")){
        window.location.href = "labScientistPortal.html"
      }else if(text_equality(data,"Nurse")){
        window.location.href = "nurse_portal.html"
      }else if(text_equality(data,"Radiologist")){
        window.location.href = "radiogapherPortal.html"
      }else{
        alert("Incorrect username or password");
      }
  }

   function autoFocus(id){
    document.getElementById(id).focus();
  }
function show(id){
document.getElementById(id).style.display = "block";
}
function hide(id){
document.getElementById(id).style.display = "none";
}


function Handle_lastFieldPress(e){
  var key = e.which || e.keyCode;
  if (key === 13) {
    login_sunmission();
  }
}

function login_sunmission(){
var email = document.getElementById("dde1").value;
var password = document.getElementById("dde2").value;
$.fn.pass_record_id(email,password);
}

function text_equality(text,compeartxt){
  var count = 0;
  var result = true;
  if(text.length == compeartxt.length){
  while(count < text.length){
if(text.charAt(count) != compeartxt.charAt(count)){
result = false
}
count++;
}
  }else{
    result = false;
  }
  return result;
}


function HandleEnter1(e) {
  if (e.keyCode == 13) {
    autoFocus("dde2");
      return false;
  }
}

function display_date_and_Time(){
  var d = new Date();
document.getElementById("date_I").innerHTML = d.getDay()+"-"+d.getMonth()+"-"+d.getFullYear();
document.getElementById("time_I").innerHTML = d.getHours()+":"+d.getMinutes();
setTimeout(next_display_date_and_Time,1000);
}

function next_display_date_and_Time(){
  var d = new Date();
document.getElementById("date_I").innerHTML = d.getDay()+"-"+d.getMonth()+"-"+d.getFullYear();
document.getElementById("time_I").innerHTML =  d.getHours()+":"+d.getMinutes();
setTimeout(display_date_and_Time,1000);
}
display_date_and_Time();
