export function getYear(fullDate) {
  return fullDate.substring(3);
}
export function getMonth(fullDate) {
  return fullDate.substring(0, 2);
}
export function checkCardNumber(cardNumber) {
  let reg = /^\d+$/;
  
return cardNumber.length===16 && reg.test(cardNumber)
}
export function checkSecurityCode(securityCode){
  let reg = /^\d+$/;
 return  securityCode.length === 3 && reg.test(securityCode)
}