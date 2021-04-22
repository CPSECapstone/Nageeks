const bcrypt = require('bcryptjs');

const maxInputLength = 72;
const saltLength = 29;

// Warning, if you perform a string operation on uneven length strings, you may end up with
// unexpected trailing \u0000 characters
// Ex:  let x = stringXor("a", "bcd");
//      let y = stringXor(x, "bcd");
//
//      "a" !== y;
//      y === "a\u0000\u0000";
function stringXor(a, b) {
    let e = "";
    let i;

    for(i = 0; i < a.length && i < b.length; i++) {
        e += String.fromCodePoint(
            a.charCodeAt(i) ^ b.charCodeAt(i)
        );
    }

    if (a.length > b.length) {
        e += a.substring(i);
    }
    else if (a.length < b.length) {
        e += b.substring(i);
    }

    return e;
}

class Encrypt {
    _hashCode;
    _salt;

    constructor(password) {
        if (password !== undefined) {
            this._salt = bcrypt.genSaltSync(10);

            this._hashCode = this.hashPassword(password);
        }
    }

    // generates a new Encrypt from a given hashcode (which contains the salt)
    // useful for retrieving stuff from a database
    static FromHash(hashCode) {
        let encrypt = new Encrypt();

        // salt is stored as the first 29 characters in the hash
        encrypt._salt = hashCode.substring(0, saltLength);
        encrypt._hashCode = hashCode;

        return encrypt;
    }

    hashPassword(password) {
        let bytes = new TextEncoder().encode(password);

        // bcryptjs only accepts inputs of less than 72 bytes in length, so we split it and XOR it
        // Recursive call to allow for strings of theoretically any length
        if (bytes.length > maxInputLength) {
            return stringXor(
                bcrypt.hashSync(new TextDecoder().decode(bytes.subarray(0, maxInputLength)), this._salt),
                this.hashPassword(new TextDecoder().decode(bytes.subarray(maxInputLength)))
            );
        }

        return bcrypt.hashSync(password, this._salt);
    }

    // checks if the input password is correct
    verifyPassword(password) {
        let testHashCode = this.hashPassword(password);

        return testHashCode === this._hashCode;
    }

    getHash() { return this._hashCode; }
    getSalt() { return this._salt; }
}

module.exports = Encrypt;
