

function setUpProgramPage() {
    var f = document.getElementById('inputFrame' + tstCurrentPage);
    f.style = 'width: 96%; height: 88%;';

    var div = document.createElement('div');
    div.setAttribute('class','main-table');
    f.appendChild(div);

    var row = document.createElement('div');
    row.setAttribute('class','table-row');
    div.appendChild(row);

    var cells = ['left','right'];
    for(var i = 0 ; i < cells.length ; i++){
        var cell = document.createElement('div');
        cell.setAttribute('class','table-cell');
        cell.setAttribute('id','cell-' + cells[i]);
        row.appendChild(cell);
    }

    fetchPrograms();
    var nextButton = document.getElementById('nextButton');
    nextButton.setAttribute('onmousedown', 'enroll();');
    nextButton.innerHTML = '<span>Enroll</span>';
}

var programsHash = {};

function addPrograms(programs) {
    var container = document.getElementById('cell-left');
    var table = document.createElement('table');
    table.setAttribute('class','program-tables');
    container.appendChild(table);

    for(var i = 0 ; i < programs.length ; i++){
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.setAttribute('class','program-names');
        td.setAttribute('id', programs[i].program.program_id);
        td.setAttribute('program-name', programs[i].program.name);
        td.setAttribute('onmousedown','showStates(this);');
        td.innerHTML = programs[i].program.name
        tr.appendChild(td);

        if(programsHash[programs[i].program.name] == undefined){
            programsHash[programs[i].program.name] = [];
        }

        programsHash[programs[i].program.name].push(programs[i].patient_states);
        table.appendChild(tr);
    }
}

function showStates(program){
    var container = document.getElementById('cell-right');
    container.innerHTML = null;
    var table = document.createElement('table');
    table.setAttribute('class','program-tables');
    container.appendChild(table);

    var program_states = programsHash[program.getAttribute('program-name')];
    var programHasStates = false

    for(var i = 0 ; i < program_states.length ; i++){
        if (program_states[i].length < 1) {
            continue;
        } else {
            programHasStates = true

            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.setAttribute('class','program-states');
            tr.appendChild(td);
            table.appendChild(tr);

            buildStates(td, program_states[i]);
        }
    }

    if (!programHasStates) {
        var tableRow = document.createElement('tr')
        tableRow.style.textAlign = 'center'
        tableRow.style.fontSize = '1.4em'
        var message = document.createElement('p')
        message.innerText = 'This program has no states so far.'
        tableRow.appendChild(message)
        table.appendChild(tableRow)
    }

    var btns = document.getElementsByClassName('program-names');
    for(var i = 0 ; i < btns.length ; i++){
        btns[i].style = 'background-color: "";';
    }

    program.style = 'background-color: lightblue;';

    //Add program update state button
    if(document.getElementById('update-state') == undefined) {
        var btn = document.createElement('button');
    }else{
        var btn = document.getElementById('update-state');
    }

    btn.setAttribute('id','update-state');
    btn.setAttribute('class','button blue navButton');
    btn.innerHTML = '<span>Edit Demo</span>';
    btn.setAttribute('onmousedown','updateState(' + program.id + ');');

    var root = document.getElementById('buttons');
    root.appendChild(btn);
}

function updateState(program_id) {
    document.location = '/views/patient/update_state.html?program_id=' + program_id;
}

/* TODO All build functions need code refactor */
function buildNames(container,states,table) {

    var headerRow = document.createElement('tr')

    var stateHeader = document.createElement('th')
    stateHeader.innerText = 'First Name'
    headerRow.appendChild(stateHeader)

    var startDateHeader = document.createElement('th')
    startDateHeader.innerText = 'Middle Name'
    headerRow.appendChild(startDateHeader)

    var endDateHeader = document.createElement('th')
    endDateHeader.innerText = 'Last Name'
    headerRow.appendChild(endDateHeader)

    table.style.padding = '4%'
    table.setAttribute('cellpadding', '10px')

    table.appendChild(headerRow)

    var dataRow = document.createElement('tr');
    dataRow.style.backgroundColor = 'grey'
    dataRow.style.color = 'white'

    buildDemographicsAttributes(states,dataRow);

    table.appendChild(dataRow);
}

function buildHomeAddresses(container,states,table) {

    var headerRow = document.createElement('tr')

    var stateHeader = document.createElement('th')
    stateHeader.innerText = 'Home District'
    headerRow.appendChild(stateHeader)

    var startDateHeader = document.createElement('th')
    startDateHeader.innerText = 'Home TA'
    headerRow.appendChild(startDateHeader)

    var endDateHeader = document.createElement('th')
    endDateHeader.innerText = 'Home Village'
    headerRow.appendChild(endDateHeader)

    table.style.padding = '4%'
    table.setAttribute('cellpadding', '10px')

    table.appendChild(headerRow)

    var dataRow = document.createElement('tr');
    dataRow.style.backgroundColor = 'grey'
    dataRow.style.color = 'white'

    buildDemographicsAttributes(states,dataRow);

    table.appendChild(dataRow);
}

