import { Validator } from "./Validator";

export class EmailValidator extends Validator {
    constructor() {
        super("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    }
}