class ValidatorBuilder {
    private validator: Validator;
    constructor() {
        this.reset();
    }

    public reset() {
        this.validator = new Validator();
    };

    public build() {
        return this.validator;
    }

    public setLength(min: number, max: number) {
        if (max === undefined)
            this.validator.setLength(0, min);
        else
            this.validator.setLength(min, max);
    }

    public addAll(min: number, max: number) {
        this.validator.addValidateInfo(`.{${min || 0},${max || ""}}`);
    }
    public addChar(min: number, max: number) {
        this.validator.addValidateInfo(`[a-zA-Z]{${min || 0},${max || ""}}`);
    }

    public addNum(min: number, max: number) {
        this.validator.addValidateInfo(`\\d{${min || 0},${max || ""}}`);
    }

    public addNormalChar(min: number, max: number) {
        this.validator.addValidateInfo(`\\w{${min || 0},${max || ""}}`);
    }

    public addStaticString(str: string) {
        this.validator.addValidateInfo(str);
    }
}