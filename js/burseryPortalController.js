
var local_server = 'http://127.0.0.1:5000';
var static_data = {
  prv_btn_count:0,
  prv_prv_btn_count:0,
  num_cur_r_e:0,
  search_input:0,
  unattended_patients:0,
  attended_patients:0,
  prv_unattended_patients:0,
  prv_attended_patients:0,
  serverDate:'',
  recPersonelName:'',
  instiName:'',
  assigned_patients:[],
  assigned_pattient_btnS_count:0,
  curr_assigned_patientID:'',
  //usrd details
  usrID:'',
  usrName:'',
  usrAddress:'',
  usrEmail:'',
  usrAge:'',
  usrSex:'',
  usrPhoneNo:'',
  usrPatientId:'',
  usrheight:'',
  usrOccup:'',
  //usr Health care providers info
  usrH_Name:'',
  usrH_Address:'',
  usrH_NHIS_NO:'',
  usrH_HMO_NO:'',
  usrH_TEL_FAX:'',

  // current form details
  formID:'',
  formCategory:'',
  curr_wkr_file_id:'',

  // module operations details
  current_active_dispRecTab:'',
  file_input_lf_index:''
};  
static_data.usrID = '5d43f2debc322bdc6c62d77b';
var wk_inserted_id = '';
function tab_pane1ClickAction (){
  $.fn.bottom_dispense_pane_up();
if(document.getElementById("follow-tab-classic").classList.contains("records_lower_pane_active")){
    document.getElementById("follow-tab-classic").classList.remove("records_lower_pane_active");
}
if(document.getElementById("contact-tab-classic").classList.contains("records_lower_pane_active")){
    document.getElementById("contact-tab-classic").classList.remove("records_lower_pane_active");
}
if(document.getElementById("profile-tab-classic").classList.contains("v_text_whiteFF")){
    document.getElementById("profile-tab-classic").classList.remove("v_text_whiteFF");
}
if(document.getElementById("contact-tab-classic2").classList.contains("records_lower_pane_active")){
    document.getElementById("contact-tab-classic2").classList.remove("records_lower_pane_active");
}
if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
    document.getElementById("note-btn").classList.remove("records_lower_pane_active");
}
document.getElementById("profile-tab-classic").classList.add("records_lower_pane_active");
document.getElementById("contact-tab-classic").classList.add("v_text_whiteFF");
document.getElementById("follow-tab-classic").classList.add("v_text_whiteFF");
document.getElementById("contact-tab-classic2").classList.add("v_text_whiteFF");
};
function tab_pane2ClickAction (){
  $.fn.bottom_dispense_pane_up();
    if(document.getElementById("follow-tab-classic").classList.contains("v_text_whiteFF")){
        document.getElementById("follow-tab-classic").classList.remove("v_text_whiteFF");
    }
    if(document.getElementById("contact-tab-classic").classList.contains("records_lower_pane_active")){
        document.getElementById("contact-tab-classic").classList.remove("records_lower_pane_active");
    }
    if(document.getElementById("profile-tab-classic").classList.contains("records_lower_pane_active")){
        document.getElementById("profile-tab-classic").classList.remove("records_lower_pane_active");
    }
    if(document.getElementById("contact-tab-classic2").classList.contains("records_lower_pane_active")){
        document.getElementById("contact-tab-classic2").classList.remove("records_lower_pane_active");
    }
    if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
        document.getElementById("note-btn").classList.remove("records_lower_pane_active");
    }
    document.getElementById("follow-tab-classic").classList.add("records_lower_pane_active");
    document.getElementById("contact-tab-classic").classList.add("v_text_whiteFF");
    document.getElementById("profile-tab-classic").classList.add("v_text_whiteFF");
    document.getElementById("contact-tab-classic2").classList.add("v_text_whiteFF");    
}

    function tab_pane3ClickAction (){
      $.fn.bottom_dispense_pane_up();
        if(document.getElementById("follow-tab-classic").classList.contains("records_lower_pane_active")){
            document.getElementById("follow-tab-classic").classList.remove("records_lower_pane_active");
        }
        if(document.getElementById("contact-tab-classic").classList.contains("v_text_whiteFF")){
            document.getElementById("contact-tab-classic").classList.remove("v_text_whiteFF");
        }
        if(document.getElementById("profile-tab-classic").classList.contains("records_lower_pane_active")){
            document.getElementById("profile-tab-classic").classList.remove("records_lower_pane_active");
        }
        if(document.getElementById("contact-tab-classic2").classList.contains("records_lower_pane_active")){
            document.getElementById("contact-tab-classic2").classList.remove("records_lower_pane_active");
        }
        if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
            document.getElementById("note-btn").classList.remove("records_lower_pane_active");
        }
        document.getElementById("contact-tab-classic").classList.add("records_lower_pane_active");
        document.getElementById("follow-tab-classic").classList.add("v_text_whiteFF");
    document.getElementById("profile-tab-classic").classList.add("v_text_whiteFF");
    document.getElementById("contact-tab-classic2").classList.add("v_text_whiteFF");        
}



        function tab_pane4ClickAction (){
          $.fn.bottom_dispense_pane_up();
            if(document.getElementById("follow-tab-classic").classList.contains("records_lower_pane_active")){
                document.getElementById("follow-tab-classic").classList.remove("records_lower_pane_active");
            }
            if(document.getElementById("contact-tab-classic").classList.contains("records_lower_pane_active")){
                document.getElementById("contact-tab-classic").classList.remove("records_lower_pane_active");
            }
            if(document.getElementById("profile-tab-classic").classList.contains("records_lower_pane_active")){
                document.getElementById("profile-tab-classic").classList.remove("records_lower_pane_active");
            }
            if(document.getElementById("contact-tab-classic2").classList.contains("v_text_whiteFF")){
                document.getElementById("contact-tab-classic2").classList.remove("records_lower_pane_active");
            }
            if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
                document.getElementById("note-btn").classList.remove("records_lower_pane_active");
            }
            document.getElementById("contact-tab-classic").classList.add("v_text_whiteFF");
            document.getElementById("follow-tab-classic").classList.add("v_text_whiteFF");
        document.getElementById("profile-tab-classic").classList.add("v_text_whiteFF");
        document.getElementById("contact-tab-classic2").classList.add("records_lower_pane_active");
            }



            function tab_pane5ClickAction (){
              $.fn.bottom_dispense_pane_up();
                if(document.getElementById("follow-tab-classic").classList.contains("records_lower_pane_active")){
                    document.getElementById("follow-tab-classic").classList.remove("records_lower_pane_active");
                }
                if(document.getElementById("contact-tab-classic").classList.contains("records_lower_pane_active")){
                    document.getElementById("contact-tab-classic").classList.remove("records_lower_pane_active");
                }
                if(document.getElementById("profile-tab-classic").classList.contains("records_lower_pane_active")){
                    document.getElementById("profile-tab-classic").classList.remove("records_lower_pane_active");
                }
                if(document.getElementById("contact-tab-classic2").classList.contains("v_text_whiteFF")){
                    document.getElementById("contact-tab-classic2").classList.remove("records_lower_pane_active");
                }
                if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
                    document.getElementById("note-btn").classList.remove("records_lower_pane_active");
                }
            
                document.getElementById("contact-tab-classic").classList.add("v_text_whiteFF");
                document.getElementById("follow-tab-classic").classList.add("v_text_whiteFF");
            document.getElementById("profile-tab-classic").classList.add("v_text_whiteFF");
            document.getElementById("contact-tab-classic2").classList.add("v_text_whiteFF");
            document.getElementById("note-btn").classList.add("records_lower_pane_active");       
        }        


        
/*       lab test pane        */

function lab_test_on_row_as_btn_click(){
    document.getElementById("lab-test-O-main-container").classList.add("fadeOut");
setTimeout(lab_test_on_row_as_btn_anim_complete,500);
}

function lab_test_on_row_as_btn_anim_complete(){
    document.getElementById("lab-test-O-main-container").classList.remove("fadeOut");
    // get and set input to module from db
    document.getElementById("lab-test-O-main-container").classList.add("fadeInLeft");
setTimeout(lab_test_remove_on_row_as_btn_anim_complete,500);
}

function lab_test_remove_on_row_as_btn_anim_complete(){
    document.getElementById("lab-test-O-main-container").classList.remove("fadeInLeft");
}

function lab_test_table_btn_click(){
    document.getElementById("lab_test_O_table").classList.add("fadeOutDown");
setTimeout(lab_test_table_btn_click_complete,500);
}

function lab_test_table_btn_click_complete(){
    document.getElementById("lab_test_O_table").classList.remove("fadeOutDown");
    // get and set input to module from db
    document.getElementById("lab_test_O_table").classList.add("fadeInUp");
setTimeout(lab_test_remove_anim_complete,500);
}

