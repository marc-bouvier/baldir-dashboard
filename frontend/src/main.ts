import {createApp} from 'vue'
import App from './App.vue'
import {GreetConfigurator} from "./greet/greet.configurator";
import {GREET} from "./greet/injectionKeys";

let greetConfigurator = new GreetConfigurator({configurationType: "test-double", defaultGreetName: "test-double"});
console.log(greetConfigurator)
createApp(App)
    .provide(
        GREET, greetConfigurator.greetInstance())
    .mount('#app')
