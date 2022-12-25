import {Greet as WailsGreet} from '../../wailsjs/go/main/App'
import {Greet} from "./greet";


export class GreetWails implements Greet {
    greet(name: string): Promise<string> {
        return WailsGreet(name)
    }
}
