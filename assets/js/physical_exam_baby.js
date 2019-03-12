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
  response = yesNo_Hash['PHYSICAL EXAMINATION BABY']['Ever had multiple pregnancies'];
  
  //Validates the input
  if (response === undefined || response === null) {
    
   // showMessage('Please select all selection(s) either yes or no.'); 
    return;
  
  }

  

}

function addYesNo() {
  var tar = document.getElementById("inputFrame" + tstCurrentPage);
  var attr = 'Baby: Cord tied?,1805,autoSelectClean#Baby: Cord clean?,2122,autoSelectAbnormalities#Baby: abnormalities?,1111,autoSelectTied'

  buildYesNoUI('PHYSICAL EXAMINATION BABY', attr, tar);

}

function autoSelectClean(clickedBtn) {
    if(clickedBtn.id.match(/No/i)) {
        responseClean = "No";
      }else if(clickedBtn.id.match(/Yes/i)){
        responseClean = "Yes";
      }
  }
  function autoSelectAbnormalities(clickedBtn) {
    if(clickedBtn.id.match(/No/i)) {
        responseAbnormalities = "No";
       }else if(clickedBtn.id.match(/Yes/i)){
        responseAbnormalities = "Yes";
       }
  }
  function autoSelectTied(clickedBtn) {
    if(clickedBtn.id.match(/No/i)) {
        responseTied = "No";
       }else if(clickedBtn.id.match(/Yes/i)){
        responseTied = "Yes";
       }
  }
