var static_data = {
  countZZX:0,
  formBackground:"#ffffff"
}
$(document).ready(function(){
  $("form").delegate(".component", "mousedown", function(md){
    $(".popover").remove();

    md.preventDefault();
    var tops = [];
    var mouseX = md.pageX;
    var mouseY = md.pageY;
    var $temp;
    var timeout;
    var $this = $(this);
    var delays = {
      main: 0,
      form: 120
    }
    var type;

    if($this.parent().parent().parent().parent().attr("id") === "components"){
      type = "main";
    } else {
      type = "form";
    }

    var delayed = setTimeout(function(){
      if(type === "main"){
        $temp = $("<form class='form-horizontal col-md-6' id='temp'></form>").append($this.clone());
      } else {
        if($this.attr("id") !== "legend"){
          $temp = $("<form class='form-horizontal col-md-6' id='temp'></form>").append($this);
        }
      }

      $("body").append($temp);

      $temp.css({"position" : "absolute",
                 "top"      : mouseY - ($temp.height()/2) + "px",
                 "left"     : mouseX - ($temp.width()/2) + "px",
                 "opacity"  : "0.9"}).show()

      var half_box_height = ($temp.height()/2);
      var half_box_width = ($temp.width()/2);
      var $target = $("#target");
      var tar_pos = $target.position();
      var $target_component = $("#target .component");

      $(document).delegate("body", "mousemove", function(mm){

        var mm_mouseX = mm.pageX;
        var mm_mouseY = mm.pageY;

        $temp.css({"top"      : mm_mouseY - half_box_height + "px",
          "left"      : mm_mouseX - half_box_width  + "px"});

        if ( mm_mouseX > tar_pos.left &&
          mm_mouseX < tar_pos.left + $target.width() + $temp.width()/2 &&
          mm_mouseY > tar_pos.top &&
          mm_mouseY < tar_pos.top + $target.height() + $temp.height()/2
          ){
            $("#target").css("background-color", static_data.formBackground);
            $target_component.css({"border-top" : "1px solid"+static_data.formBackground, "border-bottom" : "none"});
            tops = $.grep($target_component, function(e){
              return ($(e).position().top -  mm_mouseY + half_box_height > 0 && $(e).attr("id") !== "legend");
            });
            if (tops.length > 0){
              $(tops[0]).css("border-top", "1px solid "+static_data.formBackground);
            } else{
              if($target_component.length > 0){
                $($target_component[$target_component.length - 1]).css("border-bottom", "1px solid "+static_data.formBackground);
              }
            }
          } else{
            $("#target").css("background-color", static_data.formBackground);
            $target_component.css({"border-top" : "1px solid"+static_data.formBackground, "border-bottom" : "none"});
            $target.css("background-color", static_data.formBackground);
          }
      });

      $("body").delegate("#temp", "mouseup", function(mu){
        mu.preventDefault();

        var mu_mouseX = mu.pageX;
        var mu_mouseY = mu.pageY;
        var tar_pos = $target.position();

        $("#target .component").css({"border-top" : "1px solid"+static_data.formBackground, "border-bottom" : "none"});

        // acting only if mouse is in right place
        if (mu_mouseX + half_box_width > tar_pos.left &&
          mu_mouseX - half_box_width < tar_pos.left + $target.width() &&
          mu_mouseY + half_box_height > tar_pos.top &&
          mu_mouseY - half_box_height < tar_pos.top + $target.height()
          ){
            $temp.attr("style", null);
            // where to add
            if(tops.length > 0){
              $($temp.html()).insertBefore(tops[0]);
            } else {
              $.fn.fix_formGroup($temp.append("\n\n\ \ \ \ "));
              $("#target fieldset").append($temp.append("\n\n\ \ \ \ ").html());
            }
          } else {
            // no add
            $("#target .component").css({"border-top" : "1px solid"+static_data.formBackground, "border-bottom" : "none"});
            tops = [];
          }

        //clean up & add popover
        $target.css("background-color", static_data.formBackground);
        $(document).undelegate("body", "mousemove");
        $("body").undelegate("#temp","mouseup");
        $("#target .component").popover({trigger: "manual"});
        $temp.remove();
        genSource();
      });
    }, delays[type]);

    $(document).mouseup(function () {
      clearInterval(delayed);
      return false;
    });
    $(this).mouseout(function () {
      clearInterval(delayed);
      return false;
    });
  });

  var genSource = function(){
    var $temptxt = $("<div>").html($("#build").html());
    //scrubbbbbbb
    $($temptxt).find(".component").attr({"title": null,
      "data-original-title":null,
      "data-type": null,
      "data-content": null,
      "rel": null,
      "trigger":null,
      "data-html":null,
      "style": null});
    $($temptxt).find(".valtype").attr("data-valtype", null).removeClass("valtype");
    $($temptxt).find(".component").removeClass("component");
    $($temptxt).find("form").attr({"id":  null, "style": "background-color:"+static_data.formBackground});
    $("#source").val($temptxt.html().replace(/\n\ \ \ \ \ \ \ \ \ \ \ \ /g,"\n"));
    $.fn.re_enforce_current_color();
  }

  //activate legend popover
  $("#target .component").popover({trigger: "manual"});
  //popover on click event
  $("#target").delegate(".component", "click", function(e){
    e.preventDefault();
    $(".popover").hide();
    var $active_component = $(this);
    $active_component.popover("show");
    var valtypes = $active_component.find(".valtype");
    $.each(valtypes, function(i,e){
      var valID ="#" + $(e).attr("data-valtype");
      var val;
      if(valID ==="#placeholder"){
        val = $(e).attr("placeholder");
        $(".popover " + valID).val(val);
      } else if(valID ==="#href"){
        val = $(e).attr("href");
        $(".popover " + valID).val(val);
      } else if(valID ==="#src"){
        val = $(e).attr("src");
        $(".popover " + valID).val(val);
      } else if(valID==="#checkbox"){
        val = $(e).attr("checked");
        $(".popover " + valID).attr("checked",val);
      } else if(valID==="#option"){
        val = $.map($(e).find("option"), function(e,i){return $(e).text()});
        val = val.join("\n")
      $(".popover "+valID).text(val);
      } else if(valID==="#checkboxes"){
        val = $.map($(e).find("label"), function(e,i){return $(e).text().trim()});
        val = val.join("\n")
      $(".popover "+valID).text(val);
      } else if(valID==="#radios"){
        val = $.map($(e).find("label"), function(e,i){return $(e).text().trim()});
        val = val.join("\n");
        $(".popover "+valID).text(val);
        $(".popover #name").val($(e).find("input").attr("name"));
      } else if(valID==="#inline-checkboxes"){
        val = $.map($(e).find("label"), function(e,i){return $(e).text().trim()});
        val = val.join("\n")
          $(".popover "+valID).text(val);
      } else if(valID==="#inline-radios"){
        val = $.map($(e).find("label"), function(e,i){return $(e).text().trim()});
        val = val.join("\n")
          $(".popover "+valID).text(val);
        $(".popover #name").val($(e).find("input").attr("name"));
      } else if(valID==="#button") {
        val = $(e).text();
        var type = $(e).find("button").attr("class").split(" ").filter(function(e){return e.match(/btn-.*/)});
        $(".popover #color option").attr("selected", null);
        if(type.length === 0){
          $(".popover #color #default").attr("selected", "selected");
        } else {
          $(".popover #color #"+type[0]).attr("selected", "selected");
        }
        val = $(e).find(".btn").text();
        $(".popover #button").val(val);
      } else {
        val = $(e).text();
        $(".popover " + valID).val(val);
      }
    });

    $(".popover").delegate(".btn-danger", "click", function(e){
      e.preventDefault();
      $active_component.popover("hide");
    });

    $(".popover").delegate(".btn-info", "click", function(e){
      e.preventDefault();
      var inputs = $(".popover input");
      inputs.push($(".popover textarea")[0]);
      $.each(inputs, function(i,e){
      var vartype = $(e).attr("id");
      var value = $active_component.find('[data-valtype="'+vartype+'"]')
      if(vartype==="placeholder"){
        $(value).attr("placeholder", $(e).val());
      }else if (vartype==="href"){
        $($active_component.find('a')).attr("href", $(e).val());
      }else if (vartype==="src"){
        $(value).attr("src", $(e).val());
      } else if (vartype==="checkbox"){
        if($(e).is(":checked")){
          $(value).attr("checked", true);
        }
        else{
          $(value).attr("checked", false);
        }
      } else if (vartype==="option"){
        var options = $(e).val().split("\n");
        $(value).html("");
        $.each(options, function(i,e){
          $(value).append("\n      ");
          $(value).append($("<option>").text(e));
        });
      } else if (vartype==="checkboxes"){
        var checkboxes = $(e).val().split("\n");
        var mainLabel = $(".popover #label").val();
        $(value).html("\n      <!-- Multiple Checkboxes -->");
        $.each(checkboxes, function(i,e){
          if(e.length > 0){
            $(value).append('\n      <label class="bootstrap checkbox">\n        <input type="checkbox" value="'+e+'" component_type = "checkbox" mLabel="'+mainLabel+'">\n        '+e+'\n      </label>');
          }
        });
        $(value).append("\n  ")
      } else if (vartype==="radios"){
        var group_name = $(".popover #name").val();
        var mainLabel = $(".popover #label").val();
        var radios = $(e).val().split("\n");
        $(value).html("\n      <!-- Multiple Radios -->");
        $.each(radios, function(i,e){
          if(e.length > 0){
            $(value).append('\n      <label class="bootstrap radio">\n        <input type="radio" value="'+e+'" component_type = "radio" name="'+group_name+'" mLabel="'+mainLabel+'">\n        '+e+'\n      </label>');
          }
        });
        $(value).append("\n  ")
          $($(value).find("input")[0]).attr("checked", true)
      } else if (vartype==="inline-checkboxes"){
        var checkboxes = $(e).val().split("\n");
        $(value).html("\n      <!-- Inline Checkboxes -->");
        $.each(checkboxes, function(i,e){
          if(e.length > 0){
            $(value).append('\n      <label class="bootstrap checkbox inline">\n        <input type="checkbox" value="'+e+'">\n        '+e+'\n      </label>');
          }
        });
        $(value).append("\n  ")
      } else if (vartype==="inline-radios"){
        var radios = $(e).val().split("\n");
        var group_name = $(".popover #name").val();
        $(value).html("\n      <!-- Inline Radios -->");
        $.each(radios, function(i,e){
          if(e.length > 0){
            $(value).append('\n      <label class="bootstrap radio inline">\n        <input type="radio" value="'+e+'" name="'+group_name+'">\n        '+e+'\n      </label>');
          }
        });
        $(value).append("\n  ")
          $($(value).find("input")[0]).attr("checked", true)
      } else if (vartype === "button"){
        var type =  $(".popover #color option:selected").attr("id");
        $(value).find("button").text($(e).val()).attr("class", "btn "+type);
      }else {
        $(value).text($(e).val());
      }
    $active_component.popover("hide");
    setTimeout(function(){genSource()},1000);
    });
    });
  });
  $("#navtab").delegate("#sourcetab", "click", function(e){
    genSource();
  });
});

