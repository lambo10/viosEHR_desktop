

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
  pharmName:'',
  instiName:'',
  assigned_patients:[],
  assigned_pattient_btnS_count:0,
  curr_assigned_patientID:'',
  //usrd details
  usrID:'',
  usrName:'',
  usrAddress:'',
  usrAge:'',
  usrSex:'',
  usrPhoneNo:'',
  usrPatientId:'',
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
  current_active_inventory_tab:6,
  current_active_dispRecTab:'',
  file_input_lf_index:'',
  rediograph_firstClickFlag: false,
  lab_firstClickFlag: false,
  prescription_firstClickFlag: false,
  dispensed_firstClickFlag: false,
  note_firstClickFlag: false,
  fullRec_firstClickFlag: false
};
var pharmacistP_static_vars = {
  selected_start_date:"",
  selected_end_date:"",
  selected_drug_id:"",
  selected_drug_name:"",
  selected_drug_type:"",
  selected_drug_price:"",
  selected_drug_quantity:"",
  selected_drug_batchPrice:"",
  selected_drug_brand:"",
  selected_drug_drugShortage_point:"",
  selected_drug_strength:"",
  selected_drug_expDate:"",
  selected_drug_category:"",
  last_popperInstance:null,

  total_price:0,
  total_number_drugs:0,
  modal_total_number_drugs:0,
  total_quantity:0,
  total_patients_purchase:0
}
var dispensed_drug_array = [];
var physical_dispensediv_index = [];
var total_price_of_drugs_to_be_dispensed = 0;
function tab_pane1ClickAction (){
  $.fn.bottom_dispense_pane_up();
if(document.getElementById("profile-tab-classic").classList.contains("v_text_whiteFF")){
    document.getElementById("profile-tab-classic").classList.remove("v_text_whiteFF");
}

if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
    document.getElementById("note-btn").classList.remove("records_lower_pane_active");
}
document.getElementById("profile-tab-classic").classList.add("records_lower_pane_active");
};



            function tab_pane5ClickAction (){
              $.fn.bottom_dispense_pane_up();
                if(document.getElementById("profile-tab-classic").classList.contains("records_lower_pane_active")){
                    document.getElementById("profile-tab-classic").classList.remove("records_lower_pane_active");
                }
                
                if(document.getElementById("note-btn").classList.contains("v_text_whiteFF")){
                    document.getElementById("note-btn").classList.remove("records_lower_pane_active");
                }
            
            document.getElementById("profile-tab-classic").classList.add("v_text_whiteFF");
            document.getElementById("note-btn").classList.add("records_lower_pane_active");       
        }        


function insert_out_anim_for_lw_pr_pane(){
    document.getElementById("v_pr_form_container").classList.add("slideOutDown");
    setTimeout(remove_out_anim_for_lw_pr_pane,400);
}

function remove_out_anim_for_lw_pr_pane(){
    document.getElementById("v_pr_form_container").classList.remove("slideOutDown");
document.getElementById("main_patient_fragment").style.display = "none";
}



function insert_in_anim_for_lw_pr_pane(){
    document.getElementById("main_patient_fragment").style.display = "block";
    document.getElementById("v_pr_form_container").classList.add("slideInUp");
    setTimeout(remove_in_anim_for_lw_pr_pane,600);
}

function remove_in_anim_for_lw_pr_pane(){
    document.getElementById("v_pr_form_container").classList.remove("slideInUp");
}


