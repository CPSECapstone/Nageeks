const bcrypt = require('bcryptjs');

class Encrypt {
    _hashCode;
    _salt;

    constructor(password) {
        if (password !== undefined) {
            this._salt = bcrypt.genSaltSync(10);

            this._hashCode = this.hashPassword(password);
        }
    }

    // generates a new Encrypt from a given hashcode and salt
    // useful for retrieving stuff from a database
    static FromHashAndSalt(hashCode, salt) {
        var encrypt = new Encrypt();

        encrypt._salt = salt;
        encrypt._hashCode = hashCode;

        return encrypt;
    }

    hashPassword(password) {

        // bcrypt only accepts up to 72 bytes of input - probably nothing to worry about
        // could modify it to accept more pretty easily, or just use a reasonably sized maximum password length
        var bytes = [];
        for (var i = 0; i < password.length; ++i) {
            var code = password.charCodeAt(i);

            bytes = bytes.concat([code & 0xff, code / 256 >>> 0]);
        }

        if (bytes.length > 72) {
            throw Error("password too long");
        }

        return bcrypt.hashSync(password, this._salt);
    }

    // checks if the input password is correct
    verifyPassword(password) {
        var testHashCode = this.hashPassword(password);

        if (testHashCode === this._hashCode) {
            return true;
        }
    }

    getHash() { return this._hashCode; }
    getSalt() { return this._salt; }
}

module.exports = Encrypt;