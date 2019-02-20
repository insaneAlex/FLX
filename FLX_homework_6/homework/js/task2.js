let amount = parseFloat(prompt('Enter amount of money:', 0)).toFixed(2);
const discount = parseInt(prompt('Enter amount of discount', 0));

if (amount < 0 || amount > 9999999 || discount < 0 || discount > 99 || isNaN(discount) || isNaN(amount)) {
    alert('invalid input data');
} else {
    const saved = +(amount * discount / 100).toFixed(2);
    const discPrice = +(amount - saved).toFixed(2);
    amount = +amount;
    alert(`
    Price without discount: ${amount}
    Discount: ${discount}%
    Price with discount: ${discPrice}
    Saved: ${saved}`);
}