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

function checkForm() {
  
  let name = document.getElementById("nameIn").value;
  let surname = document.getElementById("surnameIn").value;
  let phone = document.getElementById("phoneIn").value;
  let cf = document.getElementById("cFiscIn").value;
  let street = document.getElementById("streetIn").value;
  let age = parseInt(document.getElementById("ageIn").value);
  if (
    LETTERS_REGEX.test(name) &&
    LETTERS_REGEX.test(surname) &&
    PHONE_REGEX.test(phone) &&
    CF_REGEX.test(cf) &&
    street
  ) {
    document.getElementById("form").style.display = "none";

    cf = cf.toUpperCase();

    let kurivoltQty = parseInt(document.getElementById("kurivoltQty").value);
    let dragoBiancoQty = parseInt(document.getElementById("dragoBiancoQty").value);
    let kaiserUtopiaQty = parseInt(document.getElementById("kaiserUtopiaQty").value);

    let price = 0;
    price += kurivoltQty * 10;
    price += dragoBiancoQty * 1999.99;
    price += kaiserUtopiaQty * 945.25;

    document.getElementById("recap").innerHTML = `
    <p style="font-size: 16px; color: #333;"><strong>Nome:</strong> ${name}</p>
    <p style="font-size: 16px; color: #333;"><strong>Cognome:</strong> ${surname}</p>
    <p style="font-size: 16px; color: #333;"><strong>Numero di telefono:</strong> ${phone}</p>
    <p style="font-size: 16px; color: #333;"><strong>Codice Fiscale:</strong> ${cf}</p>
    <p style="font-size: 16px; color: #333;"><strong>Indirizzo:</strong> ${street}</p>
    <p style="font-size: 16px; color: #333;"><strong>Età:</strong> ${age}</p>
    <hr style="border: 1px solid #95BB72;">
    <p style="font-size: 16px; color: #333;"><strong>Quantità Kurivolt:</strong> ${kurivoltQty}</p>
    <p style="font-size: 16px; color: #333;"><strong>Quantità Drago Bianco:</strong> ${dragoBiancoQty}</p>
    <p style="font-size: 16px; color: #333;"><strong>Quantità Utopia Kaiser:</strong> ${kaiserUtopiaQty}</p>
    <hr style="border: 1px solid #95BB72;">
    <p style="font-size: 18px; color: #4B6043; font-weight: bold;">Totale: €${price.toFixed(2)}</p>
    `;
    
    
    document.getElementById("order").style.display = "flex";
  }
}