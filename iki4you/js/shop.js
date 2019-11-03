/* project i v1.0.18 | (c) 2019 Nan Hang Lim (@nanhanglim)  */
/* licence: https://licence.nanhanglim.com/project_i */

function getCurateParameter() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var parameter = params.get("celebrate");
  localStorage.setItem('letsCelebrate', parameter);
}

function getPMU() {
  if (document.getElementById("pmuPetite").checked == false && document.getElementById("pmuRegular").checked == false && document.getElementById("pmuDeluxe").checked == false) {
    document.getElementById('boxSelectText').style.display = "block";
  } else if (document.getElementById("pmuPetite").checked == true) {
    localStorage.setItem('pickMeUp', "Petite");
    location.replace("/curate-3");
  } else if (document.getElementById("pmuRegular").checked == true) {
    localStorage.setItem('pickMeUp', "Regular");
    location.replace("/curate-3");
  } else if (document.getElementById("pmuDeluxe").checked == true) {
    localStorage.setItem('pickMeUp', "Deluxe");
    location.replace("/curate-3");
  }
}

function checkBYC() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var parameter = params.get("edit");
  var bycName = document.getElementById("bycRName").value;
  var bycAbout = document.getElementById("bycAbout").value;
  var bycRTel = document.getElementById("bycRTel").value;
  var bycAddress1 = document.getElementById("bycAddress1").value;
  var bycAddress2 = document.getElementById("bycAddress2").value;
  var bycCountry = document.getElementById("bycCountry").value;
  var bycPostcode = document.getElementById("bycPostcode").value;
  var bycDDate = document.getElementById("bycDDate").value;
  if (bycName == "" || bycAbout == "" || bycRTel == "" || bycAddress1 == "" || bycCountry == "" || bycPostcode == "" || bycDDate == "") {
    1 == 1;
  } else {
    if (parameter !== 'true') {
    getBYC(bycName, bycAbout, bycRTel, bycAddress1, bycAddress2, bycCountry, bycPostcode, bycDDate);
  } else {
    getEditBYC(bycName, bycAbout, bycRTel, bycAddress1, bycAddress2, bycCountry, bycPostcode, bycDDate);
  }
  }
}

function getBYC(bycName, bycAbout, bycRTel, bycAddress1, bycAddress2, bycCountry, bycPostcode, bycDDate) {
  localStorage.setItem('bycName', bycName);
  localStorage.setItem('bycAbout', bycAbout);
  localStorage.setItem('bycRTel', bycRTel);
  localStorage.setItem('bycAddress1', bycAddress1);
  localStorage.setItem('bycAddress2', bycAddress2);
  localStorage.setItem('bycCountry', bycCountry);
  localStorage.setItem('bycPostcode', bycPostcode);
  localStorage.setItem('bycDDate', bycDDate);
  if (document.getElementById("byc10AM6PM").checked == false && document.getElementById("byc6PM10PM").checked == false) {
    document.getElementById('timeSelectText').style.display = "block";
  } else if (document.getElementById("byc10AM6PM").checked == true) {
    localStorage.setItem('bycTime', "10AM-6PM");
    location.replace("/curate-4");
  } else {
    localStorage.setItem('bycTime', "6PM-10PM");
    location.replace("/curate-4");
  }
}

function showExpress() {
  if (document.getElementById("bycDDate").value == localStorage.getItem('sevenWorkingDays') || document.getElementById("bycDDate").value == localStorage.getItem('eightWorkingDays') || document.getElementById("bycDDate").value == localStorage.getItem('nineWorkingDays')) {
  document.getElementById("showExpress").style.display = "block";
} else {
  document.getElementById("showExpress").style.display = "none";
}
}

function getAFT() {
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById("beadsLettering").required = true;
    var beadsLettering = document.getElementById("beadsLettering").value;
    localStorage.setItem('beadsLettering', beadsLettering);
  } else {
    document.getElementById("beadsLettering").required = false;
}

if (document.getElementById("aftBeads").checked == true && document.getElementById("beadsLettering").value !== "") {
  aftCheck();
} else if (document.getElementById("aftBeads").checked == false) {
  aftCheck();
} else {
  return false; 
}
}

