class Validator {
  private match: string;
  private maxLength: number;
  private minLength: number;
  constructor() {
    this.reset();
  };

  public validate(str: string) {
    if (this.maxLength && str.length > this.maxLength)
      return false;
    if (str.length < this.minLength)
      return false;

    return RegExp(`^${this.match}$`).test(str);
  };

  public reset() {
    this.match = "";
  };

  public addValidateInfo(str: string) {
    this.match += str;
  };

  public setLength(min: number, max: number){
    this.minLength = min;
    this.maxLength = max;
  };
}