"use strict";
exports.__esModule = true;
exports.ValidatorBuilder = void 0;
var Validator_1 = require("./Validator");
var ValidatorBuilder = /** @class */ (function () {
    function ValidatorBuilder() {
        this.reset();
    }
    ValidatorBuilder.prototype.reset = function () {
        this.validator = new Validator_1.Validator();
    };
    ;
    ValidatorBuilder.prototype.build = function () {
        return this.validator;
    };
    ValidatorBuilder.prototype.setLength = function (min, max) {
        if (max === undefined)
            this.validator.setLength(0, min);
        else
            this.validator.setLength(min, max);
    };
    ValidatorBuilder.prototype.addAll = function (min, max) {
        this.validator.addValidateInfo(".{" + (min || 0) + "," + (max || "") + "}");
    };
    ValidatorBuilder.prototype.addChar = function (min, max) {
        this.validator.addValidateInfo("[a-zA-Z]{" + (min || 0) + "," + (max || "") + "}");
    };
    ValidatorBuilder.prototype.addNum = function (min, max) {
        this.validator.addValidateInfo("\\d{" + (min || 0) + "," + (max || "") + "}");
    };
    ValidatorBuilder.prototype.addNormalChar = function (min, max) {
        this.validator.addValidateInfo("\\w{" + (min || 0) + "," + (max || "") + "}");
    };
    ValidatorBuilder.prototype.addStaticString = function (str) {
        this.validator.addValidateInfo(str);
    };
    return ValidatorBuilder;
}());
exports.ValidatorBuilder = ValidatorBuilder;