function aftCheck() {
  if (document.getElementById("aftLIS").checked == false && document.getElementById("aftHALD").checked == false && document.getElementById("aftHV").checked == false && document.getElementById("aftTAARTS").checked == false && document.getElementById("aftIYB").checked == false && document.getElementById("aftBon").checked == false && document.getElementById("aftTY").checked == false) {
    document.getElementById('cardSelectText').style.display = "block";
  } else if (document.getElementById("aftLIS").checked == true) {
    localStorage.setItem('aftDesign', "Let it sparkle");
  } else if (document.getElementById("aftHALD").checked == true) {
    localStorage.setItem('aftDesign', "Have a lovely day");
  } else if (document.getElementById("aftHV").checked == true) {
    localStorage.setItem('aftDesign', "Happy vibes");
  } else if (document.getElementById("aftTAARTS").checked == true) {
    localStorage.setItem('aftDesign', "There\'s always a reason to smile");
  } else if (document.getElementById("aftIYB").checked == true) {
    localStorage.setItem('aftDesign', "It\'s your birthday");
  } else if (document.getElementById("aftBon").checked == true) {
    localStorage.setItem('aftDesign', "Bonjour");
  } else {
    localStorage.setItem('aftDesign', "Thank you");
  }
  var aftMessage = document.getElementById("aftMessage").value
  localStorage.setItem('aftMessage', aftMessage);
  if (document.getElementById("aftRustic").checked == false && document.getElementById("aftClassic").checked == false) {
    document.getElementById('lookSelectText').style.display = "block";
  } else if (document.getElementById("aftRustic").checked == true) {
    localStorage.setItem('aftLook', "Rustic");
    aftReplace();
  } else if (document.getElementById("aftClassic").checked == true) {
    localStorage.setItem('aftLook', "Classic");
    aftReplace();
  }
}

function aftReplace() {
  if (document.getElementById('aftMessage').value !== "" || document.getElementById('aftMessage').value !== "") {
  location.replace("/curate-5");
} else {
  1 == 1;
}
}
  

function beadsChecked() {
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById('checkedBeads').style.display = "block";
  } else {
    document.getElementById('checkedBeads').style.display = "none";
    }
}

function curateASurpriseIkiBox() {
  document.getElementById("pick-me-up").value = localStorage.getItem('pickMeUp');
  document.getElementById("express-shipping").value = localStorage.getItem('expressShipping');
  if (localStorage.getItem('beadsLettering') !== null) {
    document.getElementById("alphabet-beads").value = "Yes";
  } else {
    document.getElementById("alphabet-beads").value = "No";
  }
  document.getElementById("letscelebrate").value = localStorage.getItem('letsCelebrate');
  document.getElementById("recipientname").value = localStorage.getItem('bycName');
  document.getElementById("aboutrecipient").value = localStorage.getItem('bycAbout');
  document.getElementById("recipientphone").value = localStorage.getItem('bycRTel');
  document.getElementById("addressline1").value = localStorage.getItem('bycAddress1');
  document.getElementById("addressline2").value = localStorage.getItem('bycAddress2');
  document.getElementById("country").value = localStorage.getItem('bycCountry');
  document.getElementById("letscelebrate").value = localStorage.getItem('letsCelebrate');
  document.getElementById("postalcode").value = localStorage.getItem('bycPostcode');
  document.getElementById("deliverydate").value = localStorage.getItem('bycDDate');
  document.getElementById("deliverytime").value = localStorage.getItem('bycTime');
  document.getElementById("carddesign").value = localStorage.getItem('aftDesign');
  document.getElementById("cardmessage").value = localStorage.getItem('aftMessage');
  document.getElementById("look").value = localStorage.getItem('aftLook');
  document.getElementById("beadstext").value = localStorage.getItem('beadsLettering');
  if (document.getElementById("look").value !== "" && localStorage.getItem('addedCart') == null) {
    document.querySelector('button[type="submit"]').click();
    localStorage.setItem('addedCart', '1')
  }
}
function offBST() {
  document.getElementById("boxSelectText").style.display = "none";
}

function offTST() {
  document.getElementById("timeSelectText").style.display = "none";
}

function offCST() {
  document.getElementById("cardSelectText").style.display = "none";
}

function offLST() {
  document.getElementById("lookSelectText").style.display = "none";
}

function pmuEdit() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var parameter = params.get("edit");
  if (parameter == 'true') {
  document.getElementById('pmuNext').innerHTML = 'Edit';  
  document.getElementById('pmuNext').setAttribute('onClick', 'getEditPMU()');
  }
}