function lab_test_remove_anim_complete(){
    document.getElementById("lab_test_O_table").classList.remove("fadeInUp");
}

/* medications pane */

function medications_on_row_as_btn_click(){
    document.getElementById("medications-O-main-container").classList.add("fadeOut");
setTimeout(medications_on_row_as_btn_anim_complete,500);
}

function medications_on_row_as_btn_anim_complete(){
    document.getElementById("medications-O-main-container").classList.remove("fadeOut");
    // get and set input to module from db
    document.getElementById("medications-O-main-container").classList.add("fadeInLeft");
setTimeout(medications_remove_on_row_as_btn_anim_complete,500);
}

function medications_remove_on_row_as_btn_anim_complete(){
    document.getElementById("medications-O-main-container").classList.remove("fadeInLeft");
}

function medications_table_btn_click(){
    document.getElementById("medications_O_table").classList.add("fadeOutDown");
setTimeout(medications_table_btn_click_complete,500);
}

function medications_table_btn_click_complete(){
    document.getElementById("medications_O_table").classList.remove("fadeOutDown");
    // get and set input to module from db
    document.getElementById("medications_O_table").classList.add("fadeInUp");
setTimeout(medications_remove_anim_complete,500);
}

function medications_remove_anim_complete(){
    document.getElementById("medications_O_table").classList.remove("fadeInUp");
}


/* full record pane */

function full_record_on_row_as_btn_click(){
    document.getElementById("full-record-O-main-container").classList.add("fadeOut");
setTimeout(full_record_on_row_as_btn_anim_complete,400);
}

function full_record_on_row_as_btn_anim_complete(){
    document.getElementById("full-record-O-main-container").classList.remove("fadeOut");
    // get and set input to module from db
    document.getElementById("full-record-O-main-container").classList.add("zoomInDown");
setTimeout(full_record_remove_on_row_as_btn_anim_complete,400);
}

function full_record_remove_on_row_as_btn_anim_complete(){
    document.getElementById("full-record-O-main-container").classList.remove("zoomInDown");
}

function full_record_table_btn_click(){
    document.getElementById("full_record_O_table").classList.add("fadeOutDown");
setTimeout(full_record_table_btn_click_complete,400);
}

function full_record_table_btn_click_complete(){
    document.getElementById("full_record_O_table").classList.remove("fadeOutDown");
    // get and set input to module from db
    document.getElementById("full_record_O_table").classList.add("fadeInUp");
setTimeout(full_record_remove_anim_complete,400);
}

function full_record_remove_anim_complete(){
    document.getElementById("full_record_O_table").classList.remove("fadeInUp");
}

function insert_out_anim_for_lw_pr_pane(){
    document.getElementById("v_pr_form_container").classList.add("slideOutDown");
    setTimeout(remove_out_anim_for_lw_pr_pane,300);
}

function remove_out_anim_for_lw_pr_pane(){
    document.getElementById("v_pr_form_container").classList.remove("slideOutDown");
document.getElementById("main_patient_fragment").style.display = "none";
}



function insert_in_anim_for_lw_pr_pane(){
    document.getElementById("main_patient_fragment").style.display = "block";
    document.getElementById("v_pr_form_container").classList.add("slideInUp");
    setTimeout(remove_in_anim_for_lw_pr_pane,500);
}

function remove_in_anim_for_lw_pr_pane(){
    document.getElementById("v_pr_form_container").classList.remove("slideInUp");
}


