var apgarScore = 0;
var calculatedApgarScore;

$("clearButton").onclick = function() {
    apgarScore = 0;
    calculatedApgarScore = 0;
    showApgarScore(apgarScore);

    var point_buttons = document.getElementsByClassName("apgar_btn");

    for( i = 0; 0 < point_buttons.length; i++){
        point_buttons[i].className = 'inactive';
        showCategory(0,0,0);
    }
};

function $(e) {
    return document.getElementById(e);
}

function apgarCategory(value,i_value,j_value) {
    var categoryText = "<span style='font-size:27px;font-weight:bold;'>APGAR</span> = "+value+"+"+i_value+"+"+j_value;
    return categoryText;
}

function calculateApgarScore(apgarValue=0) {
    var calculatedApgarScore = parseInt(apgarScore) + parseInt(apgarValue);
    var showCalculatedApgarScore = showApgarScore(calculatedApgarScore);

    return showCalculatedApgarScore;
}

function showApgarScore(apgarValue){
    displayText = "";
    apgarScore = apgarValue;
    if (apgarScore >= 7) {
        displayText = "<span style = 'position:relative;' class='normal_alert' id='normal_apgar_alert'> " + parseInt(apgarScore) + "/10 - Normal APGAR</span>";
    } else if (apgarScore <=3) {
        displayText = "<span style = 'position:relative;' class='red_alert' id='red_apgar_alert'> " + parseInt(apgarScore) + "/10 - Low APGAR</span>";
    } else {
        displayText = "<span style = 'position:relative;' class='yellow_alert' id='yellow_apgar_alert'> " + parseInt(apgarScore) + "/10 - Fairly Low </span>";
    }
    return displayText
}

function updateApgarAlert(apgarScore){
    var divForInfo = $('divForInfo');
    if (apgarScore >= 7) {
        text = "" + parseInt(apgarScore) + "/10 - Normal APGAR</span>";
        divForInfo.id = "normal_apgar_alert";
    } else if (apgarScore <=3) {
        text = "" + parseInt(apgarScore) + "/10 - Low APGAR</span>";
        divForInfo.id = "red_apgar_alert";
    } else {
        text = "" + parseInt(apgarScore) + "/10 - Fairly Low </span>";
        divForInfo.id = "yellow_apgar_alert";
    }
    divForInfo.innerHTML = text;
}

function buildBabyApgar(minute){
    apgarScore = 0;

    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "90%";

    var div_for_table = document.createElement('div');
    frame.appendChild(div_for_table);

    var div_table = document.createElement('table');
    div_table.style.height = '80%';
    div_table.style.width = '100%';
    div_for_table.appendChild(div_table);

    var points_cells = [
        ['&nbsp;','0 Points','1 Point','2 Points'],
        ['Color','Pale/blue','Baby pink/blue extremities','Completely pink'],
        ['Heart Rate','Absent','Slow - Below 100 bpm','Above 100 bpm'],
        ['Muscle Tone','Flaccid','Some flexion of Extremities','Active Motion'],
        ['Reflex Irritability','None','Grimance','Vigorous cry'],
        ['Respiratory Effort','Absent','Slow - irregular','Good crying']
    ];

    for(var i=0; i < points_cells.length; i++) {

        var div_points_row = document.createElement('tr');
        div_table.appendChild(div_points_row);

        for(var j=0; j < points_cells[i].length ; j++) {
         div_points_cell = document.createElement('td');
            div_points_cell.innerHTML = points_cells[i][j];

            if(i === 0 && j >= 0) {
                div_points_cell.className = 'apgar_th apgar_text';
            } else if(i >= 1 && j >= 1) {
                div_points_cell.className = 'apgar_btn';
                div_points_cell.style.border = '1px solid';
                // -- TODO: Not sure why I am writing this. If it works, will refactor it
                div_points_cell.setAttribute('value', j-1);
                div_points_cell.setAttribute("i", i);
                div_points_cell.setAttribute("j", j);
                // ------------------------------------------------------------------
                div_points_cell.onclick = function(){
                    this.className = 'active';

                    var value = this.getAttribute('value');
                    var i_value = this.getAttribute('i');
                    var j_value = this.getAttribute('j');

                    $('divForInfo').innerHTML = calculateApgarScore(this.getAttribute('value')); //showApgarScore(this.getAttribute('value'));
                    showCategory(apgarCategory(value,i_value,j_value));
                };

            } else {
                div_points_cell.className = 'apgar_text';
                div_points_cell.style.border = '1px solid';
            }

            div_points_row.appendChild(div_points_cell);
        }

    }

    var div_for_info = document.createElement('div');
    div_for_info.id = 'divForInfo';
    div_for_info.innerHTML = showApgarScore(apgarScore);
    div_for_info.style.borderRadius = '5px';
    div_for_info.style.height = '20%';
    frame.appendChild(div_for_info);
}