function set_patients_main_fragment(assignID){
    document.getElementById("main_addpatient_wut_fragment").style.display = "none";
    document.getElementById("main_home_fragment").style.display = "none";
    insert_in_anim_for_lw_pr_pane();

    document.getElementById("home_wut_id").classList.remove("active");
    document.getElementById("add_patient").classList.remove("active");
    document.getElementById("patients_wut_id").classList.add("active");
    static_data.curr_assigned_patientID = assignID;
    if(static_data.curr_assigned_patientID === ''){
      getE('de_assign_btn_ID').style.display = "none";
    }else{
      $('#de_assign_btn_ID').attr("onclick","de_assign_a_particularP("+assignID+")");
      getE('de_assign_btn_ID').style.display = "block";
    }
    }

    function set_addpatient_main_fragment(){
        insert_out_anim_for_lw_pr_pane();
        document.getElementById("main_home_fragment").style.display = "none";
        document.getElementById("add_patient").style.display = "block";

        document.getElementById("home_wut_id").classList.remove("active");
        document.getElementById("patients_wut_id").classList.remove("active");
        document.getElementById("add_patient").classList.add("active");
        show("main_addpatient_wut_fragment");
        // only pharmacy portal 
        if(static_data.current_active_inventory_tab == 1){
          $.fn.select_soh_tab_transfer(pharmacistP_static_vars.selected_drug_category);
        }else if(static_data.current_active_inventory_tab == 2){
          $.fn.expiredDrugs(exp_startDateVHJ,exp_endVHJ);
        }else if(static_data.current_active_inventory_tab == 3){
          $.fn.get_losses(exp_startDateVHJ,exp_endVHJ);
        }else if(static_data.current_active_inventory_tab == 6){
          $.fn.get_dispense_log(pharmacistP_static_vars.selected_start_date,pharmacistP_static_vars.selected_end_date);
        }else if(static_data.current_active_inventory_tab == 7){
          $.fn.get_poison_log();
        }else if(static_data.current_active_inventory_tab == 8){
          $.fn.getDrugShortage();
        }
        // end only pharmacy portal
        
    }

    function set_home_main_fragment(){
      insert_out_anim_for_lw_pr_pane();
        document.getElementById("main_addpatient_wut_fragment").style.display = "none";

        document.getElementById("home_wut_id").classList.add("active");
        document.getElementById("patients_wut_id").classList.remove("active");
        document.getElementById("add_patient").classList.remove("active");
       show('main_home_fragment');
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

                function handle_rejected_patient_click(id){
                    var number_of_rejected_patients = 5;
                    var count = 0;
                    while(count < number_of_rejected_patients){
                        document.getElementById("rejected_patient"+count).style.background = "0"; 
                        count++;
                    }
                    document.getElementById(id).style.background = "gray";
                    insert_out_anim_for_chart();

                }

                function insert_out_anim_for_chart(){
                    document.getElementById("chart_inner").classList.add("fadeOut");
                    setTimeout(remove_out_anim_for_chart,300);
                }
                
                function remove_out_anim_for_chart(){
                    document.getElementById("chart_inner").classList.remove("fadeOut");
                document.getElementById("chart_inner").style.display = "none";
                // get selected rejected patient data
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
                    if(c_numInt == 9){
                      c_numInt += 2;
                    }else{
                      c_numInt++;
                    }
                    
                    if (document.getElementById("dde"+c_numInt.toString())) {
                     $.fn.Lfocus("#dde"+c_numInt.toString());
                   }else{
                    
                   }
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

                 $.fn.change_text = function(id,text){
                  $( "#"+id ).text(function( index ) {
                    return text;
                  });
                }

                

                   function add_drug_submission(){
                    var can_submit = true;
                    var name = getE('dde1').value;
                    var type = getE('dde2').value;
                    var price = getE('dde3').value;
                    var quality = getE('dde4').value;
                    var batch_price = getE('dde5').value;
                    var brand = getE('dde6').value;
                    var drug_shortage_point = getE('dde8').value;
                    var strength = getE('dde9').value;
                    var expDate = getE('dde11').value;
                    var category = getE('dde12').value;
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
                    if (check_empt('dde11') == 1) {
                      getE('dde11').style.background = "#ff11111111";
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
                      getE('dde12').style.background = "#ff12121212";
                      $.fn.change_text('poopertext12inner','Select Category');
                      pharmacistP_static_vars.last_popperInstance = new Popper(getE('dde12'), getE('poppertext12'), {
                        placement: 'bottom'
                      });
                      can_submit = false;
                    }else{
                      getE('dde12').style.background = "white";
                      can_submit = true;
                    }
                  }
                  
                    if (can_submit == true) {
                      if(pharmacistP_static_vars.last_popperInstance != null){
                        pharmacistP_static_vars.last_popperInstance.destroy();
                      }else{
                        pharmacistP_static_vars.last_popperInstance = null;
                      }
                      
                      $.fn.submit_add_drug(name,type,price,quality,batch_price,brand,drug_shortage_point,strength,expDate,category);
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

                  

                  function process_invontory_tab_click(id){
                    var count = 1;
                    if(id == 1){
                      $.fn.select_soh_tab_transfer(pharmacistP_static_vars.selected_drug_category);
                    }else if(id == 2){
                      $.fn.expiredDrugs(exp_startDateVHJ,exp_endVHJ);
                    }else if(id == 3){
                      $.fn.get_losses(exp_startDateVHJ,exp_endVHJ);
                    }else if(id == 6){
                      $.fn.get_dispense_log(pharmacistP_static_vars.selected_start_date,pharmacistP_static_vars.selected_end_date);
                    }else if(id == 7){
                      $.fn.get_poison_log();
                    }else if(id == 8){
                      $.fn.getDrugShortage();
                    }
                    while(count <= 8){
                      var wrk_obj = document.getElementById(count+"inv_pane");
                      if(wrk_obj.id !== id+"inv_pane"){
                        wrk_obj.style.display = "none";
                      }else{      
                        wrk_obj.style.display = "block";
                      }
                      count++;
                    }
                    static_data.current_active_inventory_tab = id;
                    inv_tab_click_indicator(id);
                    $.fn.getLatest_noteDwrkBar();
                  }

                    function inv_tab_click_indicator(id){
                    var count = 1;
                    while(count <= 8){
                      var wrk_obj = document.getElementById(count+"inv_tab_btn");
                      if(wrk_obj.id !== id+"inv_tab_btn"){
                        if(count == 2 || count == 7){
                          wrk_obj.style.background = "#EA0303";
                          wrk_obj.style.color = "white";
                        }else{
                        wrk_obj.style.background = "#243797";
                        wrk_obj.style.color = "white";
                        }
                      }else{
                        wrk_obj.style.background = "white";
                        wrk_obj.style.color = "black";
                      }
                      count++;
                    }
                  }

                 

                  $.fn.bottom_dispense_pane_up = function() {
                    $('#myClassicTabContent').show();
                    var checkhasuplogo = $('#push_bottom_dispense_pane_up_id').hasClass('fa-arrow-up');
                    if(checkhasuplogo){
                      $('#push_bottom_dispense_pane_up_id').removeClass('fa-arrow-up');
                      $('#push_bottom_dispense_pane_up_id').addClass('fa-arrow-down');
                      $.fn.hide_selT_pdr_tables();
                    }
                  }; 

                  $.fn.bottom_dispense_pane_down = function() {
                    $('#myClassicTabContent').hide();
                    var checkhasuplogo = $('#push_bottom_dispense_pane_up_id').hasClass('fa-arrow-down');
                    if(checkhasuplogo){
                      $('#push_bottom_dispense_pane_up_id').removeClass('fa-arrow-down');
                      $('#push_bottom_dispense_pane_up_id').addClass('fa-arrow-up');
                      $.fn.display_selT_pdr_tables();
                    }
                  }; 

                  $.fn.hide_selT_pdr_tables = function() {
                      getE("radiograph_selT_pdr").style.display = "none";
                      getE("Lab_selT_pdr").style.display = "none";
                      getE("Prescription_selT_pdr").style.display = "none";
                      getE("Dispensed_selT_pdr").style.display = "none";
                      getE("Note_selT_pdr").style.display = "none";
                      getE("Fullrec_selT_pdr").style.display = "none";
                  }

                  $.fn.display_selT_pdr_tables = function() {
                    getE("radiograph_selT_pdr").style.display = "block";
                    getE("Lab_selT_pdr").style.display = "block";
                    getE("Prescription_selT_pdr").style.display = "block";
                    getE("Dispensed_selT_pdr").style.display = "block";
                    getE("Note_selT_pdr").style.display = "block";
                    getE("Fullrec_selT_pdr").style.display = "block";
                }

                  

                  $.fn.bottom_dispense_pane_button_press = function() {
                    if($("#myClassicTabContent").is(":hidden")){
                      $.fn.bottom_dispense_pane_up();
                    }else{
                      $.fn.bottom_dispense_pane_down();
                    }
                    $.fn.getLatest_noteDwrkBar();
                  };

                  var pl_dde1 = document.querySelector("#dde1");
                  pl_dde1.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde1");
                    }
                  });

                  var pl_dde2 = document.querySelector("#dde2");
                  pl_dde2.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde2");
                    }
                  });

                  var pl_dde3 = document.querySelector("#dde3");
                  pl_dde3.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde3");
                    }
                  });

                  var pl_dde4 = document.querySelector("#dde4");
                  pl_dde4.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde4");
                    }
                  });

                  var pl_dde5 = document.querySelector("#dde5");
                  pl_dde5.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde5");
                    }
                  });

                  var pl_dde6 = document.querySelector("#dde6");
                  pl_dde6.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde7");
                    }
                  });

                  var pl_dde8 = document.querySelector("#dde8");
                  pl_dde8.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde8");
                    }
                  });

                  var pl_dde9 = document.querySelector("#dde9");
                  pl_dde9.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde9");
                      
                    }
                  });

                  var pl_dde11 = document.querySelector("#dde11");
                  pl_dde11.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      input_focus_system("dde11");
                    }
                  });

                  var pl_dde12 = document.querySelector("#dde12");
                  pl_dde12.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      add_drug_submission();
                    }
                  });
                  
                  $.fn.dispen_drug_search = function(){
                    var stext = $('#dispen_drug_search').val();
                    $.post("http://localhost:5000/search_drugs",
                  {
                    'text':stext
                  },
                  function(result){
                    add_search_result_row(result,stext);
                  });
                  }
                  $.fn.dispen_drug_find = function(data,text){
                    $.post("http://localhost:5000/find_drugs",
                  {
                    'drug_id':data
                  },
                  function(result){
                    add_search_result_row(result,text);
                  });
                  }
                  
                  

                  $.fn.submit_add_drug = function(name,type,price,quantity,batch_price,brand,drug_shortage_point,strength,expDate,category){
                    
                    $.post("http://localhost:5000/add_new_drug",
                  {
                    'name':name,
                    'type':type,
                    'price':price,
                    'quantity':quantity,
                    'batch_price':batch_price,
                    'brand':brand,
                    'drug_shortage_point':drug_shortage_point,
                    'strength':strength,
                    'expDate':expDate,
                    'category':category

                  },
                  function(result){
                    process_submit_add_drug(result);
                  });
                  }
                  
                  jQuery(function($){
                    
                  $.fn.select_soh_tab(1,'Capsules','Capsules');

                  });

                    $.fn.select_soh_tab_transfer = function(category){
                      pharmacistP_static_vars.selected_drug_category = category;
                      $.post('http://localhost:5000/get_drug',{
                        'category':category
                      },function(result){
                        var collected_data = JSON.parse(result);
                        var row_data = collected_data.ac_result;
                        var totals_for_row = collected_data.totals;
                        render_soh_totals(totals_for_row[0]);
                        row_data.forEach(e => {
                          e._id = e._id.$oid;
                        });
                        $('#sohTable').footable({
                          "columns": $.post('http://localhost:4417/general_server_files/SOH_columns.json'),
                          "rows": row_data
                        });
                      })
                    };


                  $.fn.select_soh_tab = function(id,text,category){
                    var count = 1;
                    while(count < 17){
                      $('#s_category'+count).removeClass('side_soh_selection');
                      count++;
                    }
                    $('#s_category'+id).addClass('side_soh_selection');
                    $('#soh_table_indicator').text(text);
                    $.fn.select_soh_tab_transfer(category);
                  }

                  $.fn.submit_dispensed_drug = function(){
                    $.get('http://localhost:3130/get_currOpratP_coll',{
          },
          function (result_id){
                    if(dispensed_drug_array.length <= 0){
                      erro_notice_popup("Pls Add Drugs to Dispense");
                    }else{
                    var drug_i_string = JSON.stringify(dispensed_drug_array);
                    getE("dispensed_btn_txt").style.display = "none";
                    getE("dispensed_loading").style.display = "block";
                    getE("dispense_btn_oo").disabled = true;
                    getE("dispense_btn_oo").style.cursor = "progress";
                    $.get("http://localhost:3130/dispense_drug",
                    {
                      'data':drug_i_string,
                      'patient_id':result_id.usrID
                    },
                    function(result){
                      if(result === "11111"){
                        $.fn.startDispanesedispSubmit();
                      }else if(result === "110137"){
                        erro_notice_popup("Quantity is above drug amount");
                      }else{
                        erro_notice_popup("Erro Dispensing Drugs");
                      }
                    });
                  }
                  });
                }

                  $.fn.startDispanesedispSubmit = function(){
                    var currentDate = new Date();
                    var date = currentDate.getDate();
                    var month = currentDate.getMonth();
                    var year = currentDate.getFullYear();
                    var dateString = year+"/"+(month +1)+"/"+date;
                    $.get("http://localhost:3130/get_prof_and_institu_name",{

          },function (result){
           
            $("#dispanseDispProcess").replaceWith('<div id="dispanseDispProcess"></div>');
                    $("#dispanseDispProcess").append(`
                    <div>
                    <div style="text-align:center; font-size:25px;">`+result.instiName+`</div>
                    <div style="text-align:center; font-size:20px;">Dispense Form</div><hr>
                    <div class="bootstrap row" style="display: inline-block; width: 90%;">
                    <div class="bootstrap col-md-6">
                  <label class="bootstrap col-md-4 control-label" style="text-align:right" for="input01">Name</label>
                  <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                    <span class="C_INP_P">`+static_data.usrName+`</span>
                    <p class="bootstrap help-block"></p>
                  </div>
                </div>
                <div class="bootstrap col-md-6">
                    <label class="bootstrap col-md-4 control-label" style="text-align:right" for="input01">Patient No</label>
                    <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                      <span class="C_INP_P">`+static_data.usrPatientId+`</span>
                      <p class="bootstrap help-block"></p>
                    </div>
                  </div>
                </div>
                <br><br>
                <div class="bootstrap row" style="display: inline-block; width: 90%;">
                <div class="bootstrap col-md-6">
              <label class="bootstrap col-md-4 control-label" style="text-align:right" for="input01">Sex</label>
              <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                <span class="C_INP_P">`+static_data.usrSex+`</span>
                <p class="bootstrap help-block"></p>
              </div>
            </div>
            <div class="bootstrap col-md-6">
                <label class="bootstrap col-md-4 control-label" style="text-align:right" for="input01">Phone No</label>
                <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                  <span class="C_INP_P">`+static_data.usrPhoneNo+`</span>
                  <p class="bootstrap help-block"></p>
                </div>
              </div>
            </div><hr>
                    </div>
                    `);
                    $("#dispanseDispProcess").append($("<div style='text-align:center'><div style='font-size:18px;'>Drugs</div><table class='table table-striped' style='display:inline-block; width:inherit;' id='dispense_table_tablemain_div'></table></div>"));
                    var collected_disp_drugFstr = $("#dispense_table_tablemain").html();
                    collected_disp_drugF = $(collected_disp_drugFstr);
                    collected_disp_drugF.find("button").replaceWith("");
                    $("#dispense_table_tablemain_div").append(collected_disp_drugF);
                    $("#dispense_table_tablemain_div").find("tbody").attr("id","");
                    document.getElementById("dispense_table_tablemain_div").id = "";
                    $("#dispanseDispProcess").append(`
                    <hr><div class="bootstrap row" style="display: inline-block; width: 90%;">
                <div class="bootstrap col-md-6">
              <label class="bootstrap col-md-4 control-label" style="text-align:right" for="input01">Pharm</label>
              <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                <span class="C_INP_P">`+result.fullName+`</span>
                <p class="bootstrap help-block"></p>
              </div>
            </div>
            <div class="bootstrap col-md-6">
                <label class="bootstrap col-md-4 control-label" style="text-align:right" for="input01">Date</label>
                <div class="bootstrap col-md-8 FD_border_tag" style="border: 1px solid rgb(190, 187, 187); min-height:30px; padding-left: 30px">
                  <span class="C_INP_P">`+dateString+`</span>
                  <p class="bootstrap help-block"></p>
                </div>
              </div>
            </div>
                    `);
                    $.fn.postDispanseDispform();
          });
                    
                  }

                  $.fn.postDispanseDispform = function (){
                    $.get('http://localhost:3130/get_currOpratP_coll',{
          },
          function (result_id){
                    $.ajax({
                      url: 'http://localhost:3130/add_dispenseD_disp_data',
                      type:'POST',
                      contentType:'application/json',
                      data: JSON.stringify({
                      "disp_data":$("#dispanseDispProcess").html(),
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
                           getE("dispensed_loading").style.display = "none";
                           getE("dispensed_btn_txt").style.display = "block";
                           getE("dispense_btn_oo").disabled = false;
                            getE("dispense_btn_oo").style.cursor = "pointer";
                            notice_popup('Dispensed Successfully');
                          }
                          
                        }
                      }
                  });
                  });
                }


                  

                  function process_submit_add_drug(result){
                    var resultint = parseInt(result);
                    if(resultint == 100245){
                      erro_notice_popup("Drug already exsist");
                    }else{
                      notice_popup('Added Successfully');
                      getE("drug_add_form").reset();
                    }
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
                        alert('here');
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

                  $("#costingTable").on("click","td:not(.footable-first-column)",function(e){
                    var row=$( this ).parent();
                    if(!row.hasClass('footable-paging')){
                      $.fn.get_dispense_log_with_id(row.closest('tr').children('td:first').text());
                    }
                    return false;
                  });
                  
                  
                  $.fn.Lfocus = function(id) {
                    $(id).focus();
                  }; 

                  function arrange_drug_search(){
                      var object = document.getElementById("dispen_drug_search");
                      object.style.borderBottom = "strong 1px white";
                      object.style.borderTop = "none";
                      object.style.borderLeft = "none";
                      object.style.borderRight = "none";
                      object.style.fontStyle = "inherit";
                      object.style.fontWeight = "inherit";
                      object.style.minWidth = "inherit";
                      object.style.padding = "5px";
                 
                  }

                function add_search_result_row(add,search_text){
                  var table = document.createElement("table");
                    table.setAttribute("class","table");
                    table.setAttribute("id","dispen_drug_search_table");
                    var thead = document.createElement("thead");
                    var head_tr = document.createElement("tr");
                    var head_td1 = document.createElement("td");
                    var head_node1 = document.createTextNode("Drug");
                    head_td1.append(head_node1);
                    var head_td21 = document.createElement("td");
                    var head_node21 = document.createTextNode("Price(Naira)");
                    head_td21.append(head_node21);
                    var head_td2 = document.createElement("td");
                    var head_node2 = document.createTextNode("Strength(mg)");
                    head_td2.append(head_node2);
                    var head_td3s1 = document.createElement("td");
                    var head_node3s1 = document.createTextNode("Quantity in Stock");
                    head_td3s1.append(head_node3s1);
                    var head_td3 = document.createElement("td");
                    var head_node3 = document.createTextNode("Dispense Quantity");
                    head_td3.append(head_node3);
                    var head_td4 = document.createElement("td");
                    var head_node4 = document.createTextNode("Option");
                    head_td4.append(head_node4);

                    head_tr.append(head_td1);
                    head_tr.append(head_td21);
                    head_tr.append(head_td2);
                    head_tr.append(head_td3s1);
                    head_tr.append(head_td3);
                    head_tr.append(head_td4);

                    thead.append(head_tr);
                    table.append(thead);
                  var jsonData = JSON.parse(add);
                  for (i in jsonData) {
                    var td1 = document.createElement("td");
                    var node1 = document.createTextNode(jsonData[i].name);
                    td1.append(node1);
                    var td2 = document.createElement("td");
                    var node2 = document.createTextNode(jsonData[i].price);
                    td2.append(node2);
                    var td3 = document.createElement("td");
                    var node3 = document.createTextNode(jsonData[i].strength);
                    td3.append(node3);
                    var td4s1 = document.createElement("td");
                    var node4s1 = document.createTextNode(jsonData[i].quantity);
                    td4s1.append(node4s1);
                    var td4 = document.createElement("td");
                    var quantity_input = document.createElement("input");
                    quantity_input.setAttribute("type","text");
                    quantity_input.setAttribute("style","width: 50px;");
                    quantity_input.setAttribute("value","1");
                    quantity_input.setAttribute("id",jsonData[i]._id.$oid+"_dipQuantity");
                    td4.append(quantity_input);
                    var td5 = document.createElement("td");
                    var addButton_input = document.createElement("input");
                    addButton_input.setAttribute("type","button");
                    addButton_input.setAttribute("style","width: 50px; cursor: pointer;");
                    addButton_input.setAttribute("value","Add");
                    addButton_input.setAttribute("onClick","add_to_draft_disp_form('"+jsonData[i]._id.$oid+"','"+jsonData[i].name+"','"+jsonData[i].brand+"','"+jsonData[i].price+"','"+jsonData[i].type+"',"+jsonData[i].quantity+")");
                    td5.append(addButton_input);
                    var tr0 = document.createElement("tr");
                    tr0.append(td1);
                    tr0.append(td2);
                    tr0.append(td3);
                    tr0.append(td4s1);
                    tr0.append(td4);
                    tr0.append(td5);

                    table.append(tr0);

                  }
                  var rpObject = document.getElementById("dispen_drug_search_table");
                  var div_indic = document.createElement("div");
                  div_indic.setAttribute("id","dispen_drug_search_table_label");
                  var node_indic = document.createTextNode("Search Result For: "+search_text);
                  div_indic.append(node_indic);
                  document.getElementById("dispen_drug_search_table_div").replaceChild(div_indic,document.getElementById("dispen_drug_search_table_label"));
                  document.getElementById("dispen_drug_search_table_div").replaceChild(table,rpObject);
                  
                }

                function add_to_draft_disp_form(id,name,brand,cprice,type,drug_stock_quality){
                  var quantity = document.getElementById(id+"_dipQuantity").value;
if(quantity > drug_stock_quality){
  erro_notice_popup("Dispense Quantity is grater than Quantity in stock");
}else{
  
  var nprice = parseInt(cprice) * parseInt(quantity);
  var price = nprice+'';
  var new_array_data = {"id":id,"quantity":quantity,"price":price};
  dispensed_drug_array.push(new_array_data);

  var td1 = document.createElement("td");
    var node1 = document.createTextNode(name);
    td1.append(node1);
    td1.setAttribute("style","padding-top: 25px;");
    var td2 = document.createElement("td");
    var node2 = document.createTextNode(type);
    td2.append(node2);
    td2.setAttribute("style","padding-top: 25px;");
    var td3 = document.createElement("td");
    var node3 = document.createTextNode(brand);
    td3.append(node3);
    td3.setAttribute("style","padding-top: 25px;");
    var td31 = document.createElement("td");
    var node31 = document.createTextNode(quantity);
    td31.append(node31);
    td31.setAttribute("style","padding-top: 25px;");
    var td4 = document.createElement("td");
    var node4 = document.createTextNode(price);
    td4.append(node4);
    td4.setAttribute("style","padding-top: 25px;");
    var td5 = document.createElement("td");
    var addButton_input = document.createElement("button");
    addButton_input.setAttribute("type","button");
    addButton_input.setAttribute("style","background: #ff6666; padding-left: 10px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px; color:white");
    addButton_input.setAttribute("class","btn waves-effect waves-light");
    addButton_input.setAttribute("onClick","remove_dispense_drug_row("+(dispensed_drug_array.length - 1)+")");
    addButton_input.setAttribute("id",(dispensed_drug_array.length - 1)+"_DISPROW_ADD_BTN")
    var btnnode = document.createTextNode('Remove');
    addButton_input.append(btnnode);
    td5.append(addButton_input);

    var tr0 = document.createElement("tr");
    tr0.setAttribute("id",(dispensed_drug_array.length - 1)+"_DISPROW");
    tr0.append(td1);
    tr0.append(td2);
    tr0.append(td3);
    tr0.append(td31);
    tr0.append(td4);
    tr0.append(td5);
    
    document.getElementById('dispense_table_tablebody').append(tr0);
    physical_dispensediv_index.push((dispensed_drug_array.length - 1));
    total_price_of_drugs_to_be_dispensed = total_price_of_drugs_to_be_dispensed + parseInt(price);
    render_total_price_of_drugs_tb_dispn();
}
                }

                function remove_dispense_drug_row(index){
                  total_price_of_drugs_to_be_dispensed = total_price_of_drugs_to_be_dispensed - parseInt(dispensed_drug_array[index].price);
                  render_total_price_of_drugs_tb_dispn();
                  dispensed_drug_array.splice(index, 1);
                  physical_dispensediv_index.splice(index, 1);
                  document.getElementById('dispense_table_tablebody').removeChild(document.getElementById(index+"_DISPROW"));
                  var count = 0;
                  while(count < dispensed_drug_array.length){
                    document.getElementById(physical_dispensediv_index[count]+"_DISPROW").id = count+"_DISPROW";
                    document.getElementById(physical_dispensediv_index[count]+"_DISPROW_ADD_BTN").setAttribute("onClick","remove_dispense_drug_row("+count+")");
                    document.getElementById(physical_dispensediv_index[count]+"_DISPROW_ADD_BTN").id = count+"_DISPROW_ADD_BTN";
                    physical_dispensediv_index[count] = count;
                    count++;
                  }
                  
                }

                var search_drugs_input_listiner = document.querySelector("#dispen_drug_search");
                search_drugs_input_listiner.addEventListener('keypress', function (e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                      getE('eac-container-dispen_drug_search').getElementsByTagName('ul')[0].style.display = 'none';
                      $.fn.dispen_drug_search();
                    }
                  });

                function render_total_price_of_drugs_tb_dispn(){
                  getE('total_price_of_drugs_tb_dispn_id').innerHTML = total_price_of_drugs_to_be_dispensed+'<span style="padding-left:10px;">Naira</span>';
                }
                function render_soh_totals(data){
                  getE('soh_total_price_div').innerHTML = 'TOTAL COST: '+data.price_sum+' Naira';
                  getE('soh_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+data.tot_no_of_drugs;
                  getE('soh_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+data.tot_quantity
                }

                $.fn.check_professional_loged_in = function(){
                  $.get("http://localhost:5000/get_professional_logedin_id",
                {},
                function(result){
                  process_check_professional_loged_in(result);
                });
                }

                $.fn.get_all_assigned_patients = function(){
                  $.get("http://localhost:3130/get_assigned_patients",
                {},
                function(result){
                  static_data.assigned_patients = result;
                  $.fn.check_assigP_a_indi_on_pnBtn();
                  process_get_all_assigned_patients(result);
                });
                };
                $.fn.get_r_attended_patients = function(){
                  $.get("http://localhost:3130/get_r_attended_patients",
                {},
                function(result){
                   process_get_r_attended_patients(result);
                });
                };
              
                $.fn.de_assign_all_patients = function(){
                  $.get("http://localhost:3130/de_assign_all_patients",
                {},
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
                    content: 'Erro getting Assigned Details',
                    color: 'red',
                    animation: notification_popup.animation,
                    closeOnClick: notification_popup.closeOnClick,
                    delayOpen: notification_popup.delayOpen,
                    delayClose: notification_popup.delayClose
                  });
                  notice.open();
                }else if(resultInt == 1110016){
                  var notice = new jBox('Notice', {
                    content: 'Erro getting Assigned Details',
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
                  var notice = new jBox('Notice', {
                    content: 'De-Assigned Successfully',
                    color: 'green',
                    animation: notification_popup.animation,
                    closeOnClick: notification_popup.closeOnClick,
                    delayOpen: notification_popup.delayOpen,
                    delayClose: notification_popup.delayClose
                  });
                  notice.open();
                  getE("home_wut_innerLink").click();
                }
                
                               
                
              });
                };

                $.fn.logoutHSD = function(){
                  $.get("http://localhost:5000/logout_professional",
                {},
                function(result){
                  process_logoutHSD();
                });
                }
                function process_logoutHSD(){
                  window.location.href="index.html";
                }

                function process_check_professional_loged_in(id){
                  var jsondata = JSON.parse(id);
                  var jsonid = jsondata.$oid;
                  document.getElementById('pr_profile_picSSG').src = 'http://localhost:4417/employee/'+jsonid+'/profile/usr_profile.jpg';
                }
                $.fn.get_r_attended_patients();
                $.fn.check_professional_loged_in();
              function update(){
                  arrange_patient_search();
                  //opInst- this should be carried out if the user is on the Home-Tab
                  $.fn.get_all_assigned_patients();
                  //End-opInst
                  setTimeout(update2,10000);
                }
                function update2(){
                  //opInst- this should be carried out if the user is on the Home-Tab
                  $.fn.get_r_attended_patients();
                  //End-opInst
                  setTimeout(update,10000);
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
              
              function disp_search_page(){
                document.getElementById("m_home_fregment_main").style.display = "none";
                document.getElementById("m_home_fregment_search_result").style.display = "block";
                set_home_main_fragment();
              }
              
              function search_page_back_btn_action(){
                document.getElementById("m_home_fregment_main").style.display = "block";
                document.getElementById("m_home_fregment_search_result").style.display = "none";
              }

              function process_recent_attended_a_assigned_p_click(id){
                static_data.usrID = id;
                $.get('http://localhost:3130/set_currOpratP_coll',{
                usrID:id
              },
              function (result){
                if(result === "11111"){

                  getE("patients_wut_innerLink").click();
                  process_idle_search_hitEnter_re_click(id);

                // startOnpatientPick();
                // set_patients_main_fragment('');
                // insert_in_anim_for_idle_fragment();
                // $.fn.getLatest_noteDwrkBar();
                

                }
              });
              }

              function process_assigned_patients_click(id,assignID){
                static_data.usrID = id;
                $.get('http://localhost:3130/set_currOpratP_coll',{
                usrID:id
              },
              function (result){
                if(result === "11111"){

                  getE("patients_wut_innerLink").click();
                  process_idle_search_hitEnter_re_click(id);

                // startOnpatientPick();
                // set_patients_main_fragment(assignID);
                // insert_in_anim_for_idle_fragment();
                // $.fn.getLatest_noteDwrkBar();
                }
              });
              }
              
              function process_get_r_attended_patients(data){
                var tbody = document.createElement("div");
                tbody.setAttribute("id","r_attend_p_id");
                
                if(data.length <= 0){
                  var emptyDiv = document.createElement("div");
                  emptyDiv.setAttribute("style","color: #bdbabaa6; font-size:30px;width:80%");
                  emptyDiv.append(document.createTextNode("You have not attended to any patient today"));
                 tbody.prepend(emptyDiv);
                 getE("asg_pTab_bBar_btn").style.display = "none";
                }else{
              if(data === "1110013"){
                var emptyDiv = document.createElement("div");
                emptyDiv.setAttribute("style","color: #bdbabaa6; font-size:30px;width:80%");
                emptyDiv.append(document.createTextNode("Access Denied"));
               tbody.prepend(emptyDiv);
            }else{

             try{

               
              data.forEach(e=>{
                var div1 = document.createElement("div");
                div1.setAttribute("id","r_attend_p_table_id");
                var div2 = document.createElement("div");
                div2.setAttribute("style","padding-bottom: 20px; cursor:pointer");
                div2.setAttribute("onclick","process_recent_attended_a_assigned_p_click('"+e.usrID+"')");
                var div3 = document.createElement("div");
                div3.setAttribute("style","width:100%; color: white; min-height: 50px; background: #11111133; padding: 20px; border-radius: 20px;");
                var div4 = document.createElement("div");
                div4.setAttribute("style","font-size: 18px;");
                var pnameTXT = document.createTextNode(e.user_name);
                var id_span = document.createElement("span");
                id_span.setAttribute("style","color: #f3f1f1c9; font-size: 13px;");
                var idTxt = document.createTextNode(e.usrID);
                id_span.append(idTxt);
                div4.append(pnameTXT);
                div4.append(id_span);
                var div5 = document.createElement("div");
                div5.setAttribute("style","color: #f3f1f1c9;");
                var opTXT = document.createTextNode(e.inserted_txt);
                div5.append(opTXT);

                div3.append(div4);
                div3.append(div5);
                div2.append(div3);
                div1.append(div2);
                tbody.prepend(div1);
              });
            

              // data.forEach(e=>{
              //   var tr = document.createElement("tr");
              //   tr.setAttribute("class","dr_home_s_p");
              //   tr.setAttribute("onclick","process_recent_attended_a_assigned_p_click('"+e.usrID+"')");
              //   var th = document.createElement("th");
              //   th.setAttribute("scope","row");
              //   var img = document.createElement("img");
              //   img.setAttribute("class","rounded-circle z-depth-0");
              //   img.setAttribute("src","http://localhost:4417/patient/"+e.usrID+"/profile/usr_profile.jpg");
              //   img.setAttribute("style","width: 70px; height: 70px;");
              //   var td1 = document.createElement("td");
              //   var div1 = document.createElement("div");
              //   div1.setAttribute("style","width:50px;");
              //   var strong1 = document.createElement("strong");
              //   div1_1 = document.createElement("div");
              //   div1_1.setAttribute("style","color:#616161");
              //   var txt1_1 = document.createTextNode(e.user_name);
              //   var hr = document.createElement("hr");
              //   div1_2 = document.createElement("div");
              //   div1_2.setAttribute("style","color:#616161");
              //   var txt1_2 = document.createTextNode(e.usrID);
              //   var td2 = document.createElement("td");
              //   var b1 = document.createElement("b");
              //   var br = document.createElement("br");
              //   var txt2_1 = document.createTextNode(e.type);
              //   div1_3 = document.createElement("div");
              //   div1_3.setAttribute("style","width:40%;");
              //   var txt2_2 = document.createTextNode(e.inserted_txt);
              
              //   tr.append(th);
              //   th.append(img);
              //   tr.append(td1);
              //   td1.append(div1);
              //   div1.append(strong1);
              //   strong1.append(div1_1);
              //   div1_1.append(txt1_1);
              //   strong1.append(hr);
              //   strong1.append(div1_2);
              //   div1_2.append(txt1_2);
              //   tr.append(td2);
              //   td2.append(b1);
              //   b1.append(txt2_1);
              //   td2.append(br);
              //   div1_3.append(txt2_2);
              //   td2.append(div1_3);
              //   tbody.prepend(tr);
              //   });
           
              }catch(e){
                var emptyDiv = document.createElement("div");
                emptyDiv.setAttribute("style","color: #bdbabaa6; font-size:30px;width:80%");
                emptyDiv.append(document.createTextNode("Opps.. something went wrong"));
               tbody.prepend(emptyDiv);
            }
            }
             }
                
              var replObject = document.getElementById("r_attend_p_id");
              document.getElementById("r_attend_p_table_id").replaceChild(tbody,replObject);
              }
              
              function process_get_all_assigned_patients(data){
              var tbody = document.createElement("div");
              tbody.setAttribute("id","asg_p_tb_id");
              
              
              if(data.length <= 0){
                var emptyDiv = document.createElement("div");
                emptyDiv.setAttribute("style","color: #bdbabaa6; font-size:30px;width:80%");
                emptyDiv.append(document.createTextNode("No assigned patients"));
               tbody.prepend(emptyDiv);
               getE("asg_pTab_bBar_btn").style.display = "none";
              }else{
                if(data === "1110013"){
                  var emptyDiv = document.createElement("div");
                    emptyDiv.setAttribute("style","color: #bdbabaa6; font-size:30px;width:80%");
                    emptyDiv.append(document.createTextNode("Access Denied"));
                   tbody.prepend(emptyDiv);
                   getE("asg_pTab_bBar_btn").style.display = "none";
                }else{
                  
                  try{
  
                    data.forEach(e=>{
                      
                    if(e.assigned == '1'){
                      static_data.attended_patients++;
                    }else{
                      var div1 = document.createElement("div");
                    div1.setAttribute("style","width:50%; color: white;padding-bottom: 10px; cursor:pointer");
                    div1.setAttribute("onclick","process_assigned_patients_click('"+e.usrID+"','"+e._id+"')");
                    var nameTxt = document.createTextNode(e.user_name);
                    var id_span = document.createElement("span");
                    id_span.setAttribute("style","color: #f3f1f1c9;");
                    var idTxt = document.createTextNode(" "+e.usrID);
                    id_span.append(idTxt);
  
                    div1.append(nameTxt);
                    div1.append(id_span);
                    tbody.prepend(div1);

                      static_data.unattended_patients++;
                    }
                    getE("asg_pTab_bBar_btn").style.display = "block";
                    getE("asg_pTab_bBar_btn_num_indicators").innerHTML = static_data.unattended_patients;
                    });
  
                    // data.forEach(e=>{
                    //   if(e.assigned == "1"){
                    //   }else{
                    //     var tr = document.createElement("tr");
                    //   tr.setAttribute("class","dr_home_s_p");
                    //   tr.setAttribute("onclick","process_assigned_patients_click('"+e.usrID+"','"+e._id+"')");
                    //   var th = document.createElement("th");
                    //   th.setAttribute("scope","row");
                    //   var img = document.createElement("img");
                    //   img.setAttribute("class","rounded-circle z-depth-0");
                    //   img.setAttribute("src","http://localhost:4417/patient/"+e.usrID+"/profile/usr_profile.jpg");
                    //   img.setAttribute("style","width: 30px; height: 30px;");
                    //   var td1 = document.createElement("td");
                    //   var txt1 = document.createTextNode(e.name);
                    //   var td2 = document.createElement("td");
                    //   var txt2 = document.createTextNode(e.age);
                    //   var td3 = document.createElement("td");
                    //   var txt3 = document.createTextNode(e.gender);
                    //   tr.append(th)
                    //   th.append(img);
                    //   td1.append(txt1);
                    //   tr.append(td1);
                    //   td2.append(txt2);
                    //   tr.append(td2);
                    //   td3.append(txt3);
                    //   tr.append(td3);
                    //   tbody.prepend(tr);
                    //   }
                    
                    //   if(e.assigned == '1'){
                    //     static_data.attended_patients++;
                    //   }else{
                    //     static_data.unattended_patients++;
                    //   }
                    // });
                  
                  }catch{
                    var emptyDiv = document.createElement("div");
                    emptyDiv.setAttribute("style","color: #bdbabaa6; font-size:30px;width:80%");
                    emptyDiv.append(document.createTextNode("Opps.. something went wrong"));
                   tbody.prepend(emptyDiv);
                   getE("asg_pTab_bBar_btn").style.display = "none";
                  }
                }
              }

              var replObject = document.getElementById("asg_p_tb_id");
              document.getElementById("asg_p_table_id").replaceChild(tbody,replObject);
              if(static_data.prv_unattended_patients == static_data.unattended_patients && static_data.prv_attended_patients == static_data.attended_patients){
              }else{
                static_data.prv_unattended_patients = static_data.unattended_patients;
                static_data.prv_attended_patients = static_data.attended_patients;
              }
              document.getElementById("un_attend_p_t_Num").innerHTML = static_data.prv_unattended_patients;
              document.getElementById("attend_p_t_Num").innerHTML = static_data.prv_attended_patients;
              // document.getElementById("assigned_patients_txtx").innerHTML = "Assigned Patients: "+(static_data.attended_patients+static_data.unattended_patients);
              static_data.attended_patients = 0;
              static_data.unattended_patients = 0;
              }

              function reset_firstTabclickFlags(){
                static_data.rediograph_firstClickFlag = false;
                static_data.lab_firstClickFlag = false;
                static_data.prescription_firstClickFlag = false;
                static_data.dispensed_firstClickFlag = false;
                static_data.note_firstClickFlag = false;
                static_data.fullRec_firstClickFlag = false;
              }
              
             
              
              function get_patient_d_f_static_vars(){
                $.get('http://localhost:3130/get_currOpratP_coll',{
                },
                function (result_id){
                $.get("http://localhost:3130/get_patient_d_f_static_vars",
                {
                  usrID:result_id.usrID
                },
                function(result){
                  static_data.usrName = result.p_name;
                  static_data.usrAddress = result.p_address;
                  static_data.usrAge = result.p_age;
                  static_data.usrSex = result.p_gender;
                  static_data.usrPhoneNo = result.p_phone_no;
                  static_data.usrPatientId = result.p_patient_no;
                  static_data.serverDate = result.date;
                  static_data.usrH_Name = result.insti_name;
                  static_data.usrH_Address = result.indti_address;
                  static_data.usrH_NHIS_NO = result.insti_NHIS_NO;
                  static_data.usrH_HMO_NO = result.insti_HMO_NO;
                  static_data.usrH_TEL_FAX = result.insti_tel_fax;
                });
              });
              }
              
              function arrange_idle_search_bar(){
                if(run_a_p_s <= 1){
                  var object = document.getElementById("idle_searchBar");
                  object.style.height = 'calc(2.25rem + 2px)';
                  object.style.padding = '.375rem .75rem';
                  object.style.fontSize = '1rem';
                  object.style.lineHeight = '1.5';
                  object.style.color = '#3c4858 !important';
                  object.style.backgroundColor = '#fff!important';
                  object.style.border = '1px solid #e9ecef !important';
                  object.style.borderRadius = '30px !important';
                  
                }
                run_a_p_s = run_a_p_s + 1;
              }
              
              
              function process_idle_search_p_click(id_value){
                static_data.usrID = id_value;
                $.get('http://localhost:3130/set_currOpratP_coll',{
                usrID:id_value
              },
              function (result){
                if(result === "11111"){
                reset_firstTabclickFlags();
                startOnpatientPick();
                insert_in_anim_for_idle_fragment();
                reset_wkr_var_search_r();
                $.fn.getLatest_noteDwrkBar();
                }
              });
              }
              function process_idle_search_hitEnter_re_click(id_value){
                $("#Radiograph-tab").click();
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
                $.fn.getLatest_noteDwrkBar();
                }
                
              }
              
              function search_result_cancel(){
                reset_wkr_var_search_r();
                insert_out_anim_for_idle_fragment_search_r_to_idle_sub();
              }
              
              function search_patient_s_btn_click(){
                reset_wkr_var_search_r();
                static_data.search_input = 0;
                document.getElementById('searchBTNsearchIcon').style.display = "none";
                document.getElementById('loading_anim').style.display = "block";
                $.fn.search_Patient_idleF('');
              }
              
              function search_patient_to_nav_s_btn_click(){
                reset_wkr_var_search_r();
                set_patients_main_fragment('');
                document.getElementById("patient_data_fragment").style.display = "none";
                document.getElementById("idle_fragment").style.display = "block";
                static_data.search_input = 1;
                document.getElementById('top_nav_loading_anim').style.display = "block";
                $.fn.search_Patient_top_nav('');
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
                  set_patients_main_fragment('');
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
                
                reset_firstTabclickFlags();
                reset_wkr_var_search_r();
                $.fn.getLatest_noteDwrkBar();
                get_patient_d_f_static_vars_prd();
                reload_curr_PdispTab();
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
                setTimeout(remove_out_anim_for_idle_fragment,500);
              }
              
              function remove_out_anim_for_idle_fragment(){
              document.getElementById("patient_data_fragment").classList.remove("zoomOut");
                document.getElementById("idle_fragment_sub").classList.remove("zoomIn");
                
              }
              
              function insert_in_anim_for_idle_fragment(){
              set_patients_main_fragment('');
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
              
              function reset_wkr_var_search_r(){
                static_data.prv_btn_count = 0;
                static_data.prv_prv_btn_count = 0;
                static_data.num_cur_r_e = 0;
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
              
              function process_search_Patient_idleF(e){
                document.getElementById('loading_anim').style.display = "none";
                document.getElementById('searchBTNsearchIcon').style.display = "block";
                document.getElementById('top_nav_loading_anim').style.display = "none";
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
                  dv4.setAttribute("style","font-size: 30px; color: white;");
                  var tex1 = document.createTextNode(e.first_name+" "+e.last_name+" "+e.middle_name);
                  var dv5 = document.createElement("div");
                  dv5.setAttribute("style","font-size: 15px; color: #00ff52;");
                  var tex2 = document.createTextNode(e._id);
                  var dv6 = document.createElement("div");
                  dv6.setAttribute("style","font-size: 15px; color: white;");
                  var tex3 = document.createTextNode("Email: "+e.email);
                  var dv7 = document.createElement("div");
                  dv7.setAttribute("style","font-size: 15px; color: white;");
                  var tex4 = document.createTextNode("Phone No: "+e.phone_no);
                  var dv8 = document.createElement("div");
                  dv8.setAttribute("style","font-size: 15px; color: white;");
                  var tex5 = document.createTextNode("Sex: "+e.gender);
                  var dv9 = document.createElement("div");
                  dv9.setAttribute("style","font-size: 15px; color: white;");
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
                document.getElementById('searchBTNsearchIcon').style.display = "block";
                document.getElementById('top_nav_loading_anim').style.display = "none";
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
                startOnpatientPick();
                
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
                usrID:id
              },
              function (result){
                if(result === "11111"){
                startOnpatientPick();
                
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
              var search_input_e = document.querySelector("#idle_searchBar");
              search_input_e.addEventListener('keypress', function (e) {
                var key = e.which || e.keyCode;
                if (key === 13) {
                  static_data.search_input = 0;
                  reset_wkr_var_search_r();
                  document.getElementById('searchBTNsearchIcon').style.display = "none";
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
                  if(check_string_equality(document.getElementById("idle_fragment_sub").style.display,"block")){
                    document.getElementById("search_result_fragment").style.display = "none";
                    }else{
                      document.getElementById("search_result_fragment").style.display = "block";
                    }
                    set_patients_main_fragment('');
                  $.fn.search_Patient_top_nav('');
                }
              });

              // only for phamacy
              var startDateVHJ = moment().subtract(29,'days');
              var endVHJ = moment();
              $('#dispLDate').html(startDateVHJ.format('MM/DD/YYYY')+' - '+endVHJ.format('MM/DD/YYYY'));
              pharmacistP_static_vars.selected_start_date = startDateVHJ.format('MM/DD/YYYY');
              pharmacistP_static_vars.selected_end_date = endVHJ.format('MM/DD/YYYY');
              $.get('http://localhost:3130/get_dispense_log',{
                range1:pharmacistP_static_vars.selected_start_date,
                range2:pharmacistP_static_vars.selected_end_date
              },
              function (result){
              if(result === "1110013"){

              }else{
                reset_pharmacistP_static_vars();
                result.forEach(e => {
                pharmacistP_static_vars.total_patients_purchase = pharmacistP_static_vars.total_patients_purchase + parseInt(e.numberOfdrugs);
                pharmacistP_static_vars.total_price = pharmacistP_static_vars.total_price + parseInt(e.Cost);
                pharmacistP_static_vars.total_quantity = pharmacistP_static_vars.total_quantity + parseInt(e.Quantity);
                pharmacistP_static_vars.total_number_drugs++;
                });
                $('#costingTable').footable({
                  "columns": $.post('http://localhost:4417/general_server_files/costing_columns.json'),
                  "rows": result
                });
                getE('dispensing_log_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
                getE('dispensing_log_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+pharmacistP_static_vars.total_number_drugs;
                getE('dispensing_log_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+pharmacistP_static_vars.total_quantity;
                getE('dispensing_log_total_patients_purchase_div').innerHTML = 'TOTAL PATIENTS PURCHASE: '+pharmacistP_static_vars.total_patients_purchase;
              }
              });
              $('#rDatePicker1').daterangepicker({
                "startDate": startDateVHJ,
                "endDate": endVHJ,
                "ranges":{
                  "Today":[moment(), moment()],
                  "Yesterday":[moment().subtract(1,'days'), moment().subtract(1,'days')],
                  "Last 7 Days":[moment().subtract(6,'days'), moment()],
                  "Last 30 Days":[moment().subtract(29,'days'), moment()],
                  "This Month":[moment().startOf('month'), moment().endOf('month')],
                  "Last Month":[moment().subtract(1,'month').startOf('month'), moment().subtract(1,'month').endOf('month')]
                }
            }, function(start, end, label) {});
            $('#rDatePicker1').on('apply.daterangepicker',function(ev,picker){ 
              $.fn.get_dispense_log(picker.startDate.format('MM/DD/YYYY'),picker.endDate.format('MM/DD/YYYY'));
            });
            
          $.fn.get_dispense_log = function(startDate,endDate){
            $('#dispLDate').html(startDate+' - '+endDate)
              pharmacistP_static_vars.selected_start_date = startDate;
              pharmacistP_static_vars.selected_end_date = endDate;
              $.get('http://localhost:3130/get_dispense_log',{
                range1:pharmacistP_static_vars.selected_start_date,
                range2:pharmacistP_static_vars.selected_end_date
              },
              function (result){
              if(result != null){
                reset_pharmacistP_static_vars();
                result.forEach(e => {
                pharmacistP_static_vars.total_patients_purchase = pharmacistP_static_vars.total_patients_purchase + parseInt(e.numberOfdrugs);
                pharmacistP_static_vars.total_price = pharmacistP_static_vars.total_price + parseInt(e.Cost);
                pharmacistP_static_vars.total_quantity = pharmacistP_static_vars.total_quantity + parseInt(e.Quantity);
                pharmacistP_static_vars.total_number_drugs++;
                });
                $('#costingTable').footable({
                  "columns": $.post('http://localhost:4417/general_server_files/costing_columns.json'),
                  "rows": result
                });
                getE('dispensing_log_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
                getE('dispensing_log_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+pharmacistP_static_vars.total_number_drugs;
                getE('dispensing_log_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+pharmacistP_static_vars.total_quantity;
                getE('dispensing_log_total_patients_purchase_div').innerHTML = 'TOTAL PATIENTS PURCHASE: '+pharmacistP_static_vars.total_patients_purchase;
                        }
              });
            };

            $.fn.get_dispense_log_with_id = function(id){
            $.get('http://localhost:3130/get_dispense_log_with_id',{
                range1:pharmacistP_static_vars.selected_start_date,
                range2:pharmacistP_static_vars.selected_end_date,
                DrugID:id
              },
              function (result){
              if(result != null){
                reset_pharmacistP_static_vars();
                result.forEach(e => {
                  if(e.Date == null || e.Date ===""){
                  }else{
                  collect_o_date = e.Date.split("T");
                e.onlyDate = collect_o_date[0];
                collect_o_time = collect_o_date[1].split(".");
                e.onlyTime = collect_o_time[0];
                pharmacistP_static_vars.total_patients_purchase+= parseInt(e.numberOfdrugs);
                pharmacistP_static_vars.total_price+= parseInt(e.Cost);
                pharmacistP_static_vars.total_quantity+= parseInt(e.Quantity);
                pharmacistP_static_vars.modal_total_number_drugs++;
                  }
                });
                getE('costing_t_m_title').innerHTML = result[0].DrugName;
                $('#costingTable_modal').footable({
                  "columns": $.post('http://localhost:4417/general_server_files/costing_columns_modal.json'),
                  "rows": result
                });
                getE('dispensing_log_modal_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
                getE('dispensing_log_modal_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+pharmacistP_static_vars.modal_total_number_drugs;
                getE('dispensing_log_modal_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+pharmacistP_static_vars.total_quantity;
                        }
                $("#drugAnalytics_pd_modal").modal("show");
              });
            }
            
            function reset_pharmacistP_static_vars (){
              pharmacistP_static_vars.total_patients_purchase = 0;
              pharmacistP_static_vars.total_price = 0;
              pharmacistP_static_vars.total_quantity = 0;
              pharmacistP_static_vars.total_number_drugs = 0;
            }
            

            $('#dde11').daterangepicker({
              "singleDatePicker": true,
              "autoUpdateInput": false,
              "opens": "left",
              "drops": "up"
          }, function(start, end, label) {});
          $('#dde11').on('apply.daterangepicker',function(ev,picker){ 
            $('#dde11').val(picker.startDate.format('MM/DD/YYYY'));
          });
          $.fn.getDrugShortage = function (){
          $.get('http://localhost:3130/get_drug_shortage',{},
          function (result){
            if(result != null){
              reset_pharmacistP_static_vars();
              result.forEach(e => {
                pharmacistP_static_vars.total_price+= parseInt(e.cost);
                pharmacistP_static_vars.total_quantity+= parseInt(e.quantity);
                pharmacistP_static_vars.modal_total_number_drugs++;
              });
              $('#shortageTableACV').footable({
                "columns": $.post('http://localhost:4417/general_server_files/drugShortage_columns.json'),
                "rows": result
              });
              getE('drugShortage_modal_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
              getE('drugShortage_modal_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+pharmacistP_static_vars.modal_total_number_drugs;
              getE('drugShortage_modal_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+pharmacistP_static_vars.total_quantity;
                
            }
          });
        }

        $.fn.expiredDrugs = function (startDate,endDate){
          $('#exp_dispLDate').html(startDate+' - '+endDate)
          $.get('http://localhost:3130/get_expired_drugs',{
            range1:startDate,
            range2:endDate
          },
          function (result){
            if(result != null){
              reset_pharmacistP_static_vars();
              result.forEach(e => {
                if(e.price != null){
                  pharmacistP_static_vars.total_price+= parseInt(e.cost);
                }
                if(e.quantity != null){
                  pharmacistP_static_vars.total_quantity+= parseInt(e.quantity);
                }
                if(e.expDate == null || e.expDate ===""){
                }else{
                collect_o_date = e.expDate.split("T");
                e.expDate = collect_o_date[0];
                }
                pharmacistP_static_vars.modal_total_number_drugs++;
              });
              $('#expiredTableACV').footable({
                "columns": $.post('http://localhost:4417/general_server_files/expiredDrug_columns.json'),
                "rows": result
              });
              getE('expired_modal_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
              getE('expired_modal_total_no_of_drugs_div').innerHTML = 'TOTAL SETS OF DRUGS EXPIRED: '+pharmacistP_static_vars.modal_total_number_drugs;
              getE('expired_modal_total_quantity_div').innerHTML = 'TOTAL QUANTITY EXPIRED: '+pharmacistP_static_vars.total_quantity;
                
            }
          });
        }

        $("#sohTable").on("click","td:not(.footable-first-column)",function(e){
          var row=$( this ).parent();
          if(!row.hasClass('footable-paging')){
            var collected_id = row.closest('tr').children('td:first').text();
            pharmacistP_static_vars.selected_drug_id = collected_id;
            $.fn.display_drug_op_modal(collected_id);
            $.fn.get_drug_batches();
          }
          return false;
        });
        
        $.fn.display_drug_op_modal = function (id){
          $("#drugInfo_Modal_SSG").modal("show");
        }
        
        $.fn.add_adjustment = function(){
          $.fn.adjustD_getDrugInfo();
        }

        $.fn.add_losses = function(){
          $.fn.add_losses_getDrugInfo();
        }

        function input_focus_system2(id){
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
                    if (document.getElementById("newBatch_input"+c_numInt.toString())) {
                     $.fn.Lfocus("#newBatch_input"+c_numInt.toString());
                   }else{
                    
                   }
        }

        function input_focus_system3(id){
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
                    if (document.getElementById("adjDI"+c_numInt.toString())) {
                     $.fn.Lfocus("#adjDI"+c_numInt.toString());
                   }else{
                    
                   }
        }

        function input_focus_system4(id){
          var count = 0;
                    var collected_num = "";
                    while(count < id.length){
                      var wk_char = id.charAt(count);
                      if(wk_char == "1" || wk_char == "0"){
                   collected_num = collected_num + id.charAt(count);
                      }
                      count++;
                    }
                    var c_numInt = parseInt(collected_num);
                    c_numInt++;
                    if (document.getElementById("ad_Loss_DI"+c_numInt.toString())) {
                     $.fn.Lfocus("#ad_Loss_DI"+c_numInt.toString());
                   }else{
                    
                   }
        }


        var pl_newBatch_input1 = document.querySelector("#newBatch_input1");
        pl_newBatch_input1.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input1");
          }
        });

        var pl_newBatch_input2 = document.querySelector("#newBatch_input2");
        pl_newBatch_input2.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input2");
          }
        });

        var pl_newBatch_input3 = document.querySelector("#newBatch_input3");
        pl_newBatch_input3.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input3");
          }
        });

        var pl_newBatch_input4 = document.querySelector("#newBatch_input4");
        pl_newBatch_input4.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input4");
          }
        });

        var pl_newBatch_input5 = document.querySelector("#newBatch_input5");
        pl_newBatch_input5.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input5");
          }
        });

        var pl_newBatch_input6 = document.querySelector("#newBatch_input6");
        pl_newBatch_input6.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input6");
          }
        });

        var pl_newBatch_input7 = document.querySelector("#newBatch_input7");
        pl_newBatch_input7.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system2("newBatch_input7");
          }
        });



        var pl_adjDI_input0 = document.querySelector("#adjDI0");
        pl_adjDI_input0.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI0");
          }
        });

        var pl_adjDI_input1 = document.querySelector("#adjDI1");
        pl_adjDI_input1.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI1");
          }
        });

        var pl_adjDI_input2 = document.querySelector("#adjDI2");
        pl_adjDI_input2.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI2");
          }
        });

        var pl_adjDI_input3 = document.querySelector("#adjDI3");
        pl_adjDI_input3.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI3");
          }
        });

        var pl_adjDI_input4 = document.querySelector("#adjDI4");
        pl_adjDI_input4.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI4");
          }
        });

        var pl_adjDI_input5 = document.querySelector("#adjDI5");
        pl_adjDI_input5.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI5");
          }
        });

        var pl_adjDI_input6 = document.querySelector("#adjDI6");
        pl_adjDI_input6.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI6");
          }
        });

        var pl_adjDI_input7 = document.querySelector("#adjDI7");
        pl_adjDI_input7.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI7");
          }
        });

        var pl_adjDI_input8 = document.querySelector("#adjDI8");
        pl_adjDI_input8.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI8");
          }
        });

        var pl_adjDI_input9 = document.querySelector("#adjDI9");
        pl_adjDI_input9.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system3("adjDI9");
          }
        });

        var add_losses_input0 = document.querySelector("#ad_Loss_DI0");
        add_losses_input0.addEventListener('keypress', function (e) {
          var key = e.which || e.keyCode;
          if (key === 13) {
            input_focus_system4("ad_Loss_DI0");
          }
        });

        $("#ad_Loss_DI1").focus(function() {
          if(document.getElementById('ad_Loss_DI1').value === ''){
              document.getElementById('ad_Loss_DI1').value +='• ';
        }
      });

        $("#ad_Loss_DI1").keyup(function(event){
          var keycode = (event.keyCode ? event.keyCode : event.which);
          if(keycode == '13'){
            getE("ad_Loss_DI1").value +="• ";
        }
        });


        $.fn.getDrugInfo = function (){
          getE("add_batch_form").reset();
          $.get('http://localhost:3130/get_drug_with_id',{
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              pharmacistP_static_vars.selected_drug_price = result.price;
              pharmacistP_static_vars.selected_drug_quantity = result.quantity;
              pharmacistP_static_vars.selected_drug_batchPrice = result.batch_price;
              pharmacistP_static_vars.selected_drug_brand = result.brand;
              pharmacistP_static_vars.selected_drug_drugShortage_point = result.drug_shortage_point;
              pharmacistP_static_vars.selected_drug_strength = result.strength;
              pharmacistP_static_vars.selected_drug_expDate = result.expDate;

                    getE("drug_name_D_modalAA").innerHTML = result.name;
                    getE("drug_Type_D_modalAA").innerHTML = result.type;
                    getE("drug_Cprice_D_modalAA").innerHTML = result.price;
                    getE("drug_Cquantity_D_modalAA").innerHTML = result.quantity;
                    getE("drug_Cbprice_D_modalAA").innerHTML = result.batch_price;
                    getE("drug_brand_D_modalAA").innerHTML = result.brand;
                    getE("drug_strength_D_modalAA").innerHTML = result.strength;
                    getE("drug_category_D_modalAA").innerHTML = result.category;

                    getE("newBatch_input1").placeholder = result.price;
                    getE("newBatch_input2").placeholder = result.quantity;
                    getE("newBatch_input3").placeholder = result.batch_price;
                    getE("newBatch_input4").placeholder = result.brand;
                    getE("newBatch_input5").placeholder = result.drug_shortage_point;
                    getE("newBatch_input6").placeholder = result.strength;
                    getE("newBatch_input7").placeholder = result.expDate;
                    $("#add_batchModal").modal("show");
            }
          });
        }
        $.fn.adjustD_getDrugInfo = function (){
          getE("adjust_drug_form_id").reset();
          $.get('http://localhost:3130/get_drug_with_id',{
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              pharmacistP_static_vars.selected_drug_name = result.name;
              pharmacistP_static_vars.selected_drug_type = result.type;
              pharmacistP_static_vars.selected_drug_category = result.category;
              pharmacistP_static_vars.selected_drug_price = result.price;
              pharmacistP_static_vars.selected_drug_quantity = result.quantity;
              pharmacistP_static_vars.selected_drug_batchPrice = result.batch_price;
              pharmacistP_static_vars.selected_drug_brand = result.brand;
              pharmacistP_static_vars.selected_drug_drugShortage_point = result.drug_shortage_point;
              pharmacistP_static_vars.selected_drug_strength = result.strength;
              pharmacistP_static_vars.selected_drug_expDate = result.expDate;

                    getE("adjDI0").placeholder = result.name;
                    getE("adjDI1").placeholder = result.type;
                    getE("adjDI2").placeholder = result.price;
                    getE("adjDI3").placeholder = result.quantity;
                    getE("adjDI4").placeholder = result.batch_price;
                    getE("adjDI5").placeholder = result.brand;
                    getE("adjDI6").placeholder = result.drug_shortage_point;
                    getE("adjDI7").placeholder = result.strength;
                    getE("adjDI8").placeholder = result.expDate;
                    getE("adjDI9").value = result.category;
                    $("#edith_DrugModal").modal("show");
            }
          });
        }
        $.fn.add_losses_getDrugInfo = function (){
          getE("add_loss_formID").reset();
          $.get('http://localhost:3130/get_drug_with_id',{
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              pharmacistP_static_vars.selected_drug_price = result.price;
              pharmacistP_static_vars.selected_drug_quantity = result.quantity;
              pharmacistP_static_vars.selected_drug_batchPrice = result.batch_price;
              pharmacistP_static_vars.selected_drug_brand = result.brand;
              pharmacistP_static_vars.selected_drug_drugShortage_point = result.drug_shortage_point;
              pharmacistP_static_vars.selected_drug_strength = result.strength;
              pharmacistP_static_vars.selected_drug_expDate = result.expDate;

              getE("drug_name_L_modalAA").innerHTML = result.name;
              getE("drug_Type_L_modalAA").innerHTML = result.type;
              getE("drug_Cprice_L_modalAA").innerHTML = result.price;
              getE("drug_Cquantity_L_modalAA").innerHTML = result.quantity;
              getE("drug_Cbprice_L_modalAA").innerHTML = result.batch_price;
              getE("drug_brand_L_modalAA").innerHTML = result.brand;
              getE("drug_strength_L_modalAA").innerHTML = result.strength;
              getE("drug_category_L_modalAA").innerHTML = result.category;

                    $("#add_Drug_Losses_Modal").modal("show");
            }
          });
        }


        $('#newBatch_input7').daterangepicker({
          "singleDatePicker": true,
          "autoUpdateInput": false,
          "opens": "left",
          "drops": "up"
      }, function(start, end, label) {});
      $('#newBatch_input7').on('apply.daterangepicker',function(ev,picker){ 
        $('#newBatch_input7').val(picker.startDate.format('MM/DD/YYYY'));
      });

      $('#adjDI8').daterangepicker({
        "singleDatePicker": true,
        "autoUpdateInput": false,
        "opens": "left",
        "drops": "up"
    }, function(start, end, label) {});
    $('#adjDI8').on('apply.daterangepicker',function(ev,picker){ 
      $('#adjDI8').val(picker.startDate.format('MM/DD/YYYY'));
    });
        $.fn.submit_add_batch = function (){
          
          pharmacistP_static_vars.selected_drug_price = ($("#newBatch_input1").val()) == ""?pharmacistP_static_vars.selected_drug_price:$("#newBatch_input1").val();
          pharmacistP_static_vars.selected_drug_quantity =  ($("#newBatch_input2").val()) == ""?pharmacistP_static_vars.selected_drug_quantity:$("#newBatch_input2").val();
          pharmacistP_static_vars.selected_drug_batchPrice =  ($("#newBatch_input3").val()) == ""?pharmacistP_static_vars.selected_drug_batchPrice:$("#newBatch_input3").val();
          pharmacistP_static_vars.selected_drug_brand =  ($("#newBatch_input4").val()) == ""?pharmacistP_static_vars.selected_drug_brand:$("#newBatch_input4").val();
          pharmacistP_static_vars.selected_drug_drugShortage_point =  ($("#newBatch_input5").val()) == ""?pharmacistP_static_vars.selected_drug_drugShortage_point:$("#newBatch_input5").val();
          pharmacistP_static_vars.selected_drug_strength =  ($("#newBatch_input6").val()) == ""?pharmacistP_static_vars.selected_drug_strength:$("#newBatch_input6").val();
          pharmacistP_static_vars.selected_drug_expDate =  ($("#newBatch_input7").val()) == ""?pharmacistP_static_vars.selected_drug_expDate:$("#newBatch_input7").val();

          $.get('http://localhost:3130/add_new_batch',{
            price:pharmacistP_static_vars.selected_drug_price,
            quantity:pharmacistP_static_vars.selected_drug_quantity,
            drug_shortage_point:pharmacistP_static_vars.selected_drug_drugShortage_point,
            batch_price:pharmacistP_static_vars.selected_drug_batchPrice,
            brand:pharmacistP_static_vars.selected_drug_brand,
            strength:pharmacistP_static_vars.selected_drug_strength,
            expDate:pharmacistP_static_vars.selected_drug_expDate,
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              notice_popup('Added Successfully');
              $.fn.select_soh_tab_transfer(pharmacistP_static_vars.selected_drug_category);
              $.fn.get_drug_batches();
            }
          });
        }

        $.fn.add_drug_adjustments = function (){
          pharmacistP_static_vars.selected_drug_name = ($("#adjDI0").val()) == ""?pharmacistP_static_vars.selected_drug_name:$("#adjDI0").val();
          pharmacistP_static_vars.selected_drug_type =  ($("#adjDI1").val()) == ""?pharmacistP_static_vars.selected_drug_type:$("#adjDI1").val();
          pharmacistP_static_vars.selected_drug_price = ($("#adjDI2").val()) == ""?pharmacistP_static_vars.selected_drug_price:$("#adjDI2").val();
          pharmacistP_static_vars.selected_drug_quantity =  ($("#adjDI3").val()) == ""?pharmacistP_static_vars.selected_drug_quantity:$("#adjDI3").val();
          pharmacistP_static_vars.selected_drug_batchPrice =  ($("#adjDI4").val()) == ""?pharmacistP_static_vars.selected_drug_batchPrice:$("#adjDI4").val();
          pharmacistP_static_vars.selected_drug_brand =  ($("#adjDI5").val()) == ""?pharmacistP_static_vars.selected_drug_brand:$("#adjDI5").val();
          pharmacistP_static_vars.selected_drug_drugShortage_point =  ($("#adjDI6").val()) == ""?pharmacistP_static_vars.selected_drug_drugShortage_point:$("#adjDI6").val();
          pharmacistP_static_vars.selected_drug_strength =  ($("#adjDI7").val()) == ""?pharmacistP_static_vars.selected_drug_strength:$("#adjDI7").val();
          pharmacistP_static_vars.selected_drug_expDate =  ($("#adjDI8").val()) == ""?pharmacistP_static_vars.selected_drug_expDate:$("#adjDI8").val();
          pharmacistP_static_vars.selected_drug_category =  ($("#adjDI9").val()) == ""?pharmacistP_static_vars.selected_drug_category:$("#adjDI9").val();
          

          $.get('http://localhost:3130/add_drug_adjustment',{
            name:pharmacistP_static_vars.selected_drug_name,
            type:pharmacistP_static_vars.selected_drug_type,
            category:pharmacistP_static_vars.selected_drug_category,
            price:pharmacistP_static_vars.selected_drug_price,
            quantity:pharmacistP_static_vars.selected_drug_quantity,
            drug_shortage_point:pharmacistP_static_vars.selected_drug_drugShortage_point,
            batch_price:pharmacistP_static_vars.selected_drug_batchPrice,
            brand:pharmacistP_static_vars.selected_drug_brand,
            strength:pharmacistP_static_vars.selected_drug_strength,
            expDate:pharmacistP_static_vars.selected_drug_expDate,
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              notice_popup('Added Successfully');
              $.fn.select_soh_tab_transfer(pharmacistP_static_vars.selected_drug_category);
            }
          });
        }

        $.fn.add_losses = function (){
          var collected_causes = $("#ad_Loss_DI1").val();
          collected_causes = collected_causes.replace(/•/g,"<br>•");
          $.get('http://localhost:3130/add_losses',{
            no_of_losses:$("#ad_Loss_DI0").val(),
            causes:collected_causes,
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              if(parseInt(result) == 11008){
                erro_notice_popup("No Of Losses is above drug Quantity");
              }else if(parseInt(result) == 11111){
                notice_popup('Added Successfully');
              $.fn.select_soh_tab_transfer(pharmacistP_static_vars.selected_drug_category);
              }
              
            }
          });
        }

        $("#expiredTableACV").on("click","td:not(.footable-first-column)",function(e){
          var row=$( this ).parent();
          if(!row.hasClass('footable-paging')){
            var collected_id = row.closest('tr').children('td:first').text();
            pharmacistP_static_vars.selected_drug_id = collected_id;
            
            var confirm_remove = new jBox('Confirm', {
              confirmButton:"YES",
              cancelButton:"NO",
              content:"<div style='font-size:25px;'>Are you sure want to remove this expired drug</div><div style='font-size:13px'>Pls make sure this drug is no longer in stuck before clicking YES</div>",
              blockScroll:false,
              confirm: function(){
                $.fn.remove_expired_drugs();
              }
            });
            confirm_remove.open();
          }
          return false;
        });

        $.fn.remove_expired_drugs = function (){
          $.get('http://localhost:3130/remove_expired_drug',{
            batchID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              if(parseInt(result) == 11008){
                erro_notice_popup("Can not subtract expired drugs from drug quantity");
              }else if(parseInt(result) == 11111){
              notice_popup('Removed successfully');
              $.fn.expiredDrugs();
              }
              
            }
          });
        }

        function start_add_to_poision_log(){
          var confirm_remove = new jBox('Confirm', {
            confirmButton:"YES",
            cancelButton:"NO",
            content:"<div style='font-size:25px;'>Are you sure want to add this drug to poision log</div>",
            blockScroll:false,
            confirm: function(){
              $.fn.add_to_poison_log();
            }
          });
          confirm_remove.open();
        }
        $.fn.add_to_poison_log = function (){
          $.get('http://localhost:3130/add_to_poision_log',{
            DrugID:pharmacistP_static_vars.selected_drug_id
          },
          function (result){
            if(result != null){
              if(parseInt(result) == 1110012){
                erro_notice_popup("Erro occured while inserting to poisonlog");
              }else if(parseInt(result) == 1110018){
                erro_notice_popup("Drug does not exsist");
              }else if(parseInt(result) == 11111){
                notice_popup('Added Successfully');
              $.fn.select_soh_tab_transfer(pharmacistP_static_vars.selected_drug_category);
              }
              
            }
          });
        }
        $.fn.get_poison_log = function (){
        $.get('http://localhost:3130/get_poision_log',{
        },
        function (result){
        if(result != null){
          reset_pharmacistP_static_vars();
          result.forEach(e => {
          pharmacistP_static_vars.total_price = pharmacistP_static_vars.total_price + parseInt(e.cost);
          pharmacistP_static_vars.total_quantity = pharmacistP_static_vars.total_quantity + parseInt(e.quantity);
          pharmacistP_static_vars.total_number_drugs++;
          });
          $('#poision_log_Table').footable({
            "columns": $.post('http://localhost:4417/general_server_files/poison_log_columns.json'),
            "rows": result
          });
          getE('poision_log_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
          getE('poision_log_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+pharmacistP_static_vars.total_number_drugs;
          getE('poision_log_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+pharmacistP_static_vars.total_quantity;
              
        }
        });
      }
      $.fn.get_drug_batches = function (){
        $.get('http://localhost:3130/get_drug_batches',{
          DrugID:pharmacistP_static_vars.selected_drug_id
        },
        function (result){
        if(result != null){
          reset_pharmacistP_static_vars();
          $('#batchesTable').footable({
            "columns": $.post('http://localhost:4417/general_server_files/drug_batchesColumn.json'),
            "rows": result
          });
        }
        });
      }
      $.fn.get_losses = function (){
        $.get('http://localhost:3130/get_drug_losses',{
        },
        function (result){
        if(result != null){
          reset_pharmacistP_static_vars();
          result.forEach(e => {
          pharmacistP_static_vars.total_price = pharmacistP_static_vars.total_price + parseInt(e.cost);
          pharmacistP_static_vars.total_quantity = pharmacistP_static_vars.total_quantity + parseInt(e.quantity);
          pharmacistP_static_vars.total_number_drugs++;
          });
          $('#poision_log_Table').footable({
            "columns": $.post('http://localhost:4417/general_server_files/losses_columns.json'),
            "rows": result
          });
          getE('poision_log_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
          getE('poision_log_total_no_of_drugs_div').innerHTML = 'TOTAL NUMBER OF DRUGS: '+pharmacistP_static_vars.total_number_drugs;
          getE('poision_log_total_quantity_div').innerHTML = 'TOTAL QUANTITY: '+pharmacistP_static_vars.total_quantity;
              
        }
        });
      }
      var exp_startDateVHJ = moment().subtract(29,'days').format('MM/DD/YYYY');
      var exp_endVHJ = moment().format('MM/DD/YYYY');
      $('#exp_DatePicker1').daterangepicker({
        "startDate": exp_startDateVHJ,
        "endDate": exp_endVHJ,
        "ranges":{
          "Today":[moment(), moment()],
          "Yesterday":[moment().subtract(1,'days'), moment().subtract(1,'days')],
          "Last 7 Days":[moment().subtract(6,'days'), moment()],
          "Last 30 Days":[moment().subtract(29,'days'), moment()],
          "This Month":[moment().startOf('month'), moment().endOf('month')],
          "Last Month":[moment().subtract(1,'month').startOf('month'), moment().subtract(1,'month').endOf('month')]
        }
    }, function(start, end, label) {});
    $('#exp_DatePicker1').on('apply.daterangepicker',function(ev,picker){
      $.fn.expiredDrugs(picker.startDate.format('MM/DD/YYYY'),picker.endDate.format('MM/DD/YYYY'));
    });

    $('#losses_DatePicker1').daterangepicker({
      "startDate": exp_startDateVHJ,
      "endDate": exp_endVHJ,
      "ranges":{
        "Today":[moment(), moment()],
        "Yesterday":[moment().subtract(1,'days'), moment().subtract(1,'days')],
        "Last 7 Days":[moment().subtract(6,'days'), moment()],
        "Last 30 Days":[moment().subtract(29,'days'), moment()],
        "This Month":[moment().startOf('month'), moment().endOf('month')],
        "Last Month":[moment().subtract(1,'month').startOf('month'), moment().subtract(1,'month').endOf('month')]
      }
  }, function(start, end, label) {});
  $('#losses_DatePicker1').on('apply.daterangepicker',function(ev,picker){
    $.fn.get_losses(picker.startDate.format('MM/DD/YYYY'),picker.endDate.format('MM/DD/YYYY'));
  });

  $.fn.get_losses = function (startDate,endDate){
    $('#losses_dispLDate').html(startDate+' - '+endDate);
    $.get('http://localhost:3130/get_drug_losses',{
      range1:startDate,
      range2:endDate
    },
    function (result){
      if(result != null){
        reset_pharmacistP_static_vars();
        result.forEach(e => {
          if(e.price != null){
            pharmacistP_static_vars.total_price+= parseInt(e.cost);
          }
          if(e.quantity != null){
            pharmacistP_static_vars.total_quantity+= parseInt(e.quantity);
          }
          if(e.expDate == null || e.expDate ===""){
          }else{
          collect_o_date = e.expDate.split("T");
          e.expDate = collect_o_date[0];
          }
          pharmacistP_static_vars.modal_total_number_drugs++;
        });
        $('#losses_Table').footable({
          "columns": $.post('http://localhost:4417/general_server_files/losses_columns.json'),
          "rows": result
        });
        getE('losses_total_price_div').innerHTML = 'TOTAL COST: '+pharmacistP_static_vars.total_price+' Naira';
        getE('losses_total_no_of_drugs_div').innerHTML = 'TOTAL SETS OF DRUGS LOSSED: '+pharmacistP_static_vars.modal_total_number_drugs;
        getE('losses_total_quantity_div').innerHTML = 'TOTAL QUANTITY LOSSED: '+pharmacistP_static_vars.total_quantity;
          
      }
    });
  }

  $("#poision_log_Table").on("click","td:not(.footable-first-column)",function(e){
    var row=$( this ).parent();
    if(!row.hasClass('footable-paging')){
      var collected_id = row.closest('tr').children('td:first').text();
      pharmacistP_static_vars.selected_drug_id = collected_id;
      
      var confirm_remove = new jBox('Confirm', {
        confirmButton:"YES",
        cancelButton:"NO",
        content:"<div style='font-size:25px;'>Are you sure want to remove this drug from poisons log</div>",
        blockScroll:false,
        confirm: function(){
          $.fn.remove_poison_log();
        }
      });
      confirm_remove.open();
    }
    return false;
  });

  $.fn.remove_poison_log = function (){
    $.get('http://localhost:3130/remove_from_poision_log',{
      DrugID:pharmacistP_static_vars.selected_drug_id
    },
    function (result){
      if(result != null){
        if(parseInt(result) == 11008){
          erro_notice_popup("Erro Occured while removing drug");
        }else if(parseInt(result) == 11111){
        notice_popup('Removed successfully');
        $.fn.get_poison_log();
        }
        
      }
    });
  }
        
          //End -- only for phamacy

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
            <a href="formbuilder.html"><button class="btn" style="border-radius:100px; height: 10px; padding-top:3px;padding-bottom: 21px; position:absolute; left:80%; top:0.5%; background:#243797; text-transform:initial"><b>New Form</b></button></a>
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
            result = result.reverse();
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
    form_disp_wkr.find(".FD_border_tag").attr("style","border: 1px solid rgb(190, 187, 187); background-color:#ebeff3; min-height:30px; padding-left: 30px; box-shadow: 0px 0px 23px 0px #11111130;border-radius: 8px;");
  }else if(form_disp_wkr.find("form").css("background-color") === "rgb(247, 229, 132)" || form_disp_wkr.find("form").css("background-color") === "rgb(236, 248, 126)"
  || form_disp_wkr.find("form").css("background-color") === "#ffff80" || form_disp_wkr.find("form").css("background-color") === "#ffffa6"
  || form_disp_wkr.find("form").css("background-color") === "rgb(135, 221, 250)"
  ){
    form_disp_wkr.find(".FD_border_tag").attr("style","background-color:#ebeff3; min-height:100px; padding-left: 30px; box-shadow: 0px 0px 23px 0px #11111130;border-radius: 8px;");
  }else{
    form_disp_wkr.find(".FD_border_tag").attr("style","border: 1px solid #f5f5f5; background-color:#ebeff3; min-height:100px; padding-left: 30px; box-shadow: 0px 0px 23px 0px #11111130;border-radius: 8px;");
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
      properties.value += '"'+newLabelval+'"'+':"'+el.value+'", ';
      }
      el.disabled = true;
    }
    }else if(el.type === "button"){
      var idvalue = el.id;
      if(idvalue == null || idvalue ===""){
      }else{
      var splitArray = idvalue.split("_");
      var labelVal = $("#alterdLabel_"+splitArray[1]).html();
      if(labelVal == null || labelVal === ""){}else{
      var newLabelval = labelVal.replace(" ","_");
      properties.value += '"'+newLabelval+'"'+':"'+el.value+'", ';
      $(el).replaceWith('');
    }}}
    else{
      var idvalue = el.id;
      if(idvalue == null || idvalue ===""){
      }else{
      var splitArray = idvalue.split("_");
      var labelVal = $("#alterdLabel_"+splitArray[1]).html();
      if(labelVal == null || labelVal === ""){}else{
      var newLabelval = labelVal.replace(" ","_");
      properties.value += '"'+newLabelval+'"'+':"'+el.value+'", ';
      $(el).replaceWith('<span class="C_INP_P" id="'+el.id+'">'+el.value+'</span>');
    }}}
  });

  var wkr_disp_select = form_disp_wkr.find("textarea");
  $.each(wkr_disp_select, function( i, el ) {
    var idvalue = el.id;
    if(idvalue == null || idvalue ===""){
    }else{
    var splitArray = idvalue.split("_");
    if(labelVal == null || labelVal === ""){}else{
    var labelVal = $("#alterdLabel_"+splitArray[1]).html();
    var newLabelval = labelVal.replace(" ","_");
    properties.value += '"'+newLabelval+'"'+':"'+el.value+'", ';
    $(el).replaceWith('<span class="C_INP_P" id="'+el.id+'">'+el.value+'</span>');
  }}});

  var wkr_disp_select = form_disp_wkr.find("select");
  $.each(wkr_disp_select, function( i, el ) {
    var idvalue = el.id;
    if(idvalue == null || idvalue ===""){
    }else{
    var splitArray = idvalue.split("_");
    var labelVal = $("#alterdLabel_"+splitArray[1]).html();
    if(labelVal == null || labelVal === ""){}else{
    var newLabelval = labelVal.replace(" ","_");
    properties.value += '"'+newLabelval+'"'+':"'+el.value+'", ';
    var selectedValue = $(el).children("option:selected").val();
    $(el).replaceWith('<span class="C_INP_P" id="'+el.id+'">'+selectedValue+'</span>');
  }}});
  
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


          $("#text").focus(function() {
            if(document.getElementById('text').value === ''){
                document.getElementById('text').value +='• ';
          }
        });
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
              <label class="bootstrap col-md-4 control-label" style="text-align:right" id="alterdLabel_1" for="input01">Pharm</label>
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

        $.fn.getProfandInstiDetails = function(){
          $.get("http://localhost:3130/get_prof_and_institu_name",{

          },function (result){
            static_data.pharmName = result.fullName;
            static_data.instiName = result.instiName;
          });
        }

        $.fn.getProfandInstiDetails();

        $.fn.startNoteSubmission = function (){
          var note_txt = $("#text").val();
          $("#InstiTutName").text(static_data.instiName);
          $("#nt_name").text(static_data.usrName);
          $("#nt_Pid").text(static_data.usrPatientId);
          $("nt_sex").text(static_data.usrSex);
          $("#nt_Pno").text(static_data.usrPhoneNo);
          $("#nt_phNam").text(static_data.pharmName);
          var currentDate = new Date();
          var date = currentDate.getDate();
          var month = currentDate.getMonth();
          var year = currentDate.getFullYear();
          var dateString = year+"/"+(month +1)+"/"+date;
          $("#nt_date").text(dateString);
          var replace_p_txt = note_txt.replace(/•/g,"<br>•");
          getE("EntredNote").innerHTML = replace_p_txt;

        }

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

        $.fn.getLatest_noteDwrkBar = function(){
          getE("rnoteDispLwNabBar_loaderDDH").style.display = "block";
          getE("rnoteDispLwNabBar_mainDDH").style.display = "none";
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
            getE("rnoteDispLwNabBar_loaderDDH").style.display = "none";
            getE("rnoteDispLwNabBar_mainDDH").style.display = "block";
            if(result.length <= 0){
              $("#rnoteDispLwNabBar").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="rnoteDispLwNabBar"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
            }else if(result == "90923"){
              $("#rnoteDispLwNabBar").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="rnoteDispLwNabBar"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
            }
            else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
              $("#rnoteDispLwNabBar").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="rnoteDispLwNabBar"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
            }
            else{
            $("#rnoteDispLwNabBar").replaceWith('<div style="min-height: 200px; width: 97%;" id="rnoteDispLwNabBar"></div>');
            var collect_o_date = result[0].date.split("T");
            var date = collect_o_date[0].date;
            $("#rnoteDispLwNabBar_date_pdr").text(date);
            $("#rnoteDispLwNabBar").append(result[0].disp_data);
          }}).fail(function(e){
            getE("rnoteDispLwNabBar_loaderDDH").style.display = "none";
            getE("rnoteDispLwNabBar_mainDDH").style.display = "block";
            $("#rnoteDispLwNabBar").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="rnoteDispLwNabBar"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
          });;
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
                set_patients_main_fragment('');
                insert_in_anim_for_idle_fragment();
                $.fn.getLatest_noteDwrkBar();
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
                set_patients_main_fragment('');
                insert_in_anim_for_idle_fragment();
                $.fn.getLatest_noteDwrkBar();
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

