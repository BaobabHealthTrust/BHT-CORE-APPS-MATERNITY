var tt_cancel_destination = "/patients/show/<%= params[:patient_id] %>?skip_check=true"
var currentWeight;
var baby_date_map = "";
var displayText = "";
var apgarScore = 0; 
displaySummary = 'false'; 
var timedEvent;
var baby;
var maxi;
var mini;
var div_points_cell ;
function buildBabyApgar1stMin(){
    var minute = 1;
    var baby = 1;
    apgarScore = 0;
    var apgar = {"APPEARANCE": 0,
      "PULSE" : 0,
      "GRIMANCE": 0,
      "ACTIVITY": 0,
      "RESPIRATION": 0
    };
    var apgarCheck = {"APPEARANCE": "?",
      "PULSE" : "?",
      "GRIMANCE": "?",
      "ACTIVITY": "?",
      "RESPIRATION": "?"
    };
   
    alert = document.createElement("div");    

    $("clearButton").onclick = function(){
      apgarScore = 0
      updateApgarAlert(apgarScore)
      cells = document.getElementsByClassName("butt");
      for( i = 0; 0 < cells.length; i++){
        cells[i].setAttribute("selected", "false");
        cells[i].style.background = "url('/images/btn_blue.png'";
        apgar["APPEARANCE"] = 0; apgar["PULSE"] = 0; apgar["GRIMANCE"] = 0; apgar["ACTIVITY"] = 0; apgar["RESPIRATION"] = 0;
        apgarCheck["APPEARANCE"] = "?"; apgarCheck["PULSE"] = "?"; apgarCheck["GRIMANCE"] = "?";
        apgarCheck["ACTIVITY"] = "?"; apgarCheck["RESPIRATION"] = "?";
        showCategory("<span style='font-size:27px;font-weight:bold;'>APGAR</span> = " + apgarCheck['APPEARANCE'] + "+" + apgarCheck['PULSE'] +"+"+ apgarCheck['GRIMANCE']
          + "+" + apgarCheck['ACTIVITY'] + "+" + apgarCheck['RESPIRATION']);
      }
    }
    $("clearButton").onclick.apply($("clearButton"));
    updateApgarAlert(apgarScore);
    scoreWindow = document.createElement("div");
    scoreWindow.setAttribute("id", "selectWindow");
    

    arr = ["Appearance", "Pulse", "Grimance", "Activity", "Respiration"]
   
    arr_val = ['Pale/blue', "Baby pink/</br>blue extremities", "Completely </br> pink",
      "Absent", "Slow -</br>Below 100 bpm", "Above </br>100 bpm",
      "Flaccid", "Some flexion </br> of Extremities", "Active Motion",
      "None", "Grimance", "Vigorous </br>cry",
      "Absent", "Slow - </br> irregular", "Good crying"];
    
    arr_labels = ["Color", "Heart Rate", "Muscle Tone", "Reflex Irritability", "Respiratory Effort"]
    /*
    arr_val = ['Blue, Pale', "Pink </br> Extreme blue", "Completely </br> pink",
      "Absent", "Below </br>100 bpm", "Over </br>100 bpm",
      "Flaccid", "Some Flexion </br> of Extremities", "Active motion",
      "Absent", "Arms and legs</br> flexed", "Active movement",
      "Absent", "Slow, </br> irregular", "Vigorous cry"];
     */
    val_index = 0;
    values = [0, 1, 2]
    var labels = document.createElement("div");
    labels.id = "row1";
    
    placebo = document.createElement("div");
    placebo.id = "placebo";
    labels.appendChild(placebo);

    for(i = 0; i < values.length; i++){
      var lblCell = document.createElement("div");
      lblCell.setAttribute("class", "value");
      lblCell.innerHTML = (i == 2)? (i + " Points") : (i + " Point")
      labels.appendChild(lblCell);
    }
    scoreWindow.appendChild(labels);
   
    for (i = 0; i < arr.length; i ++){
      var row = document.createElement("div");
      row.id = "apgar_row_" + i
      row.setAttribute("class", "boardRow");

      for (j = 0; j < 4; j++){
        var control = document.createElement("div");
        control.id = "" + i + j;
        if (j != 0){
          
          control.setAttribute("class", "butt");
          control.setAttribute("value", j-1);
          control.setAttribute("apgar_field", arr[i]);
          // update/set selection status of the control
          if ((apgarCheck[arr[i].toUpperCase()] != "?") && ("" + i + (parseInt(apgarCheck[arr[i].toUpperCase()]) + 1) == control.id)){
            control.setAttribute("selected", "true");
          }else{ control.setAttribute("selected", "false"); }
          control.setAttribute("i", i);
          control.setAttribute("j", j);
          
          control.innerHTML = arr_val[val_index];
          val_index ++;
         
          control.onclick = function(){
            var num = __$(this.id).getAttribute("value");
            var field = __$(this.id).getAttribute("apgar_field");
            var key = field.toUpperCase();
            apgar[key] = num;
            apgarCheck[key] = apgar[key];
            //update row selections
            
            if (__$(this.id).getAttribute("selected") == "false"){
              
              for(k = 1; k < 4; k++){
                var x = this.getAttribute("i");
                __$("" + x + k).setAttribute("selected", ( this.id != "" + x + k)? "false": "true");
                
                __$("" + x + k).style.background = ( this.id != "" + x + k)? "url('/images/maternity.jpg')" : "url('/images/maternity.jpg')";
                __$("" + x + k).style.Color= ( this.id != "" + x + k)? "black" : "white";
              }
            }
            __$(key.toLowerCase() + "_" + minute).value = apgar[key];
            apgarScore = parseInt(apgar['APPEARANCE']) + parseInt(apgar['PULSE'])
              + parseInt(apgar['GRIMANCE']) + parseInt(apgar['ACTIVITY']) + parseInt(apgar['RESPIRATION']);
            showCategory("<span style='font-size:27px;font-weight:bold;'>APGAR</span> = " + apgarCheck['APPEARANCE'] + "+" + apgarCheck['PULSE'] +"+"+ apgarCheck['GRIMANCE']
              + "+" + apgarCheck['ACTIVITY'] + "+" + apgarCheck['RESPIRATION']);
            if (apgarCheck["APPEARANCE"] != "?" && apgarCheck["PULSE"] != "?" && apgarCheck["GRIMANCE"] != "?" && apgarCheck["ACTIVITY"] != "?" && apgarCheck["RESPIRATION"] != "?"){
              $('touchscreenInput'+tstCurrentPage).value = apgarScore;

            }
            updateApgarAlert(apgarScore);
          };
          
          
        }else{control.innerHTML = arr_labels[i];
          control.setAttribute("class", "leftButt");
        }
        row.appendChild(control);
      }
      scoreWindow.appendChild(row);    }

    $('inputFrame' + tstCurrentPage).style.display = "none";
    $('page' + tstCurrentPage).style.minHeight = "650px";
    $('page' + tstCurrentPage).appendChild(scoreWindow);
    if (minute == "five"){
      $("page" + tstCurrentPage).appendChild(alert);
    }
    
  }