function buildCurrentAddresses(container,states,table) {

    var headerRow = document.createElement('tr')

    var stateHeader = document.createElement('th')
    stateHeader.innerText = 'Current District'
    headerRow.appendChild(stateHeader)

    var startDateHeader = document.createElement('th')
    startDateHeader.innerText = 'Current TA'
    headerRow.appendChild(startDateHeader)

    var endDateHeader = document.createElement('th')
    endDateHeader.innerText = 'Current Village'
    headerRow.appendChild(endDateHeader)

    table.style.padding = '4%'
    table.setAttribute('cellpadding', '10px')

    table.appendChild(headerRow)

    var dataRow = document.createElement('tr');
    dataRow.style.backgroundColor = 'grey'
    dataRow.style.color = 'white'

    buildDemographicsAttributes(states,dataRow);

    table.appendChild(dataRow);
}

function buildDemographicsAttributes(states,dataRow) {
    for(var i = 0 ; i < states.length ; i++){

        var statesName = document.createElement('td')
        statesName.innerText = stateName(states[i])
        dataRow.appendChild(statesName)

    }
}

function buildStatesOne(container, states) {
    var table = document.createElement('table')
    table.setAttribute('class', 'states')
    container.appendChild(table)

    var headerRow = document.createElement('tr')

    var stateHeader = document.createElement('th')
    stateHeader.innerText = 'State'
    headerRow.appendChild(stateHeader)

    var startDateHeader = document.createElement('th')
    startDateHeader.innerText = 'Start Date'
    headerRow.appendChild(startDateHeader)

    var endDateHeader = document.createElement('th')
    endDateHeader.innerText = 'End Date'
    headerRow.appendChild(endDateHeader)

    table.style.padding = '4%'
    table.setAttribute('cellpadding', '10px')

    table.appendChild(headerRow)

    for(var i = 0 ; i < states.length ; i++){
        var dataRow = document.createElement('tr')
        if (i % 2 == 0) {
            dataRow.style.backgroundColor = 'grey'
            dataRow.style.color = 'white'
        }

        var statesName = document.createElement('td')
        statesName.innerText = stateName(states[i].name)
        dataRow.appendChild(statesName)

        var startDate = document.createElement('td')
        startDate.innerText = moment(states[i].start_date).format('DD/MMM/YYYY')
        dataRow.appendChild(startDate)

        var endDate = document.createElement('td')
        if (states[i].end_date != null) {
            endDate.innerText = moment(states[i].end_date).format('DD/MMM/YYYY')
        } else {
            endDate.innerText = 'N/A'
        }
        dataRow.appendChild(endDate)

        table.appendChild(dataRow);
    }
}

function buildBirthReportButtons(container,numberOfBabies,table) {
    var babyID = sessionStorage.patientID; /* TODO Should be taken from backend id for baby(ies) */
    var headerRow = document.createElement('tr');

    var startDateHeader = document.createElement('th');
    startDateHeader.style.border = 'solid';
    startDateHeader.style.borderWidth = '1px';
    startDateHeader.style.textAlign = 'center';
    startDateHeader.style.lineHeight = '20px';
    startDateHeader.style.height = '50px';
    startDateHeader.style.padding = '10px';
    startDateHeader.style.boxShadow = '5px 10px #888888';
    startDateHeader.style.cursor = 'pointer';
    startDateHeader.innerHTML = 'Baby Birth Report';
    startDateHeader.style.backgroundColor = 'lightblue';
    startDateHeader.setAttribute('onmousedown','navigateToBirthReport(' + babyID + ')');
    headerRow.appendChild(startDateHeader);

    table.style.padding = '4%';
    table.setAttribute('cellpadding', '10px');

    table.appendChild(headerRow);

    var dataRow = document.createElement('tr');
    dataRow.style.backgroundColor = 'grey';
    dataRow.style.color = 'white';

    table.appendChild(dataRow);
}

function stateName(num) {
    if(num == 7){
        return 'On ART';
    }else if(num == 3){
        return 'Died';
    }

    return num
}

function navigateToBirthReport(babyID) {
    window.location = '/apps/MATERNITY/views/reports/birth_report.html?baby_id=' + babyID;
}

