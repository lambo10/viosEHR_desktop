var svgElement = document.querySelector('#my-svg');
var checker_btn = document.querySelector('#loader_jj');
svgElement.addEventListener('click', function () {
  animateSvg();
});

function animateSvg() {
  new Vivus('my-svg', {
    duration: 30,
    type: 'async'
  });
}

function show(id){
document.getElementById(id).style.display = "block";
}

function hide(id){
document.getElementById(id).style.display = "none";
}

function submit_id(){
  /* do submission */
  show("loader_jj");
  setTimeout(display_patient_details,100);
}

function display_patient_details(){
hide("loader_jj");
document.getElementById("p_details_modal").classList.add("slideInUp");
show("p_details_modal");
setTimeout(remove_last_p_modal_anim,500);
}

function remove_last_p_modal_anim(){
  document.getElementById("p_details_modal").classList.remove("slideInUp");
}

function close_patient_details(){
  document.getElementById("p_details_modal").classList.add("slideOutDown");
  setTimeout(remove_close_last_p_modal_anim,400);
  }
  
  function remove_close_last_p_modal_anim(){
    document.getElementById("p_details_modal").classList.remove("slideOutDown");
    hide("p_details_modal");
  }

  //line graph
  function render_graph(){
   
    var ctxP = document.getElementById("pieChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["Empty Hour", "Prescriptions", "Tests", "Radiography test", "Medications"],
      datasets: [{
        data: [300, 50, 100, 40, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
      }]
    },
    options: {
      responsive: true
    }
  });

    
  }


  function keppressEventHandler(e){
    var key = e.which || e.keyCode;
    if (key === 13) {
      submit_id();
      document.getElementById("input_id").value = "";
    }
  }