function buildBabyApgar5thMin(){
    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";

    var div_for_table = document.createElement('div');
    frame.appendChild(div_for_table);

    var div_table = document.createElement('table');
    div_table.style.height = '80%';
    div_table.style.width = '100%';
    div_for_table.appendChild(div_table);

   arr = ["Appearance", "Pulse", "Grimance", "Activity", "Respiration"]
   
    arr_val = ['Pale/blue', "Baby pink/</br>blue extremities", "Completely </br> pink",
      "Absent", "Slow -</br>Below 100 bpm", "Above </br>100 bpm",
      "Flaccid", "Some flexion </br> of Extremities", "Active Motion",
      "None", "Grimance", "Vigorous </br>cry",
      "Absent", "Slow - </br> irregular", "Good crying"];
    
    arr_labels = ["Color", "Heart Rate", "Muscle Tone", "Reflex Irritability", "Respiratory Effort"]
    for(var i=0; i < points_cells.length; i++) {

        var div_points_row = document.createElement('tr');
        div_table.appendChild(div_points_row);

        for(var j=0; j < points_cells[i].length ; j++) {
            var div_points_cell = document.createElement('td');
            div_points_cell.innerHTML = points_cells[i][j];

            if(i === 0 && j >= 0) {
                div_points_cell.className = 'apgar_th apgar_text';
            } else if(i >= 1 && j >= 1) {
                div_points_cell.className = 'apgar_btn';
                div_points_cell.style.border = '1px solid';
            } else {
                div_points_cell.className = 'apgar_text';
                div_points_cell.style.border = '1px solid';
            }


            div_points_row.appendChild(div_points_cell);
        }

    }

    var div_for_info = document.createElement('div');
    div_for_info.innerHTML = 'Info comes here.';
    div_for_info.style.border = '1px solid';
    div_for_info.style.height = '20%';
    frame.appendChild(div_for_info);
}

