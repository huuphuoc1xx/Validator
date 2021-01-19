import { ValidatorComponent } from './ValidatorComponent';
export class LengthValidator extends ValidatorComponent {
    private minLength: number = 0;
    private maxLength: number = Number.MAX_SAFE_INTEGER;
    constructor(message?: string, minLength?: number, maxLength?: number) {
        super();
        if (message)
            this.setMessage(message);
        if (minLength)
            this.minLength = minLength;
        if (maxLength)
            this.maxLength = maxLength;
    };

    public validate(str: string): string[] {
        return str.length >= this.minLength && str.length <= this.maxLength ? [] : [this.message];
    }

    public setMinLength(length: number) {
        this.minLength = length;
    }
    public setMaxLength(length: number) {
        this.maxLength = length;
    }
}