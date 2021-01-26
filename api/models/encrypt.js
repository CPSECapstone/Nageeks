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

    static FromHashAndSalt(hashCode, salt) {
        var encrypt = new Encrypt();

        encrypt._salt = salt;
        encrypt._hashCode = hashCode;

        return encrypt;
    }

    hashPassword(password) {
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