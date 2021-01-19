import { ValidatorComponent } from './ValidatorComponent';
import { IValidator } from './IValidator';
export class Validator implements IValidator {
  private listValidator: IValidator[];
  private message: string;
  constructor(match?: string, message?: string) {
    this.listValidator = [];
    if(match)
      this.addValidator(new ValidatorComponent(match));
    if(message)
      this.message = message;
  };

  public validate(str: string): string[] {
    const result = [];
    this.listValidator.forEach(validator => result.push(...validator.validate(str)));
    if(result.length && this.message)
      result.push(this.message);
    return result;
  };

  public addValidator(validator: IValidator){
    this.listValidator.push(validator);
  }  
}