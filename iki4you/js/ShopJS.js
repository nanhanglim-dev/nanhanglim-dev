function checkLC() {
  if (letsCelebrate == "undefined") {
    location.replace("/curate");
  }
}

function checkPMU() {
  if (pickMeUp == "undefined") {
    location.replace("/curate-2");
  }
}

function checkBYC() {
  if (bespokeYourContents == "undefined") {
    location.replace("/curate-3");
  }
}

function checkAFT() {
  if (addFinalTouch == "undefined") {
    location.replace("/curate-4");
  }
}

function getCurateParameter() {
  var url = window.location.href;
  var parameter = url.searchParams.get("celebrate");
  var letsCelebrate = parameter
}

function getPMU() {
  if (document.getElementById("pmuPetite").checked == "false" && document.getElementById("pmuRegular").checked == "false" && document.getElementById("pmuDeluxe").checked == "false") {
    document.getElementById('boxSelectText').style.display = "block";
  } else if (document.getElementById("pmuPetite").checked == "true";) {
    var pickMeUp = "petite"
  } else if (document.getElementById("pmuRegular").checked == "true") {
    var pickMeUp = "regular"
  } else if (document.getElementById("pmuDeluxe").checked == "true") {
    var pickMeUp = "deluxe"
  }
}

function getBYC() {
  var bycName = document.getElementById("bycRName").value;
  var bycAbout = document.getElementById("bycAbout").value;
  var bycRTel = document.getElementById("bycRTel").value;
  var bycAddress1 = document.getElementById("bycAddress1").value;
  var bycAddress2 = document.getElementById("bycAddress2").value;
  var bycCountry = document.getElementById("bycCountry").value;
  var bycPostcode = document.getElementById("bycPostcode").value;
  var bycDDate = document.getElementById("bycDDate").value;
  if (document.getElementById("byc10AM6PM").checked == "false" && document.getElementById("byc6PM10PM").checked == "false") {
    document.getElementById('timeSelectText').style.display = "block";
  } else if (document.getElementById("pmu10AM6PM").checked == "true";) {
    var bycTime = "10AM-6PM"
  } else if (document.getElementById("pmu6PM10PM").checked == "true") {
    var bycTime = "6PM-10PM"
  }
}

function getAFT() {
  if (document.getElementById("aftLIS").checked == "false" && document.getElementById("aftHALD").checked == "false" && document.getElementById("aftHV").checked == "false" && document.getElementById("aftTAARTS").checked == "false" && document.getElementById("aftIYB").checked == "false" && document.getElementById("aftBon").checked == "false" && document.getElementById("aftTY").checked == "false") {
    document.getElementById('msgSelectText').style.display = "block";
  } else if (document.getElementById("aftLIS").checked == "true";) {
    var aftDesign = "Let it sparkle"
  } else if (document.getElementById("aftHALD").checked == "true") {
    var aftDesign = "Have a lovely day"
  } else if (document.getElementById("aftHV").checked == "true") {
    var aftDesign = "Happy vibes"
  } else if (document.getElementById("aftTARRTS").checked == "true";) {
    var aftDesign = "There\'s always a reason to smile"
  } else if (document.getElementById("aftIYB").checked == "true";) {
    var aftDesign = "It\'s your birthday"
  } else if (document.getElementById("aftBon").checked == "true";) {
    var aftDesign = "Bonjour"
  } else if (document.getElementById("aftTY").checked == "true";) {
    var aftDesign = "Thank you"
  }
  var aftMessage = document.getElementById("aftMessage").value
  if (document.getElementById("aftRustic").checked == "false" && document.getElementById("aftClassic").checked == "false") {
    document.getElementById('timeSelectText').style.display = "block";
  } else if (document.getElementById("aftRustic").checked == "true";) {
    var aftLook = "Rustic"
  } else if (document.getElementById("aftClassic").checked == "true") {
    var aftLook = "Classic"
  }
  if (document.getElementById("aftBeads").checked == "true") {
    document.getElementById("beadsLettering").required = "";
    var beadsLettering = document.getElementById("beadsLettering").value;
  }
}

if (document.getElementById("aftBeads").checked == "true") {
  document.getElementById('beadsLettering').style.display = "block";
} else {
  document.getElementById('beadsLettering').style.display = "none";
}

function curateASurpriseIkiBox() {
  if (aftLook == "undefined") {
    location.replace(/curate);
  } else {
    document.getElementById("letscelebrate").value = letsCelebrate
    document.getElementById("recipientname").value = bycName
    document.getElementById("aboutrecipient").value = bycAbout
    document.getElementById("recipientphone").value = bycRTel
    document.getElementById("addressline1").value = bycAddress1
    document.getElementById("addressline2").value = bycAddress2
    document.getElementById("country").value = bycCountry
    document.getElementById("postalcode").value = bycPostcode
    document.getElementById("deliverydate").value = bycDDate
    document.getElementById("deliverytime").value = bycTime
    document.getElementById("carddesign").value = aftDesign
    document.getElementById("cardmessage").value = aftMessage
    document.getElementById("look").value = aftLook
    document.getElementById("beadstext").value = beadsLettering
  }
}
