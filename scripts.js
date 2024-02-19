
document.getElementById('seat-container').addEventListener('click', function(e) {
    const ticketPrice = 550;
    const target = e.target.innerText;
    

    const seatCounting = document.getElementById('seat-counting');
    let countingSeat = parseInt(seatCounting.innerText);
    
    if(seatCounting.innerText >= 4){
        return alert('You have selected maximum number of seat');
    }
    seatCounting.innerText = countingSeat + 1;

    const remainingSeat = document.getElementById('remaining-seats');
    let seatLeft = parseInt(remainingSeat.innerText);
    seatLeft = seatLeft - 1;
    remainingSeat.innerText = seatLeft;

    removeClass('selected-ticket', 'hidden');
    const selectedTicket = document.getElementById('selected-ticket');
    const newDiv = document.createElement('div');

    newDiv.innerHTML = `
        <div class="flex justify-between py-1">
        <p>${target}</p>
        <p>Economy</p>
        <p>${ticketPrice}</p>
        </div>
    `;
    selectedTicket.appendChild(newDiv);
    removeClass('total-price-box', 'hidden');
    removeClass('grand-total-box', 'hidden');

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = seatCounting.innerText * ticketPrice;

    const grandTotalPrice = document.getElementById('grand-total-price');
    grandTotalPrice.innerText = totalPrice.innerText;

    if(totalPrice.innerText >= 2200){
        removeClass('coupon-area', 'hidden');
        removeClass('discount-price-box', 'hidden');
    }

    
    removeClass(target, 'bg-[#f7f8f8]');
    addClass(target, 'bg-[#1DD100]');

});

const totalPrice = document.getElementById('total-price');
const grandTotalPrice = document.getElementById('grand-total-price');
const discountBox = document.getElementById('discount-price-box');
const discountPrice = document.getElementById('discount-price');
applyButton.addEventListener('click', function() {
    if(couponField.value === 'NEW15'){
        discountPrice.innerText = parseInt(totalPrice.innerText) * .15; 
        grandTotalPrice.innerText = totalPrice.innerText - discountPrice.innerText;
        addClass('coupon-area', 'hidden');
    } else if(couponField.value === 'Couple 20'){
        discountPrice.innerText = parseInt(totalPrice.innerText) * .20; 
        grandTotalPrice.innerText = totalPrice.innerText - discountPrice.innerText;
        addClass('coupon-area', 'hidden');
    }
})

const passengerName = document.getElementById('passenger-name').value;
const phoneNumber = document.getElementById('phone-number').value;
const nextButton = document.getElementById('next-button');

function validNumber(){
    if(totalPrice.innerText >= 2200 && passengerName.length > 0 && phoneNumber.length === 11){
        nextButton.removeAttribute('disabled');
        removeClass('next-button', 'bg-[#6ab15f]');
        addClass('next-button', 'bg-[#1DD100]');
    }
}

