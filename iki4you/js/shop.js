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
  } else if (document.getElementById("byc10AM6PM").checked == true) {
    sessionStorage.setItem('bycTime', "10AM-6PM");
    location.replace("/curate-4");
  } else {
    sessionStorage.setItem('bycTime', "6PM-10PM");
    location.replace("/curate-4");
  }
}

function getAFT() {
  if (document.getElementById("aftLIS").checked == false && document.getElementById("aftHALD").checked == false && document.getElementById("aftHV").checked == false && document.getElementById("aftTAARTS").checked == false && document.getElementById("aftIYB").checked == false && document.getElementById("aftBon").checked == false && document.getElementById("aftTY").checked == false) {
    document.getElementById('cardSelectText').style.display = "block";
  } else if (document.getElementById("aftLIS").checked == true) {
    sessionStorage.setItem('aftDesign', "Let it sparkle");
  } else if (document.getElementById("aftHALD").checked == true) {
    sessionStorage.setItem('aftDesign', "Have a lovely day");
  } else if (document.getElementById("aftHV").checked == true) {
    sessionStorage.setItem('aftDesign', "Happy vibes");
  } else if (document.getElementById("aftTAARTS").checked == true) {
    sessionStorage.setItem('aftDesign', "There\'s always a reason to smile");
  } else if (document.getElementById("aftIYB").checked == true) {
    sessionStorage.setItem('aftDesign', "It\'s your birthday");
  } else if (document.getElementById("aftBon").checked == true) {
    sessionStorage.setItem('aftDesign', "Bonjour");
  } else {
    sessionStorage.setItem('aftDesign', "Thank you");
  }
  var aftMessage = document.getElementById("aftMessage").value
  sessionStorage.setItem('aftMessage', aftMessage);
  if (document.getElementById("aftRustic").checked == false && document.getElementById("aftClassic").checked == false) {
    document.getElementById('lookSelectText').style.display = "block";
  } else if (document.getElementById("aftRustic").checked == true) {
    sessionStorage.setItem('aftLook', "Rustic");
    location.replace("/curate-5");
  } else {
    sessionStorage.setItem('aftLook', "Classic");
    location.replace("/curate-5");
  }
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById("beadsLettering").required = "";
    var beadsLettering = document.getElementById("beadsLettering").value;
    sessionStorage.setItem('beadsLettering', beadsLettering);
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
  document.getElementById("pick-me-up").value = sessionStorage.getItem('pickMeUp');
  document.getElementById("express-shipping").value = sessionStorage.getItem('expressShipping');
  if (sessionStorage.getItem('beadsLettering') !== null) {
    document.getElementById("alphabet-beads").value = "Yes";
  } else {
    document.getElementById("alphabet-beads").value = "No";
  }
  document.getElementById("letscelebrate").value = sessionStorage.getItem('letsCelebrate');
  document.getElementById("recipientname").value = sessionStorage.getItem('bycName');
  document.getElementById("recipientphone").value = sessionStorage.getItem('bycRTel');
  document.getElementById("addressline1").value = sessionStorage.getItem('bycAddress1');
  document.getElementById("addressline2").value = sessionStorage.getItem('bycAddress2');
  document.getElementById("country").value = sessionStorage.getItem('bycCountry');
  document.getElementById("letscelebrate").value = sessionStorage.getItem('letsCelebrate');
  document.getElementById("postalcode").value = sessionStorage.getItem('bycPostcode');
  document.getElementById("deliverydate").value = sessionStorage.getItem('bycDDate');
  document.getElementById("deliverytime").value = sessionStorage.getItem('bycTime');
  document.getElementById("carddesign").value = sessionStorage.getItem('aftDesign');
  document.getElementById("cardmessage").value = sessionStorage.getItem('aftMessage');
  document.getElementById("look").value = sessionStorage.getItem('aftLook');
  document.getElementById("beadstext").value = sessionStorage.getItem('beadsLettering');
}
