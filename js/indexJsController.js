$('#tipSlider').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    centerPadding: "10px",
    draggable: true,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    arrows: true,
    prevArrow: false,
    nextArrow: false
  });

  function getE(id){
      return document.getElementById(id);
  }

  new jBox('Modal', {
    attach:"#doc_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Doctor Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/Doctor.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeD1" onkeypress="return runScript(event,'dde1')" class="form-control">
                      <label for="dde1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeD2" onkeypress="return runScript(event,'dde2')" class="form-control">
                      <label for="dde1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Doctor','ddeD')"><span id="ddeDT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeD_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#pharm_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Pharmacist Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/pharm.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeP1" onkeypress="return runScript(event,'ddeP1')" class="form-control">
                      <label for="dde1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeP2" onkeypress="return runScript(event,'ddeP2')" class="form-control">
                      <label for="dde1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Pharmacist','ddeP')"><span id="ddePT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeP_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#nurse_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Nurse Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:450px; height:380px;" src="img/nurse.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeN1" onkeypress="return runScript(event,'ddeN1')" class="form-control">
                      <label for="dde1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeN2" onkeypress="return runScript(event,'ddeN2')" class="form-control">
                      <label for="dde1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Nurse','ddeN')"><span id="ddeNT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeN_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#rec_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Records-Manager Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/record.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeR1" onkeypress="return runScript(event,'ddeR1')" class="form-control">
                      <label for="dde1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeR2" onkeypress="return runScript(event,'ddeR2')" class="form-control">
                      <label for="dde1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Record_manager','ddeR')"><span id="ddeRT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeR_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#radio_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Radiographer Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/radio.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeRa1" onkeypress="return runScript(event,'ddeRa1')" class="form-control">
                      <label for="dde1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeRa2" onkeypress="return runScript(event,'ddeRa2')" class="form-control">
                      <label for="dde1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Radiologist','ddeRa')"><span id="ddeRaT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeRa_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#lab_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Lab-Scientist Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/lab.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeL1" onkeypress="return runScript(event,'ddeL1')" class="form-control">
                      <label for="dde1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeL2" onkeypress="return runScript(event,'ddeL2')" class="form-control">
                      <label for="dde1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('LabScientist','ddeL')"><span id="ddeLT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeL_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#busry_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Bursery Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/busry.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeB1" onkeypress="return runScript(event,'ddeB1')" class="form-control">
                      <label for="ddeB1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeB2" onkeypress="return runScript(event,'ddeB2')" class="form-control">
                      <label for="ddeB1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Bursery','ddeB')"><span id="ddeBT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeB_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });

  new jBox('Modal', {
    attach:"#admin_lBtnID",
    width: 800,
    height:500,
    padding:0,
    title: 'Admin Login',
    overlay: true,
    createOnInit: true,
    
    content: `<div> 
    <div class="row" style="padding:0px">
    <div class="col-md-7" style="height:400px; overflow-x: hidden; padding:0px">
    <img style="width:500px; height:400px;" src="img/admin.png">
    </div>
    <div class="col-md-5" style="height:400px;">
    <div style="font-size:30px;">Login</div>
    <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="email" id="ddeA1" onkeypress="return runScript(event,'ddeA1')" class="form-control">
                      <label for="ddeA1">Email</label>
                  </div>
              </div>
              </div>
              <div class="form-row">
              <div class="col">
                  <!-- Last name -->
                  <div class="md-form">
                      <input type="password" id="ddeA2" onkeypress="return runScript(event,'ddeA2')" class="form-control">
                      <label for="ddeA1">Password</label>
                  </div>
              </div>
              </div>
              <button class="btn btn-blue" type="button" style="margin:0px; border-radius:50px" onclick="$.fn.submitLoginDetails('Admin_Manager','ddeA')"><span id="ddeAT">Login</span><img src="img/loading_topnav.gif" style="width: 18px; height: 18px; display: none;" id="ddeA_Limg"></button>
              <div style="width:100%; text-align:right; color: blue; cusor:pointer" onclick="">Forget Password?</div>
    </div>
    </div>
    </div>`,
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false,
    onCloseComplete: function(e){
    }
  });
  $.fn.submitLoginDetails = function(profession,id_const){
      getE(id_const+"T").style.display = "none";
      getE(id_const+"_Limg").style.display = "block";
    $.post('http://localhost:5000/login_professional',{
        email_c:$("#"+id_const+"1").val(),
        password_c:$("#"+id_const+"2").val()
    },
    function (result){
        getE(id_const+"T").style.display = "block";
      getE(id_const+"_Limg").style.display = "none";
      if(result === profession){
        if(result === "Doctor"){
            window.location.href="docturs_portal.html";
        }else if(result === "Nurse"){
            window.location.href="nurse_portal.html";
        }else if(result === "LabScientist"){
            window.location.href="labScientistPortal.html";
        }else if(result === "Radiologist"){
            window.location.href="radiogapherPortal.html";
        }else if(result === "Record_manager"){
            window.location.href="records_portal.html";
        }else if(result === "Pharmacist"){
            window.location.href="pharmacisit_portal.html";
        }else if(result === "Admin_Manager"){
            window.location.href="Administartion_portal.html";
        }else if(result === "Bursery"){
            window.location.href="burseryPortal.html";
        }
      }else{
          if(result === "20013"){
            erro_notice_popup("This is Account is already Loged in on another machine");
          }else{
            erro_notice_popup("This is Not a Registerd "+profession+"s Account");
          }
        
      }
});
}

function erro_notice_popup(data){
    var confirm_remove = new jBox('Modal', {
      width:400,
      title:"<div style='color:red'><b>Erro</b></div>",
      content:"<div style='text-align:center;'>"+data+"</div><div style='text-align:center'><button class='btn btn-red' style='display:inline-block' id='erro_modal_close_btnID'>OK</button></div>",
      overlay: false,
      createOnInit: true,
      draggable: 'title',
      repositionOnOpen: false,
      repositionOnContent: false,
      onCreated:function(){
        $('#erro_modal_close_btnID').click(function(){
          confirm_remove.close();
          confirm_remove.destroy();
        });
      },
      onClose:function(){
      }
    });
    confirm_remove.open();
  }

  function start(){
    $.fn.playNextVid();
  }
  $.fn.playNextVid = function(){
    getE("vedioAD").style.height = (window.screen.availHeight/2)+"px";
  }
  start();