$.fn.enterHome = function(){
  getE("home_wut_innerLink").click();
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
            if(!static_data.rediograph_firstClickFlag){
            $.fn.getLatest_radiograph();
            static_data.rediograph_firstClickFlag = true;
            }
            
          }
          function labTabclick(){
            static_data.current_active_dispRecTab = "lab";
            $.fn.getLabSelectwithDate_dpr();
            if(!static_data.lab_firstClickFlag){
            $.fn.getLatest_Lab();
            static_data.lab_firstClickFlag = true;
            }
          }
          function PrescriptionTabclick(){
            static_data.current_active_dispRecTab = "prescription";
            $.fn.getPrescriptionSelectwithDate_dpr();
            if(!static_data.prescription_firstClickFlag){
            $.fn.getLatest_Prescription();
            static_data.prescription_firstClickFlag = true;
            }
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
            $.get('http://localhost:3130/get_latest_prescription',{
              usrID:result_id.usrID
            },
            function (result){
              getE("chart_disp_div_loaderDDH").style.display = "none";
              getE("chart_disp_div_mainDDH").style.display = "block";
              if(result[0].date == null || result[0].date ===""){
                $("#r_prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="r_prescription_div_dpr"><div style="font-size:20px">Oops something went wrong</div><div>pls check your system connection to the vios network</div></div>');
              }else{
              $("#r_prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="r_prescription_div_dpr"></div>');
              var collect_o_date = result[0].date.split("T");
              var date = collect_o_date[0];
              $("#r_presc_date_pdr").text(date);
              $("#r_prescription_div_dpr").append(result[0].disp_data);
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
              if(result.length <= 0){
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
              }else if(result == "90923"){
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
              }
              else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
              }
              else{
              $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"></div>');
              var collect_o_date = result.date.split("T");
              var date = collect_o_date[0];
              $("#Prescription_date_pdr").text(date);
              $("#Prescription_div_dpr").append(result.disp_data);
            }}).fail(function(e){
              getE("prescription_disp_div_loaderDDH").style.display = "none";
              getE("prescription_disp_div_mainDDH").style.display = "block";
              $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
            });
          }

          $.fn.getLatest_Prescription = function(){
            $.get('http://localhost:3130/get_currOpratP_coll',{
          },
          function (result_id){
            $.get('http://localhost:3130/get_latest_Prescription',{
              usrID:result_id.usrID
            },
            function (result){
              getE("prescription_disp_div_loaderDDH").style.display = "none";
              getE("prescription_disp_div_mainDDH").style.display = "block";
              if(result.length <= 0){
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
              }else if(result == "90923"){
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
              }
              else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
                $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
              }
              else{
              $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"></div>');
              var collect_o_date = result[0].date.split("T");
              var date = collect_o_date[0];
              $("#Prescription_date_pdr").text(date);
              $("#Prescription_div_dpr").append(result[0].disp_data);
            }}).fail(function(e){
              getE("prescription_disp_div_loaderDDH").style.display = "none";
              getE("prescription_disp_div_mainDDH").style.display = "block";
              $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
            });
          }).fail(function(e){
            getE("prescription_disp_div_loaderDDH").style.display = "none";
            getE("prescription_disp_div_mainDDH").style.display = "block";
            $("#Prescription_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
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
              }});
          $('#Prescription_selT_pdr').footable({
            "columns": $.post('http://localhost:4417/general_server_files/PrescriptionSelTableColuumn.json'),
            "rows": result.reverse()
          });

          setTimeout(function() { 
            if($('#Prescription_selT_pdr').length <= 0){
              $('#Prescription_selT_pdr_card_container').append('<table id="Prescription_selT_pdr" style="cursor: pointer" class="table" data-show-toggle="false" data-paging="true" data-sorting="true" data-filtering="true" data-paging-size="5" data-filter-dropdown-title="Search Record"></table>');
              $('#Prescription_selT_pdr').footable({
                "columns": $.post('http://localhost:4417/general_server_files/PrescriptionSelTableColuumn.json'),
                "rows": result.reverse()
              });
            }
        }, 1000);

        });
      });
    }

    $.fn.getLatest_radiograph = function(){
      $.get('http://localhost:3130/get_currOpratP_coll',{
    },
    function (result_id){
      $.get('http://localhost:3130/get_latest_radiograph',{
        usrID:static_data.usrID
      },
      function (result){
        getE("radiograph_disp_div_loaderDDH").style.display = "none";
        getE("radiograph_disp_div_mainDDH").style.display = "block";
        if(result.length <= 0){
          $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
        }else if(result == "90923"){
          $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
        }
        else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
          $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
        }
        else{
        $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"></div>');
        var collect_o_date = result[0].date.split("T");
        var date = collect_o_date[0];
        $("#radiograph_date_pdr").text(date);
        $("#radiograph_div_dpr").append(result[0].disp_data);
      }}).fail(function(e){
        getE("radiograph_disp_div_loaderDDH").style.display = "none";
        getE("radiograph_disp_div_mainDDH").style.display = "block";
        $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
      });
    }).fail(function(e){
      getE("radiograph_disp_div_loaderDDH").style.display = "none";
      getE("radiograph_disp_div_mainDDH").style.display = "block";
      $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    });
  }
  
    $.fn.get_radiographBy_id = function(DocID){
      $.get('http://localhost:3130/get_radiograph_with_id',{
        DocID:DocID
    },
      function (result){
        getE("radiograph_disp_div_loaderDDH").style.display = "none";
        getE("radiograph_disp_div_mainDDH").style.display = "block";
        if(result.length <= 0){
          $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
        }else if(result == "90923"){
          $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
        }
        else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
          $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
        }else{
        $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"></div>');
        var collect_o_date = result.date.split("T");
        var date = collect_o_date[0];
        $("#radiograph_date_pdr").text(date);
        $("#radiograph_div_dpr").append(result.disp_data);
      }}).fail(function(e){
        getE("radiograph_disp_div_loaderDDH").style.display = "none";
        getE("radiograph_disp_div_mainDDH").style.display = "block";
        $("#radiograph_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="radiograph_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
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
              }});

              $('#radiograph_selT_pdr').footable({
                "columns": $.post('http://localhost:4417/general_server_files/radiographSelTableColuumn.json'),
                "rows": result.reverse()
              });

              setTimeout(function() { 
                if($('#radiograph_selT_pdr').length <= 0){
                  $('#radiograph_selT_pdr_card_container').append('<table id="radiograph_selT_pdr" style="cursor: pointer" class="table" data-show-toggle="false" data-paging="true" data-sorting="true" data-filtering="true" data-paging-size="5" data-filter-dropdown-title="Search Record"></table>');
                  $('#radiograph_selT_pdr').footable({
                    "columns": $.post('http://localhost:4417/general_server_files/radiographSelTableColuumn.json'),
                    "rows": result.reverse()
                  });
                }
            }, 1000);
              
              
          
        });
      });
    }


    $.fn.getLatest_Lab = function(){
      $.get('http://localhost:3130/get_currOpratP_coll',{
        },
        function (result_id){
      $.get('http://localhost:3130/get_latest_Lab',{
        usrID:result_id.usrID
      },
      function (result){
        getE("lab_disp_div_loaderDDH").style.display = "none";
        getE("lab_disp_div_mainDDH").style.display = "block";
        if(result.length <= 0){
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
        }else if(result == "90923"){
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
        }
        else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
        }
        else{
        $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"></div>');
        var collect_o_date = result[0].date.split("T");
        var date = collect_o_date[0];
        $("#Lab_date_pdr").text(date);
        $("#Lab_div_dpr").append(result[0].disp_data);
        }
      }).fail(function(e){
        getE("lab_disp_div_loaderDDH").style.display = "none";
        getE("lab_disp_div_mainDDH").style.display = "block";
        $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
      });
    }).fail(function(e){
      getE("lab_disp_div_loaderDDH").style.display = "none";
      getE("lab_disp_div_mainDDH").style.display = "block";
      $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    });
  }
  
    $.fn.get_LabBy_id = function(DocID){
      $.get('http://localhost:3130/get_Lab_with_id',{
        DocID:DocID
    },
      function (result){
        getE("lab_disp_div_loaderDDH").style.display = "none";
        getE("lab_disp_div_mainDDH").style.display = "block";
        if(result.length <= 0){
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
        }else if(result == "90923"){
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
        }
        else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
          $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
        }
        else{
        $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"></div>');
        var collect_o_date = result.date.split("T");
        var date = collect_o_date[0];
        $("#Lab_date_pdr").text(date);
        $("#Lab_div_dpr").append(result.disp_data);
      }}).fail(function(e){
        getE("lab_disp_div_loaderDDH").style.display = "none";
        getE("lab_disp_div_mainDDH").style.display = "block";
        $("#Lab_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Lab_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
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
            }else{
          var collect_o_date = e.date.split("T");
          e.date = collect_o_date[0];
          e.time = collect_o_date[1];
          }});
     
          $('#Lab_selT_pdr').footable({
            "columns": $.post('http://localhost:4417/general_server_files/LabSelTableColuumn.json'),
            "rows": result.reverse()
          });
      setTimeout(function() { 
        if($('#Lab_selT_pdr').length <= 0){
          $('#Lab_selT_pdr_card_container').append('<table id="Lab_selT_pdr" style="cursor: pointer" class="table" data-show-toggle="false" data-paging="true" data-sorting="true" data-filtering="true" data-paging-size="5" data-filter-dropdown-title="Search Record"></table>');
          $('#Lab_selT_pdr').footable({
            "columns": $.post('http://localhost:4417/general_server_files/LabSelTableColuumn.json'),
            "rows": result.reverse()
          });
        }
    }, 1000);

    });
  });
}

