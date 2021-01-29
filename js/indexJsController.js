var static_var = {
    profession:""
}
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


  $.fn.submitLoginDetails = function(){
      var profession = static_var.profession;
      getE("loginBtnTXT").style.display = "none";
      getE("loginBtnLoader").style.display = "inline-block";
    $.get('http://localhost:3130/login_professional',{
        email_c:$("#loginEmail").val(),
        password_c:$("#loginPassword").val()
    },
    function (result){
        getE("loginBtnTXT").style.display = "block";
      getE("loginBtnLoader").style.display = "none";
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

function showLoginPane(profession){
    static_var.profession = profession;
    insert_out_anim_for_loginPane_to_pf();
}

function showModulePane(){
    insert_out_anim_for_modulePane_to_pf();
}

function insert_out_anim_for_loginPane_to_pf(){
    document.getElementById("modulePane").classList.add("zoomOut");
    setTimeout(insert_out_anim_for_loginPane_to_pf_sub,300);
  }
  
  function insert_out_anim_for_loginPane_to_pf_sub(){
  document.getElementById("modulePane").style.display = "none";
  document.getElementById("modulePane").classList.remove("zoomOut");
  document.getElementById("loginPane").style.display = "block";
  document.getElementById("loginPane").classList.add("zoomIn");
    setTimeout(remove_out_anim_for_loginPane_to_pf,300);
  }
  
  function remove_out_anim_for_loginPane_to_pf(){
  document.getElementById("loginPane").classList.remove("zoomIn");
  }

  function insert_out_anim_for_modulePane_to_pf(){
    document.getElementById("loginPane").classList.add("zoomOut");
    setTimeout(insert_out_anim_for_modulePane_to_pf_sub,300);
  }
  
  function insert_out_anim_for_modulePane_to_pf_sub(){
  document.getElementById("loginPane").style.display = "none";
  document.getElementById("loginPane").classList.remove("zoomOut");
  document.getElementById("modulePane").style.display = "block";
  document.getElementById("modulePane").classList.add("zoomIn");
    setTimeout(remove_out_anim_for_modulePane_to_pf,300);
  }
  
  function remove_out_anim_for_modulePane_to_pf(){
  document.getElementById("loginPane").classList.remove("zoomIn");
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
    
  }
  start();