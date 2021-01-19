import { ValidatorBuilder } from './ValidatorBuilder';
import { ValidatorComponent } from './ValidatorComponent';
import { ValidatorType } from './ValidatorType';
export class DefaultValidator {
  private static dateValidator: ValidatorComponent = null;
  private static emailValidator: ValidatorComponent = null;
  private static integerValidator: ValidatorComponent = null;
  private static floatValidator: ValidatorComponent = null;
  public static getInstance(validatorType: ValidatorType) {
    switch (validatorType) {
      case ValidatorType.DATE:
        if (this.dateValidator === null)
          this.dateValidator = new ValidatorComponent("[0-3]?[0-9].[0-1]?[1-2].(?:[0-9]{2})?[0-9]{2}", "Invalid Date");
        return this.dateValidator;
      case ValidatorType.EMAIL:
        if (this.emailValidator === null)
          this.emailValidator = new ValidatorComponent("[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}", "Invalid Email");
        return this.emailValidator;
      case ValidatorType.INTERGER:
        if (this.integerValidator === null) {
          this.integerValidator = new ValidatorBuilder().addNum().setMessage("Invalid Number").build();
        };
        return this.integerValidator;
      case ValidatorType.FLOAT:
        if (this.floatValidator === null) {
          this.floatValidator = new ValidatorBuilder().addNum().addStaticString('.').addNum(1).setMessage("Invalid Number").build();
        };
        return this.floatValidator;
      case ValidatorType.PHONE:
        if (this.floatValidator === null) {
          this.floatValidator = new ValidatorComponent("(0|\\+84)[1-9][0-9]{9,10}", "Invalid Phonenumber");
          };
        return this.floatValidator;
      default:
        throw new Error('Invalid type');
    }
  }
}