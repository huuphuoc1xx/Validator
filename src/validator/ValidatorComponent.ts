import { IValidator } from './IValidator';

export class ValidatorComponent implements IValidator {
  protected match: string;
  protected message: string;

  constructor(match?: string, message?: string) {
    this.match = match;
    this.message = message || "Invalid";
  };
  public validate(str: string): string[] {
    return new RegExp(`^${this.match || "[^]*"}$`).test(str) ? []:[this.message];
  };

  public addValidateInfo(str: string) {
    this.match += str;
  };
  public setValidateInfo(str: string) {
    this.match = str;
  };

  public setMessage(str: string){
    this.message = str;
  }

  public static clone(validator: ValidatorComponent) {
    return new ValidatorComponent(validator.match, validator.message);
  }
}