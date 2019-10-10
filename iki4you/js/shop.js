function getCurateParameter() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var parameter = params.get("celebrate");
  sessionStorage.setItem('letsCelebrate', parameter);
}

function getPMU() {
  if (document.getElementById("pmuPetite").checked == false && document.getElementById("pmuRegular").checked == false && document.getElementById("pmuDeluxe").checked == false) {
    document.getElementById('boxSelectText').style.display = "block";
  } else if (document.getElementById("pmuPetite").checked == true) {
    sessionStorage.setItem('pickMeUp', "Petite");
    location.replace("/curate-3");
  } else if (document.getElementById("pmuRegular").checked == true) {
    sessionStorage.setItem('pickMeUp', "Regular");
    location.replace("/curate-3");
  } else if (document.getElementById("pmuDeluxe").checked == true) {
    sessionStorage.setItem('pickMeUp', "Deluxe");
    location.replace("/curate-3");
  }
}

function getBYC() {
  var bycName = document.getElementById("bycRName").value;
  sessionStorage.setItem('bycName', bycName);
  var bycAbout = document.getElementById("bycAbout").value;
  sessionStorage.setItem('bycAbout', bycAbout);
  var bycRTel = document.getElementById("bycRTel").value;
  sessionStorage.setItem('bycRTel', bycRTel);
  var bycAddress1 = document.getElementById("bycAddress1").value;
  sessionStorage.setItem('bycAddress1', bycAddress1);
  var bycAddress2 = document.getElementById("bycAddress2").value;
  sessionStorage.setItem('bycAddress2', bycAddress2);
  var bycCountry = document.getElementById("bycCountry").value;
  sessionStorage.setItem('bycCountry', bycCountry);
  var bycPostcode = document.getElementById("bycPostcode").value;
  sessionStorage.setItem('bycPostcode', bycPostcode);
  var bycDDate = document.getElementById("bycDDate").value;
  sessionStorage.setItem('bycDDate', bycDDate);
  if (document.getElementById("byc10AM6PM").checked == false && document.getElementById("byc6PM10PM").checked == false) {
    document.getElementById('timeSelectText').style.display = "block";
  } else if (document.getElementById("pmu10AM6PM").checked == true) {
    sessionStorage.setItem('bycTime', "10AM-6PM");
  } else if (document.getElementById("pmu6PM10PM").checked == true) {
    sessionStorage.setItem('bycTime', "6PM-10PM");
  }
  location.replace("/curate-4");
}

function getAFT() {
  if (document.getElementById("aftLIS").checked == false && document.getElementById("aftHALD").checked == false && document.getElementById("aftHV").checked == false && document.getElementById("aftTAARTS").checked == false && document.getElementById("aftIYB").checked == false && document.getElementById("aftBon").checked == false && document.getElementById("aftTY").checked == false) {
    document.getElementById('msgSelectText').style.display = "block";
  } else if (document.getElementById("aftLIS").checked == true) {
    sessionStorage.setItem('aftDesign', "Let it sparkle");
  } else if (document.getElementById("aftHALD").checked == true) {
    sessionStorage.setItem('aftDesign', "Have a lovely day");
  } else if (document.getElementById("aftHV").checked == true) {
    sessionStorage.setItem('aftDesign', "Happy vibes");
  } else if (document.getElementById("aftTARRTS").checked == true) {
    sessionStorage.setItem('aftDesign', "There\'s always a reason to smile");
  } else if (document.getElementById("aftIYB").checked == true) {
    sessionStorage.setItem('aftDesign', "It\'s your birthday");
  } else if (document.getElementById("aftBon").checked == true) {
    sessionStorage.setItem('aftDesign', "Bonjour");
  } else if (document.getElementById("aftTY").checked == true) {
    sessionStorage.setItem('aftDesign', "Thank you");
  }
  var aftMessage = document.getElementById("aftMessage").value
  sessionStorage.setItem('aftMessage', aftMessage);
  if (document.getElementById("aftRustic").checked == false && document.getElementById("aftClassic").checked == false) {
    document.getElementById('timeSelectText').style.display = "block";
  } else if (document.getElementById("aftRustic").checked == true) {
    sessionStorage.setItem('aftLook', "Rustic");
  } else if (document.getElementById("aftClassic").checked == true) {
    sessionStorage.setItem('aftLook', "Classic");
  }
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById("beadsLettering").required = "";
    var beadsLettering = document.getElementById("beadsLettering").value;
    sessionStorage.setItem('beadsLettering', beadsLettering);
  }
  location.replace("/curate-5");
}

function beadsChecked() {
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById('checkedBeads').style.display = "block";
  } else {
    document.getElementById('checkedBeads').style.display = "none";
    }
}
