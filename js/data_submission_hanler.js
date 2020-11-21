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
}

