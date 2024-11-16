export function isPhoneNumber(phone) {
    var phonePattern = /^\+\d{1,3} \d{3} \d{3} \d{3}$/;

    return phonePattern.test(phone);
}