$.fn.getLatest_Dispensed = function(){
  $.get('http://localhost:3130/get_currOpratP_coll',{
        },
        function (result_id){
  $.get('http://localhost:3130/get_latest_Dispensed',{
    usrID:result_id.usrID
  },
  function (result){
    getE("dispansed_disp_div_loaderDDH").style.display = "none";
    getE("dispansed_disp_div_mainDDH").style.display = "block";
    if(result.length <= 0){
      $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
    }else if(result == "90923"){
      $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
    }
    else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
      $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    }
    else{
    $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"></div>');
    var collect_o_date = result[0].date.split("T");
    var date = collect_o_date[0];
    $("#Dispensed_date_pdr").text(date);
    $("#Dispensed_div_dpr").append(result[0].disp_data);
  }}).fail(function(e){
    getE("dispansed_disp_div_loaderDDH").style.display = "none";
    getE("dispansed_disp_div_mainDDH").style.display = "block";
    $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
  });;
}).fail(function(e){
  getE("dispansed_disp_div_loaderDDH").style.display = "none";
  getE("dispansed_disp_div_mainDDH").style.display = "block";
  $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
});;
}

$.fn.get_DispensedBy_id = function(DocID){
  $.get('http://localhost:3130/get_Dispensed_with_id',{
    DocID:DocID
},
  function (result){
    getE("dispansed_disp_div_loaderDDH").style.display = "none";
    getE("dispansed_disp_div_mainDDH").style.display = "block";
    
    if(result.length <= 0){
      $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
    }else if(result == "90923"){
      $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
    }
    else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
      $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    }else{
    $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"></div>');
    var collect_o_date = result.date.split("T");
    var date = collect_o_date[0];
    $("#Dispensed_date_pdr").text(date);
    $("#Dispensed_div_dpr").append(result.disp_data);
  }}).fail(function(e){
    getE("dispansed_disp_div_loaderDDH").style.display = "none";
    getE("dispansed_disp_div_mainDDH").style.display = "block";
    $("#Dispensed_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Dispensed_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
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
    "rows": result.reverse()
  });

  setTimeout(function() { 
    if($('#Dispensed_selT_pdr').length <= 0){
      $('#Dispensed_selT_pdr_card_container').append('<table id="Dispensed_selT_pdr" style="cursor: pointer" class="table" data-show-toggle="false" data-paging="true" data-sorting="true" data-filtering="true" data-paging-size="5" data-filter-dropdown-title="Search Record"></table>');
      $('#Dispensed_selT_pdr').footable({
        "columns": $.post('http://localhost:4417/general_server_files/DispensedSelTableColuumn.json'),
        "rows": result.reverse()
      });
    }
}, 1000);
});
});
  }

  $.fn.getLatest_Note = function(){
    $.get('http://localhost:3130/get_currOpratP_coll',{
            },
            function (result_id){
    $.get('http://localhost:3130/get_latest_Note',{
      usrID:result_id.usrID
    },
    function (result){
      getE("note_disp_div_loaderDDH").style.display = "none";
      getE("note_disp_div_mainDDH").style.display = "block";
      if(result.length <= 0){
        $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
      }else if(result == "90923"){
        $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
      }
      else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
        $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
      }else{
      $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"></div>');
      var collect_o_date = result[0].date.split("T");
      var date = collect_o_date[0];
      $("#Note_date_pdr").text(date);
      $("#Note_div_dpr").append(result[0].disp_data);
    }}).fail(function(e){
      getE("note_disp_div_loaderDDH").style.display = "none";
      getE("note_disp_div_mainDDH").style.display = "block";
      $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    });
  }).fail(function(e){
    getE("note_disp_div_loaderDDH").style.display = "none";
    getE("note_disp_div_mainDDH").style.display = "block";
    $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
  });
  }

