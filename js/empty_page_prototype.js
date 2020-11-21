
    
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
        setTimeout(remove_in_anim_for_lw_pr_pane,300);
    }
    
    function remove_in_anim_for_lw_pr_pane(){
        document.getElementById("v_pr_form_container").classList.remove("slideInUp");
    }
    
    
    function set_home_main_fragment(){
    insert_out_anim_for_lw_pr_pane();
    document.getElementById("main_sheduling_fragment").style.display = "none";
    document.getElementById("main_reports_fragment").style.display = "none";
    document.getElementById("main_home_fragment").style.display = "block";
    
    document.getElementById("home_wut_id").classList.add("active");
    document.getElementById("patients_wut_id").classList.remove("active");
    document.getElementById("scheduling").classList.remove("active");
    document.getElementById("reports").classList.remove("active");
    }
    
    function set_patients_main_fragment(){
        document.getElementById("main_sheduling_fragment").style.display = "none";
        document.getElementById("main_reports_fragment").style.display = "none";
        document.getElementById("main_home_fragment").style.display = "none";
        insert_in_anim_for_lw_pr_pane();
    
        document.getElementById("home_wut_id").classList.remove("active");
        document.getElementById("patients_wut_id").classList.add("active");
        document.getElementById("scheduling").classList.remove("active");
        document.getElementById("reports").classList.remove("active");  
    }
    
    function render_chart11(){
        var ctxD = document.getElementById("doughnutChart").getContext('2d');
      var myLineChart = new Chart(ctxD, {
        type: 'doughnut',
        data: {
          labels: ["Unattended Patients 15", "Attended Patients 5"],
          datasets: [{
            data: [400, 100],
            backgroundColor: ["#F7464A","#26a69a"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }]
        },
        options: {
          responsive: true
        }
      });
    }
    
    function display_date_and_Time(){
        var d = new Date();
      document.getElementById("time_Idata").innerHTML = d.getMinutes()+":"+d.getHours();
      setTimeout(next_display_date_and_Time,1000);
      }
      
      function next_display_date_and_Time(){
        var d = new Date();
      document.getElementById("time_Idata").innerHTML = d.getMinutes()+":"+d.getHours();
      setTimeout(display_date_and_Time,1000);
      }
      display_date_and_Time();
    
    render_chart11();