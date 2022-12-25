import {Greet} from "./greet";


export class GreetTestDouble implements Greet {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    greet(name: string): Promise<string> {

        return Promise.resolve(`${this._name} > Hello ${name}, It's show time!`)
    }
}
