export function isEmail(email) {
    var exclude = /[^@.\w-]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*\1/;
    var check = /@[a-zA-Z0-9-]+\./;
    var checkend = /\.[a-zA-Z]{2,3}$/;

    if ((email.search(exclude) !== -1) || (email.search(check) === -1) || (email.search(checkend) === -1)) {
        return false;
    } else {
        return true;
    }
}
