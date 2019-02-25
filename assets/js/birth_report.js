
function buildBirthReport(minute){

    var frame = document.getElementById('inputFrame' + tstCurrentPage);
    frame.style.height = "100%";
    frame.style.overflowY = 'scroll';

    var div_for_table = document.createElement('div');
    frame.appendChild(div_for_table);

    var div_table = document.createElement('table');
    div_table.style.width = '100%';
    div_table.style.cellPadding = '0';
    div_table.innerHTML = "<table width='100%' cellpadding='0'><tr><td style='text-align: center;'><div style='float:center;'><span style='float:center;font-weight:bold;'></span>  <span style='text-align:center;float:right;margin-left:70%;font-size: 0.8em;padding:0px;'></span> " 
    + "<img class='logo_img' style='margin-left:30%;margin-right:24%;float:center;padding:0px;' src='../../assets/images/logo.gif' alt='emblem' /> <span style='float:right;font-weight:bold;text-align:center;'></br>LL</br></br>Serial No.</span></div>"+
    "</td> </tr><tr style='position:relative;top:-45%;'><td style='text-align: center; font-size: 0.8em;>REPUBLIC OF MALAWI</td> </tr>"+
    "<tr><td style='text-align: center; font-size: 1.2em; font-weight: bold;'>NATIONAL REGISTRATION ACT </td> </tr> <tr>"+
    "<td style='text-align: center; font-size: 1.2em; font-weight: bold;'>NATIONAL REGISTRATION ACT</td> </tr> <tr><td style='text-align: right; font-size: 1em; padding-right: 30px;'>"+
    "</td></tr><tr> <td style='text-align: center; font-size: 1em; font-weight: bold;'><div style='float: none;'> HOSPITAL BIRTH REPORT  </div> <div style='float: right;'>FORM NR9</div></td></tr></table>"+
    " <tr><td><table width='95%' style='margin-top: 15px; margin-left: 40px;' cellspacing='10' cellpadding='2'><tr><td> 1. </td><td> Name of child:  </td><td id='fnc' style='text-align: center; padding-bottom: 0px;' class='cell'>"+
    "Towera&nbsp;</td><td id='mnc' style='text-align: center; padding-bottom: 0px;' class='cell'>Jessica&nbsp; </td><td id='lnc' style='text-align: center; padding-bottom: 0px;' class='cell'>"+
     "Moyo&nbsp;</td></tr> <tr><td> &nbsp;</td><td>&nbsp; </td><td style='text-align: center; padding-top: 0px;'><sup style='font-style: italic; font-size: 0.6em;'>First Name</sup> </td>"+
     "<td style='text-align: center; padding-top: 0px;'><sup style='font-style: italic; font-size: 0.6em;'>Middle Name</sup>  </td><td style='text-align: center; padding-top: 0px;'> <sup style='font-style: italic; font-size: 0.6em;'>"+
     "Surname</sup> </td><tr><td>2.</td><td>Date of birth:</td><td id='ddob' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>02</td>"+
     "<td id='mdob' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>03</td><td id='ydob' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>"+
     "1997 </td> </tr><tr><td>&nbsp;</td><td> &nbsp;</td><td style='text-align: center; padding-top: 0px;'><sup style='font-style: italic; font-size: 0.6em;'>Date</sup></td><td style='text-align: center; padding-top: 0px;'>"+
     "<sup style='font-style: italic; font-size: 0.6em;'>Month</sup></td><td style='text-align: center; padding-top: 0px;'><sup style='font-style: italic; font-size: 0.6em;'>Year</sup>"+
     " </td> </tr><tr><td>3. </td><td> Sex (Male/Female):</td><td id='sex' style='text-align: center; padding-top: 9px;' class='cell'> Female </td><td colspan='2'>  &nbsp; </td> </tr>"+
     "<tr><td style='text-align: left; padding-top: 10px;'>4.</td><td colspan='4' style='text-align: left; padding-top: 10px;'>Name of parents: </td></tr>"+
     "<tr><td>&nbsp; </td><td style='text-align: left; padding-left: 20px; padding-top: 9px;'>Mother (Maiden Name):</td><td id='fnm' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>"+
     "Maclena</td><td id='mnm' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'> Cecelia</td><td id='lnm' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>"+
     "Sibande </tr><tr><td>&nbsp;</td><td>&nbsp;</td><td style='text-align: center; padding-top: 0px;'><sup style='font-style: italic; font-size: 0.6em;'>First Name</sup>"+
     "</td><td style='text-align: center; padding-top: 0px;'><sup style='font-style: italic; font-size: 0.6em;'>Middle Name</sup></td><td style='text-align: center; padding-top: 0px;'>"+
     "<sup style='font-style: italic; font-size: 0.6em;'>Surname</sup></td> </tr><tr><td> &nbsp;</td><td style='text-align: left; padding-left: 20px; padding-top: 9px;'> Father (if known):</td><td id='fnf' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>"+
     "Humphrey</td><td id='mnf' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'> Bright</td><td id='lnf' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>Moyo</td></tr> <tr>"+
     "<td style='text-align: left; padding-top: 10px;'> 5.</td><td colspan='4' style='text-align: left; padding-top: 9px;'>  Nationality of parents:</td> </tr> <tr><td> &nbsp; </td> <td style='text-align: right; padding-left: 20px; padding-top: 9px;'>"+
     "Mother: </td> <td id='ntm' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'> Zambian  </td>  <td id='idm' style='text-align: left; padding-bottom: 0px; padding-top: 9px; padding-left: 9px;'>ID No: <div class='cell' style='float: right;'>&nbsp;</div>"+
     "</td><td style='text-align: center; padding-bottom: 0px; padding-top: 9px;'>&nbsp; </td></tr> <tr><td> &nbsp;</td><td style='text-align: right; padding-left: 20px; padding-top: 9px;'>  Mother: </td><td id='ntm' style='text-align: center; padding-bottom: 0px; padding-top: 9px;' class='cell'>Zambian </td>"+
     " <td id="idm" style="text-align: left; padding-bottom: 0px; padding-top: 9px; padding-left: 9px;"> ID No: <div class="cell" style="float: right;">&nbsp;</div>
                </td>
                <td style="text-align: center; padding-bottom: 0px; padding-top: 9px;">
                  &nbsp;
                </td>
              </tr>
     
     
     
     
     
     
     
     
     
     
     ";
    div_for_table.appendChild(div_table);



}