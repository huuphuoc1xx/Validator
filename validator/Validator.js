"use strict";
exports.__esModule = true;
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
        var match = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            match[_i] = arguments[_i];
        }
        this.reset.apply(this, match);
    }
    ;
    Validator.prototype.validate = function (str) {
        if (this.maxLength && str.length > this.maxLength)
            return false;
        if (str.length < this.minLength)
            return false;
        return new RegExp("" + this.match).test(str);
    };
    ;
    Validator.prototype.reset = function () {
        var match = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            match[_i] = arguments[_i];
        }
        this.match = match[0].toString() || "";
    };
    ;
    Validator.prototype.addValidateInfo = function (str) {
        this.match += str;
    };
    ;
    Validator.prototype.setLength = function (min, max) {
        this.minLength = min;
        this.maxLength = max;
    };
    ;
    return Validator;
}());
exports.Validator = Validator;
