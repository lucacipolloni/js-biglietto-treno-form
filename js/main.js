// # FORM ELEMENTS
const ticketForm = document.getElementById("form-biglietto");
const fullnameInput = document.getElementById("fullname-input");
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input");

// # CONFIG
const pricePerKm = 0.21;
const discountMinor = 0.2;
const discountOver65 = 0.4;

ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = fullnameInput.value;
  const km = parseInt(kmInput.value);
  const ageRange = ageInput.value;

  console.log("fullname:", fullname);
  console.log("km:", km);
  console.log("agerange:", ageRange);

  // # Calcolo il prezzo del biglietto
  const basePrice = pricePerKm * km;
  let discountAmount = 0;
  let discountType;
  const finalPrice = basePrice - discountAmount;

  if (ageRange === "minor") {
    discountAmount = basePrice * discountMinor;
    discountType = "minor";
  }

  if (ageRange === "over65") {
    discountAmount = basePrice * discountOver65;
    discountType = "over65";
  }

  console.log("basePrice:", basePrice);
  console.log("discountAmount:", discountAmount);
  console.log("discountType:", discountType);
  console.log("finalPrice:", finalPrice);
});
