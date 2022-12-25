import {GreetWails} from "./greet.wails";
import type {Greet} from "./greet"
import {GreetTestDouble} from "./greet.test-double";

// See Alistair Cockburn's : Component + Strategies
// Configurator

// Dependency Configurator

export interface WailsGreetConfiguration {
    // test-double, wails
    readonly configurationType: "wails"
}

export interface TestDoubleGreetConfiguration {
    // test-double, wails
    readonly configurationType: "test-double"
    defaultGreetName: string
}

export class GreetConfigurator {
    private _configuration: TestDoubleGreetConfiguration | WailsGreetConfiguration;

    constructor(configuration: TestDoubleGreetConfiguration | WailsGreetConfiguration) {
        this._configuration = configuration;
    }

    public greetInstance(): Greet {
        if (this._configuration.configurationType === "wails") {
            return new GreetWails()
        }
        if (this._configuration.configurationType === "test-double") {
            const testDoubleConfiguration = this._configuration
            return new GreetTestDouble(testDoubleConfiguration.defaultGreetName)
        }
        return new GreetDependencyNotFound()
    }
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
