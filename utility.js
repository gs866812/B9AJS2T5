function removeClass(elementId, className) {
    document.getElementById(elementId).classList.remove(className);
}

function addClass(elementId, className) {
    document.getElementById(elementId).classList.add(className);
}

const couponField = document.getElementById('coupon-field');
const applyButton = document.getElementById('apply-button');
function applyCoupon(){
    if(couponField.value === 'NEW15' || couponField.value === 'Couple 20'){
        applyButton.removeAttribute('disabled');
        removeClass('apply-button', 'bg-[#6ab15f]');
        addClass('apply-button', 'bg-[#1DD100]');
    } else{
        applyButton.setAttribute('disabled', true);
        removeClass('apply-button', 'bg-[#1DD100]');
        addClass('apply-button', 'bg-[#6ab15f]');
    }
}