function set_patients_main_fragment(id,assignID){
  static_data.usrID = id;
  $.get('http://localhost:3130/get_currOpratP_coll',{
  },
  function (result){
    document.getElementById("main_addpatient_wut_fragment").style.display = "none";
    document.getElementById("main_patient_fragment").style.display = "none";
    insert_in_anim_for_lw_pr_pane();

    document.getElementById("add_patient").classList.remove("active");
    document.getElementById("patients_wut_id").classList.add("active"); 
    
    get_patient_d_f_static_vars_prd();
    $.fn.getLatest_PrescriptionDwrkBar();
    $.fn.getLatest_LabDwrkBar();
    $.fn.getLatest_RadiographDwrkBar();
    $.fn.getLatest_DispensedDwrkBar();
    
  });
  //get patient data
    
}

    function set_addpatient_main_fragment(){
        insert_out_anim_for_lw_pr_pane();
        document.getElementById("add_patient").style.display = "block";
    
        document.getElementById("patients_wut_id").classList.remove("active");
        document.getElementById("add_patient").classList.add("active");
        show("main_addpatient_wut_fragment");
    }


          function show(id){
            document.getElementById(id).style.display = "block";
            }
            
            function hide(id){
            document.getElementById(id).style.display = "none";
            }

          function display_rejected_details(){
            document.getElementById("rp_details_modal").classList.add("slideInUp");
            show("rp_details_modal");
            setTimeout(remove_last_rp_modal_anim,400);
            }
            
            function remove_last_rp_modal_anim(){
              document.getElementById("rp_details_modal").classList.remove("slideInUp");
            }

            function cancel_rejected_details(){
                document.getElementById("rp_details_modal").classList.add("slideOutDown");
                setTimeout(remove_last_cancel_rp_modal_anim,300);
                }
                
                function remove_last_cancel_rp_modal_anim(){
                  document.getElementById("rp_details_modal").classList.remove("slideOutDown");
                  hide("rp_details_modal");
                }

                function process_normal_search_p_click(id){
                  static_data.usrID = id;
                  $.get('http://localhost:3130/set_currOpratP_coll',{
                    usrID:id
                  },
                  function (result){
                    if(result === "11111"){
                      startOnpatientPick();
                  
                      if(check_string_equality(document.getElementById("main_patient_fragment").style.display,"none")){
                        document.getElementById("search_result_fragment").style.display = "none";
                        set_patients_main_fragment(id,'');
                        }else{
                          if(check_string_equality(document.getElementById("idle_fragment_sub").style.display,"block")){
                          document.getElementById("search_result_fragment").style.display = "none";
                          }else{
                            document.getElementById("search_result_fragment").style.display = "block";
                          }
                        }
                      if(check_string_equality(document.getElementById("patient_data_fragment").style.display,"block")){
                        insert_out_anim_for_patient_fragment_to_pf();
                      }else{
                        insert_in_anim_for_idle_fragment();
                      }
                      get_patient_d_f_static_vars_prd();
                      reload_curr_PdispTab();
                    }
                  });
                  
                  }

                function process_referred_patient_click(id){
                  static_data.usrID = id;
                  $.get('http://localhost:3130/set_currOpratP_coll',{
                    usrID:id
                  },
                  function (result){
                    if(result === "11111"){
                  $.fn.check_assigned(static_data.usrID);
                  set_patients_main_fragment();
                  if(check_string_equality(document.getElementById("patient_data_fragment").style.display,"block")){
                    insert_out_anim_for_patient_fragment_to_pf();
                  }else{
                    insert_in_anim_for_idle_fragment();
                  }
                  
                }
              });
            }

                function insert_out_anim_for_patient_fragment_to_pf(){
                  document.getElementById("patient_data_fragment").classList.add("zoomOut");
                  setTimeout(insert_out_anim_for_patient_fragment_to_pf_sub,300);
              }

              function insert_out_anim_for_patient_fragment_to_pf_sub(){
                document.getElementById("patient_data_fragment").style.display = "none";
                document.getElementById("patient_data_fragment").classList.remove("zoomOut");
                document.getElementById("patient_data_fragment").style.display = "block";
                document.getElementById("patient_data_fragment").classList.add("zoomIn");
                  setTimeout(remove_out_anim_for_patient_fragment_to_pf,300);
              }
              
              function remove_out_anim_for_patient_fragment_to_pf(){
                document.getElementById("patient_data_fragment").classList.remove("zoomIn");
              }

                function insert_out_anim_for_idle_fragment(){
                  document.getElementById("patient_data_fragment").classList.add("zoomOut");
                  setTimeout(insert_out_anim_for_idle_fragment_sub,300);
              }

              function insert_out_anim_for_idle_fragment_sub(){
                document.getElementById("patient_data_fragment").style.display = "none";
                document.getElementById("idle_fragment").style.display = "block";
                document.getElementById("idle_fragment_sub").style.display = "block";
                  document.getElementById("idle_fragment_sub").classList.add("zoomIn");
                  setTimeout(remove_out_anim_for_idle_fragment,300);
              }
              
              function remove_out_anim_for_idle_fragment(){
                document.getElementById("patient_data_fragment").classList.remove("zoomOut");
                  document.getElementById("idle_fragment_sub").classList.remove("zoomIn");
                  
              }

              function insert_in_anim_for_idle_fragment(){
                document.getElementById("idle_fragment_sub").classList.add("viosZoomOut");
                setTimeout(insert_in_anim_for_idle_fragment_sub,300);
              }

              function insert_in_anim_for_idle_fragment_sub(){
                document.getElementById("idle_fragment").style.display = "none";
                document.getElementById("patient_data_fragment").style.display = "block";
                document.getElementById("patient_data_fragment").classList.add("zoomIn");
                  setTimeout(remove_in_anim_for_idle_fragment,300);
              }
              
              function remove_in_anim_for_idle_fragment(){
                  document.getElementById("patient_data_fragment").classList.remove("zoomIn");
                  document.getElementById("idle_fragment_sub").classList.remove("viosZoomOut"); 
              }

              function insert_in_anim_for_idle_fragment_search_r(){
                document.getElementById("idle_fragment_sub").classList.add("viosZoomOut");
                setTimeout(insert_in_anim_for_idle_fragment_sub_search_r,300);
              }

              function insert_in_anim_for_idle_fragment_sub_search_r(){
                document.getElementById("idle_fragment_sub").style.display = "none";
                document.getElementById("search_result_fragment").style.display = "block";
                document.getElementById("search_result_fragment").classList.add("zoomIn");
                  setTimeout(remove_in_anim_for_idle_fragment_search_r,300);
              }
              
              function remove_in_anim_for_idle_fragment_search_r(){
                  document.getElementById("search_result_fragment").classList.remove("zoomIn");
                  document.getElementById("idle_fragment_sub").classList.remove("viosZoomOut");
              }

              function insert_out_anim_for_idle_fragment_search_r(){
                document.getElementById("search_result_fragment").classList.add("zoomOut");
                setTimeout(insert_out_anim_for_idle_fragment_sub_search_r,300);
              }

              function insert_out_anim_for_idle_fragment_sub_search_r(){
                document.getElementById("search_result_fragment").style.display = "none";
                document.getElementById("idle_fragment").style.display = "none";
                document.getElementById("idle_fragment_sub").style.display = "block";
                document.getElementById("patient_data_fragment").style.display = "block";
                document.getElementById("patient_data_fragment").classList.add("zoomIn");
                  setTimeout(remove_out_anim_for_idle_fragment_search_r,300);
              }
              
              function remove_out_anim_for_idle_fragment_search_r(){
                  document.getElementById("search_result_fragment").classList.remove("zoomOut");
                  document.getElementById("patient_data_fragment").classList.remove("zoomIn");
              }

              
              function insert_out_anim_for_idle_fragment_search_r_to_idle_sub(){
                document.getElementById("search_result_fragment").classList.add("zoomOut");
                setTimeout(insert_out_anim_for_idle_fragment_sub_search_r_to_idle_sub,300);
              }

              function insert_out_anim_for_idle_fragment_sub_search_r_to_idle_sub(){
                document.getElementById("search_result_fragment").style.display = "none";
                document.getElementById("idle_fragment_sub").style.display = "block";
                document.getElementById("idle_fragment_sub").classList.add("zoomIn");
                  setTimeout(remove_out_anim_for_idle_fragment_search_r_to_idle_sub,300);
              }
              
              function remove_out_anim_for_idle_fragment_search_r_to_idle_sub(){
                  document.getElementById("search_result_fragment").classList.remove("zoomOut");
                  document.getElementById("idle_fragment_sub").classList.remove("zoomIn");
              }

              // function insert_in_anim_for_search_r_prv_btn(mdv,replObject){
              //   document.getElementById("search_result_fragment").classList.add("fadeOut");
              //   setTimeout(insert_in_anim_for_search_r_prv_btn_sub(mdv,replObject),300);
              // }

              // function insert_in_anim_for_search_r_prv_btn_sub(mdv,replObject){
              //   document.getElementById("search_result_fragment").style.display = "none";
              //   document.getElementById("search_result_fragment").replaceChild(mdv,replObject);
              //   document.getElementById("search_result_fragment").classList.remove("fadeOut");
              //   document.getElementById("search_result_fragment").style.display = "block";
              //   document.getElementById("search_result_fragment").classList.add("fadeIn");
              //     setTimeout(remove_in_anim_for_search_r_prv_btn,300);
              // }
              
              // function remove_in_anim_for_search_r_prv_btn(){
              //     document.getElementById("search_result_fragment").classList.remove("fadeIn");
              // }

                function insert_out_anim_for_chart(){
                    document.getElementById("chart_inner").classList.add("fadeOut");
                    setTimeout(remove_out_anim_for_chart,300);
                }
                
                function remove_out_anim_for_chart(){
                    document.getElementById("chart_inner").classList.remove("fadeOut");
                document.getElementById("chart_inner").style.display = "none";
                // get selected refered patient data
                setTimeout(insert_in_anim_for_chart,300);
                }

                function insert_in_anim_for_chart(){
                    document.getElementById("chart_inner").style.display = "block";
                    document.getElementById("chart_inner").classList.add("fadein");
                    setTimeout(remove_in_anim_for_chart,300);
                }
                
                function remove_in_anim_for_chart(){
                    document.getElementById("chart_inner").classList.remove("fadein");
                }

                
                   var popers_HA11 = [];
                   function runScript(e,id) {
                    if (e.keyCode == 13) {
                         return false;
                    }
                    getE(id).style.background = "white";
                    var count = 0;
                    while(count < popers_HA11.length){
                        popers_HA11[count].destroy();
                        count = count + 1
                    }
                  }

                  


                  var search_input_e = document.querySelector("#idle_searchBar");
                  search_input_e.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      static_data.search_input = 0;
                      reset_wkr_var_search_r();
                      document.getElementById('loading_anim').style.display = "block";
                      $.fn.search_Patient_idleF('');
                    }
                  });

                  var search_input_top_nav = document.querySelector("#search_patient_input");
                  search_input_top_nav.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      static_data.search_input = 1;
                      reset_wkr_var_search_r();
                      document.getElementById('top_nav_loading_anim').style.display = "block";
                      set_patients_main_fragment();
                      $.fn.search_Patient_top_nav('');
                    }
                  });

                  $.fn.Lfocus = function(id) {
                    $(id).focus();
                  }; 

        function submit_data(){
            add_patients_submission();
        }

        function getE(ID){
            return document.getElementById(ID);
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
         $.fn.change_text = function(id,text){
            $( "#"+id ).text(function( index ) {
              return text;
            });
          }
        function add_patients_submission(){
            var can_submit = true;
            var first_name = getE('dde1').value;
            var last_name = getE('dde2').value;
            var middle_name = getE('dde3').value;
            var email = getE('dde4').value;
            var pr_phone_no = getE('dde5').value;
            var home_address = getE('dde6').value;
            var date_of_birth = getE('dde7').value;
            var occupation = getE('dde8').value;
            var next_of_kin = getE('dde9').value;
            var age = getE('dde10').value;
            var height = getE('dde11').value;
            var sex = getE('dde12').value;
            var allergies = getE('dde13').value;
            var department = getE('dde14').value;
            var patientno = getE('dde15').value;
            var popperInstance = null;
            if(can_submit){
              if (check_empt('dde1') == 1) {
                getE('dde1').style.background = "#ff9999";
                $.fn.change_text('poopertextinner','Empty field');
                 popperInstance = new Popper(getE('dde1'), getE('poppertext'), {
                  placement: 'bottom'
                });
                popers_HA11.push(popperInstance);
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
              popers_HA11.push(popperInstance);
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
              popers_HA11.push(popperInstance);
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
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde4').style.background = "white";
             
              if(check_email('dde4') == 0){
                getE('dde4').style.background = "#ff9999";
                $.fn.change_text('poopertext4inner','Wrong email format');
                popperInstance = new Popper(getE('dde4'), getE('poppertext4'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              getE('poppertext4').style.display = 'block';
              can_submit = false;
              }else{
                getE('dde4').style.background = "white";
                if(check_contain_space('dde4') == 1){
                  getE('dde4').style.background = "#ff9999";
                  $.fn.change_text('poopertext4inner','Email should not have space');
                  popperInstance = new Popper(getE('dde4'), getE('poppertext4'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              getE('poppertext4').style.display = 'block';
              can_submit = false;
                }else{
                  getE('dde4').style.background = "white";
                  can_submit = true;
                }
              }

            }
          }

          if(can_submit){
            if (check_empt('dde5') == 1) {
              getE('dde5').style.background = "#ff9999";
              $.fn.change_text('poopertext5inner','Empty field');
              popperInstance = new Popper(getE('dde5'), getE('poppertext5'), {
                placement: 'bottom'
              });
              alert("herepp");
              popers_HA11.push(popperInstance);
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
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde6').style.background = "white";
              can_submit = true;
            }
          }

          if(can_submit){
            if (check_empt('dde7') == 1) {
              getE('dde7').style.background = "#ff9999";
              $.fn.change_text('poopertext7inner','Empty field');
              popperInstance = new Popper(getE('dde7'), getE('poppertext7'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde7').style.background = "white";
              can_submit = true;
            }
          }

          if(can_submit){
            if (check_empt('dde8') == 1) {
              getE('dde8').style.background = "#ff9999";
              $.fn.change_text('poopertext8inner','Empty field');
              popperInstance = new Popper(getE('dde8'), getE('poppertext8'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde8').style.background = "white";
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
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde9').style.background = "white";
              can_submit = true;
            }
          }

          if(can_submit){
            if (check_empt('dde10') == 1) {
              getE('dde10').style.background = "#ff10101010";
              $.fn.change_text('poopertext10inner','Empty field');
              popperInstance = new Popper(getE('dde10'), getE('poppertext10'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde10').style.background = "white";
              can_submit = true;
            }
          }

          if(can_submit){
            if (check_empt('dde11') == 1) {
              getE('dde11').style.background = "#ff10101010";
              $.fn.change_text('poopertext11inner','Empty field');
              popperInstance = new Popper(getE('dde11'), getE('poppertext11'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde11').style.background = "white";
              can_submit = true;
            }
          }

          if(can_submit){
            if (check_empt('dde12') == 1) {
              getE('dde12').style.background = "#ff10101010";
              $.fn.change_text('poopertext12inner','Empty field');
              popperInstance = new Popper(getE('dde12'), getE('poppertext12'), {
                placement: 'bottom'
              });
              popers_HA11.push(popperInstance);
              can_submit = false;
            }else{
              getE('dde12').style.background = "white";
              can_submit = true;
            }
          }


            if (can_submit == true) {
              $.fn.submit_employee_reg(first_name,last_name,middle_name,email,pr_phone_no,home_address,date_of_birth,
                occupation,next_of_kin,age,height,sex,allergies,department,patientno);
            }

          }
          $.fn.check_professional_loged_in = function(){
            $.get("http://localhost:5000/get_professional_logedin_id",
          {},
          function(result){
            process_check_professional_loged_in(result);
          });
          }

          $.fn.check_assigned = function(usrID){
            $.get("http://localhost:3130/check_if_p_is_assigned",
          {
            usrID:usrID
          },
          function(result){
            var resultInt = parseInt(result);
            if(resultInt == 11111){
              add_assigned_button();
            }else{
              remove_assigned_button();
            }
          });
          }

          $.fn.disp_assigned_details = function(usrID){
            $.get("http://localhost:3130/get_assigned_details",
          {
            usrID:usrID
          },
          function(result){
              var resultInt = parseInt(result);
            if(resultInt == 1110014){
              var notice = new jBox('Notice', {
                content: 'Patient Not Assigned or does Not Exist',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else if(resultInt == 1110012){
              var notice = new jBox('Notice', {
                content: 'Erro geting Assigned Details',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else if(resultInt == 1110016){
              var notice = new jBox('Notice', {
                content: 'Erro geting Assigned Details',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else if(resultInt == 1110011){
              var notice = new jBox('Notice', {
                content: 'Node not permitted',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else if(resultInt == 1110013){
              var notice = new jBox('Notice', {
                content: 'You do not have clerance for this operation',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else{
             var jb_disp = new jBox('Modal', {
               width:'400px',
                title: 'Assigned to:',
                content: '<div><b>'+result.professional_job+'</b><div><div>'+result.professional_name+'</div><hr><div><b>By:</b><div><div>'+result.assigned_by_name+'</div><hr><div><b>Date --- Time:</b><div><div>'+result.date+' --------- '+result.time+'</div>'
              });
              jb_disp.open();
            }
            
                           
            
          });
          }

          $.fn.search_Patient_idleF = function(skip){
            var tosearch = $('#idle_searchBar').val();
            document.getElementById('search_txt_wkr_txt').innerHTML = "Search results for "+tosearch;
            $.get("http://localhost:3130/search_patient",
          {
            tosearch:tosearch,
            skip:skip
          },
          function(result){
            process_search_Patient_idleF(result);
          });
          }

          $.fn.search_Patient_top_nav = function(skip){
            var tosearch = $('#search_patient_input').val();
            document.getElementById('search_txt_wkr_txt').innerHTML = "Search results for "+tosearch;
            $.get("http://localhost:3130/search_patient",
          {
            tosearch:tosearch,
            skip:skip
          },
          function(result){
            process_search_Patient_top_nav(result);
          });
          }

          $.fn.search_Patient_idleF_next = function(skip){
            var tosearch = $('#idle_searchBar').val();
            document.getElementById('search_txt_wkr_txt').innerHTML = "Search results for "+tosearch;
            $.get("http://localhost:3130/search_patient",
          {
            tosearch:tosearch,
            skip:skip
          },
          function(result){
            process_search_Patient_idleF_next(result);
          });
          }

          $.fn.search_Patient_idleF_next_top_nav = function(skip){
            var tosearch = $('#search_patient_input').val();
            document.getElementById('search_txt_wkr_txt').innerHTML = "Search results for "+tosearch;
            $.get("http://localhost:3130/search_patient",
          {
            tosearch:tosearch,
            skip:skip
          },
          function(result){
            process_search_Patient_idleF_next(result);
          });
          }

          $.fn.search_Patient_r_prvbtn = function(skip){
            var tosearch = "";
            if(static_data.search_input == 1){
              tosearch = $('#search_patient_input').val();
            }else{
              tosearch = $('#idle_searchBar').val();
            }
            
            document.getElementById('search_txt_wkr_txt').innerHTML = "Search results for "+tosearch;
            $.get("http://localhost:3130/search_patient",
          {
            tosearch:tosearch,
            skip:skip
          },
          function(result){
            process_search_Patient_r_prvbtn(result);
          });
          }

          $.fn.logoutHSD = function(){
            $.get("http://localhost:5000/logout_professional",
          {},
          function(result){
            process_logoutHSD();
          });
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


          $.fn.bottom_dispense_pane_up = function() {
            $('#myClassicTabContent').show();
            var checkhasuplogo = $('#push_bottom_dispense_pane_up_id').hasClass('fa-arrow-up');
            if(checkhasuplogo){
              $('#push_bottom_dispense_pane_up_id').removeClass('fa-arrow-up');
              $('#push_bottom_dispense_pane_up_id').addClass('fa-arrow-down');
            }
          }; 

          $.fn.bottom_dispense_pane_down = function() {
            $('#myClassicTabContent').hide();
            var checkhasuplogo = $('#push_bottom_dispense_pane_up_id').hasClass('fa-arrow-down');
            if(checkhasuplogo){
              $('#push_bottom_dispense_pane_up_id').removeClass('fa-arrow-down');
              $('#push_bottom_dispense_pane_up_id').addClass('fa-arrow-up');
            }
          }; 

          

          $.fn.bottom_dispense_pane_button_press = function() {
            if($("#myClassicTabContent").is(":hidden")){
              $.fn.bottom_dispense_pane_up();
            }else{
              $.fn.bottom_dispense_pane_down();
            }
          };

          function process_check_professional_loged_in(id){
            var jsondata = JSON.parse(id);
            var jsonid = jsondata.$oid
            document.getElementById('pr_profile_picSSG').src = 'http://localhost:4417/employee/'+jsonid+'/profile/usr_profile.jpg';
          }
          function process_logoutHSD(){
            window.location.href="index.html";
          }


          function process_search_Patient_idleF(e){
            document.getElementById('loading_anim').style.display = "none";
            document.getElementById('top_nav_loading_anim').style.display = "none";
            $.fn.check_assigned(static_data.usrID);
            var mdv = document.createElement("div");
            mdv.setAttribute("id","idle_ps_r");
            mdv.setAttribute("style","padding-left: 200px;");
            e.forEach(e => {
              var dv1 = document.createElement("div");
              dv1.setAttribute("class","row viosSearchR_div");
              dv1.setAttribute("style","height: 220px; width: 50%; padding-top: 10px;");
              dv1.setAttribute("onclick","process_idle_search_hitEnter_re_click('"+e._id+"')");
              var dv2 = document.createElement("div");
              dv2.setAttribute("class","col-md-2");
              dv2.setAttribute("style","padding-right: 100px;");
              var img = document.createElement("img");
              img.setAttribute("style","height: 100px; width: 100px;");
              img.setAttribute("src","http://localhost:4417/patient/"+e._id+"/profile/usr_profile.jpg")
              var dv3 = document.createElement("div");
              dv3.setAttribute("class","col-md-7");
              dv3.setAttribute("style","text-align: left;");
              var dv4 = document.createElement("div");
              dv4.setAttribute("style","font-size: 30px; color: #3f5c80;");
              var tex1 = document.createTextNode(e.first_name+" "+e.last_name+" "+e.middle_name);
              var dv5 = document.createElement("div");
              dv5.setAttribute("style","font-size: 15px; color: #006621;");
              var tex2 = document.createTextNode(e._id);
              var dv6 = document.createElement("div");
              dv6.setAttribute("style","font-size: 15px; color: #545454;");
              var tex3 = document.createTextNode("Email: "+e.email);
              var dv7 = document.createElement("div");
              dv7.setAttribute("style","font-size: 15px; color: #545454;");
              var tex4 = document.createTextNode("Phone No: "+e.phone_no);
              var dv8 = document.createElement("div");
              dv8.setAttribute("style","font-size: 15px; color: #545454;");
              var tex5 = document.createTextNode("Sex: "+e.gender);
              var dv9 = document.createElement("div");
              dv9.setAttribute("style","font-size: 15px; color: #545454;");
              var tex6 = document.createTextNode("Age: "+e.age);

              dv1.append(dv2);
              dv2.append(img);
              dv1.append(dv3);
              dv3.append(dv4);
              dv4.append(tex1);
              dv3.append(dv5);
              dv5.append(tex2);
              dv3.append(dv6);
              dv6.append(tex3);
              dv3.append(dv7);
              dv7.append(tex4);
              dv3.append(dv8);
              dv8.append(tex5);
              dv3.append(dv9);
              dv9.append(tex6);

              mdv.append(dv1);
            });
            static_data.prv_prv_btn_count = static_data.prv_btn_count;
            static_data.prv_btn_count+=e.length;
            static_data.num_cur_r_e = e.length;
            if(e.length >= 5){
              var dvbtn = document.createElement("div");
              dvbtn.setAttribute("style","text-align:center");
              var nxtBtn = document.createElement("input");
              nxtBtn.setAttribute("class","btn btn-blue");
              nxtBtn.setAttribute("style","display:inline-block");
              nxtBtn.setAttribute("type","button");
              nxtBtn.setAttribute("value","Next");
              nxtBtn.setAttribute("onClick","$.fn.search_Patient_idleF_next(''+static_data.prv_btn_count)");
              var br = document.createElement("br");
              dvbtn.append(nxtBtn);
              mdv.append(dvbtn);
              mdv.append(br);
            }
            
            var replObject = document.getElementById("idle_ps_r");
            document.getElementById("search_result_fragment").replaceChild(mdv,replObject);
            insert_in_anim_for_idle_fragment_search_r();

          }

          function process_search_Patient_top_nav(e){
            document.getElementById('loading_anim').style.display = "none";
            document.getElementById('top_nav_loading_anim').style.display = "none";
            $.fn.check_assigned(static_data.usrID);
            var mdv = document.createElement("div");
            mdv.setAttribute("id","idle_ps_r");
            mdv.setAttribute("style","padding-left: 200px;");
            e.forEach(e => {
              var dv1 = document.createElement("div");
              dv1.setAttribute("class","row viosSearchR_div");
              dv1.setAttribute("style","height: 220px; width: 50%; padding-top: 10px;");
              dv1.setAttribute("onclick","process_idle_search_hitEnter_re_click('"+e._id+"')");
              var dv2 = document.createElement("div");
              dv2.setAttribute("class","col-md-2");
              dv2.setAttribute("style","padding-right: 100px;");
              var img = document.createElement("img");
              img.setAttribute("style","height: 100px; width: 100px;");
              img.setAttribute("src","http://localhost:4417/patient/"+e._id+"/profile/usr_profile.jpg")
              var dv3 = document.createElement("div");
              dv3.setAttribute("class","col-md-7");
              dv3.setAttribute("style","text-align: left;");
              var dv4 = document.createElement("div");
              dv4.setAttribute("style","font-size: 30px; color: #3f5c80;");
              var tex1 = document.createTextNode(e.first_name+" "+e.last_name+" "+e.middle_name);
              var dv5 = document.createElement("div");
              dv5.setAttribute("style","font-size: 15px; color: #006621;");
              var tex2 = document.createTextNode(e._id);
              var dv6 = document.createElement("div");
              dv6.setAttribute("style","font-size: 15px; color: #545454;");
              var tex3 = document.createTextNode("Email: "+e.email);
              var dv7 = document.createElement("div");
              dv7.setAttribute("style","font-size: 15px; color: #545454;");
              var tex4 = document.createTextNode("Phone No: "+e.phone_no);
              var dv8 = document.createElement("div");
              dv8.setAttribute("style","font-size: 15px; color: #545454;");
              var tex5 = document.createTextNode("Sex: "+e.gender);
              var dv9 = document.createElement("div");
              dv9.setAttribute("style","font-size: 15px; color: #545454;");
              var tex6 = document.createTextNode("Age: "+e.age);

              dv1.append(dv2);
              dv2.append(img);
              dv1.append(dv3);
              dv3.append(dv4);
              dv4.append(tex1);
              dv3.append(dv5);
              dv5.append(tex2);
              dv3.append(dv6);
              dv6.append(tex3);
              dv3.append(dv7);
              dv7.append(tex4);
              dv3.append(dv8);
              dv8.append(tex5);
              dv3.append(dv9);
              dv9.append(tex6);

              mdv.append(dv1);
            });
            static_data.prv_prv_btn_count = static_data.prv_btn_count;
            static_data.prv_btn_count+=e.length;
            static_data.num_cur_r_e = e.length;
            if(e.length >= 5){
              var dvbtn = document.createElement("div");
              dvbtn.setAttribute("style","text-align:center");
              var nxtBtn = document.createElement("input");
              nxtBtn.setAttribute("class","btn btn-blue");
              nxtBtn.setAttribute("style","display:inline-block");
              nxtBtn.setAttribute("type","button");
              nxtBtn.setAttribute("value","Next");
              nxtBtn.setAttribute("onClick","$.fn.search_Patient_idleF_next_top_nav(''+static_data.prv_btn_count)");
              var br = document.createElement("br");
              dvbtn.append(nxtBtn);
              mdv.append(dvbtn);
              mdv.append(br);
            }
            
            var replObject = document.getElementById("idle_ps_r");
            document.getElementById("search_result_fragment").replaceChild(mdv,replObject);
            if(check_string_equality(document.getElementById("idle_fragment_sub").style.display,"none")){
            }else{
              insert_in_anim_for_idle_fragment_search_r(); 
            }

          }

          function process_search_Patient_r_prvbtn(e){
            static_data.usrID = e._id;
            $.get('http://localhost:3130/set_currOpratP_coll',{
              usrID:e._id
            },
            function (result){
              if(result === "11111"){
                var mdv = document.createElement("div");
                mdv.setAttribute("id","idle_ps_r");
                mdv.setAttribute("style","padding-left: 200px;");
                e.forEach(e => {
                  var dv1 = document.createElement("div");
                  dv1.setAttribute("class","row viosSearchR_div");
                  dv1.setAttribute("style","height: 220px; width: 50%; padding-top: 10px;");
                  dv1.setAttribute("onclick","process_idle_search_hitEnter_re_click('"+e._id+"')");
                  var dv2 = document.createElement("div");
                  dv2.setAttribute("class","col-md-2");
                  dv2.setAttribute("style","padding-right: 100px;");
                  var img = document.createElement("img");
                  img.setAttribute("style","height: 100px; width: 100px;");
                  img.setAttribute("src","http://localhost:4417/patient/"+e._id+"/profile/usr_profile.jpg")
                  var dv3 = document.createElement("div");
                  dv3.setAttribute("class","col-md-7");
                  dv3.setAttribute("style","text-align: left;");
                  var dv4 = document.createElement("div");
                  dv4.setAttribute("style","font-size: 30px; color: #3f5c80;");
                  var tex1 = document.createTextNode(e.first_name+" "+e.last_name+" "+e.middle_name);
                  var dv5 = document.createElement("div");
                  dv5.setAttribute("style","font-size: 15px; color: #006621;");
                  var tex2 = document.createTextNode(e._id);
                  var dv6 = document.createElement("div");
                  dv6.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex3 = document.createTextNode("Email: "+e.email);
                  var dv7 = document.createElement("div");
                  dv7.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex4 = document.createTextNode("Phone No: "+e.phone_no);
                  var dv8 = document.createElement("div");
                  dv8.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex5 = document.createTextNode("Sex: "+e.gender);
                  var dv9 = document.createElement("div");
                  dv9.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex6 = document.createTextNode("Age: "+e.age);
              
                  dv1.append(dv2);
                  dv2.append(img);
                  dv1.append(dv3);
                  dv3.append(dv4);
                  dv4.append(tex1);
                  dv3.append(dv5);
                  dv5.append(tex2);
                  dv3.append(dv6);
                  dv6.append(tex3);
                  dv3.append(dv7);
                  dv7.append(tex4);
                  dv3.append(dv8);
                  dv8.append(tex5);
                  dv3.append(dv9);
                  dv9.append(tex6);
              
                  mdv.append(dv1);
                });
                static_data.prv_prv_btn_count = static_data.prv_btn_count;
                static_data.prv_btn_count+=e.length;
                static_data.num_cur_r_e = e.length;
                if(e.length >= 5){
                  var dvbtn = document.createElement("div");
                  dvbtn.setAttribute("style","text-align:center");
                  var nxtBtn = document.createElement("input");
                  nxtBtn.setAttribute("class","btn btn-blue");
                  nxtBtn.setAttribute("style","display:inline-block");
                  nxtBtn.setAttribute("type","button");
                  nxtBtn.setAttribute("value","Next");
                  if(static_data.search_input == 1){
                    nxtBtn.setAttribute("onClick","$.fn.search_Patient_idleF_next_top_nav(''+static_data.prv_btn_count)");
                  }else{
                    nxtBtn.setAttribute("onClick","$.fn.search_Patient_idleF(''+static_data.prv_btn_count)");
                  }
                  
                  var br = document.createElement("br");
                  dvbtn.append(nxtBtn);
                  mdv.append(dvbtn);
                  mdv.append(br);
                }
                
                var replObject = document.getElementById("idle_ps_r");
                // insert_in_anim_for_search_r_prv_btn(mdv,replObject) ------ animatin before display
                document.getElementById("search_result_fragment").replaceChild(mdv,replObject);
                reload_curr_PdispTab();
              }
            });
            
          
          }

          function process_search_Patient_idleF_next(e){
            static_data.usrID = e._id;
            $.get('http://localhost:3130/set_currOpratP_coll',{
              usrID:e._id
            },
            function (result){
              if(result === "11111"){
                var mdv = document.createElement("div");
                mdv.setAttribute("id","idle_ps_r");
                mdv.setAttribute("style","padding-left: 200px;");
                e.forEach(e => {
                  var dv1 = document.createElement("div");
                  dv1.setAttribute("class","row viosSearchR_div");
                  dv1.setAttribute("style","height: 220px; width: 50%; padding-top: 10px;");
                  dv1.setAttribute("onclick","process_idle_search_hitEnter_re_click('"+e._id+"')");
                  var dv2 = document.createElement("div");
                  dv2.setAttribute("class","col-md-2");
                  dv2.setAttribute("style","padding-right: 100px;");
                  var img = document.createElement("img");
                  img.setAttribute("style","height: 100px; width: 100px;");
                  img.setAttribute("src","http://localhost:4417/patient/"+e._id+"/profile/usr_profile.jpg")
                  var dv3 = document.createElement("div");
                  dv3.setAttribute("class","col-md-7");
                  dv3.setAttribute("style","text-align: left;");
                  var dv4 = document.createElement("div");
                  dv4.setAttribute("style","font-size: 30px; color: #3f5c80;");
                  var tex1 = document.createTextNode(e.first_name+" "+e.last_name+" "+e.middle_name);
                  var dv5 = document.createElement("div");
                  dv5.setAttribute("style","font-size: 15px; color: #006621;");
                  var tex2 = document.createTextNode(e._id);
                  var dv6 = document.createElement("div");
                  dv6.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex3 = document.createTextNode("Email: "+e.email);
                  var dv7 = document.createElement("div");
                  dv7.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex4 = document.createTextNode("Phone No: "+e.phone_no);
                  var dv8 = document.createElement("div");
                  dv8.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex5 = document.createTextNode("Sex: "+e.gender);
                  var dv9 = document.createElement("div");
                  dv9.setAttribute("style","font-size: 15px; color: #545454;");
                  var tex6 = document.createTextNode("Age: "+e.age);
              
                  dv1.append(dv2);
                  dv2.append(img);
                  dv1.append(dv3);
                  dv3.append(dv4);
                  dv4.append(tex1);
                  dv3.append(dv5);
                  dv5.append(tex2);
                  dv3.append(dv6);
                  dv6.append(tex3);
                  dv3.append(dv7);
                  dv7.append(tex4);
                  dv3.append(dv8);
                  dv8.append(tex5);
                  dv3.append(dv9);
                  dv9.append(tex6);
              
                  mdv.append(dv1);
                });
                static_data.prv_prv_btn_count = static_data.prv_btn_count;
                static_data.prv_btn_count+=e.length;
                static_data.num_cur_r_e = e.length;
                if(e.length >= 5){
                  var dvbtn = document.createElement("div");
                  dvbtn.setAttribute("style","text-align:center");
                  var nxtBtn = document.createElement("input");
                  nxtBtn.setAttribute("class","btn btn-blue");
                  nxtBtn.setAttribute("style","display:inline-block");
                  nxtBtn.setAttribute("type","button");
                  nxtBtn.setAttribute("value","Next");
                  nxtBtn.setAttribute("onClick","$.fn.search_Patient_idleF(''+static_data.prv_btn_count)");
                  var br = document.createElement("br");
                  dvbtn.append(nxtBtn);
                  mdv.append(dvbtn);
                  mdv.append(br);
                }
                
                var replObject = document.getElementById("idle_ps_r");
                document.getElementById("search_result_fragment").replaceChild(mdv,replObject);
              }
            });
            
          
          }

          arrange_patient_search();
          
          function update(){
            $.fn.check_professional_loged_in();
            setTimeout(update2,3000);
          }
          function update2(){
            setTimeout(update3,3000);
          }
          function update3(){
            setTimeout(update4,3000);
          }
          function update4(){
            setTimeout(update,3000);
          }
          var run_a_p_s = 0;
          function arrange_patient_search(){
            if(run_a_p_s <= 1){
              var object = document.getElementById("search_patient_input");
              object.style.borderBottom = "strong 1px white";
              object.style.borderTop = "none";
              object.style.borderLeft = "none";
              object.style.borderRight = "none";
              object.style.fontStyle = "inherit";
              object.style.fontWeight = "inherit";
              object.style.minWidth = "inherit";
              object.style.padding = "5px";
            }
            run_a_p_s = run_a_p_s + 1;
          }
          function arrange_idle_search_bar(){
            if(run_a_p_s <= 1){
              var object = document.getElementById("idle_searchBar");
              object.style.height = 'calc(2.25rem + 2px)';
              object.style.padding = '.375rem .75rem';
              object.style.fontSize = '1rem';
              object.style.lineHeight = '1.5';
              object.style.color = '#495057';
              object.style.backgroundColor = '#fff';
              object.style.border = '1px solid #ced4da';
              object.style.borderRadius = '.25rem';
              
            }
            run_a_p_s = run_a_p_s + 1;
          }

          function check_string_equality(dat1,dat2){
            var count = 0;
            var result = true;
            while(count < dat1.length){
              if(dat1.charAt(count) !== dat2.charAt(count)){
                result = false;
                break;
              }
              count++;
            }
            return result;
          }

          function process_idle_search_p_click(id_value){
            static_data.usrID = id_value;
            $.get('http://localhost:3130/set_currOpratP_coll',{
                usrID:id_value
              },
              function (result){
                if(result === "11111"){
                  startOnpatientPick();
                  insert_in_anim_for_idle_fragment();
                  reset_wkr_var_search_r();
                  get_patient_d_f_static_vars_prd();
                }
              });
            
            }
            function process_idle_search_hitEnter_re_click(id_value){
              static_data.usrID = id_value;
              $.get('http://localhost:3130/set_currOpratP_coll',{
                  usrID:id_value
                },
                function (result){
                  if(result === "11111"){
                    startOnpatientPick();
                    insert_out_anim_for_idle_fragment_search_r();
                    reset_wkr_var_search_r();
                    $.fn.getLatest_noteDwrkBar();
                  }
                });
              
              }
          function process_prv_search_r_click(){
            if(static_data.prv_prv_btn_count <= 0){
              reset_wkr_var_search_r();
              insert_out_anim_for_idle_fragment_search_r_to_idle_sub();
            }else{
            static_data.prv_btn_count -= static_data.num_cur_r_e;
            static_data.prv_btn_count -= 5;
            $.fn.search_Patient_r_prvbtn(static_data.prv_btn_count);
            }
            
          }

          function search_result_cancel(){
            reset_wkr_var_search_r();
            insert_out_anim_for_idle_fragment_search_r_to_idle_sub();
          }

          function search_patient_s_btn_click(){
            reset_wkr_var_search_r();
            static_data.search_input = 0;
            document.getElementById('loading_anim').style.display = "block";
            $.fn.search_Patient_idleF('');
          }

          function search_patient_to_nav_s_btn_click(){
            reset_wkr_var_search_r();
            set_patients_main_fragment();
            document.getElementById("patient_data_fragment").style.display = "none";
            document.getElementById("idle_fragment").style.display = "block";
            static_data.search_input = 1;
            document.getElementById('top_nav_loading_anim').style.display = "block";
            $.fn.search_Patient_top_nav('');
          }

          function reset_wkr_var_search_r(){
            static_data.prv_btn_count = 0;
            static_data.prv_prv_btn_count = 0;
            static_data.num_cur_r_e = 0;
          }

          


          new jBox('Modal', {
            attach:"#forms_btn_id",
            width: 800,
            height:500,
            title: 'Forms',
            overlay: false,
            createOnInit: true,
            
            content: `<div style="padding-top:30px;"> 
            <div id="formSelectLoaderImg" style="width:100%; text-align:center; display:none;"><img src="img/loading.gif" style="width:50px;height:50px; display:inline-block"></div>
            <div id="formselectionDiv" style="display:none;">
             <div class="row" id="formselectionDivrow">
            </div>
            <a href="formbuilder.html"><button class="btn btn-blue" style="border-radius:100px; height: 10px; padding-top:3px;padding-bottom: 21px; position:absolute; left:80%; top:0.5%;">New Form</button></a>
            </div>
            <div id="selectedForm_displayed" style="display:none"></div>
            </div>`,
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false,
            onCloseComplete: function(e){
              document.getElementById("formselectionDiv").style.display = "none";
              document.getElementById("formSelectLoaderImg").style.display = "block";
              document.getElementById("selectedForm_displayed").style.display = "none";
            }
          });
          $.fn.openFormSelector = function () {
            $("#formSelectLoaderImg").css({"display":"block"});
            $.get('http://localhost:3130/get_formsName_ID',{
          },
          function (result){
            var result_row = $("<div class='row' id='formselectionDivrow'></div>");
              result.forEach(e => {
                result_row.append(`<div class="col-md-2 formSelectionIndic" onClick="$.fn.formSelectClick('`+e._id+`','`+e.category+`')" style="text-align:center"><img src="img/formIcon.png" style="width:70px;height:100px; display:inline-block"><div style="text-align:center; font-size:13px; color:black">`+e.formName+`</div></div>`);
              });
              $("#formselectionDivrow").replaceWith(result_row);
              $("#formSelectLoaderImg").css({"display":"none"});
              $("#formselectionDiv").css({"display":"block"});
          });
          };  
          $.fn.formSelectClick = function(formID,category){
            static_data.formID = formID;
            static_data.formCategory = category;
            $.get('http://localhost:3130/get_raw_form',{
              formID:formID
            },
            function (result){
              var raw_form_res_op = $('<div id="selectedForm_displayed" style="display:none"><button type="button" onclick="$.fn.displayForms_Select()" style="width:50px; background-color:#616161; padding-bottom:3px; cursor:pointer; border: 1px #616161 solid; color:white; box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)"><i class="fa fa-arrow-left"></i></button><div id="formDispDiv">'+result.rawForm+'</div></div>');
              $("#selectedForm_displayed").replaceWith(raw_form_res_op);
              $("#selectedForm_displayed").css({"display":"block"});
              $("#formselectionDiv").css({"display":"none"});
            });
          }
          
          $.fn.displayForms_Select = function(){
            $("#selectedForm_displayed").css({"display":"none"});
              $("#formselectionDiv").css({"display":"block"});
          }
          
          $.fn.startCFormSubmission = function(){
          var properties = {
          value:""
          };
          
          var form_disp_wkr = $("#formDispDiv");
          form_disp_wkr.find(".buttonDiv").replaceWith("");
          form_disp_wkr.find("form").css("padding-bottom","30px");
          // form_disp_wkr.find(".down-pad").css("padding-bottom","20px");
          if(form_disp_wkr.find("form").css("background-color") === "#ffffff" || form_disp_wkr.find("form").css("background-color") === "#f5f5f5" || form_disp_wkr.find("form").css("background-color") === "rgb(255, 255, 255)" ){
          form_disp_wkr.find(".FD_border_tag").attr("style","border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px");
          }else if(form_disp_wkr.find("form").css("background-color") === "rgb(247, 229, 132)" || form_disp_wkr.find("form").css("background-color") === "rgb(236, 248, 126)"
          || form_disp_wkr.find("form").css("background-color") === "#ffff80" || form_disp_wkr.find("form").css("background-color") === "#ffffa6"
          || form_disp_wkr.find("form").css("background-color") === "rgb(135, 221, 250)"
          ){
          form_disp_wkr.find(".FD_border_tag").attr("style","border: 1px solid #9f9b9b; min-height:30px; padding-left: 30px");
          }else{
          form_disp_wkr.find(".FD_border_tag").attr("style","border: 1px solid #f5f5f5; min-height:30px; padding-left: 30px");
          }
          var wkr_disp_inputs = form_disp_wkr.find("input");
          $.each(wkr_disp_inputs, function( i, el ) {
          if(el.type === "radio" || el.type === "checkbox"){  
          if($(el).is(':checked')){
          var idvalue = el.id;
          if(idvalue == null || idvalue ===""){
          }else{
          var splitArray = idvalue.split("_");
          var labelVal = $(el).attr("mlabel");
          var newLabelval = labelVal.replace(" ","_");
          properties.value += "'"+newLabelval+"'"+":'"+el.value+"',";
          }
        }
          el.disabled = true;
          }else if(el.type === "button"){
          var idvalue = el.id;
          if(idvalue == null || idvalue ===""){
          }else{
          var splitArray = idvalue.split("_");
          var labelVal = $("#alterdLabel_"+splitArray[1]).html();
          if(labelVal == null || labelVal === ""){}else{
          var newLabelval = labelVal.replace(" ","_");
          properties.value += "'"+newLabelval+"'"+":'"+el.value+"',";
          $(el).replaceWith('');
          }
        }
        }
          else{
          var idvalue = el.id;
          if(idvalue == null || idvalue ===""){
          }else{
          var splitArray = idvalue.split("_");
          var labelVal = $("#alterdLabel_"+splitArray[1]).html();
          if(labelVal == null || labelVal === ""){}else{
          var newLabelval = labelVal.replace(" ","_");
          properties.value += "'"+newLabelval+"'"+":'"+el.value+"',";
          $(el).replaceWith('<span class="C_INP_P" id="'+el.id+'">'+el.value+'</span>');
          }}
        }
          });
          
          var wkr_disp_select = form_disp_wkr.find("textarea");
          $.each(wkr_disp_select, function( i, el ) {
          var idvalue = el.id;
          if(idvalue == null || idvalue ===""){
          }else{
          var splitArray = idvalue.split("_");
          var labelVal = $("#alterdLabel_"+splitArray[1]).html();
          if(labelVal == null || labelVal === ""){}else{
          var newLabelval = labelVal.replace(" ","_");
          properties.value += "'"+newLabelval+"'"+":'"+el.value+"',";
          $(el).replaceWith('<span class="C_INP_P" id="'+el.id+'">'+el.value+'</span>');
            }}
          });
          
          var wkr_disp_select = form_disp_wkr.find("select");
          $.each(wkr_disp_select, function( i, el ) {
          var idvalue = el.id;
          if(idvalue == null || idvalue ===""){
          }else{
          var splitArray = idvalue.split("_");
          var labelVal = $("#alterdLabel_"+splitArray[1]).html();
          if(labelVal == null || labelVal === ""){}else{
          var newLabelval = labelVal.replace(" ","_");
          properties.value += "'"+newLabelval+"'"+":'"+el.value+"',";
          var selectedValue = $(el).children("option:selected").val();
          $(el).replaceWith('<span class="C_INP_P" id="'+el.id+'">'+selectedValue+'</span>');
            }}
          });
          $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.ajax({
                url: 'http://localhost:3130/add_form_op_data',
                type:'POST',
                contentType:'application/json',
                data: JSON.stringify({
                "category":static_data.formCategory,
                "data":properties.value,
                "formID":static_data.formID,
                "usrID":result_id.usrID
                }),
                success: function(response){
                if(response != null){
                if(response === "1110016"){
                erro_notice_popup("Erro occured while saving form");
                }else if(response === "1110013" || response === "10028"){
                erro_notice_popup("You do not have clerance for this operation");
                }else if(response === "1110012"){
                erro_notice_popup("Erro occured while saving form");
                }else if(response === "1110011"){
                erro_notice_popup("Invalid node");
                }else{
                  
                $.ajax({
                  url: 'http://localhost:3130/add_form_disp_data',
                  type:'POST',
                  contentType:'application/json',
                  data: JSON.stringify({
                  "category":static_data.formCategory,
                  "disp_data":$("#formDispDiv").html(),
                  "formID":static_data.formID,
                  "usrID":result_id.usrID
                  }),
                  success: function(response){
                    if(response != null){
                      if(response === "1110016"){
                        erro_notice_popup("Erro occured while saving form");
                      }else if(response === "1110013" || response === "10028"){
                        erro_notice_popup("You do not have clerance for this operation");
                      }else if(response === "1110012"){
                        erro_notice_popup("Erro occured while saving form");
                      }else if(response === "1110011"){
                        erro_notice_popup("Invalid node");
                      }else{
                        notice_popup('Saved Successfully');
                        reload_curr_PdispTab();
                      }
                      
                    }
                  }
                });
                
                
                
                }
                
                }
                }
                });
            });
          
          }
          
          
          $.fn.getProfandInstiDetails = function(){
          $.get("http://localhost:3130/get_prof_and_institu_name",{
          
          },function (result){
            static_data.recPersonelName = result.fullName;
            static_data.instiName = result.instiName;
          });
          }
          
          $.fn.getProfandInstiDetails();
         
  
          
          // patient record display
          
          function startOnpatientPick(){
            get_patient_d_f_static_vars_prd();
            $.fn.getPaymentSummary();
          }
          function chartTabclick(){
            static_data.current_active_dispRecTab = "chart";
            get_patient_d_f_static_vars_prd();
            $.fn.getPaymentSummary();
          }
          function unPaidTabclick(){
            static_data.current_active_dispRecTab = "radiograph";
            // get all un paid
            
          }
          
          function PrescriptionTabclick(){
            static_data.current_active_dispRecTab = "prescription";
            $.fn.getPrescriptionSelectwithDate_dpr();
            $.fn.getLatest_Prescription();
            
          }
          function get_patient_d_f_static_vars_prd(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $("#patient_pp_pdr").attr("src","http://localhost:4417/patient/"+result_id.usrID+"/profile/usr_profile.jpg");
            $.get("http://localhost:3130/get_patient_d_f_static_vars",
            {
              usrID:result_id.usrID
            },
            function(result){
              getE("usrDetails_disp_div_loader").style.display = "none";
              getE("usrDetails_disp_div").style.display = "block";
              static_data.usrName = result.p_name;
              static_data.usrAddress = result.p_address;
              static_data.usrAge = result.p_age;
              static_data.usrEmail = result.p_email;
              static_data.usrSex = result.p_sex;
              static_data.usrheight = result.p_height;
              static_data.usrPhoneNo = result.p_phone_no;
              static_data.usrPatientId = result.p_patient_no;
              static_data.usrOccup = result.p_occup;
              static_data.usrDept = result.p_Dept;
              static_data.usrFacul = result.p_Facul;
              static_data.usrAlerg = result.p_Alerg;
              static_data.serverDate = result.date;
              static_data.usrH_Name = result.insti_name;
              static_data.usrH_Address = result.indti_address;
              static_data.usrH_NHIS_NO = result.insti_NHIS_NO;
              static_data.usrH_HMO_NO = result.insti_HMO_NO;
              static_data.usrH_TEL_FAX = result.insti_tel_fax;
              $.fn.setChartTab();
            });
            });
            
          }
          $.fn.setChartTab = function(){
            
            $("#patient_name_pdr").text(static_data.usrName);
            if(static_data.usrSex == null || static_data.usrSex === ""){
            $("#patient_md_sexS_pdr").css({"display":"none"});
            }else{
            $("#patient_sex_pdr").text(static_data.usrSex);
            }
            if(static_data.usrSex == null || static_data.usrSex === ""){
              $("#patient_md_sexS_pdr").css({"display":"none"});
            }else{
            $("#patient_sexS_pdr").html(" "+static_data.usrSex);
            }
            if(static_data.usrheight == null || static_data.usrheight === ""){
              $("#patient_md_heightS_pdr").css({"display":"none"});
            }else{
            $("#patient_heightS_pdr").text(" "+static_data.usrheight);//
            }
            if(static_data.usrAge == null || static_data.usrAge === ""){
              $("#patient_md_ageS_pdr").css({"display":"none"});
            }else{
            $("#patient_age_pdr").text(static_data.usrAge);
            $("#patient_md_ageS_pdr").html("<b>Age:</b> "+static_data.usrAge);
            }
            if(static_data.usrPhoneNo == null || static_data.usrPhoneNo === ""){
              $("#patient_md_phone_no_pdr").css({"display":"none"});
            }else{
            $("#patient_phone_no_pdr").text(" "+static_data.usrPhoneNo);
            }
            if(static_data.usrEmail == null || static_data.usrEmail == ""){
              $("#patient_md_email_pdr").css({"display":"none"});
            }else{
            $("#patient_email_pdr").text(" "+static_data.usrEmail);///
            }
            if(static_data.usrOccup == null || static_data.usrOccup === ""){
              $("#patient_md_prof_pdr").css({"display":"none"});
            }else{
            $("#patient_prof_pdr").text(static_data.usrOccup);///
            $("#patient_md_prof_pdr").html("<b>Occupation:</b> "+static_data.usrOccup);
            }
            if(static_data.usrDept == null || static_data.usrDept === ""){
              $("#patient_md_dept_pdr").css({"display":"none"});
            }else{
            $("#patient_dept_pdr").text(static_data.usrDept);//
            }
            if(static_data.usrFacul == null || static_data.usrFacul === ""){
              $("#patient_md_facul_pdr").css({"display":"none"});
            }else{
            $("#patient_facul_pdr").text(static_data.usrFacul);//
            }
            if(static_data.usrAlerg == null || static_data.usrAlerg === ""){
              $("#patient_md_alerg_pdr").css({"display":"none"});
            }else{
            $("#patient_alerg_pdr").text(" "+static_data.usrAlerg);//
            }
          
          }
          
          $.fn.getPaymentSummary = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              var startDate = moment().subtract(174,'days');
            var endDate = moment();
            $.get('http://localhost:3130/get_latest_prescription',{
              range1:startDate.format('MM/DD/YYYY'),
              range2:endDate.format('MM/DD/YYYY'),
              usrID:result_id.usrID
            },
            function (result){
              getE("chart_disp_div_loaderDDH").style.display = "none";
              getE("chart_disp_div_mainDDH").style.display = "block";
            //   $("#r_prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="r_prescription_div_dpr"></div>');
            //   if(result.date == null || result.date ===""){
            //   }else{
            //   $("#r_prescription_div_dpr").append(result.disp_data);
            //   }
            });
            });
            
          }
          
          $.fn.get_PrescriptionBy_id = function(DocID){
            $.get('http://localhost:3130/get_Prescription_with_id',{
              DocID:DocID
          },
            function (result){
              getE("prescription_disp_div_loaderDDH").style.display = "none";
              getE("prescription_disp_div_mainDDH").style.display = "block";
              $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#Prescription_date_pdr").text(date);
              $("#Prescription_div_dpr").append(result.disp_data);
              }
            });
          }
          
          $.fn.getLatest_Prescription = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              var startDate = moment().subtract(174,'days');
              var endDate = moment();
              $.get('http://localhost:3130/get_latest_Prescription',{
                range1:startDate.format('MM/DD/YYYY'),
                range2:endDate.format('MM/DD/YYYY'),
                usrID:result_id.usrID
              },
              function (result){
                getE("prescription_disp_div_loaderDDH").style.display = "none";
                getE("prescription_disp_div_mainDDH").style.display = "block";
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"></div>');
                if(result.date == null || result.date ===""){
                }else{
                var collect_o_date = result.date.split("T");
                var date = collect_o_date[0];
                $("#Prescription_date_pdr").text(date);
                $("#Prescription_div_dpr").append(result.disp_data);
                }
              });
            });
           
          }
          
          $("#Prescription_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
            var row=$( this ).parent();
            if(!row.hasClass('footable-paging')){
              getE("prescription_disp_div_loaderDDH").style.display = "block";
              getE("prescription_disp_div_mainDDH").style.display = "none";
              $.fn.get_PrescriptionBy_id(row.closest('tr').children('td:first').text());
            }
            return false;
          });
          
          $.fn.getPrescriptionSelectwithDate_dpr = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_disp_Prescription_dateTime',{
                usrID:result_id.usrID
              },
              function (result){
                result.forEach(e => {
                  if(e.date == null || e.date ===""){
                  }else{
                var collect_o_date = e.date.split("T");
                e.date = collect_o_date[0];
                e.time = collect_o_date[1];
                  }
                });
            $('#Prescription_selT_pdr').footable({
              "columns": $.post('http://localhost:4417/general_server_files/PrescriptionSelTableColuumn.json'),
              "rows": result
            });
            });
            });
           
          }
          
          
          
          // end patient record display
                
          arrange_patient_search();
          arrange_idle_search_bar();
          $.fn.Lfocus("dde1");