function fetchPersonDemographics(td,table,demographicsType) {
    var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/people/" + sessionStorage.patientID + '/relationships';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
            var demographics = JSON.parse(this.responseText);

            for (index in demographics) {
                var relationship = demographics[index].relationship;
                var related_person = demographics[index].person_b;

                if (demographicsType == 'baby' && relationship == '3') {
                    getChildDetails(related_person,td,table);
                } else if (demographicsType == 'father' && relationship == '12') {
                    getFatherDetails(related_person,td,table);
                }


            }
            //
            // if (demographicsType == 'baby') {
            //     getChildDetails(related_person,td,table);
            // } else if (demographicsType == 'father') {
            //     getFatherDetails(related_person,td,table);
            // }


            // var names = demographics.person.names[0];
            // var addresses = demographics.person.addresses[0];
            //
            // buildNames(td, [names.given_name,names.middle_name,names.family_name], table);
            // buildHomeAddresses(td, [addresses.address2,addresses.county_district,addresses.neighborhood_cell], table);
            // buildCurrentAddresses(td, [addresses.state_province,addresses.township_division,addresses.city_village], table);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
    xhttp.setRequestHeader('Content-type', "application/json");
    xhttp.send();
}

function getChildDetails(related_person,td,table) {
    var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/people/" + related_person;

    console.log(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
            var demographics = JSON.parse(this.responseText);

            var names = demographics.names[0];

            buildNames(td, [names.given_name,names.middle_name,names.family_name], table);

            // fetch father addresses
            var fatherHomeDistrict;
            var fatherHomeTA;
            var fatherHomeVillage;
            var fatherCurrentDistrict;
            var fatherCurrentTA;
            var fatherCurrentVillage;

            // get same as mother addresses
            var fatherAddUrl = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/patients/" + sessionStorage.patientID;
            var fatherXhttp = new XMLHttpRequest();
            fatherXhttp.onreadystatechange = function () {
                if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {

                    var fatherDetails = JSON.parse(this.responseText);
                    var addresses = fatherDetails.person.addresses[0];
                    fatherHomeDistrict = addresses.address2;
                    fatherHomeTA = addresses.county_district;
                    fatherHomeVillage = addresses.city_village;
                    fatherCurrentDistrict = addresses.state_province;
                    fatherCurrentTA = addresses.township_division;
                    fatherCurrentVillage = addresses.neighborhood_cell;

                    buildHomeAddresses(td, [fatherHomeDistrict,fatherHomeTA,fatherHomeVillage], table);
                    buildCurrentAddresses(td, [fatherCurrentDistrict,fatherCurrentTA,fatherCurrentVillage], table);
                }
            };
            fatherXhttp.open('GET', fatherAddUrl, true);
            fatherXhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
            fatherXhttp.setRequestHeader('Content-type', "application/json");
            fatherXhttp.send();
            // ----------------------
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
    xhttp.setRequestHeader('Content-type', "application/json");
    xhttp.send();
}

function getFatherDetails(related_person,td,table) {
    var url = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/people/" + related_person;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {
            var demographics = JSON.parse(this.responseText);

            var names = demographics.names[0];

            buildNames(td, [names.given_name,names.middle_name,names.family_name], table);

            // fetch father addresses
            var fatherHomeDistrict;
            var fatherHomeTA;
            var fatherHomeVillage;
            var fatherCurrentDistrict;
            var fatherCurrentTA;
            var fatherCurrentVillage;

            var fatherAddUrl = apiProtocol + "://" + apiURL + ":" + apiPort + "/api/v1/patients/" + demographics.person_id;
            var fatherXhttp = new XMLHttpRequest();
            fatherXhttp.onreadystatechange = function () {
                if (this.readyState == 4 && (this.status == 201 || this.status == 200)) {

                    var fatherDetails = JSON.parse(this.responseText);
                    var addresses = fatherDetails.person.addresses[0];
                    fatherHomeDistrict = addresses.address2;
                    fatherHomeTA = addresses.county_district;
                    fatherHomeVillage = addresses.city_village;
                    fatherCurrentDistrict = addresses.state_province;
                    fatherCurrentTA = addresses.township_division;
                    fatherCurrentVillage = addresses.neighborhood_cell;

                    buildHomeAddresses(td, [fatherHomeDistrict,fatherHomeTA,fatherHomeVillage], table);
                    buildCurrentAddresses(td, [fatherCurrentDistrict,fatherCurrentTA,fatherCurrentVillage], table);
                }
            };
            fatherXhttp.open('GET', fatherAddUrl, true);
            fatherXhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
            fatherXhttp.setRequestHeader('Content-type', "application/json");
            fatherXhttp.send();
            // ----------------------
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('Authorization', sessionStorage.getItem("authorization"));
    xhttp.setRequestHeader('Content-type', "application/json");
    xhttp.send();
}

