export class Validator {
  private match: string;
  private maxLength: number;
  private minLength: number;
  constructor(...match: string[]) {
    this.reset(...match);
  };

  public validate(str: string) {
    if (this.maxLength && str.length > this.maxLength)
      return false;
    if (str.length < this.minLength)
      return false;
    return new RegExp(`${this.match}`).test(str);
  };

  public reset(...match: string[]) {
    this.match = match[0].toString() || "";
  };

  public addValidateInfo(str: string) {
    this.match += str;
  };

  public setLength(min: number, max: number) {
    this.minLength = min;
    this.maxLength = max;
  };
}