// VIOS --- addition by lambo10
$.fn.fix_formGroup = function (data){
  var alreadyOprated = false;
  if(!alreadyOprated){
  var x = data.find("#input_componentInitialID");
  if(check_string_equality(x.attr("id"),"input_componentInitialID")){
    static_data.countZZX++;
    if(data.find("#input_textInputInitialID").attr("type")==="button"){
      if(data.find("#input_textInputInitialID").attr("fileType") === "image"){
        data.find("#mainLabelFI").attr("id", "alterd_mainLabelFI_"+static_data.countZZX);
        data.find("#input_textInputInitialID").attr("mLabelID", "alterd_mainLabelFI_"+static_data.countZZX);
        data.find("#input_textInputInitialID").attr("onclick", "$.fn.submitFormFileInput('"+static_data.countZZX+"')");
        data.find("#imageInputDispVM").attr("id", "imageInputDispVM_"+static_data.countZZX);
        data.find("#imageInputUL").attr("id", "imageInputUL_"+static_data.countZZX);
        data.find("#imageInputLI").attr("id", "imageInputLI_"+static_data.countZZX);
        data.find("#imageInputLoaderDiv").attr("id", "imageInputLoaderDiv_"+static_data.countZZX);
        data.find("#imageInputLoader").attr("id", "imageInputLoader_"+static_data.countZZX);
        data.find("#imageViewBtn_Z").attr("onclick","$.fn.viewDispFormImage('"+"imageInputDispVM_"+static_data.countZZX+"','"+"imageInputUL_"+static_data.countZZX+"')")
        data.find("#imageViewBtn_Z").attr("id", "imageViewBtn_Z_"+static_data.countZZX);
      }else if(data.find("#input_textInputInitialID").attr("fileType") === "file"){
        data.find("#mainLabelFI").attr("id", "alterd_mainLabelFI_"+static_data.countZZX);
        data.find("#input_textInputInitialID").attr("mLabelID", "alterd_mainLabelFI_"+static_data.countZZX);
        data.find("#input_textInputInitialID").attr("onclick", "$.fn.submitFormFileInput('"+static_data.countZZX+"')");
        data.find("#imageInputLoaderDiv").attr("id", "imageInputLoaderDiv_"+static_data.countZZX);
        data.find("#imageInputLoader").attr("id", "imageInputLoader_"+static_data.countZZX);
        data.find("#imageInputfileIconDiv").attr("id", "imageInputfileIconDiv_"+static_data.countZZX);
        data.find("#f_fileNameVB").attr("id", "f_fileNameVB_"+static_data.countZZX);
        data.find("#fileViewBtn_Z").attr("id", "fileViewBtn_Z_"+static_data.countZZX);
      }
      else{
        data.find("#mainLabelFI").attr("id", "alterd_mainLabelFI_"+static_data.countZZX);
        data.find("#input_textInputInitialID").attr("mLabelID", "alterd_mainLabelFI_"+static_data.countZZX);
      }
      
    }
    data.find("#input_labelInitialID").attr("id", "alterdLabel_"+static_data.countZZX);
    data.find("#input_textInputInitialID").attr("id", "alterdInput_"+static_data.countZZX);
    x.attr("id", "alterdComponent_"+static_data.countZZX);
    alreadyOprated = true;
  }
}
if(!alreadyOprated){
  var x = data.find("#double_input_componentInitialID");
  if(check_string_equality(x.attr("id"),"double_input_componentInitialID")){
    static_data.countZZX++;
    if(check_string_equality(data.find("#input_textInputInitialID1").attr("type"),"radio") || check_string_equality(data.find("#input_textInputInitialID1").attr("type"),"checkbox")){
      data.find("#input_textInputInitialID1").attr("mLabel", data.find("#mainLabelFI").html());
    }
    data.find("#input_labelInitialID1").attr("id", "alterdLabel_"+static_data.countZZX);
    data.find("#input_textInputInitialID1").attr("id", "alterdInput_"+static_data.countZZX);
    static_data.countZZX++;
    if(check_string_equality(data.find("#input_textInputInitialID2").attr("type"),"radio") || check_string_equality(data.find("#input_textInputInitialID2").attr("type"),"checkbox")){
      data.find("#input_textInputInitialID2").attr("mLabel", data.find("#mainLabelFI").html());
    }
    data.find("#input_labelInitialID2").attr("id", "alterdLabel_"+static_data.countZZX);
    data.find("#input_textInputInitialID2").attr("id", "alterdInput_"+static_data.countZZX);

    data.find("#mainLabelFI").attr("id", "alterd_mainLabelFI_"+static_data.countZZX);
    x.attr("id", "alterdComponent_"+static_data.countZZX);
    alreadyOprated = true;
  }
}

}