function getEditPMU() {
  if (document.getElementById("pmuPetite").checked == false && document.getElementById("pmuRegular").checked == false && document.getElementById("pmuDeluxe").checked == false) {
    document.getElementById('boxSelectText').style.display = "block";
  } else if (document.getElementById("pmuPetite").checked == true) {
    localStorage.setItem('pickMeUp', "Petite");
    location.replace("/curate-5");
  } else if (document.getElementById("pmuRegular").checked == true) {
    localStorage.setItem('pickMeUp', "Regular");
    location.replace("/curate-5");
  } else if (document.getElementById("pmuDeluxe").checked == true) {
    localStorage.setItem('pickMeUp', "Deluxe");
    location.replace("/curate-5");
  }
}

function bycEdit() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var parameter = params.get("edit");
  if (parameter == 'true') {
  document.getElementById('bycNext').value = 'Edit';  
  document.getElementById('bycNext').setAttribute('onClick', 'checkBYC()');
  }
}

function getEditBYC() {
  localStorage.setItem('bycName', bycName);
  localStorage.setItem('bycAbout', bycAbout);
  localStorage.setItem('bycRTel', bycRTel);
  localStorage.setItem('bycAddress1', bycAddress1);
  localStorage.setItem('bycAddress2', bycAddress2);
  localStorage.setItem('bycCountry', bycCountry);
  localStorage.setItem('bycPostcode', bycPostcode);
  localStorage.setItem('bycDDate', bycDDate);
  if (document.getElementById("byc10AM6PM").checked == false && document.getElementById("byc6PM10PM").checked == false) {
    document.getElementById('timeSelectText').style.display = "block";
  } else if (document.getElementById("byc10AM6PM").checked == true) {
    localStorage.setItem('bycTime', "10AM-6PM");
    location.replace("/curate-5");
  } else {
    localStorage.setItem('bycTime', "6PM-10PM");
    location.replace("/curate-5");
  }
}

function aftEdit() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var parameter = params.get("edit");
  if (parameter == 'true') {
  document.getElementById('aftNext').value = 'Edit';  
  document.getElementById('aftNext').setAttribute('onClick', 'getEditAFT()');
  }
}

function getEditAFT() {
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById("beadsLettering").required = true;
    var beadsLettering = document.getElementById("beadsLettering").value;
    localStorage.setItem('beadsLettering', beadsLettering);
  } else {
    document.getElementById("beadsLettering").required = false;
}

if (document.getElementById("aftBeads").checked == true && document.getElementById("beadsLettering").value !== "") {
  aftEditCheck();
} else if (document.getElementById("aftBeads").checked == false) {
  aftEditCheck();
} else {
  return false; 
}
}

function aftEditCheck() {
  if (document.getElementById("aftLIS").checked == false && document.getElementById("aftHALD").checked == false && document.getElementById("aftHV").checked == false && document.getElementById("aftTAARTS").checked == false && document.getElementById("aftIYB").checked == false && document.getElementById("aftBon").checked == false && document.getElementById("aftTY").checked == false) {
    document.getElementById('cardSelectText').style.display = "block";
  } else if (document.getElementById("aftLIS").checked == true) {
    localStorage.setItem('aftDesign', "Let it sparkle");
  } else if (document.getElementById("aftHALD").checked == true) {
    localStorage.setItem('aftDesign', "Have a lovely day");
  } else if (document.getElementById("aftHV").checked == true) {
    localStorage.setItem('aftDesign', "Happy vibes");
  } else if (document.getElementById("aftTAARTS").checked == true) {
    localStorage.setItem('aftDesign', "There\'s always a reason to smile");
  } else if (document.getElementById("aftIYB").checked == true) {
    localStorage.setItem('aftDesign', "It\'s your birthday");
  } else if (document.getElementById("aftBon").checked == true) {
    localStorage.setItem('aftDesign', "Bonjour");
  } else {
    localStorage.setItem('aftDesign', "Thank you");
  }
  var aftMessage = document.getElementById("aftMessage").value
  localStorage.setItem('aftMessage', aftMessage);
  if (document.getElementById("aftRustic").checked == false && document.getElementById("aftClassic").checked == false) {
    document.getElementById('lookSelectText').style.display = "block";
  } else if (document.getElementById("aftRustic").checked == true) {
    localStorage.setItem('aftLook', "Rustic");
    location.replace('/curate-5');
  } else if (document.getElementById("aftClassic").checked == true) {
    localStorage.setItem('aftLook', "Classic");
    location.replace('/curate-5');
  }
}
