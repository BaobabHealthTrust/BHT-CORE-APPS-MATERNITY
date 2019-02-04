function buildBabyApgar1stMin(){
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

function buildBabyApgar5thMin(){
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