function check_alterd_ID(expected_string,data){
let result = false;
if(data == null){
  result = false;
}else{
var splitArray = data.split(1);
if(check_string_equality(splitArray[0],expected_string)){
result = true;
}
}
return result;
}

$.fn.check_professional_loged_in = function(){
  $.get("http://localhost:5000/get_professional_logedin_id",
{},
function(result){
  process_check_professional_loged_in(result);
});
}

function process_check_professional_loged_in(id){
  var jsondata = JSON.parse(id);
  var jsonid = jsondata.$oid;
  document.getElementById('pr_profile_picSSG').src = 'http://localhost:4417/employee/'+jsonid+'/profile/usr_profile.jpg';
}

function onLoadfrm(){
  $.fn.check_professional_loged_in();
  $.fn.initial_setups();
}

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

$.fn.colorBoxClick = function (color){
  static_data.formBackground = color;
  $("#target").css("background-color",color);
  $("#target .component").css("border","1px solid "+color);
  var $temptxt = $("<div>").html($("#build").html());
  $($temptxt).find("form").attr({"style": "background-color:"+static_data.formBackground+"; padding-left: 30px;"});
  $("#source").val($temptxt.html().replace(/\n\ \ \ \ \ \ \ \ \ \ \ \ /g,"\n"));
}