$.fn.get_NoteBy_id = function(DocID){
  $.get('http://localhost:3130/get_Note_with_id',{
    DocID:DocID
},
  function (result){
    getE("note_disp_div_loaderDDH").style.display = "none";
    getE("note_disp_div_mainDDH").style.display = "block";
    if(result.length <= 0){
      $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
    }else if(result == "90923"){
      $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
    }
    else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
      $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    }
    else{               
    $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"></div>');
    var collect_o_date = result.date.split("T");
    var date = collect_o_date[0];
    $("#Note_date_pdr").text(date);
    $("#Note_div_dpr").append(result.disp_data);
  }}).fail(function(e){
    getE("note_disp_div_loaderDDH").style.display = "none";
    getE("note_disp_div_mainDDH").style.display = "block";
    $("#Note_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Note_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
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
    }});
$('#Note_selT_pdr').footable({
  "columns": $.post('http://localhost:4417/general_server_files/NoteSelTableColuumn.json'),
  "rows": result.reverse()
});

setTimeout(function() { 
  if($('#Note_selT_pdr').length <= 0){
    $('#Note_selT_pdr_card_container').append('<table id="Note_selT_pdr" style="cursor: pointer" class="table" data-show-toggle="false" data-paging="true" data-sorting="true" data-filtering="true" data-paging-size="5" data-filter-dropdown-title="Search Record"></table>');
    $('#Note_selT_pdr').footable({
      "columns": $.post('http://localhost:4417/general_server_files/NoteSelTableColuumn.json'),
      "rows": result.reverse()
    });
  }
}, 1000);

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
    if(result.length <= 0){
      $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');
    }else if(result == "90923"){
      $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/document-security.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Locked</b></div><div style="text-align:center;color:#6f6f6f;">Patients permission is required to view this record</div><div style="text-align:center; padding-top:10px;"><button class="btn waves-effect waves-light" style="border-radius: 30px; background-color: #243797; display:inline-block; text-transform:initial" type="button">Request Permission</button></div></div>');
    }
    else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
      $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
    }
    else{              
    $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"></div>');
    var collect_o_date = result.date.split("T");
    var date = collect_o_date[0];
    $("#Fullrec_date_pdr").text(date);
    $("#Fullrec_div_dpr").append(result.disp_data);
  }}).fail(function(e){
    getE("Fullrec_disp_div_loaderDDH").style.display = "none";
    getE("Fullrec_disp_div_mainDDH").style.display = "block";
    $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
  });
}
$("#Fullrec_selT_pdr").on("click","td:not(.footable-first-column)",function(e){
  var row=$( this ).parent();
  if(!row.hasClass('footable-paging')){
    getE("Fullrec_disp_div_loaderDDH").style.display = "block";
    getE("Fullrec_disp_div_mainDDH").style.display = "none";
    var dac = row.closest('tr').children('td:first').text();
    var collect_o_id_c = dac.split("|");
    id = collect_o_id_c[0];
    category = collect_o_id_c[1];
    $.fn.get_FullrecBy_id(id,category);
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
  $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f"><img style="width:230px;height:200px;" src="img/emptyIcon.PNG" ></div><div style="text-align:center;color:#6f6f6f;"><b>Record Empty</b></div><div style="text-align:center;color:#6f6f6f;">Hmm.. looks like this record is blank</div></div>');   
}else if(result == "1110011" || result == "1110012" || result == "1100101" || result == "1110013"){
  $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="Fullrec_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
}
    result.forEach(e => {
      if(e.date == null || e.date ===""){
      }else{
    var collect_o_date = e.date.split("T");
    e.date = collect_o_date[0];
    e.time = collect_o_date[1];
    }});
$('#Fullrec_selT_pdr').footable({
  "columns": $.post('http://localhost:4417/general_server_files/FullrecSelTableColuumn.json'),
  "rows": result.reverse()
});

setTimeout(function() { 
  if($('#Fullrec_selT_pdr').length <= 0){
    $('#Fullrec_selT_pdr_card_container').append('<table id="Fullrec_selT_pdr" style="cursor: pointer" class="table" data-show-toggle="false" data-paging="true" data-sorting="true" data-filtering="true" data-paging-size="5" data-filter-dropdown-title="Search Record"></table>');
    $('#Fullrec_selT_pdr').footable({
      "columns": $.post('http://localhost:4417/general_server_files/FullrecSelTableColuumn.json'),
      "rows": result.reverse()
    });
  }
}, 1000);

var dac = result[0].id_and_category;
var collect_o_id_c = dac.split("|");
id = collect_o_id_c[0];
if(collect_o_id_c.length >= 1){
  category = collect_o_id_c[1];
  $.fn.get_FullrecBy_id(id,category);
}else{
  $.fn.get_FullrecBy_id("",category);
}

}).fail(function(e){
  getE("Fullrec_disp_div_loaderDDH").style.display = "none";
  getE("Fullrec_disp_div_mainDDH").style.display = "block";
  $("#Fullrec_div_dpr").replaceWith('<div style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; min-height: 400px;" id="r_prescription_div_dpr"><br><br><div style="font-size:35px; text-align:center; color:#6f6f6f">Oops.. something went wrong</div><div style="text-align:center;color:#6f6f6f;">Your institutions network connection or server is currently down. please check your connection to the vios network and try again or contact <a style="color:#243797"><b>help@vioshealth.com</b></a></div><div style="text-align:center;color:#6f6f6f;">Erro code:'+result+'</div></div>');
});
});
}

function DispensedTabclick(){
  static_data.current_active_dispRecTab = "dispensed";
  $.fn.getDispensedSelectwithDate_dpr();
  if(!static_data.dispensed_firstClickFlag){
  $.fn.getLatest_Dispensed();
  static_data.dispensed_firstClickFlag = true;
  }
}
function NoteTabclick(){
  static_data.current_active_dispRecTab = "note";
  $.fn.getNoteSelectwithDate_dpr();
  if(!static_data.note_firstClickFlag){
  $.fn.getLatest_Note();
  static_data.note_firstClickFlag = true;
  }
}

function FullrecTabclick(){
  static_data.current_active_dispRecTab = "fullRec";
  if(!static_data.fullRec_firstClickFlag){
  $.fn.getFullrecSelectwithDate_dpr();
  static_data.fullRec_firstClickFlag = true;
  }
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

          // end patient record display
              arrange_idle_search_bar();
          arrange_drug_search();
          $.fn.Lfocus("dde1");
         
         