export interface Greet {
    greet(name: string): Promise<string>
}

export class GreetDependencyNotFound implements Greet {
    constructor() {
        throw new Error("Greet dependency was not injected")

    }

    greet(name: string): Promise<string> {
        // TODO : antipattern : one should not need to override No-op.
        throw new Error("unsupported operation")
    }
}
