const LETTERS_REGEX = /^[A-Za-z]+$/;
const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
const STREET_REGEX = /^[A-Za-z0-9]+$/;

const DEF_COLOR = "#ffffff";

function optim(id, value) {
  if (value) {
    document.getElementById(id).style.border = "2px solid #4B6043";
    document.getElementById(id).style.backgroundColor = "#95BB72";
  } else if (!value) {
    document.getElementById(id).style.border = "2px solid #A52A2A";
    document.getElementById(id).style.backgroundColor = "#FFC0C0";
  }
}

function checkName(id) {
  let name = document.getElementById(id).value;
  if (LETTERS_REGEX.test(name)) {
    optim(id, true);
    document.getElementById("nameError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("nameError").style.display = "block";
  }
}

function checkSurname(id) {
  let surname = document.getElementById(id).value;
  if (LETTERS_REGEX.test(surname)) {
    optim(id, true);
    document.getElementById("surnameError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("surnameError").style.display = "block";
  }
}

function checkPhone(id) {
  let phone = document.getElementById(id).value;
  if (PHONE_REGEX.test(phone)) {
    optim(id, true);
    document.getElementById("phoneError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("phoneError").style.display = "block";
  }
}

function checkCf(id) {
  let cf = document.getElementById(id).value;
  console.log(cf);
  if (CF_REGEX.test(cf)) {
    optim(id, true);
    document.getElementById("cFiscError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("cFiscError").style.display = "block";
  }
}

function checkStreet(id) {
  let street = document.getElementById(id).value;
  if (street) {
    optim(id, true);
    document.getElementById("streetError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("streetError").style.display = "block";
  }
}

function checkAge(id) {
  let age = parseInt(document.getElementById(id).value);
  let pInfoElements = document.getElementsByClassName("pInfos");
  if (!isNaN(age) && age >= 0 && age <= 99) {
    optim(id, true);

    if (age < 18) {
      document.getElementById("parentInfo").style.display = "flex";
      document.getElementById("ageError").style.display = "none";
      for (let i = 0; i < pInfoElements.length; i++) {
        pInfoElements[i].setAttribute("required", "required");
      }
    } else {
      document.getElementById("parentInfo").style.display = "none";
      document.getElementById("ageError").style.display = "none";
      for (let i = 0; i < pInfoElements.length; i++) {
        pInfoElements[i].removeAttribute("required");
      }
    }
  } else {
    optim(id, false);
    document.getElementById("parentInfo").style.display = "none";
    document.getElementById("ageError").style.display = "block";
    for (let i = 0; i < pInfoElements.length; i++) {
      pInfoElements[i].removeAttribute("required");
    }
  }
}