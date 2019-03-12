 function showNumber(id, global_control, min, max, abs_max, type) {

      jQ('#backButton, #nextButton').attr("disabled", true);

      cn = 9;

      this_id = global_control;

      if (global_control.match(/_row_5/)) {

        m = "Unk"

      } else {

        m = "0"

      }

      global_control = "";

      var row1 = ["1", "2", "3"];

      var row2 = ["4", "5", "6"];

      var row3 = ["7", "8", "9"];

      var row4 = ["Del", m, "."];

      if (min == undefined) {

        min = 0

      }

      if (max == undefined) {

        max = (new Date()).getFullYear();

      }

      var cl = document.createElement("div");

      cl.className = "button_red cancel";

      cl.innerHTML = "Cancel";

      cl.onclick = function () {

        jQ('#backButton, #nextButton').attr("disabled", false);

        jQ("#shield, #popup").css("display", "none");

      };

      jQ(cl).css({

        "float": "left",

        "margin-top": "0px",

        "margin-left": "10px"

      });

      var ok = document.createElement('div');

      ok.className = "button_green ok";

      ok.innerHTML = "Ok";

      jQ(ok).css({

        'margin-left': '360px',

        'margin-right': '2px'

      });

      ok.onclick = function () {

        var unit = "";

        if (__$("unit")) {

          unit = __$("unit").value

        }

        try {

          if (type && type.toLowerCase() == 'age') {

            var value = __$('input').innerHTML;

            var max_birth_months = parseInt(mother_age * 12);

            var max_birth_weeks = parseInt(max_birth_months * 4);

            var max_birth_days = parseInt(max_birth_weeks * 7);

            var max_birth_hours = parseInt(max_birth_days * 24);

            if (age_units == "years") {
           
              max = mother_age;
           
            } else if (age_units == "months") {
           
              max = max_birth_months;
           
            } else if (age_units == "weeks") {
           
              max = max_birth_weeks;
           
            } else if (age_units == "days") {
           
              max = max_birth_days;
           
            } else if (age_units == "hours") {
           
              max = max_birth_hours;
           
            }
             
          }
          
        } catch (e) {
        
          console.log(e)
        
        }

        var row = __$(__$("popup").getAttribute("row_id"));

        var name = row.getElementsByClassName("detail-row-label")[0].innerHTML;

        if (global_control != undefined && (parseInt(global_control) > max || parseInt(global_control) < min)) {

          alertMessage("Value out of bound (" + min + " - " + max + ")", false, false);

        } else if (global_control == "") {

          alertMessage("Please select a value!", false, false);

        } else if (global_control !== 'Unknown' && !(global_control.match(/^[0-9]+(\.[0-9])?$/))) {

          alertMessage("Please enter the collect value!", false, false);

        } else {

          if (parseInt(global_control) == abs_max && (name == 'Year of birth' || name == 'Gestation (weeks)')) {

            showMeMessage("The value is " + global_control + ". Are you sure about this value?", true, false);

          }

          if (unit !== undefined && unit.length !== 0) {

            global_control += " " + unit;

          }

          global_control = global_control.trim();

          if (row) {

            var button = row.getElementsByClassName("input-button")[0];

            var display = row.getElementsByClassName("display-space")[0];

            var label = row.getElementsByClassName("detail-row-label")[0];

            var n = __$("popup").getAttribute("n-tuple");

            var p = __$("popup").getAttribute("p-tuple");

            var a = __$("popup").getAttribute("a-tuple");

            if (global_control.match(/Unk/) && label.innerHTML == "Birth weight") {

              enterWeight(row);

            }

            display.innerHTML = global_control.match(/Unk/) ? '?' : global_control;

            if (a != undefined && $$[a] != undefined) {

              $$[a][label.innerHTML] = global_control;

            } else {

              if ($[p][n] == undefined) {

                $[p][n] = {};

              }

              $[p][n][label.innerHTML] = global_control;

            }

            if (parseInt(global_control) != abs_max) {

              __$("input").innerHTML = "";

              __$("tblKeyboard").parentNode.removeChild(__$("tblKeyboard"));

              __$("input").parentNode.removeChild(__$("input"));

            }

          } else {

            alertMessage("Failed to update input!");

          }

          if (parseInt(global_control) != abs_max) {

            jQ("#shield, #popup").css("display", "none");

            jQ('#backButton, #nextButton').attr("disabled", false);

          }

        }

      };

      var holder = document.createElement("div");

      holder.innerHTML = "<table style='width: 100%;'><tr><td id = 'left' style='width: 35%; float: left;'></td><td id='right' style='width: 65%;' rowspan='2'></td></tr>" +
                  "<tr><td id = ''></td></tr><tr><td id='btns' colspan='2' style='padding-top: 8px; padding-bottom: 3px;border-top:1px solid black; background-color: black;'>" +
                  "</td></tr></table>"

      jQ(holder).css({

        "width": "100%",

        "border": "hidden"

      });

      var tbl = document.createElement("table");

      tbl.className = "keyBoardTable";

      tbl.cellSpacing = 0;

      tbl.cellPadding = 3;

      tbl.id = "tblKeyboard";

      tbl.style.minWidth = 0.20 * screen.width + "px";

      jQ(tbl).css({

        "border-left": "1.5px dotted black"

      });

      tbl.style.margin = "auto";

      var tr1 = document.createElement("tr");

      for (var i = 0; i < row1.length; i++) {

        var td1 = document.createElement("td");

        td1.align = "center";

        td1.vAlign = "middle";

        td1.style.cursor = "pointer";

        td1.bgColor = "#ffffff";

        td1.width = "30px";

        tr1.appendChild(td1);

        var btn = document.createElement("div");

        btn.className = "button_blue keyboard_button";

        btn.innerHTML = "<span>" + row1[i] + "</span>";

        btn.onmousedown = function () {

          if (!this.innerHTML.match(/^__$/)) {

            if (global_control == 'Unknown') {

              global_control = this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            } else {

              global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            }

            if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

              __$("input").innerHTML = global_control;

            } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

              var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

              __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

            }

          }

        }

        td1.appendChild(btn);

      }

      tbl.appendChild(tr1);

      var tr2 = document.createElement("tr");

      for (var i = 0; i < row2.length; i++) {

        var td2 = document.createElement("td");

        td2.align = "center";

        td2.vAlign = "middle";

        td2.style.cursor = "pointer";

        td2.bgColor = "#ffffff";

        td2.width = "30px";

        tr2.appendChild(td2);

        var btn = document.createElement("div");

        btn.className = "button_blue keyboard_button";

        btn.innerHTML = "<span>" + row2[i] + "</span>";

        btn.onmousedown = function () {

          if (!this.innerHTML.match(/^$/)) {

            if (global_control == 'Unknown') {

              global_control = this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            } else {

              global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            }

            global_control = global_control.replace(/^0+/, "");

            global_control = global_control.replace(/^\.+/, "");

            if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

              __$("input").innerHTML = global_control;
            
            } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

              var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

              __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

            }

          }

        }

        td2.appendChild(btn);

      }

      tbl.appendChild(tr2);

      var tr3 = document.createElement("tr");

      for (var i = 0; i < row3.length; i++) {

        var td3 = document.createElement("td");

        td3.align = "center";

        td3.vAlign = "middle";

        td3.style.cursor = "pointer";

        td3.bgColor = "#ffffff";

        td3.width = "30px";

        tr3.appendChild(td3);

        var btn = document.createElement("div");

        btn.className = "button_blue keyboard_button";

        btn.innerHTML = "<span>" + row3[i] + "</span>";

        btn.onmousedown = function () {

          if (!this.innerHTML.match(/^__$/)) {

            if (global_control == 'Unknown') {

              global_control = this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            } else {

              global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            }

            global_control = global_control.replace(/^0+/, "");

            global_control = global_control.replace(/^\.+/, "");

            if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

              __$("input").innerHTML = global_control;

            } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

              var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

              __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

            }

          }

        }

        td3.appendChild(btn);

      }

      tbl.appendChild(tr3);

      var tr4 = document.createElement("tr");

      for (var i = 0; i < row4.length; i++) {

        var td4 = document.createElement("td");

        td4.align = "center";

        td4.vAlign = "middle";

        td4.style.cursor = "pointer";

        td4.bgColor = "#ffffff";

        td4.width = "30px";

        tr4.appendChild(td4);

        var btn = document.createElement("div");

        btn.innerHTML = "<span>" + row4[i] + "</span>";

        btn.className = "button_blue keyboard_button";

        btn.onmousedown = function () {

          if (this.innerHTML.match(/<span>(.+)<\/span>/)[1] == "Del") {

            if (global_control.length == 1 || global_control == "Unknown") {

              global_control = "";

              __$("input").innerHTML = ""

            } else {

              global_control = global_control.split(" ")[0];

              global_control = global_control.substring(0, global_control.length - 1);

              global_control = global_control.replace(/^0+/, "");

              global_control = global_control.replace(/^\.+/, "");

              if (global_control != undefined && parseInt(global_control) <= max && parseInt(global_control) >= min) {

                __$("input").innerHTML = global_control;

              } else if (global_control != undefined && parseInt(global_control) > max || parseInt(global_control) < min) {

                var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

                __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

              }

            }

          } else if (this.innerHTML.match(/<span>Unk<\/span>/)) {

            global_control = 'Unknown';

            __$("input").innerHTML = 'Unknown';

          } else if (!this.innerHTML.match(/^$/)) {

            global_control += this.innerHTML.match(/<span>(.+)<\/span>/)[1];

            global_control = global_control.replace(/^0+/, "");

            global_control = global_control.replace(/^\.+/, "");

            if (global_control != undefined && (parseInt(global_control) <= abs_max || parseInt(global_control) <= max) && parseInt(global_control) >= min) {

              __$("input").innerHTML = global_control;

            } else if (global_control != undefined && (parseInt(global_control) > abs_max || parseInt(global_control) > max) || parseInt(global_control) < min) {

              var str = global_control.length > cn ? (global_control.substring(0, cn - 2) + "..." + global_control.substring(global_control.length - 2, global_control.length)) : (global_control)

              __$("input").innerHTML = str + "<div style='color: red; font-size: 24px; padding-top: 0px;'><br />&nbsp<br />" + " Out of range</div>";

            }

          }

        }

        td4.appendChild(btn);

      }

      tbl.appendChild(tr4);

      var input = document.createElement("div");

      input.id = "input";

      input.innerHTML = "";

      jQ(input).css({

        "font-size": "28px",

        "font-style": "italic",

        "float": "left",

        "height": "50px",

        "padding-top": "13%",

        "padding-left": "2%"

      })

      __$(id).appendChild(holder);

      __$("left").appendChild(input);

      __$("right").appendChild(tbl);

      __$("btns").appendChild(cl);

      __$("btns").appendChild(ok);

      __$("popup-header").innerHTML = current_popup;

      if (type && type == "age") {

        var unit = document.createElement("select");
        
        unit.id = "unit";
        
        var options = ["Hours", "Days", "Weeks", "Months", "years"]

        unit.className = "button_blue";
        
        unit.innerHTML = "Months";
        
        jQ(unit).css({
        
          "position": "absolute",
        
          "font-style": "italic",
        
          "font-size": "22px",
        
          "height": "47px",
        
          "width": "154px",
        
          "max-width": "154px",
        
          "top": "126px",
        
          "left": "6px",
        
          "padding-top": "8px",
        
          "-webkit-appearance": "none",
        
          "-moz-appearance": "none",
        
          "text-indent": "1px",
        
          "border": "none",
        
          "text-overflow": ''
        
        });

        __$("left").appendChild(unit);

        for (var i in options) {

          var option = document.createElement("option");

          option.value = options[i];

          option.innerHTML = options[i];

          unit.appendChild(option);

        }

      }

      __$("input").style.minWidth = (parseInt(__$("popup").style.minWidth.replace("px", "")) - parseInt(__$("tblKeyboard").style.minWidth.replace("px", ""))) + "px";

      jQ("#shield, #popup").css("display", "block");

    }