function growthIndicators(){
    $('inputFrame'+tstCurrentPage).innerHTML = "";
    //These values pulled from the tt_onLoad bit in the third form...
  
    headers = ["    ", "WEIGHT", "APGAR"];
    var alertsTable = document.createElement("div");
    alertsTable.id = "alertsTable";
    var alertsHeaderRow = document.createElement("div");
    alertsHeaderRow.setAttribute("class", "alertsHeaderRow");
    for (j = 0; j < headers.length; j++){
      var alertsHeader = document.createElement("div");
      alertsHeader.setAttribute("class", "alertsHeader");
      alertsHeader.innerHTML = headers[j];
      alertsHeaderRow.appendChild(alertsHeader);
    }
    alertsTable.appendChild(alertsHeaderRow);
      
    for (i = 1; i <= parseInt(document.getElementById("number_of_babies").value); i++){
      currentWeight = $('weight' + i).value;
      gender = $("baby_gender" + i).value;
      if (gender == "Male"){
        maxi = 4500.0;
        mini = 2500.0;
      }else if (gender == "Female"){
        maxi = 4400.0;
        mini = 2400.0;
      }

      var alertsRow = document.createElement("div");
      alertsRow.setAttribute("class", "alertsRow");
      // add the left title of the table row
      var alertsTitle = document.createElement("div");
      alertsTitle.setAttribute("class", "alertsTitle");
      alertsTitle.innerHTML = "<span>BABY " + i + "<span>";
      alertsRow.appendChild(alertsTitle);
      // add cell figures
     
      var alertsCell = document.createElement("div");
      alertsCell.setAttribute("class", "alertsCell");
      alertsCell.innerHTML = showWeightForAge(i);
      alertsRow.appendChild(alertsCell);

      var alertsCell2 = document.createElement("div");
      alertsCell2.setAttribute("class", "alertsCell");
      alertsCell2.innerHTML = showApgarScore(i);
      alertsRow.appendChild(alertsCell2);
        
      //add row to table
      alertsTable.appendChild(alertsRow);
    }
    $('inputFrame'+tstCurrentPage).appendChild(alertsTable);
    displayText = "";
   
  }


  function updateApgarAlert(apgarScore){   
    if (apgarScore >= 7){
      text = "" + apgarScore.toFixed(0) + "/10 - Normal APGAR</span>";
      alert.id = "normal_apgar_alert";
    } else if (apgarScore <=3) {
      text = "" + apgarScore.toFixed(0) + "/10 - Low APGAR</span>";
      alert.id = "red_apgar_alert";
    } else {
      text = "" + apgarScore.toFixed(0) + "/10 - Fairly Low </span>";
      alert.id = "yellow_apgar_alert";
    }
    alert.innerHTML = text;
  }