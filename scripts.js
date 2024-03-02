const selectedSeats = [];

document
  .getElementById("seat-container")
  .addEventListener("click", function (e) {
    const ticketPrice = 550;
    const target = e.target.innerText;

    if (e.target.className.indexOf("pointer") === -1) {
      return;
    }

    const seatCounting = document.getElementById("seat-counting");
    let countingSeat = parseInt(seatCounting.innerText);

    if (selectedSeats.includes(target)) {
      selectedSeats.splice(selectedSeats.indexOf(target), 1);
      
      seatCounting.innerText = countingSeat - 1;

      const remainingSeat = document.getElementById("remaining-seats");
      remainingSeat.innerText = parseInt(remainingSeat.innerText) + 1;

      
      


      const selectedTicket = document.getElementById("selected-ticket");
      const tickets = selectedTicket.querySelectorAll("p");
      tickets.forEach((ticket) => {
        if (ticket.innerText === target) {
          ticket.parentElement.parentElement.remove();
        }
      });

 
      removeClass(target, "bg-[#1DD100]");
      removeClass(target, "text-white");
      addClass(target, "bg-[#f7f8f8]");
      console.log(target);
  


    } else {
      if (seatCounting.innerText >= 4) {
        return alert("You have selected maximum number of seat");
      }

      seatCounting.innerText = countingSeat + 1;
      selectedSeats.push(target);

      const remainingSeat = document.getElementById("remaining-seats");
      let seatLeft = parseInt(remainingSeat.innerText);
      seatLeft = seatLeft - 1;
      remainingSeat.innerText = seatLeft;

      removeClass("selected-ticket", "hidden");
      const selectedTicket = document.getElementById("selected-ticket");
      const newDiv = document.createElement("div");

      newDiv.innerHTML = `
        <div class="flex justify-between py-1">
        <p id="">${target}</p>
        <p>Economy</p>
        <p>${ticketPrice}</p>
        </div>
    `;

      selectedTicket.appendChild(newDiv);

      removeClass(target, "bg-[#f7f8f8]");
    addClass(target, "bg-[#1DD100]");
    addClass(target, "text-white");
    }

    if(seatCounting.innerText > 0){
        removeClass("total-price-box", "hidden");
        removeClass("grand-total-box", "hidden");
    } else{
        addClass("total-price-box", "hidden");
        addClass("grand-total-box", "hidden");
    }

    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = seatCounting.innerText * ticketPrice;

    const grandTotalPrice = document.getElementById("grand-total-price");
    grandTotalPrice.innerText = totalPrice.innerText;

    if (totalPrice.innerText >= 2200) {
      removeClass("coupon-area", "hidden");
      // removeClass('discount-price-box', 'hidden');
    } else{
        addClass("coupon-area", "hidden");
    }

    validNumber();
  });

const totalPrice = document.getElementById("total-price");
const grandTotalPrice = document.getElementById("grand-total-price");
const discountBox = document.getElementById("discount-price-box");
const discountPrice = document.getElementById("discount-price");
applyButton.addEventListener("click", function () {
  if (couponField.value === "NEW15") {
    discountPrice.innerText = parseInt(totalPrice.innerText) * 0.15;
    grandTotalPrice.innerText = totalPrice.innerText - discountPrice.innerText;
    addClass("coupon-area", "hidden");
    removeClass("discount-price-box", "hidden");
  } else if (couponField.value === "Couple 20") {
    discountPrice.innerText = parseInt(totalPrice.innerText) * 0.2;
    grandTotalPrice.innerText = totalPrice.innerText - discountPrice.innerText;
    addClass("coupon-area", "hidden");
    removeClass("discount-price-box", "hidden");
  }
});

const nextButton = document.getElementById("next-button");
const convertTotalPrice = parseInt(totalPrice.innerText);

function validNumber() {
  const convertTotalPrice = parseInt(totalPrice.innerText);
  const passengerName = document.getElementById("passenger-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  if (
    convertTotalPrice >= 550 &&
    passengerName.length > 0 &&
    phoneNumber.length === 11
  ) {
    nextButton.removeAttribute("disabled");
    removeClass("next-button", "bg-[#6ab15f]");
    addClass("next-button", "bg-[#1DD100]");
  } else {
    nextButton.setAttribute("disabled", true);
    removeClass("next-button", "bg-[#1DD100]");
    addClass("next-button", "bg-[#6ab15f]");
  }
}

nextButton.addEventListener("click", function () {
  const elements = document.querySelectorAll("header, main, footer");
  for (let element of elements) {
    element.classList.add("hidden");
  }
});

function validateName() {
  const inputField = document.getElementById("passenger-name");
  let inputValue = inputField.value;
  inputValue = inputValue.replace(/[^A-Za-z\s]/g, "");
  inputField.value = inputValue;
}

function validatePhoneNumber() {
  const inputField = document.getElementById("phone-number");
  let inputValue = inputField.value;
  inputValue = inputValue.replace(/\D/g, "");
  inputField.value = inputValue;
}
