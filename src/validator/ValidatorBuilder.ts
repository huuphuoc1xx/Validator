import { ValidatorComponent } from "./ValidatorComponent";

export class ValidatorBuilder {
    private validator: ValidatorComponent;
    constructor() {
        this.reset();
    }

    public reset() {
        this.validator = new ValidatorComponent("");
        return this;
    };

    public build() {
        return this.validator;
    }


    public addAll(min: number = 0, max: number = 0) {
        this.validator.addValidateInfo(`.{${min || 0},${max || ""}}`);
        return this;
    }
    public addChar(min: number = 0, max: number = 0) {
        this.validator.addValidateInfo(`[a-zA-Z]{${min || 0},${max || ""}}`);
        return this;
    }

    public addNum(min: number = 0, max: number = 0) {
        this.validator.addValidateInfo(`\\d{${min || 0},${max || ""}}`);
        return this;
    }

    public addNormalChar(min: number = 0, max: number = 0) {
        this.validator.addValidateInfo(`\\w{${min || 0},${max || ""}}`);
        return this;
    }

    public addStaticString(str: string) {
        this.validator.addValidateInfo(str);
        return this;
    }

    public setMessage(str: string){
        this.validator.setMessage(str);
        return this;
    }
}