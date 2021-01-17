"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EmailValidator = void 0;
var Validator_1 = require("./Validator");
var EmailValidator = /** @class */ (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator() {
        return _super.call(this, "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$") || this;
    }
    return EmailValidator;
}(Validator_1.Validator));
exports.EmailValidator = EmailValidator;