$.fn.re_enforce_current_color = function (){
  $("#target").css("background-color",static_data.formBackground);
  $("#target .component").css("border","1px solid "+static_data.formBackground);
}
$.fn.colorSlectorChange = function (){
  var color = $("#colorSelectorID").val();
  static_data.formBackground = color;
  $("#target").css("background-color",color);
  $("#target .component").css("border","1px solid "+color);
  var $temptxt = $("<div>").html($("#build").html());
  $($temptxt).find("form").attr({"style": "background-color:"+static_data.formBackground+"; padding-left: 30px;"});
  $("#source").val($temptxt.html().replace(/\n\ \ \ \ \ \ \ \ \ \ \ \ /g,"\n"));
}

$.fn.saveForm = function (){
  var meth_static_data = {
    clerance:"",
    category:""
  }
  $.each($("#clerance_inp").children("option"), function( i, el ) {
    if($(el).is(':checked')){
      meth_static_data.clerance = $(el).val();
    }
  });
  $.each($("#category_inp").children("option"), function( i, el ) {
    if($(el).is(':checked')){
      meth_static_data.category = $(el).val();
    }
  });

  if($("#formName_inp").val() === " " || $("#formName_inp").val() === ""){
    erro_notice_popup("Pls Enter form name");
  }else{

    $.ajax({
      url: 'http://localhost:3130/add_raw_form',
      type:'POST',
      contentType:'application/json',
      data: JSON.stringify({
      "clerance":meth_static_data.clerance,
      "rawForm":$("#source").val(),
      "category":meth_static_data.category,
      "form_name":$("#formName_inp").val()
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

    
  }

};

$.fn.goBack = function(){
  $.get("http://localhost:3130/get_professionals_job",
{},
function(result){

  if(result === "Pharmacist"){
    window.location = "pharmacisit_portal.html";
  }else if(result === "LabScientist"){
    window.location = "labScientistPortal.html";
  }else if(result === "Radiologist"){
    window.location = "radiogapherPortal.html";
  }else if(result === "Record_manager"){
    window.location = "records_portal.html";
  }else if(result === "Admin_Manager"){
    window.location = "Administartion_portal.html";
  }else if(result === "Doctor"){
    window.location = "docturs_portal.html";
  }else if(result === "Nurse"){
    window.location = "nurse_portal.html";
  }else{
    alert(result);
  }
});
}

$.fn.initial_setups = function(){
  $.get("http://localhost:3130/get_professionals_job",
  {},
  function(result){
    var options = $("#clerance_inp").find("option");
    $.each(options, function( i, e ) {
      if(result === "Admin_Manager"){
      }else if(e.value === result){
            $(e).attr("selected","true");
            $("#clerance_inp").attr("disabled","true");
           }   
      });
    
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

function check_string_equality(dat1,dat2){
  var count = 0;
  var result = true;
  if(dat1 == null || dat2 == null){
    result = false;
  }else{
    while(count < dat1.length){
      if(dat1.charAt(count) !== dat2.charAt(count)){
        result = false;
        break;
      }
      count++;
    }
  }
  return result;
}
