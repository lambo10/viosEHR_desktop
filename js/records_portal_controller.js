
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


        function on_row_as_btn_click(){
            document.getElementById("Radiograph-main-container").classList.add("fadeOut");
        setTimeout(on_row_as_btn_anim_complete,500);
        }

        function on_row_as_btn_anim_complete(){
            document.getElementById("Radiograph-main-container").classList.remove("fadeOut");
            // get and set input to module from db
            document.getElementById("Radiograph-main-container").classList.add("fadeInLeft");
        setTimeout(remove_on_row_as_btn_anim_complete,500);
        }

        function remove_on_row_as_btn_anim_complete(){
            document.getElementById("Radiograph-main-container").classList.remove("fadeInLeft");
        }

        function Radiofraphs_table_btn_click(){
            document.getElementById("radiograph_table").classList.add("fadeOutDown");
        setTimeout(Radiofraphs_table_btn_click_complete,500);
        }

        function Radiofraphs_table_btn_click_complete(){
            document.getElementById("radiograph_table").classList.remove("fadeOutDown");
            // get and set input to module from db
            document.getElementById("radiograph_table").classList.add("fadeInUp");
        setTimeout(remove_radiograph_anim_complete,500);
        }

        function remove_radiograph_anim_complete(){
            document.getElementById("radiograph_table").classList.remove("fadeInUp");
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
                      $.fn.getLatest_noteDwrkBar();
                      $.fn.getLatest_PrescriptionDwrkBar();
                      $.fn.getLatest_LabDwrkBar();
                      $.fn.getLatest_RadiographDwrkBar();
                      $.fn.getLatest_DispensedDwrkBar();
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

                function input_focus_system(id){
                    var count = 0;
                    var collected_num = "";
                    while(count < id.length){
                      var wk_char = id.charAt(count);
                      if(wk_char == "1" || wk_char == "2" || wk_char == "3" || wk_char == "4" || wk_char == "5" || wk_char == "6" || wk_char == "7" || wk_char == "8" || wk_char == "9" || wk_char == "0"){
                   collected_num = collected_num + id.charAt(count);
                      }
                      count++;
                    }
                    var c_numInt = parseInt(collected_num);
                    c_numInt++;
                    if (document.getElementById("dde"+c_numInt.toString())) {
                     $.fn.Lfocus("#dde"+c_numInt.toString());
                   }else{
                     DataH_submission();
                   }
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

                  

                  var pl_dde1 = document.querySelector("#dde1");
                  pl_dde1.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde1");
                      document.getElementById("dde2_Label").classList.add("active");
                      
                    }
                  });

                  var pl_dde2 = document.querySelector("#dde2");
                  pl_dde2.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde2");
                      document.getElementById("dde3_Label").classList.add("active");
                    }
                  });

                  var pl_dde3 = document.querySelector("#dde3");
                  pl_dde3.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde3");
                      document.getElementById("dde4_Label").classList.add("active");
                    }
                  });

                  var pl_dde4 = document.querySelector("#dde4");
                  pl_dde4.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde4");
                      document.getElementById("dde5_Label").classList.add("active");
                    }
                  });

                  var pl_dde5 = document.querySelector("#dde5");
                  pl_dde5.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde5");
                      document.getElementById("dde6_Label").classList.add("active");
                    }
                  });

                  var pl_dde6 = document.querySelector("#dde6");
                  pl_dde6.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde6");
                      document.getElementById("dde7_Label").classList.add("active");
                    }
                  });

                  var pl_dde7 = document.querySelector("#dde7");
                  pl_dde7.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde7");
                      document.getElementById("dde8_Label").classList.add("active");
                    }
                  });

                  var pl_dde8 = document.querySelector("#dde8");
                  pl_dde8.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde8");
                      document.getElementById("dde9_Label").classList.add("active");
                    }
                  });

                  var pl_dde9 = document.querySelector("#dde9");
                  pl_dde9.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde9");
                      document.getElementById("dde10_Label").classList.add("active");
                    }
                  });

                  var pl_dde10 = document.querySelector("#dde10");
                  pl_dde10.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde10");
                      document.getElementById("dde11_Label").classList.add("active");
                    }
                  });

                  var pl_dde11 = document.querySelector("#dde11");
                  pl_dde11.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde11");
                      document.getElementById("dde12_Label").classList.add("active");
                    }
                  });

                  var pl_dde12 = document.querySelector("#dde12");
                  pl_dde12.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde12");
                    }
                  });

                  var pl_dde13 = document.querySelector("#dde13");
                  pl_dde13.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde13");
                      document.getElementById("dde14_Label").classList.add("active");
                    }
                  });

                  var pl_dde14 = document.querySelector("#dde14");
                  pl_dde14.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde14");
                      document.getElementById("dde15_Label").classList.add("active");
                    }
                  });

                  var pl_dde15 = document.querySelector("#dde15");
                  pl_dde15.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      submit_data();
                    }
                  });

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

          $.fn.get_doctors_logedIn = function(){
            $.get("http://localhost:3130/get_doctors_logedin_id",
          {},
          function(result){
            
            var jsonData = result;
            if(jsonData.length == 0){
              clearTable("assign_doctors_table_list_body","assign_doctors_table_list");
            }else{
              jsonData.forEach(element => {
                add_to_doc_assign_table(element.data,(element.first_name+" "+element.last_name),element.Shift,element.Asg_patients);
              });
            }
            
            
          });
          }

          $.fn.get_pharmacist_logedIn = function(){
            $.get("http://localhost:3130/get_pharmacist_logedin_id",
          {},
          function(result){
            
            var jsonData = result;
            if(jsonData.length == 0){
              clearTable("assign_pharmacist_table_list_body","assign_pharmacist_table_list");
            }else{
              jsonData.forEach(element => {
                add_to_pharm_assign_table(element.data,(element.first_name+" "+element.last_name),element.Shift,element.Asg_patients);
              });
            }
            
            
          });
          }

          $.fn.get_lab_logedIn = function(){
            $.get("http://localhost:3130/get_lab_logedin_id",
          {},
          function(result){
            
            var jsonData = result;
            if(jsonData.length == 0){
              clearTable("assign_lab_table_list_body","assign_lab_table_list");
            }else{
              jsonData.forEach(element => {
                add_to_lab_assign_table(element.data,(element.first_name+" "+element.last_name),element.Shift,element.Asg_patients);
              });
            }
            
            
          });
          }

          $.fn.get_radiologist_logedIn = function(){
            $.get("http://localhost:3130/get_radiologist_logedin_id",
          {},
          function(result){
            
            var jsonData = result;
            if(jsonData.length == 0){
              clearTable("assign_radiologist_table_list_body","assign_radiologist_table_list");
            }else{
              jsonData.forEach(element => {
                add_to_radiologist_assign_table(element.data,(element.first_name+" "+element.last_name),element.Shift,element.Asg_patients);
              });
            }
            
            
          });
          }

          $.fn.assigne_patients_to = function(prof_id){
            $.get("http://localhost:3130/assign_patient",
          {
            professional_ID:prof_id,
            usrID:static_data.usrID
          },
          function(result){
            resuInt = parseInt(result);
            if(resuInt == 11111){
              var notice = new jBox('Notice', {
                content: 'Assigned Successfully',
                color: 'green',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else if(resuInt == 1110015){
              var notice = new jBox('Notice', {
                content: 'This account dose not exsist',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else if(resuInt == 1110014){
              var notice = new jBox('Notice', {
                content: 'Patient does not exsist',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }else{
              var notice = new jBox('Notice', {
                content: 'Assignment Erro',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
            }
            
            update();
            
          });
          }


          $.fn.submit_employee_reg = function(first_name,last_name,middle_name,email,phone_no,h_address,date_of_birth,
            occupation,next_of_kin,age,height,sex,allergies,department,patientno){
            $.get("http://localhost:3130/register_patient",
          {
            'first_name':first_name,
            'last_name':last_name,
            'middle_name':middle_name,
            'email':email,
            'phone_no':phone_no,
            'home_address':h_address,
            'date_of_birth':date_of_birth,
            'occupation':occupation,
            'next_of_kin':next_of_kin,
            'department':department,
            'patientno':patientno,
            'age':age,
            'height':height,
            'sex':sex,
            'allergies':allergies
          },
          function(result){
            process_submit_employee_reg(result);
          });
          }
          function process_submit_employee_reg(result){
            let resuInt = parseInt(result);
            if(resuInt == 100245){
              var notice = new jBox('Notice', {
                content: 'Email Already Exist',
                color: 'red',
                animation: notification_popup.animation,
                closeOnClick: notification_popup.closeOnClick,
                delayOpen: notification_popup.delayOpen,
                delayClose: notification_popup.delayClose
              });
              notice.open();
                      }else if(resuInt == 100246){
                        var notice = new jBox('Notice', {
                          content: 'Patient No Already Exist',
                          color: 'red',
                          animation: notification_popup.animation,
                          closeOnClick: notification_popup.closeOnClick,
                          delayOpen: notification_popup.delayOpen,
                          delayClose: notification_popup.delayClose
                        });
                        notice.open();
                      }else if(resuInt == 1110015){
                        var notice = new jBox('Notice', {
                          content: 'This account dose not exsist',
                          color: 'red',
                          animation: notification_popup.animation,
                          closeOnClick: notification_popup.closeOnClick,
                          delayOpen: notification_popup.delayOpen,
                          delayClose: notification_popup.delayClose
                        });
                        notice.open();
                      }else if(resuInt == 1110013){
                        var notice = new jBox('Notice', {
                          content: 'You do not have clerance for this operation',
                          color: 'red',
                          animation: notification_popup.animation,
                          closeOnClick: notification_popup.closeOnClick,
                          delayOpen: notification_popup.delayOpen,
                          delayClose: notification_popup.delayClose
                        });
                        notice.open();
                      }else if(resuInt == 1110011){
                        var notice = new jBox('Notice', {
                          content: 'Invalid node',
                          color: 'red',
                          animation: notification_popup.animation,
                          closeOnClick: notification_popup.closeOnClick,
                          delayOpen: notification_popup.delayOpen,
                          delayClose: notification_popup.delayClose
                        });
                        notice.open();
                      }else if(resuInt == 1110016){
                        var notice = new jBox('Notice', {
                          content: 'Erro Registering',
                          color: 'red',
                          animation: notification_popup.animation,
                          closeOnClick: notification_popup.closeOnClick,
                          delayOpen: notification_popup.delayOpen,
                          delayClose: notification_popup.delayClose
                        });
                        notice.open();
                      }else{
                        wk_inserted_id = result.insertedId;
                        document.getElementById("employee_reg_form1").style.display = "none"; 
                       document.getElementById("employee_reg_form2").style.display = "block";
                       var notice = new jBox('Notice', {
                        content: 'Patient Added Successfully',
                        color: 'green',
                        animation: notification_popup.animation,
                        closeOnClick: notification_popup.closeOnClick,
                        delayOpen: notification_popup.delayOpen,
                        delayClose: notification_popup.delayClose
                      });
                      notice.open();
                    } 

                  if(institutionInfo.card_print){
                    var newPrintPage = window.open('','PRINT','height=500,width=600');
                    newPrintPage.document.write('<html><head><title>'+institutionInfo.name+' Card</title></head><body>');
                    newPrintPage.document.write('<div style="text-align:center;"><h1>'+institutionInfo.name+'</h1></div>');
                    newPrintPage.document.write('<div style="text-align:center;"><img src="http://localhost:4417/institution_logo" style="width:100px;height:100px;"></div><br>');                  
                    newPrintPage.document.write('<div style="text-align:left;"><h3>Name: '+result.ops[0].first_name+' '+result.ops[0].first_name+' '+result.ops[0].middle_name+'</h3></div>');
                    newPrintPage.document.write('<div style="text-align:left; color:#eafa07;"><h3>ID:'+result.ops[0].patientno+'</h3></div>');
                    newPrintPage.document.write('<div style="text-align:left;"><h3>Date:'+result.ops[0].date_registerd+'</h3></div><br><br>');
                    newPrintPage.document.write('<div style="text-align:right;"><img src="http://localhost:4417/vios_logo" style="width:20px;height:20px;">Viostec</div><br>');
                    newPrintPage.document.write('<div style="text-align:right;"><h5>visit us @ viostec.com </h5></div>');
                    newPrintPage.document.write('<div style="text-align:right;"><h5>Email - viosconnect@gmail.com</h5></div>');
                    newPrintPage.document.write('</body></html>');
                    newPrintPage.print();
                  }
                  }
              
                  
          function reset_patient_reg_form(){
            getE('patient_reg_form112H').reset();
            document.getElementById("employee_reg_form1").style.display = "block"; 
            document.getElementById("employee_reg_form2").style.display = "none";
          }
          function process_check_professional_loged_in(id){
            var jsondata = JSON.parse(id);
            var jsonid = jsondata.$oid
            document.getElementById('pr_profile_picSSG').src = 'http://localhost:4417/employee/'+jsonid+'/profile/usr_profile.jpg';
          }
          function process_logoutHSD(){
            window.location.href="index.html";
          }

          function add_assigned_button(){
            var div1 = document.createElement("div");
            div1.setAttribute("style","width: 40%;");
            div1.setAttribute("id","assigned_p_btn");
            var div2 = document.createElement("div");
            div2.setAttribute("style","float: right;");
            var button = document.createElement("button");
            button.setAttribute("type","button");
            button.setAttribute("class","z-depth-0 waves-effect waves-light");
            button.setAttribute("onclick","$.fn.disp_assigned_details(static_data.usrID)");
            button.setAttribute("style","padding-top: 5px; padding-left: 12px; padding-right: 12px; padding-bottom: 5px; color:grey; border: none; outline:none;")
            var txt = document.createTextNode("Assigned");
            div1.append(div2);
            div2.append(button);
            button.append(txt);
            var replObject = document.getElementById("assigned_p_btn");
              document.getElementById('myTab').replaceChild(div1,replObject);
              
              var div1 = document.createElement("div");
              div1.setAttribute("style","padding-left: 30px;");
              div1.setAttribute("id","cancel_patient_page");
              var div2 = document.createElement("div");
              div2.setAttribute("style","float: right;");
              var button = document.createElement("button");
              button.setAttribute("type","button");
              button.setAttribute("class","rounded-circle z-depth-0 waves-effect waves-light");
              button.setAttribute("onclick","insert_out_anim_for_idle_fragment()");
              button.setAttribute("style","padding-top: 5px; padding-left: 12px; padding-right: 12px; padding-bottom: 5px; color:grey; border: none; outline:none;")
              var i = document.createElement("i");
              i.setAttribute("class","fa fa-close");
              div1.append(div2);
              div2.append(button);
              button.append(i);
              var replObject = document.getElementById("cancel_patient_page");
                document.getElementById('myTab').replaceChild(div1,replObject);
          }

          function remove_assigned_button(){
            var div1 = document.createElement("div");
            div1.setAttribute("id","assigned_p_btn");
            var replObject = document.getElementById("assigned_p_btn");
              document.getElementById('myTab').replaceChild(div1,replObject);
              
              var div1 = document.createElement("div");
              div1.setAttribute("style","padding-left: 30px; width:40%;");
              div1.setAttribute("id","cancel_patient_page");
              var div2 = document.createElement("div");
              div2.setAttribute("style","float: right;");
              var button = document.createElement("button");
              button.setAttribute("type","button");
              button.setAttribute("class","rounded-circle z-depth-0 waves-effect waves-light");
              button.setAttribute("onclick","insert_out_anim_for_idle_fragment()");
              button.setAttribute("style","padding-top: 5px; padding-left: 12px; padding-right: 12px; padding-bottom: 5px; color:grey; border: none; outline:none;")
              var i = document.createElement("i");
              i.setAttribute("class","fa fa-close");
              div1.append(div2);
              div2.append(button);
              button.append(i);
              var replObject = document.getElementById("cancel_patient_page");
                document.getElementById('myTab').replaceChild(div1,replObject);
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

          function add_to_doc_assign_table(id,name,shift,assigned_patients){

            var tbody = document.createElement("tbody");
            tbody.setAttribute("id","assign_doctors_table_list_body");
            var td1 = document.createElement("td");
              var node1 = document.createTextNode(name);
              td1.append(node1);
              td1.setAttribute("style","padding-top: 25px;");
              var td3 = document.createElement("td");
              var node3 = document.createTextNode(shift);
              td3.append(node3);
              td3.setAttribute("style","padding-top: 25px;");
              var td31 = document.createElement("td");
              var node31 = document.createTextNode(assigned_patients);
              td31.append(node31);
              td31.setAttribute("style","padding-top: 25px;");
              var td5 = document.createElement("td");
              var addButton_input = document.createElement("button");
              addButton_input.setAttribute("type","button");
              addButton_input.setAttribute("style","color:#616161; padding-left: 10px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px;");
              addButton_input.setAttribute("class","btn waves-effect waves-light");
              addButton_input.setAttribute("onClick","$.fn.assigne_patients_to('"+JSON.parse(id).$oid+"')");
              addButton_input.setAttribute("id",JSON.parse(id).$oid+"ASSGN_DOC");
              var btnnode = document.createTextNode('Assign');
              addButton_input.append(btnnode);
              td5.append(addButton_input);
          
              var tr0 = document.createElement("tr");
              tr0.append(td1);
              tr0.append(td3);
              tr0.append(td31);
              tr0.append(td5);
              tbody.append(tr0);
              var replObject = document.getElementById("assign_doctors_table_list_body");
              document.getElementById('assign_doctors_table_list').replaceChild(tbody,replObject);
          }

          function add_to_pharm_assign_table(id,name,shift,assigned_patients){

            var tbody = document.createElement("tbody");
            tbody.setAttribute("id","assign_pharmacist_table_list_body");
            var td1 = document.createElement("td");
              var node1 = document.createTextNode(name);
              td1.append(node1);
              td1.setAttribute("style","padding-top: 25px;");
              var td3 = document.createElement("td");
              var node3 = document.createTextNode(shift);
              td3.append(node3);
              td3.setAttribute("style","padding-top: 25px;");
              var td31 = document.createElement("td");
              var node31 = document.createTextNode(assigned_patients);
              td31.append(node31);
              td31.setAttribute("style","padding-top: 25px;");
              var td5 = document.createElement("td");
              var addButton_input = document.createElement("button");
              addButton_input.setAttribute("type","button");
              addButton_input.setAttribute("style","color:#616161; padding-left: 10px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px;");
              addButton_input.setAttribute("class","btn waves-effect waves-light");
              addButton_input.setAttribute("onClick","$.fn.assigne_patients_to('"+JSON.parse(id).$oid+"')");
              addButton_input.setAttribute("id",JSON.parse(id).$oid+"ASSGN_DOC");
              var btnnode = document.createTextNode('Assign');
              addButton_input.append(btnnode);
              td5.append(addButton_input);
          
              var tr0 = document.createElement("tr");
              tr0.append(td1);
              tr0.append(td3);
              tr0.append(td31);
              tr0.append(td5);
              tbody.append(tr0);
              var replObject = document.getElementById("assign_pharmacist_table_list_body");
              document.getElementById('assign_pharmacist_table_list').replaceChild(tbody,replObject);
          }

          function add_to_radiologist_assign_table(id,name,shift,assigned_patients){

            var tbody = document.createElement("tbody");
            tbody.setAttribute("id","assign_radiologist_table_list_body");
            var td1 = document.createElement("td");
              var node1 = document.createTextNode(name);
              td1.append(node1);
              td1.setAttribute("style","padding-top: 25px;");
              var td3 = document.createElement("td");
              var node3 = document.createTextNode(shift);
              td3.append(node3);
              td3.setAttribute("style","padding-top: 25px;");
              var td31 = document.createElement("td");
              var node31 = document.createTextNode(assigned_patients);
              td31.append(node31);
              td31.setAttribute("style","padding-top: 25px;");
              var td5 = document.createElement("td");
              var addButton_input = document.createElement("button");
              addButton_input.setAttribute("type","button");
              addButton_input.setAttribute("style","color:#616161; padding-left: 10px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px;");
              addButton_input.setAttribute("class","btn waves-effect waves-light");
              addButton_input.setAttribute("onClick","$.fn.assigne_patients_to('"+JSON.parse(id).$oid+"')");
              addButton_input.setAttribute("id",JSON.parse(id).$oid+"ASSGN_DOC");
              var btnnode = document.createTextNode('Assign');
              addButton_input.append(btnnode);
              td5.append(addButton_input);
          
              var tr0 = document.createElement("tr");
              tr0.append(td1);
              tr0.append(td3);
              tr0.append(td31);
              tr0.append(td5);
              tbody.append(tr0);
              var replObject = document.getElementById("assign_radiologist_table_list_body");
              document.getElementById('assign_radiologist_table_list').replaceChild(tbody,replObject);
          }

          



          function clearTable(id,list_id){

            var tbody = document.createElement("tbody");
            tbody.setAttribute("id",id);
            var td1 = document.createElement("td");
          
              var tr0 = document.createElement("tr");
              tr0.append(td1);
              tbody.append(tr0);
              var replObject = document.getElementById(id);
              document.getElementById(list_id).replaceChild(tbody,replObject);
          }

          arrange_patient_search();
          
          function update(){
            $.fn.check_professional_loged_in();
            $.fn.get_doctors_logedIn();
            $.fn.check_assigned(static_data.usrID);
            setTimeout(update2,3000);
          }
          function update2(){
            $.fn.get_pharmacist_logedIn();
            setTimeout(update3,3000);
          }
          function update3(){
            $.fn.check_assigned(static_data.usrID);
            $.fn.get_lab_logedIn();
            setTimeout(update4,3000);
          }
          function update4(){
            $.fn.get_radiologist_logedIn();
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
                  $.fn.getLatest_noteDwrkBar();
                  $.fn.getLatest_PrescriptionDwrkBar();
                  $.fn.getLatest_LabDwrkBar();
                  $.fn.getLatest_RadiographDwrkBar();
                  $.fn.getLatest_DispensedDwrkBar();
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
          
          $.fn.getLatest_noteDwrkBar = function(){
          var startDate = moment().subtract(174,'days');
          var endDate = moment();
          $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_latest_prescription',{
            range1:startDate.format('MM/DD/YYYY'),
            range2:endDate.format('MM/DD/YYYY'),
            usrID:result_id.usrID
          },
          function (result){
            $("#rnoteDispLwNabBar").replaceWith('<div style="min-height: 200px; width: 97%;" id="rnoteDispLwNabBar"></div>');
            if(result.date == null || result.date ===""){
            }else{
            var collect_o_date = result.date.split("T");
            var date = collect_o_date[0];
            $("#rnoteDispLwNabBar_date_pdr").text(date);
            $("#rnoteDispLwNabBar").append(result.disp_data);
            }
          });
            });
          }

          new jBox('Modal', {
            attach:"#sNotebtn",
            width: 800,
            height:500,
            title: 'Note',
            overlay: false,
            createOnInit: true,
            
            content: `<div id="noteFormHolder">
            <div style="text-align:center; font-size:25px;" id="InstiTutName"></div>
            <div style="text-align:center; font-size:20px;">Note</div><hr>
  
            <div class="bootstrap row" style="display: inline-block; width: 90%;">
                      <div class="bootstrap col-md-6">
                    <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_1" for="input01">Name</label>
                    <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                      <span class="C_INP_P" id="nt_name"></span>
                      <p class="bootstrap help-block"></p>
                    </div>
                  </div>
                  <div class="bootstrap col-md-6">
                      <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_2" for="input01">Patient No</label>
                      <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                        <span class="C_INP_P" id="nt_Pid"></span>
                        <p class="bootstrap help-block"></p>
                      </div>
                    </div>
                  </div>
                  <br><br>
                  <div class="bootstrap row" style="display: inline-block; width: 90%;">
                  <div class="bootstrap col-md-6">
                <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_1" for="input01">Sex</label>
                <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                  <span class="C_INP_P" id="nt_sex"></span>
                  <p class="bootstrap help-block"></p>
                </div>
              </div>
              <div class="bootstrap col-md-6">
                  <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_2" for="input01">Phone No</label>
                  <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                    <span class="C_INP_P" id="nt_Pno"></span>
                    <p class="bootstrap help-block"></p>
                  </div>
                </div>
              </div><br><br>
              <div style="text-align:center">
            <div id="EntredNote" style="border: 1px solid rgb(190, 187, 187); min-height:200px; width:700px; display:inline-block; text-align:left; padding-left:20px;padding-right:20px;">
         
            </div>
            </div><br><br>
            <div class="bootstrap row" style="display: inline-block; width: 90%;">
                  <div class="bootstrap col-md-7">
                <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_1" for="input01">Rec Personel</label>
                <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                  <span class="C_INP_P" id="nt_phNam"></span>
                  <p class="bootstrap help-block"></p>
                </div>
              </div>
              <div class="bootstrap col-md-5">
                  <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_2" for="input01">Date</label>
                  <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                    <span class="C_INP_P" id="nt_date"></span>
                    <p class="bootstrap help-block"></p>
                  </div>
                </div><br><br>
                <div style="text-align:center"><div style="display:inline-block; padding-left:26px;"><button class="btn btn-blue" onclick="$.fn.postNote()">Save</button></div></div>
              </div>
            </div>`,
            draggable: 'title',
            repositionOnOpen: false,
            repositionOnContent: false
          });

          $.fn.startNoteSubmission = function (){
            var note_txt = $("#text").val();
            $("#InstiTutName").text(static_data.instiName);
            $("#nt_name").text(static_data.usrName);
            $("#nt_Pid").text(static_data.usrPatientId);
            $("nt_sex").text(static_data.usrSex);
            $("#nt_Pno").text(static_data.usrPhoneNo);
            $("#nt_phNam").text(static_data.recPersonelName);
            var currentDate = new Date();
            var date = currentDate.getDate();
            var month = currentDate.getMonth();
            var year = currentDate.getFullYear();
            var dateString = year+"/"+(month +1)+"/"+date;
            $("#nt_date").text(dateString);
            var replace_p_txt = note_txt.replace(/•/g,"<br>•");
            getE("EntredNote").innerHTML = replace_p_txt;
  
          }

          $("#text").keyup(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
              if(keycode == '13'){
                  document.getElementById('text').value +='• ';
            }
            var txtval = document.getElementById('text').value;
            if(txtval.substr(txtval.length - 1) == '\n'){
              document.getElementById('text').value = txtval.substring(0,txtval.length - 1);
            }
          });

          $.fn.postNote = function (){
            $("#noteDispProcessing_div").replaceWith('<div id="noteDispProcessing_div"></div>');
            $("#noteDispProcessing_div").append($("#noteFormHolder").html());
            $("#noteDispProcessing_div").find("button").replaceWith("");
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
            $.ajax({
              url: 'http://localhost:3130/add_note_disp_data',
              type:'POST',
              contentType:'application/json',
              data: JSON.stringify({
              "disp_data":$("#noteDispProcessing_div").html(),
              "formID":"11111",
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
                  }
                  
                }
              }
          });
        });
          }
  
          
          $.fn.next_patient_btn_click = function(){
          if(static_data.assigned_pattient_btnS_count >= static_data.assigned_patients.length){
            getE("next_p_btn_clickVN").disabled = true;
            getE("next_p_btn_clickVN").classList.remove("theme_color_secondary");
            getE("next_p_btn_clickVN").classList.remove("white_text");
            getE("next_p_btn_clickVN").classList.add("no_more_p");
          }else{
          static_data.usrID = static_data.assigned_patients[static_data.assigned_pattient_btnS_count]._id;
                startOnpatientPick();
                set_patients_main_fragment(static_data.usrID,'');
                insert_in_anim_for_idle_fragment();
          static_data.assigned_pattient_btnS_count++;
          }
          }
          
          $.fn.prv_patient_btn_click = function(){
          if(static_data.assigned_pattient_btnS_count <= 0){
            getE("prv_p_btn_clickVN").disabled = true;
            getE("prv_p_btn_clickVN").classList.remove("theme_color_secondary");
            getE("prv_p_btn_clickVN").classList.remove("white_text");
            getE("prv_p_btn_clickVN").classList.add("no_more_p");
          }else{
          static_data.usrID = static_data.assigned_patients[static_data.assigned_pattient_btnS_count]._id;
                startOnpatientPick();
                set_patients_main_fragment(static_data.usrID,'');
                insert_in_anim_for_idle_fragment();
          static_data.assigned_pattient_btnS_count--;
          }
          }
          
          $.fn.check_assigP_a_indi_on_pnBtn = function(){
          if(static_data.assigned_patients.length == 0){
            getE("prv_p_btn_clickVN").disabled = true;
            getE("prv_p_btn_clickVN").classList.remove("theme_color_secondary");
            getE("prv_p_btn_clickVN").classList.remove("white_text");
            getE("prv_p_btn_clickVN").classList.add("no_more_p");
          
            getE("next_p_btn_clickVN").disabled = true;
            getE("next_p_btn_clickVN").classList.remove("theme_color_secondary");
            getE("next_p_btn_clickVN").classList.remove("white_text");
            getE("next_p_btn_clickVN").classList.add("no_more_p");
          }else{
            if(static_data.assigned_pattient_btnS_count >= static_data.assigned_patients.length){
              getE("next_p_btn_clickVN").disabled = true;
              getE("next_p_btn_clickVN").classList.remove("theme_color_secondary");
              getE("next_p_btn_clickVN").classList.remove("white_text");
              getE("next_p_btn_clickVN").classList.add("no_more_p");
            }else{
              getE("next_p_btn_clickVN").disabled = false;
              getE("next_p_btn_clickVN").classList.remove("no_more_p");
              getE("next_p_btn_clickVN").classList.add("theme_color_secondary");
              getE("next_p_btn_clickVN").classList.add("white_text");
            }
            if(static_data.assigned_pattient_btnS_count <= 0){
              getE("prv_p_btn_clickVN").disabled = true;
              getE("prv_p_btn_clickVN").classList.remove("theme_color_secondary");
              getE("prv_p_btn_clickVN").classList.remove("white_text");
              getE("prv_p_btn_clickVN").classList.add("no_more_p");
            }else{
              getE("prv_p_btn_clickVN").disabled = true;
              getE("prv_p_btn_clickVN").classList.remove("no_more_p");
              getE("prv_p_btn_clickVN").classList.add("theme_color_secondary");
              getE("prv_p_btn_clickVN").classList.add("white_text");
            }
          }
          }
          
          
          $.fn.submitFormFileInput = function(id_index){
          static_data.file_input_lf_index = id_index;
          $("#f_file_collector").click();
          setTimeout(function (){
          $("#imageInputLoader_"+id_index).attr("style","width: 49px; height: 50px; border: none; display: inline-block;");
          },2000)
          }
          
          $.fn.process_fPic_disp = function(name){
          $("#imageInputLoader_"+static_data.file_input_lf_index).attr("style","width: 49px; height: 50px; border: none; display: none;");
          $("#imageInputLoaderDiv_"+static_data.file_input_lf_index).attr("style","width: 210px; height: 170px; border: dashed 1px; text-align: center; padding-top: 60px;display:none");
          $("#imageInputDispVM_"+static_data.file_input_lf_index).attr("src","http://localhost:4417/formFiles/"+name);
          $("#imageInputLI_"+static_data.file_input_lf_index).attr("data-src","http://localhost:4417/formFiles/"+name);
          $("#imageInputUL_"+static_data.file_input_lf_index).attr("style","padding:0px; list-style: none; display: block;");
          
          $("#imageInputfileIconDiv_"+static_data.file_input_lf_index).attr("style","width: 80px; height: 100px; text-align: center; display: block;");
          $("#f_fileNameVB_"+static_data.file_input_lf_index).attr("style","text-align: center; width: 80px;");
          $("#f_fileNameVB_"+static_data.file_input_lf_index).html(name);
          $("#fileViewBtn_Z_"+static_data.file_input_lf_index).attr("href","http://localhost:4417/formFiles/"+name);
          
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
              }
            });
            confirm_remove.open();
          }
          
          function notice_popup(data){
            var notice = new jBox('Notice', {
              content: data,
              color: 'green',
              animation: notification_popup.animation,
              closeOnClick: notification_popup.closeOnClick,
              delayOpen: notification_popup.delayOpen,
              delayClose: notification_popup.delayClose
            });
            notice.open();
          }
          
          function process_assigned_patients_click(id,assignID){
            static_data.usrID = id;
            $.get('http://localhost:3130/set_currOpratP_coll',{
            usrID:id
          },
          function (result){
            if(result === "11111"){
            startOnpatientPick();
            set_patients_main_fragment(id,assignID);
            insert_in_anim_for_idle_fragment();
            $.fn.getLatest_noteDwrkBar();
            }
          });
          }
          // patient record display
          
          function startOnpatientPick(){
            get_patient_d_f_static_vars_prd();
            $.fn.getLatest_prescription();
          }
          function chartTabclick(){
            static_data.current_active_dispRecTab = "chart";
            get_patient_d_f_static_vars_prd();
            $.fn.getLatest_prescription();
          }
          function radiographTabclick(){
            static_data.current_active_dispRecTab = "radiograph";
            $.fn.getRadiographSelectwithDate_dpr();
            $.fn.getLatest_radiograph();
            
          }
          function labTabclick(){
            static_data.current_active_dispRecTab = "lab";
            $.fn.getLabSelectwithDate_dpr();
            $.fn.getLatest_Lab();
            
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
          
          $.fn.getLatest_prescription = function(){
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
              $("#r_prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="r_prescription_div_dpr"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#r_presc_date_pdr").text(date);
              $("#r_prescription_div_dpr").append(result.disp_data);
              }
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
          
          $.fn.getLatest_radiograph = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              var startDate = moment().subtract(174,'days');
            var endDate = moment();
            $.get('http://localhost:3130/get_latest_radiograph',{
              range1:startDate.format('MM/DD/YYYY'),
              range2:endDate.format('MM/DD/YYYY'),
              usrID:result_id.usrID
            },
            function (result){
              getE("radiograph_disp_div_loaderDDH").style.display = "none";
              getE("radiograph_disp_div_mainDDH").style.display = "block";
              $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#radiograph_date_pdr").text(date);
              $("#radiograph_div_dpr").append(result.disp_data);
              }
            });
            });
            
          }
          
          $.fn.get_radiographBy_id = function(DocID){
            $.get('http://localhost:3130/get_radiograph_with_id',{
              DocID:DocID
          },
            function (result){
              getE("radiograph_disp_div_loaderDDH").style.display = "none";
              getE("radiograph_disp_div_mainDDH").style.display = "block";
              $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#radiograph_date_pdr").text(date);
              $("#radiograph_div_dpr").append(result.disp_data);
              }
            });
          }
          
          $("#radiograph_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
            var row=$( this ).parent();
            if(!row.hasClass('footable-paging')){
              getE("radiograph_disp_div_loaderDDH").style.display = "block";
              getE("radiograph_disp_div_mainDDH").style.display = "none";
              $.fn.get_radiographBy_id(row.closest('tr').children('td:first').text());
            }
            return false;
          });
          
          $.fn.getRadiographSelectwithDate_dpr = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_disp_radiograph_dateTime',{
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
            $('#radiograph_selT_pdr').footable({
              "columns": $.post('http://localhost:4417/general_server_files/radiographSelTableColuumn.json'),
              "rows": result
            });
            });
            });
           
          }
          
          
          $.fn.getLatest_Lab = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              var startDate = moment().subtract(174,'days');
          var endDate = moment();
          $.get('http://localhost:3130/get_latest_Lab',{
          range1:startDate.format('MM/DD/YYYY'),
          range2:endDate.format('MM/DD/YYYY'),
          usrID:result_id.usrID
          },
          function (result){
          getE("lab_disp_div_loaderDDH").style.display = "none";
          getE("lab_disp_div_mainDDH").style.display = "block";
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Lab_date_pdr").text(date);
          $("#Lab_div_dpr").append(result.disp_data);
          }
          });
            });
          
          }
          
          $.fn.get_LabBy_id = function(DocID){
          $.get('http://localhost:3130/get_Lab_with_id',{
          DocID:DocID
          },
          function (result){
          getE("lab_disp_div_loaderDDH").style.display = "none";
          getE("lab_disp_div_mainDDH").style.display = "block";
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Lab_date_pdr").text(date);
          $("#Lab_div_dpr").append(result.disp_data);
          }
          });
          }
          
          $("#Lab_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
          var row=$( this ).parent();
          if(!row.hasClass('footable-paging')){
          getE("lab_disp_div_loaderDDH").style.display = "block";
          getE("lab_disp_div_mainDDH").style.display = "none";
          $.fn.get_LabBy_id(row.closest('tr').children('td:first').text());
          }
          return false;
          });
          
          $.fn.getLabSelectwithDate_dpr = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_disp_Lab_dateTime',{
          usrID:result_id.usrID
          },
          function (result){
          result.forEach(e => {
            if(e.date == null || e.date ===""){
              if(e.date == null || e.date ===""){
              }else{
          var collect_o_date = e.date.split("T");
          e.date = collect_o_date[0];
          e.time = collect_o_date[1];
            }
          }
          });
          $('#Lab_selT_pdr').footable({
          "columns": $.post('http://localhost:4417/general_server_files/LabSelTableColuumn.json'),
          "rows": result
          });
          });
            });
          
          }
          
          $.fn.getLatest_Dispensed = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              var startDate = moment().subtract(174,'days');
          var endDate = moment();
          $.get('http://localhost:3130/get_latest_Dispensed',{
          range1:startDate.format('MM/DD/YYYY'),
          range2:endDate.format('MM/DD/YYYY'),
          usrID:result_id.usrID
          },
          function (result){
          getE("dispansed_disp_div_loaderDDH").style.display = "none";
          getE("dispansed_disp_div_mainDDH").style.display = "block";
          $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Dispensed_date_pdr").text(date);
          $("#Dispensed_div_dpr").append(result.disp_data);
          }
          });
            });
          }
          
          $.fn.get_DispensedBy_id = function(DocID){
          $.get('http://localhost:3130/get_Dispensed_with_id',{
          DocID:DocID
          },
          function (result){
          getE("dispansed_disp_div_loaderDDH").style.display = "none";
          getE("dispansed_disp_div_mainDDH").style.display = "block";
          $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Dispensed_date_pdr").text(date);
          $("#Dispensed_div_dpr").append(result.disp_data);
          }
          });
          }
          
          $("#Dispensed_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
          var row=$( this ).parent();
          if(!row.hasClass('footable-paging')){
          getE("dispansed_disp_div_loaderDDH").style.display = "block";
          getE("dispansed_disp_div_mainDDH").style.display = "none";
          $.fn.get_DispensedBy_id(row.closest('tr').children('td:first').text());
          }
          return false;
          });
          
          $.fn.getDispensedSelectwithDate_dpr = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_disp_Dispensed_dateTime',{
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
          $('#Dispensed_selT_pdr').footable({
          "columns": $.post('http://localhost:4417/general_server_files/DispensedSelTableColuumn.json'),
          "rows": result
          });
          });
            });
          }
          
          $.fn.getLatest_Note = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              var startDate = moment().subtract(174,'days');
          var endDate = moment();
          $.get('http://localhost:3130/get_latest_Note',{
          range1:startDate.format('MM/DD/YYYY'),
          range2:endDate.format('MM/DD/YYYY'),
          usrID:result_id.usrID
          },
          function (result){
          getE("note_disp_div_loaderDDH").style.display = "none";
          getE("note_disp_div_mainDDH").style.display = "block";
          $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Note_date_pdr").text(date);
          $("#Note_div_dpr").append(result.disp_data);
          }
          });
            });
          }
          
          $.fn.get_NoteBy_id = function(DocID){
          $.get('http://localhost:3130/get_Note_with_id',{
          DocID:DocID
          },
          function (result){
          getE("note_disp_div_loaderDDH").style.display = "none";
          getE("note_disp_div_mainDDH").style.display = "block";               
          $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Note_date_pdr").text(date);
          $("#Note_div_dpr").append(result.disp_data);
          }
          });
          }
          
          $("#Note_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
          var row=$( this ).parent();
          if(!row.hasClass('footable-paging')){
          getE("note_disp_div_loaderDDH").style.display = "block";
          getE("note_disp_div_mainDDH").style.display = "none";
          $.fn.get_NoteBy_id(row.closest('tr').children('td:first').text());
          }
          return false;
          });
          
          $.fn.getNoteSelectwithDate_dpr = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_disp_Note_dateTime',{
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
          $('#Note_selT_pdr').footable({
          "columns": $.post('http://localhost:4417/general_server_files/NoteSelTableColuumn.json'),
          "rows": result
          });
          });
            });
          
          }
          
          $.fn.get_FullrecBy_id = function(DocID,category){
          $.get('http://localhost:3130/get_Fullrec_with_id',{
          DocID:DocID,
          category:category
          },
          function (result){
          getE("Fullrec_disp_div_loaderDDH").style.display = "none";
          getE("Fullrec_disp_div_mainDDH").style.display = "block";               
          $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"></div>');
          if(result.date == null || result.date ===""){
          }else{
          var collect_o_date = result.date.split("T");
          var date = collect_o_date[0];
          $("#Fullrec_date_pdr").text(date);
          $("#Fullrec_div_dpr").append(result.disp_data);
          }
          });
          }
          $("#Fullrec_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
          var row=$( this ).parent();
          if(!row.hasClass('footable-paging')){
          getE("Fullrec_disp_div_loaderDDH").style.display = "block";
          getE("Fullrec_disp_div_mainDDH").style.display = "none";
          var dac = row.closest('tr').children('td:first').text();
          if(dac == null || dac.date ===""){
          }else{
          var collect_o_id_c = dac.split("|");
          id = collect_o_id_c[0];
          category = collect_o_id_c[1];
          $.fn.get_FullrecBy_id(id,category);
          }
          }
          return false;
          });
          $.fn.getFullrecSelectwithDate_dpr = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
              $.get('http://localhost:3130/get_disp_Fullrec_dateTime',{
          usrID:result_id.usrID
          },
          function (result){
            if(result.length <= 0){
              getE("Fullrec_disp_div_loaderDDH").style.display = "none";
          getE("Fullrec_disp_div_mainDDH").style.display = "block";               
          $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"></div>');
            }
          result.forEach(e => {
            if(e.date == null || e.date ===""){
              if(e.date == null || e.date ===""){
              }else{
          var collect_o_date = e.date.split("T");
          e.date = collect_o_date[0];
          e.time = collect_o_date[1];
            }
          }
          });
          $('#Fullrec_selT_pdr').footable({
          "columns": $.post('http://localhost:4417/general_server_files/FullrecSelTableColuumn.json'),
          "rows": result
          });
          var dac = result[0].id_and_category;
          if(dac.date == null || dac.date ===""){
          }else{
          var collect_o_id_c = dac.split("|");
          id = collect_o_id_c[0];
          category = collect_o_id_c[1];
          if(collect_o_id_c.length >= 1){
            category = collect_o_id_c[1];
            $.fn.get_FullrecBy_id(id,category);
          }else{
            $.fn.get_FullrecBy_id("",category);
          }
        }
          });
            });
          
          }
          
          function DispensedTabclick(){
            static_data.current_active_dispRecTab = "dispensed";
            $.fn.getDispensedSelectwithDate_dpr();
            $.fn.getLatest_Dispensed();
          }
          function NoteTabclick(){
            static_data.current_active_dispRecTab = "note";
            $.fn.getNoteSelectwithDate_dpr();
            $.fn.getLatest_Note();
          }
          
          function FullrecTabclick(){
            static_data.current_active_dispRecTab = "fullRec";
            $.fn.getFullrecSelectwithDate_dpr();
          }
          
          $.fn.viewDispFormImage = function(image,ul){
          getE("jBox1").style.display = "none";
          $lg = $("#"+ul);
          $lg.lightGallery();
          $("#"+image).click();
          $lg.on('onCloseAfter.lg',function(event){
          getE("jBox1").style.display = "block";
          });
          
          }
          
          function getE(ID){
            return document.getElementById(ID);
          }
          
          function reload_curr_PdispTab(){
            if(static_data.current_active_dispRecTab === "chart"){
              chartTabclick();
            }else if(static_data.current_active_dispRecTab === "radiograph"){
              radiographTabclick();
            }else if(static_data.current_active_dispRecTab === "lab"){
              labTabclick();
            }else if(static_data.current_active_dispRecTab === "prescription"){
              PrescriptionTabclick();
            }else if(static_data.current_active_dispRecTab === "dispensed"){
              DispensedTabclick()
            }else if(static_data.current_active_dispRecTab === "note"){
              NoteTabclick();
            }else if(static_data.current_active_dispRecTab === "fullRec"){
              FullrecTabclick();
            }
          }
          
          function de_assign_a_particularP(id){
            $.get('http://localhost:3130/de_assign_particular_patient',{
              assignID:id
            },
            function (result){
              if(result === "1110016"){
                erro_notice_popup("Erro occured while De-Assigning");
              }else if(result === "1110013" || response === "10028"){
                erro_notice_popup("You do not have clerance for this operation");
              }else if(result === "1110012"){
                erro_notice_popup("Erro occured while De-Assigning");
              }else if(result === "1110011"){
                erro_notice_popup("Invalid node");
              }else{
                set_home_main_fragment();
                notice_popup('De-Assigned Successfully');
                insert_out_anim_for_idle_fragment();
                $.fn.get_all_assigned_patients();
              }
            });
          }

          $.fn.getLatest_PrescriptionDwrkBar = function(){
            var startDate = moment().subtract(174,'days');
            var endDate = moment();
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
            $.get('http://localhost:3130/get_latest_Prescription',{
              range1:startDate.format('MM/DD/YYYY'),
              range2:endDate.format('MM/DD/YYYY'),
              usrID:result_id.usrID
            },
            function (result){
              $("#rPrescriptionDispLwNabBar").replaceWith('<div style="min-height: 200px; width: 97%;" id="rPrescriptionDispLwNabBar"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#rPrescriptionDispLwNabBar_date_pdr").text(date);
              $("#rPrescriptionDispLwNabBar").append(result.disp_data);
              }
            });
          });
          }
          
          $.fn.getLatest_LabDwrkBar = function(){
            var startDate = moment().subtract(174,'days');
            var endDate = moment();
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
            $.get('http://localhost:3130/get_latest_Lab',{
              range1:startDate.format('MM/DD/YYYY'),
              range2:endDate.format('MM/DD/YYYY'),
              usrID:result_id.usrID
            },
            function (result){
              $("#rLabDispLwNabBar").replaceWith('<div style="min-height: 200px; width: 97%;" id="rLabDispLwNabBar"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#rLabDispLwNabBar_date_pdr").text(date);
              $("#rLabDispLwNabBar").append(result.disp_data);
              }
            });
          });
          }
          
          $.fn.getLatest_RadiographDwrkBar = function(){
            var startDate = moment().subtract(174,'days');
            var endDate = moment();
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
            $.get('http://localhost:3130/get_latest_radiograph',{
              range1:startDate.format('MM/DD/YYYY'),
              range2:endDate.format('MM/DD/YYYY'),
              usrID:result_id.usrID
            },
            function (result){
              $("#rRadiographDispLwNabBar").replaceWith('<div style="min-height: 200px; width: 97%;" id="rRadiographDispLwNabBar"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#rRadiographDispLwNabBar_date_pdr").text(date);
              $("#rRadiographDispLwNabBar").append(result.disp_data);
              }
            });
          });
          }

          $.fn.getLatest_DispensedDwrkBar = function(){
            var startDate = moment().subtract(174,'days');
            var endDate = moment();
            $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
            $.get('http://localhost:3130/get_latest_Dispensed',{
              range1:startDate.format('MM/DD/YYYY'),
              range2:endDate.format('MM/DD/YYYY'),
              usrID:result_id.usrID
            },
            function (result){
              $("#rDispensedDispLwNabBar").replaceWith('<div style="min-height: 200px; width: 97%;" id="rDispensedDispLwNabBar"></div>');
              if(result.date == null || result.date ===""){
              }else{
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#rDispensedDispLwNabBar_date_pdr").text(date);
              $("#rDispensedDispLwNabBar").append(result.disp_data);
              }
            });
          });
          }
          
          // end patient record display
                
          arrange_patient_search();
          arrange_idle_search_bar();
          $.fn.Lfocus("dde1");