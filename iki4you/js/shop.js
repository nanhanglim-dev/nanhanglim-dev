/* project i v1.0.9 | (c) 2019 Nan Hang Lim (@nanhanglim)  */

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

function getBYC() {
  var bycName = document.getElementById("bycRName").value;
  localStorage.setItem('bycName', bycName);
  var bycAbout = document.getElementById("bycAbout").value;
  localStorage.setItem('bycAbout', bycAbout);
  var bycRTel = document.getElementById("bycRTel").value;
  localStorage.setItem('bycRTel', bycRTel);
  var bycAddress1 = document.getElementById("bycAddress1").value;
  localStorage.setItem('bycAddress1', bycAddress1);
  var bycAddress2 = document.getElementById("bycAddress2").value;
  localStorage.setItem('bycAddress2', bycAddress2);
  var bycCountry = document.getElementById("bycCountry").value;
  localStorage.setItem('bycCountry', bycCountry);
  var bycPostcode = document.getElementById("bycPostcode").value;
  localStorage.setItem('bycPostcode', bycPostcode);
  var bycDDate = document.getElementById("bycDDate").value;
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

function getAFT() {
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
  } else {
    localStorage.setItem('aftLook', "Classic");
  }
  if (document.getElementById("aftBeads").checked == true) {
    document.getElementById("beadsLettering").required = true;
    var beadsLettering = document.getElementById("beadsLettering").value;
    localStorage.setItem('beadsLettering', beadsLettering);
  } else {
    document.getElementById("beadsLettering").required = false;
    location.replace("/curate-5");
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
  if (document.getElementById("look") !== "") {
    document.querySelector('button[type="submit"]').click();
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
