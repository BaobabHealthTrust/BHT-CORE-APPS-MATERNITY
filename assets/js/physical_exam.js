var apiProtocol = sessionStorage.apiProtocol;

var apiURL = sessionStorage.apiURL;

var apiPort = sessionStorage.apiPort;

var patientID = sessionStorage.patientID;

var programID = sessionStorage.programID;

var tt_cancel_destination = "/views/patient_dashboard.html?patient_id=" + patientID;

var YesNoConcepts = {"Yes": 1065,"No": 1066};

var ttv_order_id = "";

function submitTreatmentEncounter() {
  
  var currentTime = moment().format(' HH:mm:ss');
  
  var encounter_datetime = moment(sessionStorage.sessionDate).format('YYYY-MM-DD'); 
  encounter_datetime += currentTime;

  // Gets input value
  response = yesNo_Hash['PHYSICAL EXAMINATION']['Contractions'];
  
  //Validates the input
  if (response === undefined || response === null) {
    
   // showMessage('Please select all selection(s) either yes or no.'); 
    return;
  
  }

  

}

function addYesNo() {
    
  var tar = document.getElementById("inputFrame" + tstCurrentPage);
  var attr = 'Contractions'

  buildYesNoUI('PHYSICAL EXAMINATION', attr, tar);

}

