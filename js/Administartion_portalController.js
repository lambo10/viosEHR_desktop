var local_server = 'http://'+local_server+':5000';
var wk_inserted_id = '';
function disp_active_pane_QQWER(id){
  var count = 0;
  while(count < 3){
  var wkID = "panel_qqwer"+count;
  var wkID2 = "tab_btnqqwer"+count;
  if(wkID == id){
  document.getElementById(wkID).style.display = "block";
  document.getElementById(wkID2).classList.add("active");
  }else{
  document.getElementById(wkID).style.display = "none";
  if(document.getElementById(wkID2).classList.contains("active")){
    document.getElementById(wkID2).classList.remove("active");
      }
    }
  count++;
  }
  }
  
  
       function input_focus_system(id){
  
                      var count = 0;
                      var collected_num = "";
                      while(count < id.length){
                        var wk_char = id.charAt(count);
                        if(wk_char == "1" || wk_char == "2" || wk_char == "3" || wk_char == "4" || wk_char == "5" || wk_char == "6" || wk_char == "7" || wk_char == "8" || wk_char == "9" || wk_char == "0"){
                     collected_num = id.charAt(count);
                        }
                        count++;
                      }
                      var c_numInt = parseInt(collected_num);
                      c_numInt++;
                      if (document.getElementById("dde"+c_numInt.toString())) {
                       document.getElementById("dde"+c_numInt.toString()).focus();
                     }else{
                       DataH_submission();
                     }
                     }
                     function runScript(e,id) {
                      if (e.keyCode == 13) {
                           return false;
                      }
                      getE(id).style.background = "white";
                      
                    }
  
  var pl_dde1 = document.querySelector("#dde1");
                    pl_dde1.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        input_focus_system("dde1");
                      }
                      remove_poppertext("");
                    });
  
                    var pl_dde2 = document.querySelector("#dde2");
                    pl_dde2.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        input_focus_system("dde2");
                      }
                      remove_poppertext("2");
                    });
  
                    var pl_dde3 = document.querySelector("#dde3");
                    pl_dde3.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        input_focus_system("dde3");
                      }
                      remove_poppertext("3");
                    });
  
                    var pl_dde4 = document.querySelector("#dde4");
                    pl_dde4.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        input_focus_system("dde4");
                      }
                      remove_poppertext("4");
                    });
  
                    var pl_dde5 = document.querySelector("#dde5");
                    pl_dde5.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        input_focus_system("dde5");
                      }
                      remove_poppertext("5");
                    });
  
                    var pl_dde6 = document.querySelector("#dde6");
                    pl_dde6.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        input_focus_system("dde6");
                      }
                      remove_poppertext("6");
                    });

                    var pl_dde9 = document.querySelector("#dde9");
                    pl_dde9.addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
              
                      remove_poppertext("9");
                    });
                    function getE(ID){
                      return document.getElementById(ID);
                    }
                    function check_contain_space(id){
                      wk_value = getE(id).value;
                      var charN = wk_value.length;
                      var count = 0;
                      var result = 0;
                      while(count < charN){
                        wk_char = wk_value.charAt(count);
                        if (wk_char == " " || wk_char == null) {
                          result = 1;
                        }
                        count++;
                      }
                      
                      return result;
                    }
                    function check_empt(id){
                       wk_value = getE(id).value;
                      var charN = wk_value.length;
                      var result = 0;
                      if (charN <= 0) {
                        result = 1;
                      }
                      return result;
                    }
                    function check_email(id){
                      wk_value = getE(id).value;
                      var charN = wk_value.length;
                      var count = 0;
                      var result = 0;
                      var found_at = false;
                      while(count < charN){
                        wk_char = wk_value.charAt(count);
                        if (wk_char == "@") {
                          result = 1;
                        }
                       
                        count++;
                      }
                      
                      return result;
                    }
                    function reset_employee_creation_form(){
                      getE('employee_reg_form1').reset();
                      getE("employee_reg_form1").style.display = "block";
                      getE("employee_reg_form2").style.display = "none";
                      clear_dropzone();
                    }
                    function add_employee_submission(){
                      var can_submit = true;
                      var first_name = getE('dde1').value;
                      var last_name = getE('dde2').value;
                      var middle_name = getE('dde3').value;
                      var pr_phone_no = getE('dde4').value;
                      var sr_phone_no = getE('dde5').value;
                      var email = getE('dde6').value;
                      var address = getE('dde7').value;
                      var job = getE('dde8').value;
                      var age = getE('dde9').value;
                      var popperInstance = null;
                      if(can_submit){
                        if (check_empt('dde1') == 1) {
                          getE('dde1').style.background = "#ff9999";
                          $.fn.change_text('poopertextinner','Empty field');
                           popperInstance = new Popper(getE('dde1'), getE('poppertext'), {
                            placement: 'bottom'
                          });
                          can_submit = false;
                        }else{
                          getE('dde1').style.background = "white";
                          can_submit = true;
                        }
                      }
                      
                      if(can_submit){
                      if (check_empt('dde2') == 1) {
                        getE('dde2').style.background = "#ff9999";
                        $.fn.change_text('poopertext2inner','Empty field');
                        popperInstance = new Popper(getE('dde2'), getE('poppertext2'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde2').style.background = "white";
                        can_submit = true;
                      }
                      }

                      if(can_submit){
                      if (check_empt('dde3') == 1) {
                        getE('dde3').style.background = "#ff9999";
                        $.fn.change_text('poopertext3inner','Empty field');
                        popperInstance = new Popper(getE('dde3'), getE('poppertext3'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde3').style.background = "white";
                        can_submit = true;
                      }
                    }

                    if(can_submit){
                      if (check_empt('dde4') == 1) {
                        getE('dde4').style.background = "#ff9999";
                        $.fn.change_text('poopertext4inner','Empty field');
                        popperInstance = new Popper(getE('dde4'), getE('poppertext4'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde4').style.background = "white";
                        can_submit = true;
                      }
                    }

                    if(can_submit){
                      if (check_empt('dde5') == 1) {
                        getE('dde5').style.background = "#ff9999";
                        $.fn.change_text('poopertext5inner','Empty field');
                        popperInstance = new Popper(getE('dde5'), getE('poppertext5'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde5').style.background = "white";
                        can_submit = true;
                      }
                    }
                    
                    if(can_submit){
                      if (check_empt('dde6') == 1) {
                        getE('dde6').style.background = "#ff9999";
                        $.fn.change_text('poopertext6inner','Empty field');
                        popperInstance = new Popper(getE('dde6'), getE('poppertext6'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde6').style.background = "white";
                       
                        if(check_email('dde6') == 0){
                          getE('dde6').style.background = "#ff9999";
                          $.fn.change_text('poopertext6inner','Wrong email format');
                          popperInstance = new Popper(getE('dde6'), getE('poppertext6'), {
                          placement: 'bottom'
                        });
                        getE('poppertext6').style.display = 'block';
                        can_submit = false;
                        }else{
                          getE('dde6').style.background = "white";
                          if(check_contain_space('dde6') == 1){
                            getE('dde6').style.background = "#ff9999";
                            $.fn.change_text('poopertext6inner','Email should not have space');
                            popperInstance = new Popper(getE('dde6'), getE('poppertext6'), {
                          placement: 'bottom'
                        });
                        getE('poppertext6').style.display = 'block';
                        can_submit = false;
                          }else{
                            getE('dde6').style.background = "white";
                            can_submit = true;
                          }
                        }

                      }
                    }

                    if(can_submit){
                      if (check_empt('dde7') == 1) {
                        getE('dde7').style.background = "#ff9999";
                        $.fn.change_text('poopertext7inner','Empty field');
                        popperInstance = new Popper(getE('dde7'), getE('poppertext7'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde7').style.background = "white";
                        can_submit = true;
                        
                      }
                    }

                    if(can_submit){
                      if (check_empt('dde9') == 1) {
                        getE('dde9').style.background = "#ff9999";
                        $.fn.change_text('poopertext9inner','Empty field');
                        popperInstance = new Popper(getE('dde9'), getE('poppertext9'), {
                          placement: 'bottom'
                        });
                        can_submit = false;
                      }else{
                        getE('dde9').style.background = "white";
                        can_submit = true;
                        
                      }
                    }

                      if (can_submit == true) {
                        submit_employee_reg(first_name,last_name,middle_name,pr_phone_no,sr_phone_no,email,job,address,age);
                      }

                      update()

                    }

                    function string_equality(data1,data2){
                      var count = 0;
                      result = true;
                      if(data1.length == data2.length){
                        while(count < data1.length){
                          var wk_var = data1.charAt(count);
                          if(wk_var == data2.charAt(count)){
   
                          }else{
                            result = false;
                          }
                          count++;
                         }
                      }else{
                        result = false;
                      }
                      return result;
                    }

                    function submit_employee_reg(first_name,last_name,middle_name,primary_phone_no,secondary_phone_no,email,job,address,age){
    var http = new XMLHttpRequest();
    var params = 'first_name='+first_name+'&last_name='+last_name+'&middle_name='+middle_name+'&primary_phone_no='+primary_phone_no+'&secondary_phone_no='+secondary_phone_no+'&email='+email+'&address='+address+'&job='+job+'&empl_age='+age;
    var url = 'http://'+local_server+':5000/register_employee?'+params;
    http.open('GET',url,true);
    http.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    http.onreadystatechange = function(){
      if(http.readyState == 4 && http.status == 200){
        if(string_equality(http.responseText,'100245')){
alert('Email already exisit');
        }else{
          document.getElementById("employee_add_name_view005").innerHTML = first_name+" "+last_name;
          document.getElementById("employee_add_num_view005").innerHTML = primary_phone_no;
          document.getElementById("employee_add_email_view005").innerHTML = email;
          document.getElementById("employee_add_job_view005").innerHTML = job;
          document.getElementById("employee_reg_form1").style.display = "none";
          wk_inserted_id = http.responseText;
         document.getElementById("employee_reg_form2").style.display = "block";          
           $.fn.pass_record_id(wk_inserted_id);
      }
      }
    }
    http.send();
                    }
    function disp_finish_employee_reg(){
      document.getElementById("finish_employee_reg").style.display = "block";
    }

                    $.fn.pass_record_id = function(id){
                      $.get("http://"+local_server+":3130/w_passed_usrID",
    {
      empID: id
    },
    function(){
      disp_finish_employee_reg();
    });
                    }
                  
                    $.fn.change_text = function(id,text){
                      $( "#"+id ).text(function( index ) {
                        return text;
                      });
                    }
                    
function remove_poppertext(index){
  getE('poppertext'+index).style.display = 'none';
}

function arrange_emp_search_on_load(){
  getE("search_empl_id").style.border = "solid #b8b8b8 1px";
  getE("search_empl_id").style.borderRadius = "100px";
}
arrange_emp_search_on_load();


var ctx = document.getElementById("profit_A_month").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jen", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: '# of Profits',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

var ctx = document.getElementById("profitExamin_A_month").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Docturs", "Pharmacist", "Labscientist", "Radiologist", "Nurse"],
      datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 119, 102, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 102, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


  $.fn.get_employees_00 = function(){
    $.post("http://"+local_server+":5000/get_employee",
{},
function(result){
var dec_data = decrypt_data(result);
process_goten_employee(dec_data);
});
  }
  
function decrypt_data(data){
return data;
}
function process_goten_employee(data){
  var table = document.createElement("table");
  table.setAttribute("class","table table-striped");
  table.setAttribute("id","crea_emp_display001");
  var table_head = document.createElement("thead");
  var ta_row_head = document.createElement("tr");
  var th_td1 = document.createElement("td");
  th_td1.appendChild(document.createTextNode("Profile Pic"));
  var th_td2 = document.createElement("td");
  th_td2.appendChild(document.createTextNode("First Name"));
  var th_td3 = document.createElement("td");
  th_td3.appendChild(document.createTextNode("Last Name"));
  var th_td4 = document.createElement("td");
  th_td4.appendChild(document.createTextNode("Middle Name"));
  var th_td5 = document.createElement("td");
  th_td5.appendChild(document.createTextNode("Job"));
  var th_td6 = document.createElement("td");
  th_td6.appendChild(document.createTextNode("Primary Phone No"));
  var th_td7 = document.createElement("td");
  th_td7.appendChild(document.createTextNode("Secondary Phone No"));
  var th_td8 = document.createElement("td");
  th_td8.appendChild(document.createTextNode("Email"));
  var th_td9 = document.createElement("td");
  th_td9.appendChild(document.createTextNode("Address"));
  var th_td10 = document.createElement("td");
  th_td10.appendChild(document.createTextNode("Documents"));
  var th_td11 = document.createElement("td");
  th_td11.appendChild(document.createTextNode("Remove"));

  ta_row_head.appendChild(th_td1);
  ta_row_head.appendChild(th_td2);
  ta_row_head.appendChild(th_td3);
  ta_row_head.appendChild(th_td4);
  ta_row_head.appendChild(th_td5);
  ta_row_head.appendChild(th_td6);
  ta_row_head.appendChild(th_td7);
  ta_row_head.appendChild(th_td8);
  ta_row_head.appendChild(th_td9);
  ta_row_head.appendChild(th_td10);
  ta_row_head.appendChild(th_td11);

  table_head.appendChild(ta_row_head);
  table.appendChild(table_head);
  var jsonData = JSON.parse(data);
  for (i in jsonData.employee) {
    var ta_row = document.createElement("tr");
  var pimage = document.createElement("img");
  pimage.setAttribute("src","http://"+local_server+":4417/employee/"+jsonData.employee[i]._id.$oid+"/profile/usr_profile.jpg");
  pimage.style.width = "50px";
  pimage.style.height = "50px";
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td4_job = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var view_ep_doc_btn = document.createElement("button");
  view_ep_doc_btn.setAttribute("class","btn waves-effect waves-light row");
  view_ep_doc_btn.setAttribute("style","background: #09c;");
  view_ep_doc_btn.setAttribute("data-toggle","modal");
  view_ep_doc_btn.setAttribute("data-target","#employee_doc_view");
  view_ep_doc_btn.setAttribute("onclick","$.fn.get_employee_doc_f_display('"+jsonData.employee[i]._id.$oid+"')");
  view_ep_doc_btn.appendChild(document.createTextNode("View"));
  var sp_view_ep_doc_btn = document.createElement("span");
  sp_view_ep_doc_btn.setAttribute("class","fa fa-file");
  view_ep_doc_btn.appendChild(sp_view_ep_doc_btn);
  
  var btn2 = document.createElement("button");
  btn2.setAttribute("class","btn waves-effect waves-light row");
  btn2.setAttribute("style","background: #09c;");
  btn2.setAttribute("onclick","delete_employee_fH('"+jsonData.employee[i]._id.$oid+"','"+jsonData.employee[i].first_name+"','"+jsonData.employee[i].last_name+"','"+jsonData.employee[i].job+"')");
  btn2.appendChild(document.createTextNode("Remove"));
  var sp_btn2 = document.createElement("span");
  sp_btn2.setAttribute("class","fa fa-trash");
  btn2.appendChild(sp_btn2);

    td1.append(pimage);
  td2.append(document.createTextNode(jsonData.employee[i].first_name));
  td3.append(document.createTextNode(jsonData.employee[i].last_name));
  td4.append(document.createTextNode(jsonData.employee[i].middle_name));
  td4_job.append(document.createTextNode(jsonData.employee[i].job));
  td5.append(document.createTextNode(jsonData.employee[i].primary_phone_no));
  td6.append(document.createTextNode(jsonData.employee[i].secondary_phone_no));
  td7.append(document.createTextNode(jsonData.employee[i].email));
  td8.append(document.createTextNode(jsonData.employee[i].address));
  td9.append(view_ep_doc_btn);
  td10.append(btn2);

  ta_row.appendChild(td1);
  ta_row.appendChild(td2);
  ta_row.appendChild(td3);
  ta_row.appendChild(td4);
  ta_row.appendChild(td4_job);
  ta_row.appendChild(td5);
  ta_row.appendChild(td6);
  ta_row.appendChild(td7);
  ta_row.appendChild(td8);
  ta_row.appendChild(td9);
  ta_row.appendChild(td10);

  table.appendChild(ta_row);
  }
  var rpObject = document.getElementById("crea_emp_display001");
  document.getElementById("emp_disp_div001").replaceChild(table,rpObject);
}

$.fn.get_employee_doc_f_display = function(id){
  $.get("http://"+local_server+":5000/get_employee_doc",
{
  r_empl_id:id
},
function(result){
var dec_data = decrypt_data(result);
process_get_employee_doc_f_display(dec_data);
});
}

$.fn.delete_employee = function(id,job){
  $.get("http://"+local_server+":5000/delet_employee",
{
  r_empl_id:id,
  category:job
},
function(result){
  update();
});
}

$.fn.check_professional_loged_in = function(){
  $.get("http://"+local_server+":5000/get_professional_logedin_id",
{},
function(result){
  process_check_professional_loged_in(result);
});
}

$.fn.logoutHSD = function(){
  $.get("http://"+local_server+":5000/logout_professional",
{},
function(result){
  process_logoutHSD();
});
}
//do stuff on document load
$(document).ready(function(){
  add_styles_to_sugestionHHA();
});

function add_styles_to_sugestionHHA(){
  var divs = document.getElementsByClassName("eac-square");
  divs[0].style.width = "100%";
}

function delete_employee_fH(id,fname,lname,job){
  var delete_permission = confirm("Are you sure you want to delete "+fname+" "+lname);
  if(delete_permission){
    $.fn.delete_employee(id,job);
  }
  update()
}

function process_get_employee_doc_f_display(data){
  var jsonData = JSON.parse(data);
 
var modal_body_row = document.createElement("div");
modal_body_row.setAttribute("class","row");
modal_body_row.setAttribute("id","modal_body_row");
  for (i in jsonData.doc) {
var div1 = document.createElement("div");
div1.setAttribute("class","col-md-3");
div1.setAttribute("style","padding:10px");
var a = document.createElement("a");
a.setAttribute("href","http://"+local_server+":4417/employee/"+jsonData.doc[i].employee_id+"/doc/"+jsonData.doc[i].file_name);
a.setAttribute("download","true");
var div2 = document.createElement("div");
div2.setAttribute("class","view overlay border border-light rounded mb-0 waves-effect waves-light");
div2.setAttribute("style","height:130px; width: 150px;text-align: center; cursor: pointer;");
var image = document.createElement("img");
image.setAttribute("style","width: 80px; height:80px; border:none; display: inline-block;");
image.setAttribute("src","img/appIcons/file.png");
var strong = document.createElement("strong");
var div3 = document.createElement("div");
div3.setAttribute("style","color: #808080;");
div3.append(document.createTextNode(jsonData.doc[i].file_name))
var div4 = document.createElement("div");
div4.setAttribute("class","mask flex-center rgba-blue-strong");
var p = document.createElement("p");
p.setAttribute("class","white-text");
var b = document.createElement("b");
b.append(document.createTextNode("click to doawnload"));

p.appendChild(b);
div4.appendChild(p);

strong.appendChild(div3);

div2.appendChild(image);
div2.appendChild(strong);
div2.appendChild(div4);

a.appendChild(div2);

div1.appendChild(a);

modal_body_row.appendChild(div1);
}
var pr_modal_body_row = document.getElementById("modal_body_row");
document.getElementById("modal_body").replaceChild(modal_body_row,pr_modal_body_row);

}

function process_check_professional_loged_in(id){
  var jsondata = JSON.parse(id);
  var jsonid = jsondata.$oid
  document.getElementById('pr_profile_picSSG').src = 'http://'+local_server+':4417/employee/'+jsonid+'/profile/usr_profile.jpg';
}

function process_logoutHSD(){
  window.location.href="index.html";
}

function update(){
  $.fn.get_employees_00();
  $.fn.check_professional_loged_in();
  setTimeout(update2,10000);
}
function update2(){
  setTimeout(update,10000);
}


