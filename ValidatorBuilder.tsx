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

    
}